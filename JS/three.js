function myFunction(event) {
    var x = event.keyCode;               // Get the Unicode value
    var y = String.fromCharCode(x);      // Convert the value into a character
    document.getElementById("demo").innerHTML = "Number: " + x + " = Character: " + y;
}	
