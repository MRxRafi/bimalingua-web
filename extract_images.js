const https = require('https');
const fs = require('fs');

function fetchImages(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        const imgRegex = /<img[^>]+src="([^">]+)"/g;
        const bgRegex = /background-image:[^;]*url\(['"]?([^'")]+)['"]?\)/g;
        let match;
        const images = new Set();
        
        while ((match = imgRegex.exec(data)) !== null) {
          images.add(match[1]);
        }
        while ((match = bgRegex.exec(data)) !== null) {
          images.add(match[1]);
        }
        resolve(Array.from(images).filter(img => img.includes('uploads')));
      });
    }).on('error', reject);
  });
}

async function run() {
  const landing = await fetchImages('https://bimalingua.com/');
  const metodo = await fetchImages('https://bimalingua.com/metodo-bimalingua/');
  
  const result = {
    landing,
    metodo
  };
  
  fs.writeFileSync('images_found.json', JSON.stringify(result, null, 2));
  console.log('Results written to images_found.json');
}

run();
