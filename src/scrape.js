import axios from "axios";
import cheerio from "cheerio";

const to_scrape = {
  title: ".bookTitle",
  imageUrl: ".bookCover",
  authorName: ".authorName span",
  rating: ".minirating",
};

let scrape = async (keyword) => {
  const url = `https://www.goodreads.com/search?q=${keyword}&search_type=books`;
  const scrapped_data = [];
  let res = await axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  const da = cheerio.load(res.data);
  da("td").each((_idx, el) => {
    const data = {
      title: da(el).find(to_scrape["title"]).text().trim(),
      authorName: da(el).find(to_scrape["authorName"]).text().trim(),
      rating: da(el).find(to_scrape["rating"]).text().trim(),
      imageUrl: da(el).find(to_scrape["imageUrl"]).attr("src"),
    };

    console.log(data);
  });
  console.log(scrapped_data);

  return scrapped_data;
};

export default scrape;
