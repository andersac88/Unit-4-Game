$(document).ready(function () {

    var wins = 0;
    var losses = 0;
    var targetNumber = Math.floor(Math.random() * (121 - 19) + 19);
    console.log(targetNumber)
    var counter = 0;

 
    $("#number-to-guess").text(targetNumber);

    // We begin by expanding our array to include four options.
    var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var imageOptions = ["assests/images/Island.png", "assests/images/Forest.png", "assests/images/Mountain.png", "assests/images/Swamp.png", "assests/images/Plains.png"];

    // Next we create a for loop to create crystals for every numberOption.
    for (var i = 0; i < 5; i++) {

        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");

        // First each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image col-sm-2");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", imageOptions[i]);

        // Each imageCrystal will be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[Math.floor(Math.random() * numberOptions.length)]);

        // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        $(".crystals").append(imageCrystal);
    }

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(".crystal-image").on("click", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.

    

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            counter = 0;
        
      
        }

        else if (counter >= targetNumber) {
            alert("You lose!!");
            losses++;
            counter = 0;
            targetNumber = Math.floor(Math.random() * (121 - 19) + 19);
            $("#number-to-guess").text(targetNumber);
        }

        $("#wins-total").text(wins);
        $("#loss-total").text(losses);
        $("#current-total").text(counter);
        
        
    })
});

// $("#div1").remove();
