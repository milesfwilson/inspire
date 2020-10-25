import { ProxyState } from '../AppState.js'
import imageService from '../Services/ImageService.js'
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  // @ts-ignore
  document.body.style.backgroundImage = `url(${ProxyState.image.url})`;
}
let convert = false



function _drawClock() {
  let date = new Date()

  let subtract = 0
  if (convert) {

    if (date.getHours() >= 13) {
      subtract = 12
    }
  }

  if (date.getMinutes() >= 10) {
    document.getElementById('clock').innerHTML = date.getHours() - subtract + ' : ' + date.getMinutes()
  } else {
    document.getElementById('clock').innerHTML = date.getHours() - subtract + ' : ' + '0' + date.getMinutes()
  }

  if (date.getHours() <= 12) {
    document.getElementById('timeOfDay').innerHTML = `Good morning, Miles. <i class="fas fa-coffee ml-2"></i>`
  } else if (date.getHours() > 12 && date.getHours() <= 16) {
    document.getElementById('timeOfDay').innerHTML = `Good afternoon, Miles. <i class="fas fa-sun ml-2"></i>`
  } else {
    document.getElementById('timeOfDay').innerHTML = `Good evening, Miles. <i class="fas fa-moon ml-2"></i>`

  }

}



export default class ImageController {
  constructor() {
    console.log("image controller")
    ProxyState.on("image", _drawImage)
    this.getImage()
    _drawClock()
    setInterval(_drawClock, 1000)
  }
  convertTime() {
    if (!convert) {

      return convert = true
    } else {
      return convert = false
    }
  }
  color() {
    let header = document.getElementById('header').classList
    let lister = document.getElementById('lister').classList

    if (header.contains('theme-dark')) {
      header.remove('theme-dark')
      lister.remove('theme-dark')
      header.add('theme-primary')
      lister.add('theme-primary')
    } else if (header.contains('theme-primary')) {
      header.remove('theme-primary')
      lister.remove('theme-primary')
      header.add('theme-secondary')
      lister.add('theme-secondary')
    } else if (header.contains('theme-secondary')) {
      header.remove('theme-secondary')
      lister.remove('theme-secondary')
      header.add('theme-success')
      lister.add('theme-success')
    } else if (header.contains('theme-success')) {
      header.remove('theme-success')
      lister.remove('theme-success')
      header.add('theme-info')
      lister.add('theme-info')
    } else if (header.contains('theme-info')) {
      header.remove('theme-info')
      lister.remove('theme-info')
      header.add('theme-danger')
      lister.add('theme-danger')
    } else if (header.contains('theme-danger')) {
      header.remove('theme-danger')
      lister.remove('theme-danger')
      header.add('theme-dark')
      lister.add('theme-dark')
    }
  }

  getImage() {

    try {
      imageService.getImage()
    } catch (error) {

    }

  }

}