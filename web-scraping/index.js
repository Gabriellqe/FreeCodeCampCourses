const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(
    "https://listado.mercadolibre.cl/instrumentos/baterias-percusion/usado/"
  );
  await page.screenshot({ path: "example.png" });
  await browser.close();
})();
