import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js";



//TODO Create methods for constructor, and rendering the quote to the page

function _drawQuote() {
  document.getElementById('quote').innerHTML = ProxyState.quote.QuoteTemplate
}

export default class QuoteController {

  constructor() {
    console.log("quote controller");
    ProxyState.on("quote", _drawQuote)
  }

  changeQuote() {
    document.getElementById('quoteText').innerHTML = ProxyState.quote.AuthorTemplate
  }

  changeBack() {
    document.getElementById('quote').innerHTML = ProxyState.quote.QuoteTemplate
  }

  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }


}