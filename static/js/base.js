//判断浏览器是否支持HTML5 Canvas
window.onload = function () {
    try {
        //动态创建一个canvas元 ，并获取他2Dcontext。如果出现异常则表示不支持
        document.createElement("canvas").getContext("2d");
        //showError("浏览器不支持HTML5 CANVAS 无法保存图片");
        console.log("浏览器支持HTML5 CANVAS");
    }
    catch (e) {
        showError("浏览器不支持HTML5 CANVAS 无法保存图片");
    }
};

function showError(content){
    $("#error").show(1000);
}

function videoStart() {
    try {
        // Grab elements, create settings, etc.
        var video = document.getElementById("video"),
            videoObj = {"video": true},
            errBack = function (error) {
                console.log("Video capture error: ", error.code);
            };

        // Put video listeners into place
        if (navigator.getUserMedia) { // Standard
            navigator.getUserMedia(videoObj, function (stream) {
                video.src = stream;
                video.play();
            }, errBack);
        } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
            navigator.webkitGetUserMedia(videoObj, function (stream) {
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
        else if (navigator.mozGetUserMedia) { // Firefox-prefixed
            navigator.mozGetUserMedia(videoObj, function (stream) {
                video.src = window.URL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
        return video;
    }catch (e) {
        showError("浏览器不支持HTML5 video 无法拍摄图片");
        return null;
    }
}