import { createClient } from 'contentful';

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_PREVIEW_TOKEN,
    host: 'preview.contentful.com',
});

/**
 * Fetches all blog posts from Contentful.
 * Assumes a content type with ID 'blogPage'.
 */
export const fetchBlogPosts = async (preview = false) => {
    const currentClient = preview ? previewClient : client;
    try {
        const response = await currentClient.getEntries({
            content_type: 'blogPage',
            order: '-sys.createdAt',
        });

        return response.items.map(item => {
            const featuredImage = item.fields.featuredMedia?.fields?.file?.url;
            return {
                id: item.sys.id,
                title: item.fields.title || 'Untitled',
                slug: item.fields.slug || item.sys.id,
                date: item.fields.date || item.sys.createdAt,
                excerpt: item.fields.phrase || '',
                content: item.fields.body,
                featuredImage: featuredImage ? (featuredImage.startsWith('//') ? `https:${featuredImage}` : featuredImage) : null,
            };
        });
    } catch (error) {
        console.error('Error fetching blog posts from Contentful:', error);
        return [];
    }
};

/**
 * Fetches a single blog post by its slug or ID.
 */
export const fetchBlogPostBySlug = async (slug, preview = false) => {
    const currentClient = preview ? previewClient : client;
    console.log(`Searching for blog post with slug/ID: ${slug}`);

    try {
        // 1. First, try to fetch by ID directly as a fallback or primary method
        // In many cases, the "slug" used in the URL is actually the entry ID
        try {
            const item = await currentClient.getEntry(slug);
            if (item && item.sys.contentType.sys.id === 'blogPage') {
                console.log('Found blog post by Entry ID');
                const featuredImage = item.fields.featuredMedia?.fields?.file?.url;
                return {
                    id: item.sys.id,
                    title: item.fields.title || 'Untitled',
                    slug: item.fields.slug || item.sys.id,
                    date: item.fields.date || item.sys.createdAt,
                    excerpt: item.fields.phrase || '',
                    content: item.fields.body,
                    featuredImage: featuredImage ? (featuredImage.startsWith('//') ? `https:${featuredImage}` : featuredImage) : null,
                };
            }
        } catch (e) {
            console.log(`Slug ${slug} is not a valid Entry ID or doesn't exist. Trying search by slug field...`);
        }

        // 2. Try to find by slug field if it exists
        // Note: This might fail with 422 if the field "slug" doesn't exist on the content type
        try {
            const response = await currentClient.getEntries({
                content_type: 'blogPage',
                'fields.slug': slug,
                limit: 1,
            });

            if (response.items.length > 0) {
                console.log('Found blog post by slug field');
                const item = response.items[0];
                const featuredImage = item.fields.featuredMedia?.fields?.file?.url;
                return {
                    id: item.sys.id,
                    title: item.fields.title || 'Untitled',
                    slug: item.fields.slug || item.sys.id,
                    date: item.fields.date || item.sys.createdAt,
                    excerpt: item.fields.phrase || '',
                    content: item.fields.body,
                    featuredImage: featuredImage ? (featuredImage.startsWith('//') ? `https:${featuredImage}` : featuredImage) : null,
                };
            }
        } catch (searchError) {
            console.warn('Search by slug field failed (likely field does not exist):', searchError.message);
        }

        return null;
    } catch (error) {
        console.error(`Error fetching blog post with slug ${slug}:`, error);
        return null;
    }
};
