const fs = require('fs').promises;
const path = require('path');

// MODO 1
// fs.readdir('./')
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

// MODO 2
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e))

// MODO 3
async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files, rootDir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);
        
        // para remover da exibição
        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }
        
        // para exibir apenas algum específico
        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) continue;

        console.log(fileFullPath);
    }
}

readdir('C:/Users/Vitória Lilian/OneDrive/Documentos/CursoJS/curso-javascript');




