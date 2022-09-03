const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const port = process.env.PORT || 4000;

const app = express();

let scrape = async(url) => {
    let res = await axios.get(url)
    da = cheerio.load(res.data);
    console.log(da('#title').find('span').text());
}

scrape('https://amzn.eu/d/9FpDPSg')
