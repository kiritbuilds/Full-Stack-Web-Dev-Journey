const fun1 = () =>{
    console.log("I am A Func Function");
}

const callFunctionAfterGreet = (thefunction) => {
    console.log("Good Morning");
    thefunction();
}

callFunctionAfterGreet(fun1);
