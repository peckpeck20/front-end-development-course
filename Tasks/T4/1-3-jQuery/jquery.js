$(document).ready(function() {

    //show all P elements
    $("#showBt").click(function(){
        $("p").show();
    });



    //1.1) select all P elements
     //$("p")
    $("#allP").click(function(){
        $("p").hide();
    });

    //1.2) select 1st P element
     // $("p:first")


    //1.3) select all P elements with id="intro"
    //$("#intro")
    $("#introBt").click(function(){
        $("#intro").hide();
    });



    //2.1) change the text in paragraph element
    $("#changeBt").click(function(){
        $("#changeTxt").text("text has been changed");
    });
    //2.2) append to paragraph element
    $("#appendBt").click(function(){
        $("#changeTxt").append("APPENDED!!");
    });
    //2.3) change paragraph element’s textcolor to red
    $("#redBt").click(function(){
        $("#changeTxt").css({
            "color": "red"
        });
    });


    //a.) How you add listener to the first <p>-elements
    //which hides the element when you click it.
    $("#firstP").click(function(){
        $("p:first").hide();
    }); 

// b.)listener to the all <p>-elements which hides them when you double click these.
    $("p").dblclick(function(){
        $("p").hide();
    });
// c.)listener to button which hides all <p>-elements and change button text to
// Pressed
    $("#hideBt").click(function(){
        $("p").hide();
        $("#hideBt").css({
            "color": "red"
        });
        $("#hideBt").text("Pressed");
    });

// d.)listener to button which opens alert window and show the text from the first <p>-
// element in it.
    $("#alertBt").click(function(){
        alert("P says" + $("p:first").text());
    });

});