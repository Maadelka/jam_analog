
document.body.style.backgroundColor= "gray"
let jam = document.getElementById('jam')
let detik = document.getElementById('detik')
let menit = document.getElementById('menit')
let ha1 = document.querySelector('.ha1')

function setDate(){
    const now = new Date();

    // ======================================================detik
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    detik.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secondsDegrees === 90) {
        detik.style.transition = 'none';
    } else if (secondsDegrees >= 91) {
        detik.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'
    }
    ha1.innerHTML= seconds

    // ======================================================menit
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    menit.style.transform = `rotate(${minutesDegrees}deg)`;

    // =======================================================jam
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    jam.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000)