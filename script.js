async function ativarIAMariana() {
  const botao = document.getElementById('botao-ativar');
  const status = document.getElementById('status');
  botao.disabled = true;
  status.textContent = '🧠 IA Mariana iniciando...';

  try {
    const resposta = await fetch('https://globalx-mariana.vercel.app/api/ativar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chave: 'IA_MARIANA_100%' })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      status.textContent = '✅ IA Mariana ativada com sucesso!';
      console.log('Conectando com AWS, ElevenLabs, OpenAI, etc...');
    } else {
      status.textContent = '❌ Erro ao ativar a IA.';
      console.error(dados);
    }
  } catch (erro) {
    status.textContent = '❌ Falha na conexão.';
    console.error(erro);
  }

  botao.disabled = false;
}
