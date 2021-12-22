
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

  function smartScreenAdvertise(){
    setTimeout(() => {
      $("#ssAdvertise").addClass("popup");
    }, 2000);
  }

  var language = 0;

  function translatePopup(){
    var spanish = ["La descarga ha comenzado, si tiene problemas con Microsoft SmartScreen al intentar instalar la aplicación, por favor haga ","click aquí.", "smartscreen_error_es.html"];
    var english = ["The download has started, if you have problems with Microsoft SmartScreen when trying to install the application, please ","click here.", "smartscreen_error.html"];

  if(language == 0){
    let a = document.createElement("a");
    a.setAttribute("href", spanish[2]);
    let aValue = document.createTextNode(spanish[1]);
    a.appendChild(aValue);
  
    document.getElementById("description").innerHTML= spanish[0];
    document.getElementById("description").appendChild(a);
    document.getElementById("language").src = "img/language/ingles.png"
    language = 1;
  }else{
    let a = document.createElement("a");
    a.setAttribute("href", spanish[2]);
    let aValue = document.createTextNode(english[1]);
    a.appendChild(aValue);
  
    document.getElementById("description").innerHTML= english[0];
    document.getElementById("description").appendChild(a);
    document.getElementById("language").src = "img/language/español.png"
    language = 0;
  }
  }