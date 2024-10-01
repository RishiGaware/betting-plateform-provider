class RailContent {
    constructor(t, e, i, r) {
        this.$el = t, this.$scroller = e, this.$railDirection = i, this.$duration = r, this.$rail, this.$railElements, this.$railElement, this.$railPicture = !1;
        let l = 0,
            s = this.$el.querySelector(".rail-container").querySelector(".rail-content");
        if (s.classList.contains("rail-container-img")) {
            this.$railPicture = !0, s.querySelectorAll(".img-container").forEach((t => {
                l += parseInt(t.offsetWidth)
            })), s.style.width = parseInt(l) + "px"
        }
        this.setRail(), "right" == this.$railDirection ? this.railToRight() : "left" == this.$railDirection && this.railToLeft(), this.bindEvent()
    }
    bindEvent() {
        this.$el.querySelector(".rail-content");
        this.$el.addEventListener("mouseenter", (() => {
            this.$rail.duration(2 * this.$duration)
        })), this.$el.addEventListener("mouseleave", (() => {
            this.$rail.duration(this.$duration)
        })), window.addEventListener("blur", (() => {
            this.$rail.pause()
        })), window.addEventListener("focus", (() => {
            this.$rail.play()
        }));
        new IntersectionObserver(((t, e) => {
            t[0].isIntersecting ? this.$rail.play() : this.$rail.pause()
        }), {
            root: null,
            rootMargin: "0px",
            threshold: [0, 1]
        }).observe(this.$el)
    }
    setRail() {
        let t = this.$el.querySelector(".rail-container");
        t.insertAdjacentHTML("beforeend", t.innerHTML);
        let e = t.querySelector(".rail-content"),
            i = t.innerHTML,
            r = e.offsetWidth,
            l = 0;
        if (window.innerWidth / r > 2 && (l = parseInt(window.innerWidth / r)), 0 !== l)
            for (let e = 0; e < l; e++) t.insertAdjacentHTML("beforeend", i);
        this.$railElements = this.$el.querySelectorAll(".rail-content"), this.$railElement = this.$el.querySelector(".rail-content"), this.$railPicture && ("right" === this.$railDirection ? gsap.to(".rail-content", {
            duration: 0,
            x: parseFloat(this.$railElement.offsetWidth) * parseInt(-1)
        }) : gsap.to(".rail-content", {
            duration: 0,
            x: 0
        }))
    }
    railToLeft() {
        let t = 0;
        this.$railPicture ? (t = parseFloat(this.$railElement.offsetWidth), console.log(this.$railElement.offsetWidth, "-------- 2")) : t = parseFloat(this.$railElement.offsetWidth) + parseInt(40), this.$rail = TweenMax.fromTo(this.$railElements, {
            x: 0
        }, {
            duration: this.$duration,
            x: "-=" + t + "px",
            ease: Linear.easeNone,
            force3D: !0,
            repeat: -1
        }), this.$rail.play()
    }
    railToRight() {
        let t = 0;
        this.$railPicture ? (t = parseFloat(this.$railElement.offsetWidth), console.log(this.$railElement.offsetWidth, "-------- 3")) : t = parseFloat(this.$railElement.offsetWidth) + parseInt(40), this.$rail = TweenMax.fromTo(this.$railElements, {
            x: t * parseInt(-1)
        }, {
            duration: this.$duration,
            x: "+=" + t + "px",
            ease: Linear.easeNone,
            force3D: !0,
            repeat: -1
        }), this.$rail.play()
    }
}