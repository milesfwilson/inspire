import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";
import { api } from "./AxiosService.js";


//TODO create methods to retrieve data and update the State
class QuoteService {

  constructor() {
    console.log("quote service");
    this.getQuote()
  }


  async getQuote() {
    let res = await api.get('quotes')
    ProxyState.quote = new Quote(res.data.quote)
    console.log(res.data.quote, "new data");
  }

}

const quoteService = new QuoteService();
export default quoteService;