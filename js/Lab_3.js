function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

$(document).ready(function (){
    $(".mainImg").on("click",function(){
        let index = getRandomIntInclusive(1,9);
        let newSrc = "img/" + index + ".jpg";
        $(this).attr("src",newSrc);
    });
    $("#inputHeight").on("input",function () {
        let newHeight = $(this).val();
        $(".mainImg").css("height",newHeight);
    });
    $("#inputWidth").on("input",function () {
        let newWidth = $(this).val();
        $(".mainImg").css("width",newWidth);
    });
    $("#inputBorder").on("input",function () {
        let newBorder = $(this).val() + "px solid red";
        $(".mainImg").css("border",newBorder);
    });
    $("#btnChangeParam").on("click",function () {
        let newAlt = $("#inputAlt").val();
        if(newAlt == ""){
            $(".mainImg").attr("alt","Image not found");
        }
        else {
            $(".mainImg").attr("alt",newAlt);
        }

    });
    $("#resBtnForm").on("click",function () {
        $(".mainImg").css({"height":"200px","width":"200px","border": "1px solid red"});
    })
});
