
import { gsap } from "gsap";
var textWrapper = document.querySelector('.ml7 .letters');
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
      
      anime.timeline({loop: false})
        .add({
          targets: '.ml7 .letter',
          translateY: ["1.1em", 0],
          translateX: ["0.55em", 0],
          translateZ: 0,
          rotateZ: [180, 0],
        //   duration: 750,
          easing: "easeOutExpo",
          delay: (el, i) => 50 * i
        }).add({
          targets: '.ml7',
        //   opacity: 0,
        //   duration: 1000,
          easing: "easeOutExpo",
          delay: 1000
        });

        var tl = gsap.timeline({ repeat: -1 });
        tl.to("h2", 30, { backgroundPosition: "-960px 0" });
        