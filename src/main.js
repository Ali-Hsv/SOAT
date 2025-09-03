import './styles/style.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {burgerClick} from "./scripts/burger";
import {backClick} from "./scripts/burger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

burgerClick();
backClick();

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
      end: "max",
      onUpdate: (self) => {
        let currentScroll = self.scroll();

        if (currentScroll > lastScroll) {
          gsap.to("#head-div", { y: -200, duration: 0.6, ease: "power2.out" });
        } else {
          gsap.to("#head-div", { y: 0, duration: 0.6, ease: "power2.out" });
        }

        lastScroll = currentScroll;
      }
    });

    gsap.fromTo('.scroll-section', 
        {
			opacity: 1,
		}, 
		{
			opacity: 0,
			scrollTrigger: {
				trigger: '.scroll-section',
				start: 'center top',
				end: 'bottom top',
				scrub: true,
				// markers: true
			}
		}
    );

    gsap.fromTo('.scroll-text', 
        {
			opacity: 0,
		}, 
		{
			opacity: 1,
			scrollTrigger: {
				trigger: '.scroll-text',
				start: '200 bottom',
				end: '100 200',
				scrub: true,
                // markers: true
			}
		}
    );

};