let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minNumber = document.querySelector('.minutes');

function clock(){
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;

        sec.style = `transform: rotate(${seconds}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        hour.style = `transform: rotate(${hours}deg)`;

        hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        minNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();

        setTimeout(() => clock(), 1000);
}
clock();

let links = document.querySelector('.tabsItem'),
    tabs= document.querySelector('.tabsContentItem');

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(event){
        event.preventDefault();
    })
}
