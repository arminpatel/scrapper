const axios = require("axios");
const cheerio = require("cheerio");

let scrape = async (url) => {
  let res = await axios.get(url);
  const da = cheerio.load(res.data);
  console.log(da("#title").find("span").text());
};

scrape("https://amzn.eu/d/9FpDPSg");
