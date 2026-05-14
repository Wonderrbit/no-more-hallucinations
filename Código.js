
// === FUNCIONA PARA TEXTO E ÁUDIO ===
const item = $input.first();
let historico = item?.json || $json || [];

let mensagem = '';

if (Array.isArray(historico)) {
  mensagem = historico.join('\n\n');
} else if (typeof historico === 'string') {
  mensagem = historico;
} else {
  mensagem = String(historico);
}

return [{
  json: {
    mensagem_completa: mensagem.trim()
  }
}];
