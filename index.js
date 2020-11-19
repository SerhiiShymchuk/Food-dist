import http from 'http'
import fs from 'fs'

const utf = '; charset=utf-8'
const typeDict = {
    html: 'text/html'+utf,
    htm: 'text/html'+utf,
    svg: 'image/svg+xml'+utf,
    css: 'text/css'+utf,
    js: 'application/javascript'+utf,
    json: 'application/json'+utf,
    ico: 'image/x-icon',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    png: 'image/png',
    txt: 'text/plain'+utf,
    wav: 'audio/wav',
    mp3: 'audio/mpeg',
    mp4: 'video/mp4',
    ttf: 'application/font-ttf',
    eot: 'application/vnd.ms-fontobject',
    otf: 'application/font-otf',
    woff: 'application/font-woff',
    wasm: 'application/wasm',
}
http.createServer((request, response) => {
    let url = request.url
    if (url == '/') url = '/index.html'

    if (url == '/api/feedback') {
        const parts = []
        request.on('data', (part) => {parts.push(part)})
        request.on('end', () => {
            const body = Buffer.concat(parts).toString()
            console.log(body)
            response.end('{"status": "data saved"}')
        })
    } else {
        try {
            const ext = url.match(/\.([^\/\.]+)$/)[1]
            response.setHeader('Content-type', typeDict[ext])  //це для вказання типу данних для браузера MIME
            response.end(fs.readFileSync('./public' + url))
        } catch {
            response.setHeader('Content-type', typeDict.html)
            response.statusCode = 404
            response.end('404 file not found: ' + url)
        }
    }
    
}).listen(process.env.PORT || 3002, ()=> {
    console.log('server started at http://localhost:3002')
})
