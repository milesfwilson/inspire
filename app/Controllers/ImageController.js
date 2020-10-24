import { ProxyState } from '../AppState.js'
import imageService from '../Services/ImageService.js'
//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)

function _drawImage() {
  // @ts-ignore
  document.body.style.backgroundImage = `url(${ProxyState.image.url})`;
}


function _drawClock() {
  let date = new Date()

  if (date.getMinutes() >= 10) {
    document.getElementById('clock').innerHTML = date.getHours() + ' : ' + date.getMinutes()
  } else {
    document.getElementById('clock').innerHTML = date.getHours() + ' : ' + '0' + date.getMinutes()

  }

  if (date.getHours() <= 12) {
    document.getElementById('timeOfDay').innerText = "Good morning!"
  } else if (date.getHours() > 12 && date.getHours() <= 16) {
    document.getElementById('timeOfDay').innerText = "Good afternoon!"
  } else {
    document.getElementById('timeOfDay').innerText = "Good evening!"

  }

}

export default class ImageController {
  constructor() {
    console.log("image controller");
    ProxyState.on("image", _drawImage)
    this.getImage()
    _drawClock()
    setInterval(_drawClock, 1000)
  }

  getImage() {

    try {
      imageService.getImage()
    } catch (error) {

    }

  }

}