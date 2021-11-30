
//busca la url en update.xml
  $(document).ready(function(){
    $.get("update.xml",{},function(xml){
      // alert(xml);
      $('update',xml).each(function(i) {
        var url = ((xml.getElementsByTagName('link')[i]).childNodes[0]).nodeValue;
        document.getElementById("download").href = url
      });
    });
  });

//inicia la animacion wave.json
var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'json/wave.json'
  })

  animation.play();