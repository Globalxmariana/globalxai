document.getElementById('ativarBtn').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.innerText = "🔄 IA Mariana iniciando...";

  setTimeout(() => {
    status.innerText = "✅ IA Mariana ativada com sucesso!";
    // Simulação: Aqui você pode conectar AWS, OpenAI, etc.
    console.log("Conectando com AWS, ElevenLabs, OpenAI...");
  }, 3000);
});