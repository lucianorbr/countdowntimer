// Defina a data-alvo para a contagem regressiva (substitua com a sua data)
const targetDate = new Date('2023-12-31 00:00:00').getTime();

function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (timeLeft <= 0) {
        // Contagem regressiva atingiu o fim
        document.getElementById('countdown').style.display = 'none'; // Oculta a contagem regressiva
        clearInterval(countdownInterval); // Interrompe a contagem regressiva
    }
}

// Atualiza a contagem regressiva a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Atualize a contagem regressiva imediatamente após a página carregar
updateCountdown();
