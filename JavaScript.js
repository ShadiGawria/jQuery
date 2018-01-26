//Array contain the images
let n = [];

let numberOfBulbs;
//function that add images depends on the number of lampor the user chose
function addImage() {
    //clean the figure tag
    $("#imgs").empty();
    numberOfBulbs = $('#textInput').val();
    for (var i = 1; i <= numberOfBulbs; i++) {

        n[i] = `img` + i;
        setImageSource(n[i], 'bulb-off.jpg');
    }
    //turn on the first lamp
    $("#img1").attr("src", "bulb-on.jpg");
}
//function helps the last function to fill the figure tag with the images id and source
function setImageSource(imageId, imageSrc) {
    $("#imgs").append('<img id= ' + imageId + ' src=' + imageSrc + ' />');

}
//number of bulbs the user chose
numberOfBulbs = $('#textInput').val();

//decide the bulbOff number
let bulbOff = 1;

//decide the bulbOn number
let bulbOn = bulbOff + 1;

//function turn on and off the bulbs by using the turnONButton button
function trunBulb() {
    if (numberOfBulbs < bulbOn) {
        $(`#img` + bulbOff).attr("src", "bulb-off.jpg");
        $(`#img` + bulbOn).attr("src", "bulb-on.jpg");
        $("#currentBulb").html(`Current bulb:` + bulbOn);
        bulbOn = 1;
        bulbOff = 0;
    }
    if (numberOfBulbs >= bulbOn) {
        $(`#img` + bulbOff).attr("src", "bulb-off.jpg");
        $(`#img` + bulbOn).attr("src", "bulb-on.jpg");
        $("#currentBulb").html(`Current bulb:` + bulbOn);
        bulbOff++
        bulbOn++

    }

}
//the range value
function updateTextInput(val) {
    $('#textInput').attr("value", val);
}
//button that turn on and off the bulbs 
$("#turnONButton").click(trunBulb);
//button that shows the bulbs
$("#numberOfBulbsButton").click(addImage);


