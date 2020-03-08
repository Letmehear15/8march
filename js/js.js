let btn = document.querySelector('.btn');
let heart = document.querySelector('.heart');
let containerImg = document.querySelector('.img');
let arrClass = ['ease-in','ease-in2','ease-out2','ease-out','ease-in-out2','ease-in-out'];
let arrImg = [];
let height = heart.offsetTop;

for(let i = 0; i < 15; i++) {
    let clone = heart.cloneNode(true);
    containerImg.appendChild(clone);

    arrImg.push(clone);
    up(arrImg[i]);
}
function up(el) {   
    btn.addEventListener('click', ()=>{
        rand(el, arrClass);
        el.style.transform = `translateY(-${height}px)`;
    })
}

function rand(el,cl) {
    let index = Math.floor(Math.random()* arrClass.length);
    el.classList.add(cl[index]); 
}

    
// setInterval(() => {
//     if(el.style.transform = `translateY(-${height}px)`) {
//         el.style.opacity = 0;
//         el.style.zindex = -1;
//     }
// }, 4000)
// setTimeout(()=>{
//     el.style.display = 'none';
// },9000) 
