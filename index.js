const imgUrl = [ 
    "aaaaa.avif",
    "naliv.avif",
    "sklad.avif"
]

var ind = 0;
const imgElem = document.querySelector('#img');
imgElem.src = imgUrl[ind];


function NextButt(){
    ind++;
    if(ind >= imgUrl.length){
        ind = 0;
    console.log(1)
}
imgElem.src = imgUrl[ind];
}

function PrevButt(){
    imgElem.src = imgUrl[ind];
    ind--;
    if(ind < 0){
        ind = imgUrl.length - 1;
    console.log(2)
    
}
imgElem.src = imgUrl[ind];
}

const NextButton = document.querySelector('#next') 
NextButton.addEventListener('click', NextButt)


const PrevButton = document.querySelector('#prev')
PrevButton.addEventListener('click', PrevButt)


const slides = document.querySelectorAll('.slide')

for(const slide of slides){
    slide.addEventListener('click', () =>{
        clearActiveClasses()
        slide.classList.add('active')

    })
}

function clearActiveClasses(){
slides.forEach((slide) => {
    slide.classList.remove('active')
})
}

const ActBut = document.querySelector('.ActBut');
const Model = document.querySelector('.model');
const WinBut = document.querySelector('.WinBut');
const ActBut1 = document.querySelector('.ActBut1');
const Model1 = document.querySelector('.model1');
const WinBut1 = document.querySelector('.WinBut1');
const ActBut2 = document.querySelector('.ActBut2');
const Model2 = document.querySelector('.model2');
const WinBut2 = document.querySelector('.WinBut2');
const ActBut3 = document.querySelector('.ActBut3');
const Model3 = document.querySelector('.model3');
const WinBut3 = document.querySelector('.WinBut3');
const ActBut4 = document.querySelector('.ActBut4');
const Model4 = document.querySelector('.model4');
const WinBut4 = document.querySelector('.WinBut4');
const ActBut5 = document.querySelector('.ActBut5');
const Model5 = document.querySelector('.model5');
const WinBut5 = document.querySelector('.WinBut5');


ActBut1.addEventListener('click', ()=>{
    console.log('lol');
    Model1.showModal();
})

WinBut1.addEventListener('click', ()=>{
    Model1.close();
    console.log('olo');
})


ActBut.addEventListener('click', ()=>{
    console.log('lol');
    Model.showModal();
})

WinBut.addEventListener('click', ()=>{
    Model.close();
    console.log('olo');
})


ActBut2.addEventListener('click', ()=>{
    console.log('lol');
    Model2.showModal();
})

WinBut2.addEventListener('click', ()=>{
    Model2.close();
    console.log('olo');
})


ActBut3.addEventListener('click', ()=>{
    console.log('lol');
    Model3.showModal();
})

WinBut3.addEventListener('click', ()=>{
    Model3.close();
    console.log('olo');
})

ActBut4.addEventListener('click', ()=>{
    console.log('lol');
    Model4.showModal();
})

WinBut4.addEventListener('click', ()=>{
    Model4.close();
    console.log('olo');
})


ActBut5.addEventListener('click', ()=>{
    console.log('lol');
    Model5.showModal();
})

WinBut5.addEventListener('click', ()=>{
    Model5.close();
    console.log('olo');
})

