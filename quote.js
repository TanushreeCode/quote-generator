document.addEventListener("DOMContentLoaded",getQuote)

const quoteText  = document.getElementById("quote-text")
const authorText  = document.getElementById("author")
const newQuoteBtn =  document.getElementById("new-quote")

newQuoteBtn.addEventListener("click",getQuote)

function getQuote() {
   fetch("https://api.quotable.io/random")
   .then(Response=>Response.json()) 
   .then(data=>{
    const {content,author} = data
    quoteText.textContent = content
    authorText.textContent = `- ${author}`
   })
   .catch(error =>{
    console.error("error Fetching quote: ",error)
    quoteText.textContent = "an error occurred while fetching the quote"
   authorText.textContent = ""
})
}