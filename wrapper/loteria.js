const cheerio = require("cheerio");
const fs = require("fs")
const path = require("path");

async function inyectHtml(url) {
  const archivoPath = path.join(__dirname, "../public", url + "/index.html");

  const html = fs.readFileSync(archivoPath);
  const htmlText = html.toString();
  
  const $ = cheerio.load(htmlText);

  const loteriaIframe = $('#iframe-loteria');

  // Verificar si se encontró el elemento
  if (loteriaIframe.length > 0) {
    let searchElement = await fetch(
      "https://hello-world-jolly-bread-90e7.pabloezelivingston.workers.dev/"
    )
      .then(res => res.text())
      .then(res => res); 
    const nuevoElement = $(searchElement);
    
    loteriaIframe.append(nuevoElement);
    
    const nuevoHTML = $.html();
    return nuevoHTML.toString()
  } else {
    return htmlText
  }

}


module.exports = {
  inyectHtml,
};
