// JavaScript Code goes here 
// console.log("Internal JS console message. Hello, class!")
// console.log(document)
// ///console.dir(document)
// //alert("Hello world") // TextBox pop-up

// // window.onload = function(){
// //    alert("Hello, class")
// //}

// // PROMPTS //

// // const student = prompt("What is your Name?")
// // console.log(student)
// /// writes to document, but doesnt work with script
// // document.write(`<p>Hello,${student}!</p>`);

// // modern web dev standard

// const student = prompt("What is your name?");
// const messageElement = document.createElement("p"); // Creating a new P element
// messageElement.textContent = `Hello, ${student}`; // sets the text content of that
// document.body.appendChild(messageElement); // append the new element to the body
// // This  ensure the content the content is dynamically added 

// document.getElementById("myH1").innerHTML = "I love JavaScript";
// document.getElementById("myParagraph").textContent = "Hello"

// // Styling page elements
document.body.style.color = "green";
document.body.style.backgroundColor = "black";
document.body.style.fontSize = "2em"

// EVENT LISTERNERS //
document.getElementById("myH1").addEventListener("click", function() {
    document.getElementById("myH1").style.color = "red"
})

document.getElementById("myH1").addEventListener("mouseover", function() {
    document.getElementById("myH1").style.color = "orange"
})
document.getElementById("myParagraph").addEventListener("dblclick", function() {
    document.getElementById("myParagraph").style.color = "white"
})

document.getElementById("myButton").addEventListener("click", function() {
    document.body.style.backgroundColor = "black"
})
document.getElementById("myButton2").addEventListener("click", function() {
    document.body.style.backgroundColor = "white"
})

// Difference Between  .innerHTML and .textContent //
console.log(document.getElementById('myParagraph2').innerHTML) // Outputs <b>text</b>
console.log(document.getElementById('myParagraph2').textContent) // Outputs text