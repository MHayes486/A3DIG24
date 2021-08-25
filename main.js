

new Splide( '.splide' ).mount();
	
document.addEventListener( 'DOMContentLoaded', function () {
		new Splide( '#card-slider', {

		perPage    : 3,
		breakpoints: {
			600: {
				perPage: 1,
			}
		}
	} ).mount();
} );


let t1 = gsap.timeline({
    scrollTrigger:{
        trigger:'whatIs',
        start: "center top"
    }
});

t1.from(".info", {y:350, opacity: 1, duration: 1}, "-=2").from(".imageSlide", {x: 200, opacity: 0, duration: 3})

/*Sticky Nav
window.onscroll = function() {stickyNav()};
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}*/