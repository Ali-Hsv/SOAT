import './styles/style.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if(ScrollTrigger.isTouch !== 1){
    ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true,
	});

    let lastScroll = 0;

    ScrollTrigger.create({
      start: 0,
      end: "max", // вся длина документа
      onUpdate: (self) => {
        let currentScroll = self.scroll();

        if (currentScroll > lastScroll) {
          // скроллим вниз
          gsap.to("#head-div", { y: -100, duration: 0.4, ease: "power2.out" });
        } else {
          // скроллим вверх
          gsap.to("#head-div", { y: 0, duration: 0.4, ease: "power2.out" });
        }

        lastScroll = currentScroll;
      }
    });

}