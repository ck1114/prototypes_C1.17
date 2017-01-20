$(document).ready(function () {
    $("#list").on("click", "button", function(){
        console.log($(this).text());
    })
    var li = $("<li>");
    var button = $("<button>",{
        style: "margin: 10px",
        text: "Delegated Button #5",
    });
    $(li).append(button);
    $("#list").append(li);
})


// Answer the questions here:

// - What do you think is going to happen?
// It will display the text "Button #5"
// - What happened?
// The text wasn't displayed
// - Why?
// I don't know!!!!

//========== Write your code below ===========//

