
// const gsap = gsap.timeline();
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".second-content", {
    
//     scrollTrigger: ".second-content",
//     // x: -800,
//     opacity: 0,
//     duration: 5
// });

// function contentAnimtations(){
//     var t1 = gsap.timeline();
//     t1.from(".left-image-sec.inview", {x: -500, easing: "easeOutExpo", duration: 5})
// }
// contentAnimtations();


const leftImgOne =  document.querySelector('.second-content.one .left-image-sec');
const righttextOne =  document.querySelector('.second-content.one .right-text-sec');

// var gsap = gsap.timeline()
gsap.utils.toArray(".second-content").forEach((secondSec) => {
    const t1 = gsap.timeline({
        scrollTrigger: {
            trigger: secondSec,
            start: "10% bottom",
            end: "bottom top",
            markers: true,
            onEnter() {
              secondSec.classList.add('inview');
            },
            onLeave() {
              secondSec.classList.remove('inview');
            },
            onEnterBack() {
              secondSec.classList.add('inview');
            },
            onLeaveBack() {
              secondSec.classList.remove('inview');
            }
        },
    })
});

// gsap.from(".right-image-sec", {
//     scrollTrigger: {
//         trigger: ".second-content.two",
//         start: "10% bottom",
//         end: "bottom top",
//         onEnter() {
//           leftImgOne.classList.add('inview');
//         },
//         onLeave() {
//           leftImgOne.classList.remove('inview');
//         },
//         onEnterBack() {
//           leftImgOne.classList.add('inview');
//         },
//         onLeaveBack() {
//           leftImgOne.classList.remove('inview');
//         },
//     },
// })

// gsap.from(".right-text-sec", {
//     opacity: 0,
//     x: 200,
//     easing: "easeOutExpo",
//     duration: 1
// });
// gsap.from(".right-image-sec", {
//     x: 200,
//     easing: "easeOutExpo",
//     duration: .6
// });


