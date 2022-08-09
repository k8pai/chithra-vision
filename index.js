// const cont = document.querySelector(".main-section");
let lastScroll = 0;
// console.log(cont);

window.addEventListener("scroll", () => {
    const cont = document.querySelector(".main-section");
    const currentScroll = window.pageYOffset;
    console.log("current scroll = "+currentScroll);
    console.log("last scroll = "+lastScroll);
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
    console.log("last scroll = "+lastScroll);

	
});


contentAnimtations();
