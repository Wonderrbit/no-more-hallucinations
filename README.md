Readme · MDCopiarclean-context-ai
Utilitário simples para limpar e normalizar o histórico de contexto antes de enviar para um agente de IA — especialmente útil em fluxos de atendimento com n8n.

O problema
Alucinação de IA nem sempre é culpa do modelo. Na maioria das vezes, o problema está no dado que você entrega pra ele.
Quando o histórico chega como array bagunçado, string misturada com objeto ou sem estrutura nenhuma, o modelo se perde e começa a inventar. A solução não é um prompt mágico — é limpar o contexto antes.

O que esse código faz

Aceita histórico em qualquer formato: array, string ou objeto
Normaliza tudo para texto corrido, com quebras de linha entre as mensagens
Remove espaços desnecessários com trim() para economizar tokens
Funciona tanto para fluxos de texto quanto de áudio no n8n



Como usar

No n8n, adicione um nó de Code (JavaScript) antes do nó do seu agente de IA
Cole o código acima
Configure o modo como Run Once for All Items
Conecte a saída mensagem_completa como input do contexto do seu agente


Por que isso importa
Agente bom começa no dado limpo, não no prompt elaborado. Se você entrega o contexto mastigado e organizado, o modelo trabalha direito. Se entrega zona, ele alucina.

Stack

n8n — automação de fluxos
JavaScript (nó Code do n8n)
Compatível com qualquer modelo de linguagem via API


Autor
Feito por Luiz  — explorando automação e agentes de IA na prática.
