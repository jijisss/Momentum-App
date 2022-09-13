const quotes = [
    {
        quote:"We were happily married for eight months. Unfortunately, we were married for four and a half years.",
        author:"Nick Faldo",
    },
    {
        quote:"The higher the buildings, the lower the morals.",
        author:"Noel Coward",
    },
    {
        quote:"The true teacher defends his pupils against his own personal influence.",
        author:"Amos Bronson Alcott",
    },
    {
        quote:"You can't wait for inspiration. You have to go after it with a club.",
        author:"Jack London",
    },
    {
        quote:"Success is like reaching an important birthday and finding you're exactly the same.",
        author:"Audrey Hepburn",
    },
    {
        quote:"How good bad music and bad reasons sound when one marches against an enemy!",
        author:"Friedrich Nietzschen",
    },
    {
        quote:"Life is something that happens when you can't get to sleep.",
        author:"Fran Lebowitz",
    },
    {
        quote:"What is written without effort is in general read without pleasure.",
        author:"Samuel Johnson",
    },
    {
        quote:"If I could drop dead right now, I'd be the happiest man alive.",
        author:"Samuel Goldwyn",
    },
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:"Confucius",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // 0과 1사이의 랜덤한 숫자.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
