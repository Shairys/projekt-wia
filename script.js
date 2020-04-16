window.onload = function(){
    
    function showButton(){ //Pokazuje i chowa guzik podczas scrollowania
        var offset = this.pageYOffset; //Offset Y strony
        var button = document.querySelector("#backToTop");
        if(offset > 350) 
            button.style.display = "block";
        else
            button.style.display = "none";
    }

    window.addEventListener('scroll', showButton);
    document.querySelector("#backToTop").addEventListener('click', function(){
        window.scrollBy(0, -window.pageYOffset); //scrolluje w górę o offsetY strony
    });


}