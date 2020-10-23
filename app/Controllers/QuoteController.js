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

  getQuote() {
    try {
      quoteService.getQuote()
    }
    catch (e) {
      console.error(e)
    }
  }


}