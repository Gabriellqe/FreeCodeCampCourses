const axios = require("axios");
const cheerio = require("cheerio");
const playlistUrl =
  "https://listado.mercadolibre.cl/instrumentos/baterias-percusion/usado/";

axios
  .get(playlistUrl)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    // Aquí realizarás la extracción de los títulos de la lista de productos, para ello debes inspeccionar el código HTML de la página. La clase que contiene los títulos es "ui-search-layout ui-search-layout--stack shops__layout", por lo que debes seleccionar todos los elementos que tengan esa clase.
    const titles = $("ui-search-layout__item shops__layout-item");
    console.log(titles);
  })
  .catch((error) => {
    console.log("Ocurrió un error al hacer la solicitud:", error);
  });
