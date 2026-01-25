// const voter = {
//     name : "Kirit",
//     age : 21,
//     hasVoterCard : true
// };
// let message = ""
// if(voter.age>=18 && voter.hasVoterCard ){
//     message = "You Can Vote!"
// }
// else if(age<18){
//     message = "You are a kid."
// }
// else{
//      message = "Make your voter card first."
// }
// console.log(message);

// let result = (voter.age>=18 && voter.hasVoterCard ) ? "You Can Vote!" : "Cannot Vote";
// console.log(result);

// const marks = {
//     harry: 90,
//     rohan: 70,
//     aakash: 7
// };

// for (let key in marks){
//     console.log(`The Marks of ${key} are ${marks[key]}`)
// }

// function myFunc(a,b,c,d,e) {
//     // const sum = a+b+c+d+e/5;
//     return (a+b+c+d+e)/5;
// }
// console.log(myFunc(10, 20, 30, 40, 50));

// const Average = (a,b,c,d,e) =>{
//     let sum = (a+b+c+d+e)/5;
//     return sum;
// }
// console.log(Average(10, 20, 30, 40, 50));

// let Str = "Please give Rs 1000";
//     // const new = Str.slice(15,19)
//      console.log(Str.slice(15,19));

// const songs = ["Song A", "Song B", "Song C"]
// songs.push("Song D")
// console.log(songs)
// console.log(songs.length);
// console.log(songs[1]);

// const songs1 = ["Kesariya", "Pasoori", "Apna Bana Le"];

// // forEach ek function leta hai jo har element (song) par chalega
// songs1.forEach((song) => {
//     console.log(`Playing: ${song}`)
// });

// const playBtn = document.getElementById("masterPlay");
// // playBtn.innerText = "Music Paused ⏸️";
// playBtn.addEventListener("click",()=>{
// if(playBtn.innerText === "Play Music 🎵"){
//     playBtn.innerText = "Music Paused ⏸️";
//     console.log("Music Is Playing...");
// }
// else{
//     playBtn.innerText = "Play Music 🎵"
//     console.log("Music Stopped.");
// }
// });
// // console.log(playBtn);

// console.log("Searching for Arijit Singh:");
// setTimeout(() => {
//     console.log("Song Found: Kesariya! 🎵")  
// },2000);

// // console.log("Task 2: UI Load ho raha hai...");

// let songPromise = new Promise((resolve, reject) => {
//     console.log("Status: Gaana dhoond rahe hain... (Pending)");
//     // 2 second ka delay (Dosa ban raha hai)
//     setTimeout(() => {
//         // Step 2: Promise pura karna (resolve)
//         resolve("Success: Gaana mil gaya! 🎵");

//         // Agar fail karna ho toh: reject("Error: Net nahi chal raha");
//     }, 2000);

// });
// // Step 3: Promise use karna (.then)
// // Jab promise resolve hoga, tabhi .then chalega
// songPromise.then((message) => {
//     console.log(message);
// });

// function loadSong() {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Kesariya Tera Ishq Hai Piya... 🎵");
//     },2000);
// });
// }

// // Async
// async function playMusic() {
//     console.log("Step 1: Gaana dhoond rahe hain...");
//     let song = await loadSong();
//     // Yeh line tabhi chalegi jab upar wali line khatam hogi
//     console.log("Step 2: Mil gaya!");
//     console.log("Now Playing: " + song);

// }
// playMusic();

// class Song {
//     constructor(title, artist, duration) {
//         this.title = title;
//         this.artist = artist;
//         this.duration = duration;
//     }
//     play() {
//         console.log(`Playing: ${this.title} by ${this.artist} 🎵`);
//     }
// }
//     let song1 = new Song("Kesariya", "Arijit Singh", "3:20");
//     let song2 = new Song("Pasoori", "Ali Sethi", "4:10");

// song1.play();
// song2.play();

let myFavs = ["Apna Bana Le", "Pasoori"];

// 2. Spread Operator: Purane gaane copy kiye aur naye jode
let allSongs = [...myFavs, "Kesariya", "Jhoome Jo Pathaan"];

console.log("Full Playlist:", allSongs);

// 3. Destructuring: Pehle do gaane nikale
let [song1, song2] = allSongs;

console.log(`Top 2 Songs: ${song1} and ${song2}`);

