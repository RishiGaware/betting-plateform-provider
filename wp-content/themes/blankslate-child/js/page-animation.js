class PageAnimation {
    constructor(e, t) {
        this.$logo, this.$defaultWindowSize = window.innerWidth, this.$navController = document.querySelectorAll(".header .nav-control .line"), this.$header = document.querySelector(".header"), this.$nav = document.querySelector(".nav-container .nav"), this.$pageStatus = "static", document.body.classList.contains("wp-website") && (this.$pageStatus = "wp"), this.$navOnLoad = !1, this.$navStillOpened = !1, this.$navOnProgress = !1, this.$doAjaxusedSlider = !1, this.$doAjax = !1, this.$doResize = !1, this.$doAjaxImages = new Array, this.$doAjaxImagesTotal = 0, this.$doAjaxImagesCounter = 0, this.$svgLoader = !1, this.$tempLink, this.$scrollbar = t, this.$pageLoadStatus = !0, this.$imageLoadStatus = !1, this.$hideLoaderStatus = !1, this.$linkOnprogress = !1, this.$onLoad = !1, this.$openNav = !1, this.$isContact = !1, this.$imageCounter = 0, this.$imageTotal = 0, this.$images = new Array, this.$isPageLoaded = !1, this.bindEvent(), this.imageLoaderInit(), this.$content = new ContentAnimation(e, this.$scrollbar)
    }
    init() {}
    isMobile(e) {
        return !0 === e ? !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) : window.innerWidth < 1200
    }
    pushNotification(e, t) {
        let o = document.querySelector(".notify").querySelector(".container");
        "success" ? o.classList.add("success"): o.classList.add("fail"), o.innerHTML = t, gsap.to(o, {
            duration: .8,
            y: "-180% ",
            scale: 1,
            opacity: 1,
            force3D: !0,
            ease: "back.out(1.1)"
        }), setTimeout((function() {
            gsap.to(o, {
                duration: 1.5,
                y: "180%",
                opacity: 0,
                scale: .5,
                force3D: !0,
                ease: "back.out(1.1)"
            })
        }), 5e3)
    }
    updateScroll() {
        this.$scrollbar.update()
    }
    bindEvent() {
        window.addEventListener("resize", this.resize.bind(this)), document.querySelector(".popup-trigger").addEventListener("click", (() => {
            this.$scrollbar.stop(), gsap.to(".body-overlay", {
                duration: 0,
                zIndex: 9999
            }), gsap.to(".body-overlay", {
                duration: .4,
                opacity: 1,
                force3D: !0,
                ease: "power4.Out"
            }), gsap.to(".popup-container", {
                duration: .4,
                opacity: 1,
                scale: 1,
                delay: .4,
                ease: "power4.Out"
            })
        })), document.querySelector(".popup-container .close").addEventListener("click", (() => {
            gsap.to(".popup-container", {
                duration: .4,
                opacity: 0,
                scale: .8,
                ease: "power4.out"
            }), gsap.to(".body-overlay", {
                duration: .4,
                opacity: 0,
                delay: .4,
                force3D: !0,
                ease: "power4.out"
            }), gsap.to(".body-overlay", {
                delay: .8,
                duration: 0,
                zIndex: -1,
                onComplete: () => {
                    this.$scrollbar.start()
                }
            })
        })), document.addEventListener("imageLoaderProgress", this.imageLoaderCheckProcess.bind(this)), document.addEventListener("imageLoaderProgressDone", this.checkPageLoaded.bind(this)), document.addEventListener("pageLoaded", this.showPage.bind(this)), document.addEventListener("updateScroll", this.updateScroll.bind(this)), document.querySelectorAll(".goExchange").forEach((e => {
            e.addEventListener("click", (() => {
                this.$scrollbar.scrollTo(document.getElementById("exchangs"))
            }))
        })), document.querySelectorAll(".goTerms").forEach((e => {
            e.addEventListener("click", (() => {
                this.$scrollbar.scrollTo(document.getElementById("terms"))
            }))
        })), document.querySelectorAll(".goContact").forEach((e => {
            e.addEventListener("click", (() => {
                this.$scrollbar.scrollTo(document.getElementById("contact"))
            }))
        }))
    }
    formChecker() {
        null !== document.querySelector(".async-task") && document.querySelectorAll(".async-task").forEach((e => {
            e.addEventListener("submit", (t => {
                t.preventDefault(), e.querySelector("button").setAttribute("disabled", ""), e.querySelector("button").classList.add("disable-button");
                fetch(e.getAttribute("action"), {
                    method: e.getAttribute("method").toUpperCase(),
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    redirect: "follow",
                    referrer: "no-referrer",
                    body: new FormData(e)
                }).then((e => e.text())).then((t => {
                    let o = JSON.parse(t);
                    e.querySelector("button").removeAttribute("disabled"), e.querySelector("button").classList.remove("disable-button"), "message-error" === o.status ? this.pushNotification("fail", o.message) : "message-success" === o.status && (e.reset(), this.pushNotification("success", o.message))
                })).catch((t => {
                    this.pushNotification("fail", "Something is wrong, Please try again."), e.querySelector("button").removeAttribute("disabled"), e.querySelector("button").classList.remove("disable-button")
                }))
            }))
        }))
    }
    showHeader() {
        this.isMobile() ? this.$logo = document.querySelector(".mobile-header .logo") : this.$logo = document.querySelector(".desktop-header .logo"), gsap.to(this.$logo, {
            duration: 1.5,
            y: 0,
            opacity: 1,
            scale: 1,
            ease: "power3.out",
            force3D: !0,
            delay: .8
        }), this.isMobile() && TweenMax.staggerTo(".mobile-header .nav-control .line", .8, {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            force3D: !0,
            delay: 1.3
        }, .2)
    }
    resize() {
        document.querySelector(".page-loader").classList.contains("page-loader-done") || gsap.to(".page-loader .logo", {
            x: window.innerWidth / 2 - 29
        }), this.$defaultWindowSize >= 1200 && window.innerWidth >= 1200 || (this.$doResize = !0, this.$defaultWindowSize = window.innerWidth, this.$tempLink = window.location.href, document.dispatchEvent(new Event("doAjax")))
    }
    imageLoaderInit() {
        if (this.$scrollbar.stop(), this.$images.push(document.querySelectorAll("video")), this.$imageTotal = this.$images[0].length, 0 === this.$imageTotal) return this.$imageTotal = 1, this.$imageCounter++, void this.imageLoaderCheckProcess();
        this.imageLoaderProcess()
    }
    imageLoaderCheckProcess() {
        let e = 100 * this.$imageCounter / this.$imageTotal,
            t = 100 - e;
        gsap.to(".page-loader .overlay", {
            duration: .8,
            width: e + "%",
            x: t / 2 + "vw",
            force3D: !0,
            ease: "power2.out",
            delay: .2,
            onComplete: () => {
                this.$imageCounter === this.$imageTotal && (this.$imageLoadStatus = !0, document.dispatchEvent(new Event("imageLoaderProgressDone")))
            }
        })
    }
    imageLoaderProcess() {
        for (let e = 0; e < this.$imageTotal; e++) {
            let t = new Image;
            t.src = this.$images[0][e].src, t.addEventListener("load", (() => {
                this.$imageCounter++, document.dispatchEvent(new Event("imageLoaderProgress"))
            })), t.addEventListener("error", (() => {
                this.$imageCounter++, document.dispatchEvent(new Event("imageLoaderProgress"))
            }))
        }
    }
    checkPageLoaded() {
        !0 === this.$pageLoadStatus && !0 === this.$imageLoadStatus && !1 === this.$hideLoaderStatus && this.hideLoader()
    }
    hideLoader() {
        this.$hideLoaderStatus = !0, gsap.to(".page-loader", {
            duration: .6,
            zIndex: -1,
            opacity: 0,
            ease: CustomEase.create("custom", "M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1"),
            force3D: !0,
            onComplete: () => {
                this.$scrollbar.start(), document.dispatchEvent(new Event("pageLoaded"))
            }
        })
    }
    imageLoaderDoAjax() {
        let e = document.querySelectorAll("img");
        if (0 !== e.length) {
            e.forEach((e => {
                this.$doAjaxImages.push(e)
            })), this.$doAjaxImagesTotal = this.$doAjaxImages.length;
            for (let e = 0; e < this.$doAjaxImagesTotal; e++) {
                let t = new Image;
                t.src = this.$doAjaxImages[e].src, t.addEventListener("load", (() => {
                    this.$doAjaxImagesCounter++, this.imageLoaderDoAjaxCheckProgress()
                })), t.addEventListener("error", (() => {
                    this.$doAjaxImagesCounter++, this.imageLoaderDoAjaxCheckProgress()
                }))
            }
        } else document.dispatchEvent(new Event("doAjaxFinish"))
    }
    imageLoaderDoAjaxCheckProgress() {
        this.$doAjaxImagesTotal === this.$doAjaxImagesCounter && (this.$doAjaxImagesTotal = 0, this.$doAjaxImagesCounter = 0, document.dispatchEvent(new Event("doAjaxFinish")))
    }
    showPage(e) {
        if (!("load" === e || this.$pageLoadStatus && this.$imageLoadStatus)) return !1;
        if (this.$content.init(), document.querySelector(".intro-container") && this.intro(), document.querySelector(".heading-arrow")) {
            gsap.to(".heading-arrow", {
                duration: 2,
                scale: 1,
                opacity: 1,
                y: 0,
                ease: "power4.out",
                force3D: !0
            }), gsap.timeline({
                repeat: 20,
                yoyo: !0,
                delay: 1
            }).to(".heading-arrow", {
                duration: 1,
                y: -15,
                ease: "power4.out",
                force3D: !0
            })
        }
        this.showHeader(), this.formChecker()
    }
    intro() {
        document.querySelectorAll(".intro-container .non-auto-split-text").forEach((e => {
            new SplitText(e).splitTextAnimation()
        })), gsap.to(".introduction-link", {
            duration: 1,
            y: 0,
            scale: 1,
            opacity: 1,
            force3D: !0,
            ease: "power4.out",
            delay: .6
        }), gsap.to(".helicopter", {
            duration: 2,
            y: 100,
            scale: 1,
            opacity: 1,
            force3D: !0,
            delay: .3,
            ease: "back.out(1.1)"
        }), gsap.to(".header-t-black", {
            duration: 2,
            y: -100,
            scale: 1,
            opacity: 1,
            force3D: !0,
            delay: .4,
            ease: "back.out(2.5)"
        }), gsap.to(".header-dollar-1", {
            duration: 2.5,
            y: 100,
            scale: 1,
            opacity: 1,
            force3D: !0,
            delay: .6,
            ease: "back.out(1.5)"
        }), gsap.to(".header-dollar-2", {
            duration: 2.5,
            y: 100,
            scale: 1,
            opacity: 1,
            force3D: !0,
            delay: .6,
            ease: "back.out(1.5)"
        }), gsap.to(".header-coin", {
            duration: 2.5,
            y: -60,
            scale: 1,
            opacity: 1,
            force3D: !0,
            delay: .5,
            ease: "back.out(2.5)"
        }), gsap.to(".header", {
            duration: .6,
            y: 0,
            force3D: !0,
            ease: "power4.Out",
            delay: 1.2
        })
    }
}