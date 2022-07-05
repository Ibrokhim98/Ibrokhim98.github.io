const dns = require("dns");

dns.resolve4("www.miu.edu", (err, address) => {
    if (err) {
        throw new Error(err);
    }
    console.log("Address: %j", address);
});
