$(document).ready(function(){
    var video = videoStart();
    $("#video").width = document.body.clientWidth/4;//这句话并没有什么卵用
    if(!video){
        $("#start").disable();
    }
})