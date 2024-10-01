var acAnimated = {
    Plugins: {}
};
acAnimated.Plugins.SplitText = function(e, t) {
    t.hasOwnProperty("words") || (t.words = 1), t.hasOwnProperty("chars") || (t.chars = 1), t.hasOwnProperty("spacing") || (t.spacing = 5), this.searchTextNodes = function(e) {
        var t = [];
        if (null == e || null == e) return t;
        for (var r = 0; r <= e.childNodes.length - 1; r++) {
            var s = e.childNodes[r];
            if ("#text" == s.nodeName) t.push(s);
            else t = t.concat(this.searchTextNodes(s))
        }
        return t
    }, this.createElement = function(e, t) {
        if ("" !== e.trim()) {
            var r = document.createElement("div"),
                s = document.createTextNode(e);
            return r.nodeText = s, r.appendChild(s), r.style.display = "inline-block", r.style.position = "relative", t.parentNode.insertBefore(r, t), r
        }
    }, this.splitCharacters = function(e) {
        var t = e.nodeValue.toString(),
            r = [];
        if ("" != t.trim()) {
            for (var s = 0; s <= t.length - 1; s++) {
                var a = t.substr(s, 1),
                    n = this.createElement(a, e);
                "" != a.trim() && r.push(n)
            }
            e.parentNode.removeChild(e)
        }
        return r
    }, this.splitWords = function(e) {
        for (var t = e.nodeValue.toString().split(" "), r = [], s = 0; s <= t.length - 1; s++) {
            var a = t[s],
                n = this.createElement(a, e);
            "" !== a.trim() && (n.classList.add("word"), r.push(n)), s < t.length - 1 && this.createElement(" ", e)
        }
        return e.parentNode.removeChild(e), r
    }, this.splitTextNodes = function(e) {
        for (var r = {
                words: [],
                chars: []
            }, s = 0; s <= e.length - 1; s++) {
            var a = e[s];
            if (0 == t.words) r.chars = r.chars.concat(this.splitCharacters(a));
            else {
                var n = this.splitWords(a);
                if (1 == t.chars)
                    for (var i = 0; i <= n.length - 1; i++) {
                        word = n[i];
                        var o = this.splitCharacters(word.nodeText);
                        r.chars = r.chars.concat(o), word.chars = o
                    }
                r.words = r.words.concat(n)
            }
        }
        return r
    };
    var r = this.searchTextNodes(e);
    return this.splitTextNodes(r)
};