var canvas, context, video;
var photo_timer;
$(document).ready(function () {
    $("#environment").width(window.screen.availWidth);
    $("#environment").height(window.screen.availHeight);
    $("#light").width(Math.floor(window.screen.availWidth / 2));
    $("#light").height(Math.floor(window.screen.availHeight / 2));
    video = videoStart();
    canvas = $("#canvas")[0];
    context = canvas.getContext("2d");
    //$('#myModal').on('shown.bs.modal', function () {});
    $("#sure-button").click(function(){
        $("#get-permition").hide(500);
        setTimeout(function(){
            $("#light").show();
            photo_timer = setInterval('takePhoto()', 500);
        },500);
    });
})

var step = 0;
var top_position = [0, 0, 1, 1];
var left_position = [0, 1, 1, 0];

function takePhoto() {
    step++;
    if (step > 4) {
        clearTimeout(photo_timer);
        $("#environment").hide(1000);
        $("body").css("overflow","visible");
        return;
    }
    context.drawImage(video, 0, 0, 640, 480);

    var col = $("<div class='col-md-6'>");
    var image_unit = $("<div class='thumbnail'>");
    var image_tag = $("<img>");
    image_tag.attr("src", canvas.toDataURL("image/jpeg"));
    var download_div = $("<div class='caption'>");
    var download_button = $("<a class='btn btn-primary'>下载</a>");
    download_button.attr("role", "button");
    download_button.attr("download", step + ".jpg");
    download_button.attr("href", canvas.toDataURL("image/jpeg"));

    //组成图片模块
    col.append(image_unit);
    image_unit.append(image_tag);
    image_unit.append(download_div);
    download_div.append(download_button);
    $("#images-continer .row").append(col);

    $("#light").css("top", Math.floor(window.screen.availHeight / 2) * top_position[step]);
    $("#light").css("left", Math.floor(window.screen.availWidth / 2) * left_position[step]);
}