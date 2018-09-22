
// Before i do anything, look at the dynamic elements page and look at the for loop and understand how everything is going
// The homework wants us to do it a little differently
// when i do onclick, i'll get a bug 
// when i do my styling, theres stuff i have to add in, all going to be in a single row going down a page, need to be 3 across instead

// ==================================================================================================================================

// Establish a connection to Giphy's API
function getDataInfo() {
    var car = $(this).attr("data-car");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        car + "&api_key=tqeu6vP4LYNXMnq006ADVtdC6HG8l78w&limit=10";

    // call the function of data info in an onclick

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(results)

        // for loop looping through results, object being pulled through the query
        for (var i = 0; i < results.length; i++) {

            // 10 times it will create / assign the following

            // jQuery div to store in a variable for the cars
            var carDiv = $("<div>");

            // Paragraph tag stored in jQuery
            var p = $("<p>");

            // Inner text of the paragraph set to the rating of the gif in results
            p.text(results[i].rating);

            // Image tag stored in the carImage variable
            var carImage = $("<img>")

            // Image's source set to results[i]'s fixed_height_url
            carImage.attr("src", results[i].images.fixed_height.url);

            // Append the p variable to the carDiv variable
            carDiv.append(p);

            // Append the carImage variable to the animalDiv variable.
            carDiv.append(carImage);

            // // Prepend the carDiv variable to the gifContainer element
            $("#gifContainer").prepend(carDiv);

            // Creating a div to hold the car gifs
            var gifDiv = $("<div class='car'>");

            gifDiv.append('<p>' + response.data + '</p>')

            // Creates a variable that digs into the response object, finds the original image URL
             var imageUrl = response.data.image_original_url;

            // Gives carImage variable the attribute imageURL as it's source
            carImage.attr("src", imageUrl);
            carImage.attr("alt", "car image");

            // Attahes each image that pops up to the top/before the previous image
            $("#gifContainer").prepend(carImage);

            // // Connect each button to it's respected gif link
            $("#gifContainer").append(carDiv);

        }
    });
}

// ==================================================================================================================================

// Make an array for all the cars.
var carArray = [
    "Ferrari",
    "Lamborghini",
    "Porsche",
    "Bugatti",
    "Tesla",
    "Pagani",
    "Acura",
    "Lotus",
    "Lexus",
    "BMW"
]


console.log(carArray);

// ==================================================================================================================================


// Function that loads the buttons
function renderButtons() {

    // Necessary for deleting the buttons prior to adding new buttons
    $(".carButtons").empty();

    // For loop to run through every item in carArray
    for (var i = 0; i < carArray.length; i++) {

        // Append a string from the array to the buttons, inject HTML
        var carButton = $('<button>');

        carButton.attr('data-car', carArray[i]);
        carButton.text(carArray[i]);
        $(".carButtons").append(carButton);

    }

    // Give each button a class
    $("button").attr("class", "carButton");
}

$("#addCarButton").on("click", function(event) {
    // Prevents page from reloading
    event.preventDefault();

        // This line grabs the input from my textbox
        var carInput = $("#car-input").val().trim();

        // Adds cars from the textbox to our array
        carArray.push(carInput);

        $(carInput).append(".carButtons");

    renderButtons();
})

renderButtons();

// ==================================================================================================================================

// Link each button click to a specific keyword in the giphy link
    // Make a variable for each word, to then link into the giphy link
    // Array possibly


$(document).on('click', '.carButton', getDataInfo)
// ==================================================================================================================================

