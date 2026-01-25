let button = document.getElementById("btn");
button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b>Yay You are clicked</b>Enjoy Your Clicked!"
});

button.addEventListener("contextmenu", () => {
    alert("Dont hack us by Right Click Please")
});

button.addEventListener("auxclick", () => {
    alert("anu button oress other than left")
});

// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// button.addEventListener("mousedown",()=>{
//     alert("down button for mouse") 
// });

document.addEventListener("keydown", (e) => {
    console.log(e, e.key, e.keyCode)
});

// (e) => { ... }: This is an arrow function (the event handler) that runs automatically whenever the keydown event happens.

//     e: This variable represents the event object.It contains all the information about the event that just occurred(like which key was pressed, if Shift was held down, etc.).