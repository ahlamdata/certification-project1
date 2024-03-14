console.log('Starting point for Certification Project I')

let quoteManager = [
    {id:1, name:"Inspirational Quotes", quotes:[{iq:1, quote:"The only way to do great work is to love what you do.", author:"Steve Jobs", category:"inspirational"}, 
                                                {iq:2, quote:"Believe you can and you're halfway there.", author:"Theodore Roosevelt", category:"inspirational"}
    ]},
    {id:2, name:"Health and lifestyle Quotes", quotes:[{iq:1, quote:"If you want to live a happy life, tie it to a goal, not to people or things.", 
                                                                        author:"Albert Einstein", category:"health and lifesyle"},
                                                        {iq:2, quote:"Sufficient sleep, exercise, healthy food, friendship, and peace of mind are necessities, not luxuries.", author:"Mark Halperin", 
                                                        category:"health and lifesyle"},
                                                        {iq:3, quote:"Take care of your body. Its the only place you have to live.", author:"Jim Rohn", category:"health and lifesyle"}

    ]},
    {id:3, name:"Fate Quotes", quotes:[{iq:1, quote:"Allah does not burden a soul beyond that it can bear", author:"Quran 2:286", category:"fate"},
                                        {iq:2, quote:"And whoever relies upon Allah, then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a decreed extent", 
                                        author:"Quran 65:3", category:"fate"},
                                        {iq:3, quote:"He who does not show mercy to others will not be shown mercy", author:"Prophet Muhammad, peace be upon him", category:"fate"}

    ]},
    {id:4, name:"Influence Quotes", quotes:[{iq:1, quote:"Example is not the main thing in influencing others. It is the only thing", author:"Albert Schweitzer", category:"influence"},
                                        {iq:2, quote:"Children are more influenced by sermons you act than by sermons you preach.", author:"David McKay", category:"influence"},
                                        {iq:3, quote:"If you try to influence everyone, you wont influence anyone.", author:"Josh Steimle", category:"influence"}
    ]},
    {id:5, name:"Tech Quotes", quotes:[{iq:1, quote:"The technology you use impresses no one. The experience you create with it is everything.", author:"Sean Gerety", category:"tech"},
                                        {iq:2, quote:"The advance of technology is based on making it fit in so that you dont really even notice it, so its part of everyday life.", author:"Bill Gates",
                                         category:"tech"},
                                        {iq:3, quote:"Technology is best when it brings people together.", author:"Matt Mullenweg", category:"tech"}
]}
    
]

console.log("Welcome to Quote Manager")
console.log(quoteManager);

const prompt = require('prompt-sync')();
let userInput = prompt("Enter your prefered category of quotes (inspirational, health and lifestyle, fate, influence or tech): ");

if (userInput == "inspirational".toLowerCase()){
    console.log(quoteManager[0]);
}else if(userInput == "health and lifestyle".toLowerCase()){
    console.log(quoteManager[1]);
}else if(userInput == "fate".toLowerCase()){
    console.log(quoteManager[2]);
}else if(userInput == "influence".toLowerCase()){
    console.log(quoteManager[3])
    console.log(quoteManager[4]);
}else if (userInput == "tech".toLowerCase()){
    console.log(quoteManager)
}











// const fs = require("fs"); //declaring fs
// // Write a function to reshuffle the positions of the quotes(elements) in the list.
// // Conditional Logic #change these repetitive codes into a function or use the :
// console.log(mainquote)


  // You can run this file either with node index.js, or npm run start in the terminal
// Feel free to make use of the utils folder, so extracting some code from here to js files you create there