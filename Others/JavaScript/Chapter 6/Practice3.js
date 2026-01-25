let colour = prompt("Enter Background Color:");
// while(colour){
//     document.body.style.backgroundColor = "rgb";
// }
if(colour){
    document.body.style.backgroundColor = colour;
}else{
    alert("You did not enter a color.");
}