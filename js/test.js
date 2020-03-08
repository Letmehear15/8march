let btn = document.querySelector('.btn');
let heart = document.querySelector('.heart');
let containerImg = document.querySelector('.img');
let arrClass = ['ease-in','ease-in2','ease-out2','ease-out','ease-in-out2','ease-in-out'];
let arrImg = [];
let height = heart.offsetTop;



btn.addEventListener('click', ()=>{
    clone();
    up(arrImg);
    rand(arrImg, arrClass);
});

function clone() {
    for(let i = 0; i < 15; i++) {
        let clone = heart.cloneNode(true);
        containerImg.appendChild(clone);
    
        arrImg.push(clone);
    }
}
function up(el) {   
    el.forEach(element => {
        // element.style.transform = `translateY(-${height}px)`;
        setInterval(() => {
            if(element.style.transform = `translateY(-${height}px)`) {
                element.style.opacity = 0;
            }
        }, 4000)
        setTimeout(()=>{
            element.remove(element);
        },8000) 
    });
}

function rand(el,cl) {

    el.forEach(element=> {
        let index = Math.floor(Math.random()* arrClass.length);
        element.classList.add(cl[index]);
    }) 
}

    

