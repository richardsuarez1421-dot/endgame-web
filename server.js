/* Servidor local de desarrollo. Soporta peticiones por rango (video). */
const http = require('http');
const fs = require('fs');
const path = require('path');

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.mp4': 'video/mp4', '.webm': 'video/webm',
};

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(__dirname, p);

  fs.stat(f, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('404'); }

    const type = types[path.extname(f).toLowerCase()] || 'application/octet-stream';
    const range = req.headers.range;

    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const inicio = m && m[1] ? parseInt(m[1], 10) : 0;
      const fin = m && m[2] ? parseInt(m[2], 10) : st.size - 1;
      if (inicio >= st.size) {
        res.writeHead(416, { 'Content-Range': `bytes */${st.size}` });
        return res.end();
      }
      res.writeHead(206, {
        'Content-Type': type,
        'Content-Range': `bytes ${inicio}-${fin}/${st.size}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': fin - inicio + 1,
      });
      return fs.createReadStream(f, { start: inicio, end: fin }).pipe(res);
    }

    res.writeHead(200, {
      'Content-Type': type,
      'Content-Length': st.size,
      'Accept-Ranges': 'bytes',
    });
    fs.createReadStream(f).pipe(res);
  });
}).listen(5178, () => console.log('END GAME demo en http://localhost:5178'));
