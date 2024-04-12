window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop <windowheight - revealPoint) {
            if(i==0){
                reveals[i].classList.add('slideTop-50px');
            }
            else if(i==1) {
                reveals[i].classList.add('slideTop-50px');
            }
        }
        else {
            reveals[i].classList.remove('slideTop-50px');
            reveals[i].classList.remove('slideTop-50px');
        }
    }
}