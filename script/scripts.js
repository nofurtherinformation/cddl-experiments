! function(e, o, l, c) {
    e.fn.circleNav = function(o) {
        var l = e.extend({}, e.fn.circleNav.settings, o);
        return this.each(function() {
            var o = e(this),
                c = e(".circle-nav-toggle"),
                a = e(".circle-nav-panel"),
                n = e(".circle-nav-menu");
            l.hasOverlay && 0 == e(".circle-nav-overlay").length && (e("body").append("<div class='circle-nav-overlay'></div>"), e(".circle-nav-overlay").css({
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                position: "fixed",
                "background-color": l.overlayColor,
                opacity: l.overlayOpacity,
                "z-index": "-1",
                display: "none"
            })), e(".circle-nav-toggle, .circle-nav-overlay").on("click", function() {
                o.stop().toggleClass("circle-nav-open"), c.stop().toggleClass("circle-nav-open"), a.stop().toggleClass("circle-nav-open"), n.stop().toggleClass("circle-nav-open"), e(".circle-nav-overlay").fadeToggle(), e("body").css("overflow") ? e("body, html").css("overflow", "") : e("body, html").css("overflow", "hidden")
            })
        })
    }, e.fn.circleNav.settings = {
        hasOverlay: !0,
        overlayColor: "#fff",
        overlayOpacity: ".0"
    }
}(jQuery, window, document);
$(function() {
    $("#circle-nav-wrapper").circleNav()
});
//# sourceMappingURL=scripts.min.js.map