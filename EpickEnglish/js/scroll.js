const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

headerrrrr = document.querySelector('.offer-header');

window.addEventListener('scroll', function() {
    let scrollDistance = window.scrollY;

    if(scrollDistance > 1){
        headerrrrr.classList.add('scroll');
    }
    else{
        headerrrrr.classList.remove('scroll');
    }
})