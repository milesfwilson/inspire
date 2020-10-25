

export default class Quote {

  constructor(data) {
    this.url = data.url
    this.body = data.body
    this.author = data.author
  }





  get QuoteTemplate() {
    return/*html*/`
    <div id="quoteText">
    <blockquote class="blockquote">
    <p class="text-light grow" onclick="app.quoteController.changeQuote()">
    
    ${this.body} 
    
    </p>
    </blockquote>
    </div>
`
  }


  get AuthorTemplate() {
    return/*html*/`
<blockquote class="blockquote">
<p class="text-light grow" onclick="app.quoteController.changeBack()">

${this.author} 

</p>
</blockquote>

`

  }

}