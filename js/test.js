let btn = document.querySelector('.btn');
let heart = document.querySelector('.heart');
let containerImg = document.querySelector('.img');
let arrClass = ['ease-in','ease-in2','ease-out2','ease-out','ease-in-out2','ease-in-out'];
let arrImg = [];
let height = heart.offsetTop;

btn.addEventListener('click', ()=>{
    clone();
    rand(arrImg, arrClass); 
    setTimeout(()=>{
        up(arrImg);
    },1000) 
});

function clone() {
    for(let i = 0; i < 20; i++) {
        let clone = heart.cloneNode(true);
        containerImg.appendChild(clone);
        arrImg.push(clone);
    }    
}
function up(el) {   
    el.forEach(element=> {
        element.style.transform = `translateY(-${height + 1000}px)`;
        setTimeout(()=>{
            element.style.opacity = 0; 
        },700)
        setTimeout(()=>{
            element.remove(element);
        },5000)
    })  
}
function rand(el,cl) {
    el.forEach(element=> {
        let index = Math.floor(Math.random()* arrClass.length);
        element.classList.add(cl[index]);
    }) 
}


    

