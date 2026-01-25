const func1 = async() =>{
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve("Three Second...");
        },3000);
    });
};

const main = async () =>{
    console.log("Hey I Am This.");
    const result = await func1();
    console.log(result);
    console.log("Hey Program Finished");
};

main();