export default class Quote {

  constructor(data) {
    this.url = data.url
    this.body = data.body
    this.author = data.author
  }



  get QuoteTemplate() {
    return/*html*/`

<h6 class="text-light">
 ${this.body} 
</h6>
<h4 class="text-light">-${this.author}</h4>

`
  }

}