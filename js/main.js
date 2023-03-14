var imgs =Array.from(document.querySelectorAll(".itme img")) ;
var levelBox = document.getElementById("levelBox");
var child_box = document.getElementById("child_box");
var nextBtn=document.getElementById("nextBtn");
var prevsBtn=document.getElementById('prevsBtn');
var close=document.getElementById('close');
currntindex=0;
for (i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    currntindex=imgs.indexOf(e.target);
    console.log(currntindex);
    let imgSrc = e.target.getAttribute("src");
  
    child_box.style.backgroundImage = `url(${imgSrc})`;
    levelBox.style.display = "flex";
  });
}


function nextSlide(){
    currntindex++;
    if(currntindex==imgs.length){
        currntindex=0;  
    }
    var imgSrc=imgs[currntindex].getAttribute("src");
    child_box.style.backgroundImage = `url(${imgSrc})`;
}


function prevsSlide(){
    currntindex--;
    if(currntindex<0){
        currntindex=imgs.length -1;
    }
    var imgSrc=imgs[currntindex].getAttribute('src')
    child_box.style.backgroundImage = `url(${imgSrc})`;
}
function colseSlide(){
    levelBox.style.display = "none";
}
close.addEventListener('click',colseSlide)
nextBtn.addEventListener('click',nextSlide)
prevsBtn.addEventListener("click",prevsSlide)

document.addEventListener('keydown',function(e){
    console.log(e.key);
    if(e.code=='ArrowRight'){
        nextSlide()
    }
    else if(e.code=='ArrowLeft'){
        prevsSlide()
    }
    else if(e.code=='Escape'){
        colseSlide()
    }
})