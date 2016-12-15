$(function(){
    $(window).resize(infinite);
    function infinite() {
        var htmlWidth = $('html').width();
        if (htmlWidth >= 750) {
            $("html").css({
                "font-size" : "28.13px"
            });
        } else {
            $("html").css({
                "font-size" :  28.13 / 750 * htmlWidth + "px"
            });
        }
    }infinite();
    // 水平垂直居中
    function center(a) {
        var mleft = a.width();
        var mtop = a.height();
        a.css({
            "position":"absolute",
            "top":"50%",
            "left":"50%",
            "margin-top":-mtop/2,
            "margin-left":-mleft/2
        });
        a.parent().css({"position":"relative"});
    }
    center($(".Horizontalverticalcenter"));
    center($(".Horizontalverticalcentert"));
    center($(".Horizontalverticalcenterh"));
    center($(".Horizontalverticalcenterf"));
    center($(".Horizontalverticalcenterfive"));
    center($(".indexf"));
    center($(".Horiz"));
    center($(".Hori"));
    center($(".Hor"));
    var a = true;
    $("#navw").click(function(event) {
        if (a == true) {
            $("#nav").css({"display":"block"});
            a = false;
        } else {
             $("#nav").css({"display":"none"});
            a = true;
        }
    });
    $(".active").siblings().click(function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });
    $(".active").click(function(event) {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
