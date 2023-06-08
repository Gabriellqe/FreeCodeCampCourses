//Crea un web sracping basico para la pagina http://quotes.toscrape.com/ donde obtenga una lista de todos los autores separados por coma y la imprima en consola
const axios = require("axios");
const cheerio = require("cheerio");
const playlistUrl = "http://quotes.toscrape.com/";
axios

  .get(playlistUrl)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    const titles = $(".tag");
    const author = $(".author");
    console.log(titles.type);
    //console.log(author.text().trim());
  })
  .catch((error) => {
    console.log("Ocurrió un error al hacer la solicitud:", error);
  });
