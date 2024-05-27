document.addEventListener('DOMContentLoaded', (event) => {
    function countdownTimer() {
        const endTime = new Date("2024-06-11T01:59:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = endTime - now;

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("time").innerHTML = "‘£??‘©";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("time").innerHTML = `${days}“V ${hours}¬? ${minutes}•ª ${seconds}•b`;
        }, 1000);
    }

    countdownTimer();
});