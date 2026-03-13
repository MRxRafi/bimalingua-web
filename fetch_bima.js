const fs = require('fs');
const urls = [
  'https://bimalingua.com/metodo-bimalingua/',
  'https://bimalingua.com/cambridge/',
  'https://bimalingua.com/b1/',
  'https://bimalingua.com/b2/',
  'https://bimalingua.com/c1/'
];

const headers = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
  'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8'
};

async function fetchAll() {
  const results = {};
  for (const url of urls) {
    try {
      const resp = await fetch(url, { headers });
      const text = await resp.text();
      // Extract main text by removing head, scripts, styles, etc.
      let bodyText = text.replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
                         .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                         .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                         .replace(/<[^>]+>/g, ' ')
                         .replace(/\s+/g, ' ')
                         .trim();
      results[url] = bodyText.substring(0, 5000); // just grab enough to see content
      console.log(`Fetched ${url} successfully.`);
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }
  fs.writeFileSync('bima_content.json', JSON.stringify(results, null, 2));
  console.log('Saved to bima_content.json');
}

fetchAll();
