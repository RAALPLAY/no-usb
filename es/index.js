//inicia la animacion wave.json
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '../json/wave.json'
  })

  animation.play();

  function smartScreenAdvertise(){
    setTimeout(() => {
      $("#ssAdvertise").addClass("popup");
    }, 2000);
  }