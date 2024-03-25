console.log('Starting point for Certification Project I')
const prompt = require('prompt-sync')();
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


// // #######################################################################################
// //QUOTE ZONE:
// // ****ADDING A QUOTE TO QUOTES****
let moreQuotes = function (){
    let quote = prompt("Enter the quote: "); //this takes the quote
    let author = prompt("Enter the author: "); //this takes the author of the quote
    let category = prompt("Enter the category: "); //this takes the category
    return { quote, author, category };
}

let newQuotes = [] //initializing an empty array to accept the new quotes




// ****DELETING A QUOTE FROM QUOTES****
// reduce function to reduce the quotes array of objects into a single object:
const newQuotesObject = quoteManager.reduce((mergequotes, manager) => {
    manager.quotes.forEach(eachquote => {
        mergequotes[eachquote.author] = {
            quote: eachquote.quote,
            category: eachquote.category
        };
    });
    return mergequotes;
}, {});
 let deleteQuote = function(){
    let authorName = prompt("Enter the name of the author you will like to delete: ")
    delete newQuotesObject[authorName];

 }


// ****UPDATING A QUOTE CATEGORY FROM QUOTES****
let updateQuote = function(){
    let updateCategory = prompt("How would you categorize this quote?");
    let keys = Object.keys(newQuotesObject);
    for (let i = 0; i < keys.length; i++) {
    let author = keys[i];
    if (author === authorName) {
        newQuotesObject[author].category = updateCategory;
        break; // 
    }
}
}



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// QUOTE LIST ZONE:
// ***updating QuoteList***
let updateQuoteArray = function(){
    let newName = prompt("Enter your prefered name: "); //user will enter their prefered name to change the existing name
    let selectedId = Number(prompt("Enter the id number(0-4) of the quote name you wish to change: "))// let user enter the id number they want to delete from
    quoteManager.forEach(quoteList =>{
        if (quoteList.id === selectedId){
            quoteList.name = newName;
    } 
})
}

// // ***deleting QuoteList***
let deleteQuoteList = function(id) {
    id = prompt("Enter the id number of the quoteList you wish to delete (0-4): ")
    if (id >= 0 && id < quoteManager.length) { // Check if the id is within the valid range
        quoteManager.splice(id, 1); // Remove 1 element at index id
    } else {
        console.log("Invalid id specified."); // reminds the user to enter correct id
    }
}

// // ***Creating QuoteList***
let createQuoteList = function(){
    let id = quoteManager.length + 1;
    quoteManager.push({
        id,
        name: "New Set of Quotes", 
        quotes: newQuotes // Add the new quotes to the quotes property
    });
}



// ****DISPLAYING SELECTED QUOTE**** //remember to rewrite this code efficiently after the code test
let display = function(){
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
}


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let viewQuoteManager = true;
while(viewQuoteManager){
    // displaying quoteList and individual quotes
    console.log("Welcome to Quote Manager")
    console.log(quoteManager); 
    display();

    console.log("Do you want to explore more of QuoteManager, how about adding/updating/deleting an entire quote you probably do not like?: ")
    // Adding more quotes
    let yesAddQuote = prompt("Do you want to add a quote, yes/no?: ")
    if (yesAddQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesAddQuote === "yes"){
        newQuotes; //Prompt the user for new quotes and add them to the newQuotes array
        for (let i = 0; i < 2; i++) {
            newQuotes.push(moreQuotes())
        }
        console.log(newQuotes);
    }

    // updating quotes
    let yesUpdateQuote = prompt("Do you want to update a quote, yes/no?: ")
    if (yesUpdateQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesUpdateQuote === "yes"){
        updateQuote();
    }

    // deleting quotes
    let yesdeleteQuote = prompt("Do you want to delete a quote, yes/no?: ")
    if (yesdeleteQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesdeleteQuote === "yes"){
        deleteQuote();
    }



    // ##########################################################################################################################
      // creating quoteList
    console.log();
    console.log("You have the option to create additional quoteList and add your own quotes. Let's say its your turn.");
    let newUserInput = prompt("Would you like to add to the quoteList, yes/no: ") //#its your turn
    if (newUserInput === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and add to quoteList if you change your mind.")
    }else if (newUserInput === "yes"){
        createQuoteList();
        console.log(quoteManager);
    }

    // updating quoteList
    console.log("You have the option to update any name in the quoteList.")
    let userInputUpdate = prompt("Would you like to give it a try, yes/no?: ")
    if (userInputUpdate === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (userInputUpdate === "yes"){
        updateQuoteArray();
    }

    // deleting quoteList
    console.log("You have the option to delete from the quoteList.")
    let userInputdelete = prompt("Would you like to give it a try, yes/no?: ")
    if (userInputdelete === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (userInputUpdate === "yes"){
        deleteQuoteList(id);
    }

    const quitQuoteManager = prompt("Do you want to quit viewing QuoteManager or continue viewing more quotes (enter q to quit/or c to continue)?: ").toLowerCase();
    if (quitQuoteManager === "q") {
        console.log("Thanks for viewing and using QuoteManager. Hope you liked the quotes!!!");
        viewQuoteManager = false;
    }else if (quitQuoteManager !== "q" && quitQuoteManager !== "c"){
        console.log("Please enter q or c. Thank you")
    }
}

const fs = require('fs');


// Convert new array to JSON string
let jsonData = JSON.stringify(newQuotes, null, 2); 

// Write JSON string to a file
fs.writeFile('newQuotes.json', jsonData, 'utf8', (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    } else {
        console.log('Data has been saved to newQuotes.json');
    }
});


// Load JSON file
fs.readFile('newQuotes.json', 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
    } else {
        try {
            // Parse JSON data into a JavaScript object
            const quoteManager = JSON.parse(data);
            console.log('Data loaded successfully:', newQuotes);
        } catch (parseError) {
            console.error('An error occurred while parsing JSON:', parseError);
        }
    }
});










