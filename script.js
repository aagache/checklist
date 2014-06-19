jQuery(function() {
    $("#main input[type='checkbox']").on("click", function() {
        ($(this).is(":checked") ? color() : uncolor(this));
        updateStatus();
    });

    function color() {
        $("#main input:checked + label").addClass("checked").removeClass("unchecked");
    }

    function uncolor(elem) {
        var id = $(elem).attr("id");
        $("label[for='" + id + "']").addClass("unchecked");
    }

    function updateStatus() {
        var n = $("#main input:checked").length,
            allChkBox = $("#main input[type='checkbox']").length,
            progress = n / allChkBox * 100;
        $("#main #fill").animate({
            "width": progress + "%"
        }, 300);
    }
});