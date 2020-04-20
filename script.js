window.onload = function(){
    
    
    
    function showButton(){ //Pokazuje i chowa guzik podczas scrollowania
        var offset = this.pageYOffset; //Offset Y strony
        var button = document.querySelector("#backToTop");
        if(offset > 1500) 
            button.style.opacity = 1;
        else
            button.style.opacity = 0;
    }
    
    function animationSlide(){
        var offset = this.pageYOffset;
        if(offset >= 1900 && offset <= 3200){
            document.querySelector("#first-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#first-article").style.left = 0;},100);
        }
        if(offset >= 3000 && offset <= 4100){
            document.querySelector("#second-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#second-article").style.right = 0;},100);
        }
        if(offset >= 4300 && offset <= 5400){
            document.querySelector("#third-article").style.visibility = "visible";
            setTimeout(function(){document.querySelector("#third-article").style.left = 0;},100);
        }
    }
    
    function complete(v){
        var grid;
        if(v == 0){
            var grid = document.querySelectorAll(".grid1");
            document.querySelectorAll(".gridbox")[0].classList.add("complete");
        }
        if(v == 1){
            var grid = document.querySelectorAll(".grid2");
            document.querySelectorAll(".gridbox")[1].classList.add("complete");
        }
        if(v == 2){
            var grid = document.querySelectorAll(".grid3");
            document.querySelectorAll(".gridbox")[2].classList.add("complete");
        }
        for(var v = 0; v < grid.length; v++){
            grid[v].classList.add("complete");
            grid[v].style.opacity = 1;
        }
    }
    
    var counter = [0,0,0];
    var maxGrid = 15;
    function makeVisible(){
        if(this.style.opacity > 0) return;
        this.style.opacity = 0.5;
        if(this.classList.contains("grid1")){
            counter[0]++;
            if(counter[0] == maxGrid)
                complete(0);
        }
        if(this.classList.contains("grid2")){
            counter[1]++;
            if(counter[1] == maxGrid)
                complete(1);
        }
        if(this.classList.contains("grid3")){
            counter[2]++;
            if(counter[2] == maxGrid)
                complete(2);
        }
    }
    
    var grid = document.querySelectorAll(".grid");
    for(var v = 0; v < grid.length; v++){
        grid[v].addEventListener('mouseover', makeVisible);
    }
    window.addEventListener('scroll', showButton);
    window.addEventListener('scroll', animationSlide);
    document.querySelector("#backToTop").addEventListener('click', function(){
        window.scrollBy(0, -window.pageYOffset); //scrolluje w górę o offsetY strony
    });
    

}