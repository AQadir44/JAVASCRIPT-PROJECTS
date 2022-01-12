const hour_hand = document.getElementById('hourhand');
const min_hand = document.getElementById('minhand');
const sec_hand = document.getElementById('sechand');


function setTime() {
    const now = new Date();

    const sec = now.getSeconds();
    const secD = ((sec /60) * 360 ) + 90;
    sec_hand.style.transform = `rotate(${secD}deg)`;
    
    const min = now.getMinutes();
    const minD = ((min /60) * 360 ) + 90;
    min_hand.style.transform = `rotate(${minD}deg)`;

    const hour = now.getHours();
    const hourD = ((hour /12) * 360 ) + 90;
    hour_hand.style.transform = `rotate(${hourD}deg)`;
}

setInterval(setTime, 1000);
