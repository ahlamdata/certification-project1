console.log('Starting point for Certification Project I')
const prompt = require('prompt-sync')();
let quoteManager = [
    {id:0, name:"Inspirational Quotes", quotes:[{id:0, quote:"The only way to do great work is to love what you do.", author:"Steve Jobs", category:"inspirational"}, 
                                                {id:1, quote:"Believe you can and you're halfway there.", author:"Theodore Roosevelt", category:"inspirational"}
    ]},
    {id:1, name:"Health and lifestyle Quotes", quotes:[{id:2, quote:"If you want to live a happy life, tie it to a goal, not to people or things.", 
                                                                        author:"Albert Einstein", category:"health and lifesyle"},
                                                        {id:3, quote:"Sufficient sleep, exercise, healthy food, friendship, and peace of mind are necessities, not luxuries.", author:"Mark Halperin", 
                                                        category:"health and lifesyle"},
                                                        {id:4, quote:"Take care of your body. Its the only place you have to live.", author:"Jim Rohn", category:"health and lifesyle"}

    ]},
    {id:2, name:"Fate Quotes", quotes:[{id:5, quote:"Allah does not burden a soul beyond that it can bear", author:"Quran 2:286", category:"fate"},
                                        {id:6, quote:"And whoever relies upon Allah, then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a decreed extent", 
                                        author:"Quran 65:3", category:"fate"},
                                        {id:7, quote:"He who does not show mercy to others will not be shown mercy", author:"Prophet Muhammad, peace be upon him", category:"fate"}

    ]},
    {id:3, name:"Influence Quotes", quotes:[{id:8, quote:"Example is not the main thing in influencing others. It is the only thing", author:"Albert Schweitzer", category:"influence"},
                                        {id:9, quote:"Children are more influenced by sermons you act than by sermons you preach.", author:"David McKay", category:"influence"},
                                        {id:10, quote:"If you try to influence everyone, you wont influence anyone.", author:"Josh Steimle", category:"influence"}
    ]},
    {id:4, name:"Tech Quotes", quotes:[{id:11, quote:"The technology you use impresses no one. The experience you create with it is everything.", author:"Sean Gerety", category:"tech"},
                                        {id:12, quote:"The advance of technology is based on making it fit in so that you dont really even notice it, so its part of everyday life.", author:"Bill Gates",
                                         category:"tech"},
                                        {id:13, quote:"Technology is best when it brings people together.", author:"Matt Mullenweg", category:"tech"}
]}   
]


// // #######################################################################################
// //QUOTE ZONE:
// ****ADDING A QUOTE TO QUOTES****
let moreQuotes = function (){
    let id = quoteManager[0].quotes.length + 1;
    let quote = prompt("Enter the quote: ");
    let author = prompt("Enter the author: ");
    let category = prompt("Enter the category: ");
    return { id, quote, author, category };
}

let newQuotes = []; // Initializing an empty array to accept the new quotes

// Function to add new quotes to the newQuotes array
function addNewQuotes() {
    for (let i = 0; i < 2; i++) { // Loop twice to add two new quotes
        newQuotes.push(moreQuotes());
    }
    console.log(newQuotes);
}







// ****DELETING A QUOTE FROM QUOTES****
let delQuote = function() {
    let selectedId = Number(prompt("Enter the id of the quote you would like to delete (0-13): "));
    quoteManager.forEach(manager => {
        manager.quotes = manager.quotes.filter(quote => quote.id !== selectedId);
    });
    return quoteManager;
};






// ****UPDATING A QUOTE CATEGORY FROM QUOTES****
let updateQuote = function() {
    let selectedId = Number(prompt("Enter the id of the quote you would like to update (0-13): "));
    let updateCategory = prompt("How would you categorize this quote? ");
    
    quoteManager.forEach(manager => {
        manager.quotes.forEach(quote => {
            if (quote.id === selectedId) {
                quote.category = updateCategory;
            }
        });
    });
    
    return quoteManager;
};




// // // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// // // QUOTE LIST ZONE:
// // // ***updating QuoteList***
let updateQuoteArray = function(){
    let selectedId = Number(prompt("Enter the id number(0, 1, 2...) of the quote name you wish to change: "))// let user enter the id number they want to delete from
    let newName = prompt("Enter your prefered name: "); //user will enter their prefered name to change the existing name
    quoteManager.forEach(quoteList =>{
        if (quoteList.id === selectedId){
            quoteList.name = newName;
    } 
})
}

// // // ***deleting QuoteList***
let deleteQuoteList = function() {
    let id = Number(prompt("Enter the id number of the quoteList you wish to delete (0, 1,2...): "));
    quoteManager = quoteManager.filter(manager => manager.id !== id);
    return quoteManager;
};




// // ***Creating QuoteList***
let createQuoteList = function(){
    let id = quoteManager.length + 1;
    let name = prompt("Enter the name for your quoteList: ")
    quoteManager.push({
        id,
        name, 
        quotes: [moreQuotes(),
                moreQuotes()] // Add the new quotes to the quotes property
    });
}



// // ****DISPLAYING SELECTED QUOTE**** 
let display = quoteManager.filter(function(quote){
    let selectedId = Number(prompt("Enter the id of the quote you would like to display (0-Inspirational Quotes; 1-Health and lifestyle Quotes; 2-Fate Quotes; 3-Influence Quotes; 4-Tech Quotes): "));
    if (quote.id === selectedId) {
        console.log(JSON.stringify(quote,null, 4));
    }
});



// // ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
let viewQuoteManager = true;
while(viewQuoteManager){
    // displaying quoteList and individual quotes
    display;

    console.log("Do you want to explore more of QuoteManager, how about adding/updating/deleting an entire quote you probably do not like?: ")
    // Adding more quotes
    let yesAddQuote = prompt("Do you want to add a quote, yes/no?: ")
    if (yesAddQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesAddQuote === "yes"){
        addNewQuotes();
    }

    // updating quotes
    let yesUpdateQuote = prompt("Do you want to update a quote, yes/no?: ")
    if (yesUpdateQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesUpdateQuote === "yes"){
        console.log(JSON.stringify(updateQuote()));
    }

    // deleting quotes
    let yesdeleteQuote = prompt("Do you want to delete a quote, yes/no?: ")
    if (yesdeleteQuote === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (yesdeleteQuote === "yes"){
        let delQuoteManager = delQuote();
        console.log(JSON.stringify(delQuoteManager)); // this shows quoteManager without the deleted quote  
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
        console.log(quoteManager);
    }

    // deleting quoteList
    console.log("You have the option to delete from the quoteList.")
    let userInputdelete = prompt("Would you like to give it a try, yes/no?: ")
    if (userInputdelete === "no".toLowerCase()){
        console.log("Well noted. Feel free to comeback and try it if you change your mind.")
    }else if (userInputdelete === "yes"){
        console.log(JSON.stringify(deleteQuoteList()));
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

// / Convert new array to JSON string
let jsonData = JSON.stringify(newQuotes, null, 2); 
let preferedName = prompt("What name do you want to save this with? ");

// Write JSON string to a file with the specified name
fs.writeFile(`${preferedName}.json`, jsonData, 'utf8', (err) => {
    if (err) {
        console.error('An error occurred while writing to the file:', err);
    } else {
        console.log(`Data has been saved to ${preferedName}.json`);
    }
});


// Load JSON file
fs.readFile(`${preferedName}.json`, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
    } else {
        try {
            // Parse JSON data into a JavaScript object
            quoteManager.push(JSON.parse(data));
            console.log('Data loaded successfully:', newQuotes);
        } catch (parseError) {
            console.error('An error occurred while parsing JSON:', parseError);
        }
    }
});











