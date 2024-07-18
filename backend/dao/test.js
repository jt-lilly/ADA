const d = require('./it-assets');

const test = async () => {
    const a = await d.getAllITAssets();
    console.log(JSON.stringify(a));
}

test();
