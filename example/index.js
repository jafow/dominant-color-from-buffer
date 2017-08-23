function fetchImg(imgPath) {
  fetch(imgPath).then((res) => {
    console.log(`fetching ${imgPath}`)
    return res.blob()
  }).then((buf) => {
    var canvas = createCanvas()
    var ctx = canvas.getContext('2d')
    var pic = URL.createObjectURL(buf)
    var img = new Image()
    img.src = pic
    ctx.drawImage(img, 0, 0)
    document.getElementById('app').appendChild(img)
    var pix = ctx.getImageData(0, 0, 72, 72)
    return getDominant(pix.data)
  })
}

function createCanvas () {
  var canvas = document.createElement('canvas')
  canvas.style.height = 100
  canvas.style.width = 200
  document.getElementById('app').appendChild(canvas)
  return canvas
}

function writeIntoCtx (cvs, buf) {
  var ctx = cvs.getContext('2d')
  var imgData = new ImageData(buf, 72, 72)
  var pix = ctx.createImageDatk(buf, 72, 72)
}

function getDominant () {
}
