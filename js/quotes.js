const quotes = [
    {
        quote: "The way to get started is to quit talking and ",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when your",
        author: "John Lennon",
    },
    {
        quote: "HIHI",
        author: "AAAA",
    },
    {
        quote:"My name is Hyun",
        author: "Hyun",
    },
    {
        quote:"JS is super",
        author:"JavaScript",
    },
    {
        quote:"I don't think what quote",
        author:"HyunJi",
    },
    {
        quote:"number555",
        author:"HyunJi55555",
    },
    
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author