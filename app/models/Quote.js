export default class Quote {

  constructor(data) {
    this.url = data.url
    this.body = data.body
    this.author = data.author
  }



  get QuoteTemplate() {
    return/*html*/`
<blockquote class="blockquote">
<p class="text-light">
${this.body} 
</p>
<footer class="blockquote-footer">
<p class="text-light">-${this.author}</p>
</footer>
</blockquote>

`
  }

}