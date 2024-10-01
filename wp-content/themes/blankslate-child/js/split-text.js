class SplitText {
    constructor(t, e, i, o, a) {
        this.$el = t, this.$direction = e, this.$customDelay = i || 0, this.$duration = o, this.$stagger = a, this.$oldContent, null === this.$el.querySelector(".old-content") || void 0 === this.$el.querySelector(".old-content") ? this.$oldContent = t.innerHTML : this.$oldContent = t.querySelector(".old-content").innerText
    }
    isMobile() {
        return !!((/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && window.innerWidth < 1200)
    }
    splitTextAnimation(t) {
        let e = this.$el;
        if (!0 === this.isMobile() && e.classList.contains("mobile-see-more")) return;
        let i, o = this.$direction,
            a = !1;
        void 0 !== t && (a = t), void 0 === o && (o = "normal"), void 0 === this.$duration && (this.$duration = e.dataset.splitDuration), i = parseFloat(this.$stagger) > 0 ? this.$stagger : e.dataset.splitStagger / 2;
        let s = e.dataset.splitClass;
        if (0 === this.$customDelay && (this.$customDelay = e.dataset.splitDelay ? e.dataset.splitDelay : 0), !e.classList.contains("split-text-active")) {
            acAnimated.Plugins.SplitText(e, {
                chars: 1
            });
            let t = e.querySelectorAll(".word"),
                i = 0,
                o = t.length;
            t.forEach((t => {
                i++, i < o && t.insertAdjacentHTML("afterend", " "), t.querySelectorAll("div").forEach((t => {
                    t.classList.add(s)
                }))
            })), e.classList.add("split-text-active")
        }
        let n = e.querySelectorAll("." + s);
        "normal" == o && TweenMax.staggerTo(n, this.$duration, {
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: CustomEase.create("custom", "M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1"),
            force3D: !0,
            delay: this.$customDelay
        }, i, (() => {
            null !== e.querySelector(".old-content") && void 0 !== e.querySelector(".old-content") || e.insertAdjacentHTML("beforeend", '<div class="old-content">' + this.$oldContent + "</div>")
        })), "reverseTop" == o && TweenMax.staggerTo(n, this.$duration, {
            transform: " rotate3d(-1, 1, -1, -5deg )",
            y: "-150%",
            opacity: 0,
            ease: CustomEase.create("custom", "M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1"),
            force3D: !0,
            delay: this.$customDelay
        }, i), "reverseTopNormal" == o && TweenMax.staggerTo(n, this.$duration, {
            y: "-100%",
            opacity: 0,
            ease: CustomEase.create("custom", "M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1"),
            force3D: !0,
            delay: this.$customDelay
        }, i), "reverseTopNormalHalf" == o && TweenMax.staggerTo(n, this.$duration, {
            y: "-50%",
            opacity: 0,
            ease: CustomEase.create("custom", "M0,0,C0.11,0.494,0.192,0.726,0.318,0.852,0.45,0.984,0.504,1,1,1"),
            force3D: !0,
            delay: this.$customDelay
        }, i)
    }
    resetSplitTextAnimation() {
        this.$el.classList.contains("non-auto-split-text") && (this.$el.classList.remove("split-text-active"), this.$el.innerHTML = "", this.$el.insertAdjacentHTML("beforeend", this.$oldContent))
    }
    resetAll() {
        document.querySelectorAll(".main-container .split-text-active").forEach((t => {
            let e = t.querySelector(".old-content");
            null != e && (e = e.innerHTML, t.innerHTML = "", t.insertAdjacentHTML("beforeend", e))
        }))
    }
}