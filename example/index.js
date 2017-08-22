function fetchImg(imgPath) {
  fetch(imgPath).then((res) => {
    console.log(`fetching ${imgPath}`)
    return res.arrayBuffer()
  }).then((buf) => {
    let pixels = new Uint8ClampedArray(buf)
    console.log(`pixel length: ${pixels.length}`)
    console.log('pixels: ', pixels)
  })
}
