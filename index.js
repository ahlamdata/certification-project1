console.log('Starting point for Certification Project I')

let quoteManager = [
    {id:0, name:"Inspirational Quotes", quotes:[{quote:"The only way to do great work is to love what you do.", author:"Steve Jobs", category:"inspirational"}, 
                                                {quote:"Believe you can and you're halfway there.", author:"Theodore Roosevelt", category:"inspirational"}
    ]},
    {id:1, name:"Health and lifestyle Quotes", quotes:[{quote:"If you want to live a happy life, tie it to a goal, not to people or things.", 
                                                                        author:"Albert Einstein", category:"health and lifesyle"},
                                                        {quote:"Sufficient sleep, exercise, healthy food, friendship, and peace of mind are necessities, not luxuries.", author:"Mark Halperin", 
                                                        category:"health and lifesyle"},
                                                        {quote:"Take care of your body. Its the only place you have to live.", author:"Jim Rohn", category:"health and lifesyle"}

    ]},
    {id:2, name:"Fate Quotes", quotes:[{quote:"Allah does not burden a soul beyond that it can bear", author:"Quran 2:286", category:"fate"},
                                        {quote:"And whoever relies upon Allah, then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a decreed extent", 
                                        author:"Quran 65:3", category:"fate"},
                                        {quote:"He who does not show mercy to others will not be shown mercy", author:"Prophet Muhammad, peace be upon him", category:"fate"}

    ]},
    {id:3, name:"Influence Quotes", quotes:[{quote:"Example is not the main thing in influencing others. It is the only thing", author:"Albert Schweitzer", category:"influence"},
                                        {quote:"Children are more influenced by sermons you act than by sermons you preach.", author:"David McKay", category:"influence"},
                                        {quote:"If you try to influence everyone, you wont influence anyone.", author:"Josh Steimle", category:"influence"}
    ]},
    {id:4, name:"Tech Quotes", quotes:[{quote:"The technology you use impresses no one. The experience you create with it is everything.", author:"Sean Gerety", category:"tech"},
                                        {quote:"The advance of technology is based on making it fit in so that you dont really even notice it, so its part of everyday life.", author:"Bill Gates",
                                         category:"tech"},
                                        {quote:"Technology is best when it brings people together.", author:"Matt Mullenweg", category:"tech"}
]}   
]


// Declaring key variables
let iq = Number;
let quote = "";
let author = ""
let category = ""
id = function() {
    for (let i=0; i<quoteManager.length; i++){
        id = quoteManager[i];
    }; //id number, define a for loop for id and make it a function
} 
let name = "string"   //prefer quotelist name
let quotes = [{quote, author,category},
              {quote, author,category},
              {quote, author,category}] // details of quotes(quote, author, category)

// create quoteList and quotes
quoteManager.push({
    id, 
    name, 
    quotes
});



// ***deleting quoteList***
let deleteQuoteList= function(id){
    delete quoteManager[id]
} 

// ***deleting quotes***















const prompt = require('prompt-sync')();
let viewQuoteManager = true;
while(viewQuoteManager){
    console.log("Welcome to Quote Manager")
    console.log(quoteManager);
    let userInput = prompt("Enter your prefered category of quotes (inspirational, health and lifestyle, fate, influence or tech): ");
    if (userInput == "inspirational".toLowerCase()){
    console.log(quoteManager[0]);
    }else if(userInput == "health and lifestyle".toLowerCase()){
    console.log(quoteManager[1]);
    }else if(userInput == "fate".toLowerCase()){
    console.log(quoteManager[2]);
    }else if(userInput == "influence".toLowerCase()){
    console.log(quoteManager[3])
    
    }else if (userInput == "tech".toLowerCase()){
    console.log(quoteManager[4]);
    }


    // // Adding/editing/deleting quoteList and quotes
    // newUserInput = prompt("Would you like to add to the quoteList, yes/no: ")
    // name = prompt("How would you name this set of quotes in the quote list?: "); // enter the name of the quote to be added in the quotelist
    // quote = prompt("Enter your quote here: "); //prompt for adding quote to the existing quotes
    // author = prompt("Who said this beautiful quote (first and last names of author of the quote)?: "); //author of the quote added
    // category = prompt("How would you classify this quote?: "); // category of quote added


    const quitQuoteManager = prompt("Do you want to quit viewing QuoteManager or continue viewing more quotes (enter q to quit/or c to continue)?: ").toLowerCase();
    if (quitQuoteManager === "q") {
        console.log("Thanks for viewing and using QuoteManager. Hope you liked the quotes!!!");
        viewQuoteManager = false;
    }else if (quitQuoteManager !== "q" && quitQuoteManager !== "c"){
        console.log("Please enter q or c. Thank you")
    }
}










