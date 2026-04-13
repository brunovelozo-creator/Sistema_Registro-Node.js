const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join(__dirname, 'registros', 'atendimentos.txt');

fs.writeFileSync(caminhoArquivo, 'Cliente: Felipe | Serviço: Driver');

fs.appendFileSync(caminhoArquivo, '\nCliente: Gabriela | Serviço: Backup\nCliente: Hugo | Serviço: Rede');
const conteudo = fs.readFileSync(caminhoArquivo, 'utf-8');

console.log(conteudo);