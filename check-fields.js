const { createClient } = require('contentful');

const client = createClient({
    space: 'q1zuuzc56nor',
    accessToken: '92UZxXp0Q7-6ivpI0jQDOMw1Oztxt43kpcg6w_Mr4KU',
});

async function run() {
    try {
        const response = await client.getEntries({
            content_type: 'blogPage',
            limit: 1,
        });

        if (response.items.length > 0) {
            console.log('Fields available in blogPage:');
            console.log(Object.keys(response.items[0].fields));
            console.log('\nSample entry ID:', response.items[0].sys.id);
        } else {
            console.log('No entries found for blogPage');
        }
    } catch (e) {
        console.error(e);
    }
}
run();
