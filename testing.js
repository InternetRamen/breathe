const dress = require("./functions/dress");
const longlat = require("./functions/longlat.js");
async function main() {
    let { lat, lng } = await longlat("Rockville, MD");
    console.log(await dress(lat, lng));
}

main();
