const time = document.getElementById('time');
const greet = document.getElementById('greet');

const focus = document.getElementById('focus');

const showAmPm = true;
// show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';


    // 12hr format
    hour = hour % 12 || 12;


    // Show Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000)
}

// Add Zero In the Time
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n

}

// BAckground Image

function setBackground() {

    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        //Sun Rise
        document.body.style.backgroundImage = "url('./Assets/Images/sunrise.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greet.textContent = 'Good Morning';
    } else if (hour < 17) {
        //Morning

        document.body.style.backgroundImage = "url('./Assets/Images/afternoon.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greet.textContent = 'Good Afternoon';
    } else if (hour < 20) {
        //Afternoon

        document.body.style.backgroundImage = "url('./Assets/Images/evening.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greet.textContent = 'Good Evening';
    } else {
        //Night

        document.body.style.backgroundImage = "url('./Assets/Images/night.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        greet.textContent = 'Good Night';
    }

};

function getName() {
    let name = document.getElementById('name');

    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';

    } else {
        name.textContent = localStorage.getItem('name')
    }
}

function setName(e) {
    if (e.type === 'keypress') {
        //Make Sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name1.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
}


function getFocus() {
    const focus = document.getElementById('focus');
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';

    } else {
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e) {
    if (e.type === 'keypress') {
        //Make Sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus1.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

var name1 = document.getElementById('name');
name1.addEventListener('keypress', setName)
name1.addEventListener('blue', setName)


var focus1 = document.getElementById('focus');
focus1.addEventListener('keypress', setFocus);
focus1.addEventListener('blue', setFocus);


showTime();
getName();
getFocus();
setBackground();