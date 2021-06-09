var inputTextEl = $("#input-text");
var questionEl = $("#more-info-page-title");
var formWrapperEl = $("#form-holder");
var questionsArr = ["What is your name?", "What is your address / city?", "What is your maximum travel distance in miles?", "What is your experience level?", "What day would you like to go biking?"];
var trackerObj = { name: "", address: "", range: "", expertise: "", date: "" };

var submitHandler = function(string) {
    if (inputTextEl.attr("placeholder") === "name") {
        trackerObj.name = string;
    }
    if (inputTextEl.attr("placeholder") === "address") {
        trackerObj.address = string;
    }
    if (inputTextEl.attr("placeholder") === "range") {
        trackerObj.range = string;
    }
    if (inputTextEl.attr("placeholder") === "expertise") {
        trackerObj.expertise = string;
    }
    if (inputTextEl.attr("placeholder") === "date") {
        trackerObj.date = string;
    }
}


function myFunction() {


    for (i = 0; i < questionsArr.length; i++) {

    }


}
myFunction()











// var reset = function() {
//     inputTextEl.val("");
//     if (inputTextEl.attr("placeholder") === "name") {
//         questionEl.text(questionsArr[1]);
//         inputTextEl.attr("placeholder", "address");
//     } else if (inputTextEl.attr("placeholder") === "address") {
//         questionEl.text(questionsArr[2])
//         inputTextEl.attr("placeholder", "range");
//     } else if (inputTextEl.attr("placeholder") === "range") {
//         questionEl.text(questionsArr[3])
//         inputTextEl.detach();
//         var selectInput = $("<select name='expertise' class='col-12 mb-3 fs-3 form-select'>");
//         selectInput.html("<option selected>Beginner</option><option>Intermediate</option><option>Advanced</option>");
//         formWrapperEl.append(selectInput);
//     } else if (selectInput.attr("name") === "expertise") {
//         questionEl.text(questionsArr[4])
//         selectInput.detach();
//         formWrapperEl.append(inputTextEl);
//     } else if (inputTextEl.attr("placeholder") === "date") {
//         questionEl.text(questionsArr[5]);
//         inputTextEl.attr("placeholder", "address");
//     }
// }

// $("#next-question").on("click", function() {
//     submitHandler(inputTextEl.val());
//     reset();
//     console.log(trackerObj);
// });