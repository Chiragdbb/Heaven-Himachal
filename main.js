let btnToTop = document.getElementById("scrollTopbtnToTop");

window.onscroll = function(){
    if(window.scrollY > 20){
        btnToTop.style.display = "block";
    }
    else{
        btnToTop.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};