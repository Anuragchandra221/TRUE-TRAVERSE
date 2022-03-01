

function scrollMiddle(){
    var item = document.querySelectorAll(".animateX");
    var item1 = document.querySelectorAll(".animateNX");
    

    var screenPosition = window.innerHeight/1.3;
    
    var header = document.querySelector('nav');
    var scrollPosition = window.scrollY;
    item.forEach(element => {
        var itemPosition = element.getBoundingClientRect().top;
        if(itemPosition<screenPosition){
            
            element.classList.add("animate-occurX");
        }
        
    });
    item1.forEach(element => {
        var itemPosition = element.getBoundingClientRect().top;
        if(itemPosition<screenPosition){
            
            element.classList.add("animate-occurX");
        }
        
    });
    


        
    
}
function load(){
    var item2 = document.querySelectorAll(".animateY");
    var screenPosition = window.innerHeight/1.3;
    item2.forEach(element => {
        var itemPosition = element.getBoundingClientRect().top;
        element.classList.add("animate-occurY");
        if(itemPosition<screenPosition){
            
            
        }
        
    });
}
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function load1(){
    var item2 = document.querySelectorAll(".animateNY");

    var screenPosition = window.innerHeight/1.3;
    item2.forEach(element => {
        var itemPosition = element.getBoundingClientRect().top;
        element.classList.add("animate-occurY");
        if(itemPosition<screenPosition){
            
            
        }
        
    });
}
function overlay(){
    if(document.querySelector(".color-overlay").style.height === "71%"){
        document.querySelector(".color-overlay").style.height = "92%";
    }else{
        document.querySelector(".color-overlay").style.height = "71%";
    }
}
function scroll(){
    if (document.body.scrollTop>20  || document.documentElement.scrollTop > 20){
        document.getElementById("last").style.display = "flex";
    }
    else{
        document.getElementById("last").style.display = "none";
    }
}
function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.addEventListener('load', load);
window.addEventListener('load', load1);
window.addEventListener('scroll', scrollMiddle);
window.addEventListener('scroll', scroll);