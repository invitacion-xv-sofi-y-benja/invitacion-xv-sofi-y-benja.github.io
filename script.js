const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

var audio = document.getElementById("audio");
var playPauseBtn = document.getElementById("playPauseBtn");
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
    } else {
        count = 0;
        audio.pause();
    }
}

const days = document.getElementById("days"), hours = document.getElementById("hours"), min = document.getElementById("min"), sec = document.getElementById("sec");

const tagDate = new Date("June 14, 2025 21:00:00").getTime();

setInterval(() => {

let hoy = new Date().getTime()

let tiempoRest = tagDate - hoy;

//Conversion de Ms a dias, horas, min, sec

let dias = Math.floor(tiempoRest/86400000), horas = Math.floor(tiempoRest/3600000) % 24, minutos = Math.floor(tiempoRest/60000) % 60, segundos = Math.floor(tiempoRest/1000) % 60;

//Mostrar los resultados en pantalla

days.innerHTML = dias;
hours.innerHTML = horas;
min.innerHTML = minutos;
sec.innerHTML = segundos;

}, 1000);

gsap.registerPlugin(CustomEase);
CustomEase.create(
    "hop",
    "M0,0 C0.9,0 0.1,1 1,1"
    );

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline({
        delay: 0.3,
        defaults: {
            ease: "hop",
        },
    });

    const counts = document.querySelectorAll(".count");

    counts.forEach((count, index) => {
        const digits = count.querySelectorAll(".digit h1");

        tl.to(digits, {
            y: "0%",
            duration: 1,
            stagger: 0.075,
        }, 
        index * 1
    );
    
    if (index < counts.length) {
        tl.to(digits, {
            y: "-100%",
            duration: 1,
            stagger: 0.075,
        }, index * 1 + 1
    );
    }
    });

    tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
    });

    tl.to(".word h1", {
        y: "0%",
        duration: 1,
    }, "<"
);

tl.to(".divider", {
    scaleY: "100%",
    duration: 1,
    onComplete: () => gsap.to(".divider", { opacity: 0, duration: 0.4, delay: 0.3 }),
});

tl.to("#word-1 h1", {
    y: "100%",
    duration: 1,
    delay: 0.3,
});

tl.to("#word-2 h1", {
    y: "-100%",
    duration: 1,
}, "<" 
);

tl.to(".block", {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    duration: 1,
    stagger: 0.1,
    delay: 0.75,
    onStart: () => gsap.to(".hero-img", { scale: 1, duration: 2, ease: "hop" }),
});

tl.to([".nav", ".line h1", ".june p", ".line p", ".xv"], {
    y: "0%",
    duration: 1.5,
    stagger: 0.2,
    delay: 0.1,
}, "<"
);

tl.to(".mid", {
    y:"0%",
    duration: 1,
    stagger: 0.2,
    delay: 1.2,
}, "<"
);

tl.to([".cta", ".cta-icon", ".header-icon", "location-btn", "clothes-btn", "asistence-btn"], {
    scale: 1,
    duration: 1.2,
    stagger: 0.75,
    delay: 0.75,
}, "<"
);

tl.to(".cta-label p", {
    y: "0%",
    duration: 1.5,
    delay: 0.5,
}, "<"
);
});


document.addEventListener("DOMContentLoaded",   function () {
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".men", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut",
    });

    timeline.to(
        ".menu-title, .menu-item",
        {
            duration: 0.3,
            opacity: 1,
            stagger: 0.05,
        },
        "-=0.5"
    );

    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            timeline.reverse();
        } else {
            timeline.play();
        }
        isOpen = !isOpen;
    });
});

//ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".pinned-text",
    start: "top top",
    endTrigger: ".whitespace",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
});

ScrollTrigger.create({
    trigger: ".about",
    start: "top top",
    endTrigger: ".whitespace",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
});

ScrollTrigger.create({
    trigger: ".pinned-text",
    start: "top top",
    endTrigger: ".header-info",
    end: "bottom bottom",
});

ScrollTrigger.create({
    trigger: ".pinned-text",
    start: "top top",
    endTrigger: ".about",
    end: "bottom bottom",
});

ScrollTrigger.create({
    trigger: ".pinned-text",
    start: "top -50",
    endTrigger: ".about",
    end: "bottom bottom",
});

/*ScrollTrigger.create({
    trigger: ".about",
    start: "top top",
    end: "bottom 50%",
    scrub: 1,
    onUpdate: (self) => {
        const progress = self.progress;
        const left = 35 + 15 * progress;
        gsap.to(".revealer", {
            left: `${left}%`,
            ease: "none",
            duration: 0,
        });
    },
});*/

ScrollTrigger.create({
    trigger: ".whitespace",
    start: "top -40%",
    end: "bottom bottom",
    scrub: 1,
    onUpdate: (self) => {
        const scale = 1 + 108 * self.progress;
        gsap.to(".pinned-text h2", {
            scale: scale,
            ease: "none",
            duration: 0,
        });
    },
});

gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0,
        stagger: 0.1,
        /*opacity: 0.2,
        stagger: 0.1,*/
    })
})

gsap.registerPlugin(ScrollTrigger)

const splitTypesTitle = document.querySelectorAll('.reveal-title')

splitTypesTitle.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0,
        stagger: 0.1,
        /*opacity: 0.2,
        stagger: 0.1,*/
    })
})

gsap.registerPlugin(ScrollTrigger)

const splitTypesText = document.querySelectorAll('.reveal-text')

splitTypesText.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0,
        stagger: 0.1,
        /*opacity: 0.2,
        stagger: 0.1,*/
    })
})

gsap.registerPlugin(ScrollTrigger)

const splitTypesTextAsistence = document.querySelectorAll('.reveal-text-asistence')

splitTypesTextAsistence.forEach((char,i) => {

    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'top 50%',
            scrub: true,
            markers: false,
        },
        scaleY: 0,
        y: -20,
        transformOrigin: 'top',
        opacity: 0,
        stagger: 0.1,
        /*opacity: 0.2,
        stagger: 0.1,*/
    })
})