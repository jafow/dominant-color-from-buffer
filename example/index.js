function fetchImg(imgPath) {
  fetch(imgPath).then((res) => {
    console.log(`fetching ${imgPath}`)
    return res.blob()
  }).then((buf) => {
    // var canvas = createCanvas()
    var ct = new ColorThief()
    var canvas = document.createElement('canvas')
    canvas.style.height = 100
    canvas.style.width = 200
    document.getElementById('app').appendChild(canvas)

    var ctx = canvas.getContext('2d')
    var pic = URL.createObjectURL(buf)
    var img = new Image(72, 72)
    img.src = pic

    document.getElementById('app').appendChild(img)
    var color = ct.getColor(img, 10)
    // there is a bug here
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
  var pix = ctx.createImageData(buf, 72, 72)
}

function getDominant () {
}
