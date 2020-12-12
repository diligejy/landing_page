$(document).ready(function () {
    $("nav li").click(function () {
        $("container").css("max-width", "100%")
        var id = $(this).attr("data-rol");
        $("nav li").removeClass("on");
        $(this).addClass("on");
        $(".content").removeClass("prev this next");
        //  클릭 시 가지고 있던 클래스를 모두 지움
        $("#" + id).addClass("this").prevAll().addClass("prev");
        // 클릭한 메뉴와 매칭되는 id에 this 클래스를 지정하고 그 앞의 모든 <section> 태그는 .prev 클래스를 지정
        $("#" + id).nextAll().addClass("next");
        // 클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.
    });
});