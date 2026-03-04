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

        console.log(JSON.stringify(response.items[0].fields, null, 2));
    } catch (e) {
        console.error(e);
    }
}
run();
