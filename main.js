const body = document.querySelector("body");
const night = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");

sun.addEventListener("click", (e)=>{
    night.style.display = 'flex';
    sun.style.display = 'none';
    body.style.backgroundColor = '#fff';
    body.style.transition = '1s'
});

night.addEventListener("click", (e)=>{
    sun.style.display = 'flex';
    sun.style.color = '#fff';
    body.style.backgroundColor = '#000';;
    night.style.display = 'none';
    body.style.transition = '1s'
});