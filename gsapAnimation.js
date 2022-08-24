
const leftImgOne =  document.querySelector('.second-content.one .left-image-sec');
const righttextOne =  document.querySelector('.second-content.one .right-text-sec');

gsap.utils.toArray(".second-content").forEach((secondSec) => {
  const t1 = gsap.timeline({
      scrollTrigger: {
          trigger: secondSec,
          start: "10% bottom",
          end: "90% top",
          // markers: true,
          onEnter() {
            secondSec.classList.add('inview');
            console.log(secondSec+" .left-image-sec");
          },
          onLeave() {
            secondSec.classList.remove('inview');
            console.log('left');
          },
          onEnterBack() {
            secondSec.classList.add('inview');
            console.log('entered back');
          },
          onLeaveBack() {
            secondSec.classList.remove('inview');
            console.log('left back');
          }
      },
  });
});

