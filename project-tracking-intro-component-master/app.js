const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('ul');
    const navLinks = document.querySelectorAll('ul li');




    burger.addEventListener('click', () => {
        //toggle Nav
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();
