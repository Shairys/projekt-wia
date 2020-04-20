window.onload = function(){
    
    
    
    function showButton(){ //Pokazuje i chowa guzik podczas scrollowania
        var offset = this.pageYOffset; //Offset Y strony
        var button = document.querySelector("#backToTop");
        if(offset > 350) 
            button.style.display = "block";
        else
            button.style.display = "none";
        button.querySelector("p").innerHTML = offset;
    }
    
    function animationSlide(){
        var offset = this.pageYOffset;
        if(offset >= 1900 && offset <= 3200){
            document.querySelector("#first-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#first-article").style.left = 0;},100);
        }
        if(offset >= 3000 && offset <= 4100){
            document.querySelector("#second-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#second-article").style.left = 0;},100);
        }
        if(offset >= 4300 && offset <= 5400){
            document.querySelector("#third-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#third-article").style.left = 0;},100);
        }
    }

    window.addEventListener('scroll', showButton);
    window.addEventListener('scroll', animationSlide);
    document.querySelector("#backToTop").addEventListener('click', function(){
        window.scrollBy(0, -window.pageYOffset); //scrolluje w górę o offsetY strony
    });


}