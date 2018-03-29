$(document).ready(function() {

    //show all P elements
    $("#showBt").click(function(){
        $("p").show();
    });

    //1.1) select all P elements
        // $("p")
    $("#allP").click(function(){
        $("p").hide();
    });
    //1.2) select 1st P element
    $("#firstP").click(function(){
        $("p:first").hide();
    });
    //1.3) select all P elements with id="intro"
    $("#introBt").click(function(){
        $("#intro").hide();
    });

    //2.1) change the text in paragraph element
    
    //2.2) append to paragraph element

    //2.3) change paragraph element’s textcolor to red



});