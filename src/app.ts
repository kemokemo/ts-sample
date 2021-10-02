import * as fs from 'fs'
import * as cheerio from 'cheerio';

let htmlData = fs.readFileSync("dist/source.html", "utf-8");
const $ = cheerio.load(htmlData);

$('.myCheck').each((i,elem)=>{
  $(elem).attr('id', 'myCheck'+(i+1));
});
console.log($.html());

$('#myCheck2').attr('checked', 'true');
console.log($.html());