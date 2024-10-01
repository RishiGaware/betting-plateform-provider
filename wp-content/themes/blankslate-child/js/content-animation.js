class ContentAnimation {
    constructor(e, t) {
        this.$isMobile = e, this.$windowWidth = window.innerWidth, this.$scroller = t, this.$homeSlider, document.getElementById("home-slider") && (this.$homeSlider = new Slider("home-slider")), this.bindEvent()
    }
    bindEvent() {
        window.addEventListener("blur", (() => {
            this.videoControl("pause")
        })), window.addEventListener("focus", (() => {
            this.videoControl("play")
        }))
    }
    init() {
        this.contentOnScrollLoad(), this.splitTextInit(), this.videoControl("play")
    }
    resize() {}
    kill() {
        ScrollTrigger.getAll().forEach((e => e.kill())), document.querySelectorAll(".active-animation").forEach((e => e.classList.remove("active-animation")))
    }
    splitTextInit() {
        let e = document.querySelectorAll(".split-text");
        this.$isMobile ? e.forEach((e => {
            let t = new SplitText(e);
            ScrollTrigger.create({
                trigger: e,
                scroller: "main",
                start: "center bottom",
                end: "center top",
                onEnter: e => {
                    t.splitTextAnimation()
                },
                onLeave: e => {
                    t.resetSplitTextAnimation()
                }
            })
        })) : e.forEach((e => {
            let t = new SplitText(e);
            ScrollTrigger.create({
                trigger: e,
                scroller: "#js-scroll",
                start: "center bottom",
                end: "center top",
                onEnter: e => {
                    t.splitTextAnimation()
                },
                onLeave: e => {
                    t.resetSplitTextAnimation()
                }
            })
        }))
    }
    videoControl(e) {
        let t = document.querySelectorAll("video");
        "play" === e ? t.forEach((e => {
            e.classList.contains("inview") && e.play()
        })) : "pause" === e && t.forEach((e => {
            e.pause()
        }))
    }
    contentOnScrollLoad() {
        let e = document.querySelectorAll("video");
        this.$isMobile ? e.forEach((e => {
            ScrollTrigger.create({
                trigger: e,
                scroller: "main",
                start: "top top",
                end: "center top",
                onEnter: e => {
                    e.trigger.play(), e.trigger.classList.add("inview")
                },
                onLeaveBack: e => {
                    e.trigger.play(), e.trigger.classList.add("inview")
                },
                onLeave: e => {
                    e.trigger.pause(), e.trigger.classList.remove("inview")
                }
            })
        })) : e.forEach((e => {
            ScrollTrigger.create({
                trigger: e,
                scroller: "#js-scroll",
                start: "top top",
                end: "center top",
                onEnter: e => {
                    e.trigger.play(), e.trigger.classList.add("inview")
                },
                onLeaveBack: e => {
                    e.trigger.play(), e.trigger.classList.add("inview")
                },
                onLeave: e => {
                    e.trigger.pause(), e.trigger.classList.remove("inview")
                }
            })
        })), document.querySelectorAll(".rail-text").forEach((e => {
            let t = e.dataset.railDirection,
                o = e.dataset.railDuration;
            new RailContent(e, this.$scroller, t, o)
        }));
        let t = new IntersectionObserver(((e, t) => {
            e.forEach((e => {
                let t = e.target;
                if (e.isIntersecting && e.intersectionRatio >= .4) {
                    if (t.classList.contains("active-animation")) return !1;
                    (t.classList.contains("content-block-2") || t.classList.contains("content-block-3") || t.classList.contains("content-block-4") || t.classList.contains("input")) && gsap.to(t, {
                        duration: 1,
                        scale: 1,
                        y: 0,
                        opacity: 1,
                        force3D: !0,
                        ease: "power4.out"
                    }), t.classList.contains("side-video") && gsap.to(t, {
                        duration: 2,
                        y: -100,
                        scale: 1,
                        opacity: 1,
                        force3D: !0,
                        delay: .4,
                        ease: "back.out(2.5)"
                    })
                }
            }))
        }), {
            root: null,
            rootMargin: "0px",
            threshold: [0, .4, .8, 1]
        });
        document.querySelectorAll(".qa-animation").forEach((e => {
            t.observe(e)
        }))
    }
    openPopup(e) {
        e.dataset.openPopup;
        gsap.to("body", {
            duration: 0,
            position: "fixed",
            height: "100%",
            overflow: "hidden"
        });
        let t = document.getElementById(e.dataset.openPopup);
        gsap.to(t, {
            duration: 1,
            y: 0,
            force3D: !0,
            ease: "power4.inOut",
            delay: 0
        });
        let o = t.querySelectorAll(".line");
        console.log(o), gsap.to(o[0], {
            duration: 1,
            rotate: -45,
            y: 8,
            force3D: !0,
            ease: "expo.out",
            delay: .5
        }), gsap.to(o[1], {
            duration: 1,
            rotate: 45,
            y: -3,
            force3D: !0,
            ease: "expo.out",
            delay: .5
        })
    }
    closePopup(e) {
        let t = e.closest(".popup-container");
        null !== t.querySelector("video") && t.querySelector("video").pause(), gsap.to(t, {
            duration: 1,
            y: "100%",
            force3D: !0,
            ease: "power4.inOut",
            delay: 0
        });
        let o = t.querySelectorAll(".line");
        gsap.to(o[0], {
            duration: 1,
            rotate: 0,
            y: 0,
            force3D: !0,
            ease: "expo.out"
        }), gsap.to(o[1], {
            duration: 1,
            rotate: 0,
            y: 0,
            force3D: !0,
            ease: "expo.out"
        }), gsap.to("body", {
            duration: 0,
            position: "inherit",
            height: "inherit",
            overflow: "inherit"
        })
    }
    accordion(e) {
        let t = e.closest(".accordion"),
            o = t.querySelector(".trigger");
        if (t.classList.contains("active-accordion")) return t.classList.remove("active-accordion"), t.classList.contains("two-line") ? gsap.to(t, {
            duration: .8,
            height: "90px",
            ease: "power4.inOut",
            force3D: !0,
            onUpdate: () => {
                document.dispatchEvent(new Event("updateScroll"))
            }
        }) : gsap.to(t, {
            duration: .8,
            height: "70px",
            ease: "power4.inOut",
            force3D: !0,
            onUpdate: () => {
                document.dispatchEvent(new Event("updateScroll"))
            }
        }), void gsap.to(o, {
            duration: .8,
            rotate: 0,
            ease: "power4.inOut",
            force3D: !0
        });
        gsap.to(t, {
            duration: .8,
            height: "auto",
            ease: "power4.inOut",
            force3D: !0,
            onUpdate: () => {
                document.dispatchEvent(new Event("updateScroll"))
            }
        }), gsap.to(o, {
            duration: .8,
            rotate: 180,
            ease: "power4.inOut",
            force3D: !0
        }), t.classList.add("active-accordion")
    }
}