
let lastScroll = 0;
addEventListener("load", () => {
	console.log('loaded');
	// setTimeout(() => {
		// document.querySelector('.container').classList.remove('hide');
	// }, 1000);
});
window.addEventListener("scroll", () => {
    const cont = document.querySelector(".main-section");
    const currentScroll = window.pageYOffset;
	if (currentScroll > lastScroll) {
		cont.classList.add("scroll-down");
		cont.classList.remove("scroll-up");
	} 
    if (currentScroll < lastScroll) {
		cont.classList.remove("scroll-down");
		cont.classList.add("scroll-up");
	}
    if (currentScroll <= 0) {
		cont.classList.remove("scroll-up");
	}
	lastScroll = currentScroll;
});
