
function obtDatos() {
        alert('TO DO: Consumiendo la API Rest publicada en DX2...');
}

function obtDatos2() {



/*
    fetch('https://dhpx0052.telecom.com.ar:50001/RESTAdapter/getTokenSignAPIRest/get/30572975831&wsfecred', {
      method: 'GET',
      mode: 'cors', 
      //''no-cors',
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      //credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Accept-Encoding": "gzip,deflate",
          "Host": "dhpx0052.telecom.com.ar:50001",
          "Connection": "Keep-Alive",
          "User-Agent": "Apache-HttpClient/4.5.5 (Java/12.0.1)",
          "Content-type": "application/json; charset=utf-8",
          "Authorization": "Basic dTU1NDM2Njp0ZWNvMDAzMQ=="
          //'Authorization': 'Basic ' + btoa('u554366:teco0031')
      },
      redirect: 'follow' // manual, *follow, error
  })
  */

  // La siguiente API, al ser consumida por HTTP y no por HTTPS, no permite ser consumida desde GitHub Pages:
  /*
  fetch('http://api.weatherstack.com/current?access_key=6fccc86197d450eaf50f67db9eb79d82&query=Buenos%20Aires', {
      method: 'GET',
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
          "Accept-Encoding": "gzip,deflate",
          "Host": "dhpx0052.telecom.com.ar:50001",
          "Connection": "Keep-Alive",
          "User-Agent": "Apache-HttpClient/4.5.5 (Java/12.0.1)"
      },
      redirect: 'follow' // manual, *follow, error
  })
  */

  fetch('https://api.openweathermap.org/data/2.5/weather?id=3435910&appid=d2590508da0d4cca1e45297462848039', {
    method: 'GET',
    cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
        "Accept-Encoding": "gzip,deflate",
        //"Host": "dhpx0052.telecom.com.ar:50001",
        "Connection": "Keep-Alive",
        //"User-Agent": "Apache-HttpClient/4.5.5 (Java/12.0.1)"
    },
    redirect: 'follow' // manual, *follow, error
})

.then(response => response.json())
.then(json => {
    
    // muestro un popup con el JSON obtenido
    // alert(JSON.stringify(json)); 

    // imprimo en consola el JSON obtenido
    console.log(json); 

    //document.body.innerHTML = JSON.stringify(json); // muestra en el sitio el JSON obtenido, pero elimina todo lo anterior
    //document.write(JSON.stringify(json));

    // busca el elemento en el HTML y le asigna el JSON para mostrar en pantalla
    document.getElementById('json_obtenido').innerHTML = "JSON obtenido en el HTTP GET de la API REST: <br><br>" + JSON.stringify(json);
    document.getElementById('prin3').innerHTML = "Los datos obtenidos al consumir la API REST son:";
    document.getElementById('json_element_ciudad').innerHTML = "Ciudad: " + json.name;
    document.getElementById('json_element_temperatura').innerHTML = "Temperatura: " + (json.main.temp - 273) + "°C";
    //document.getElementById('json_element_estado').innerHTML = "Estado: " + json.current.weather_descriptions[0];
    document.getElementById('fecha_hora_consulta').innerHTML = "Fecha y Hora de Consulta: " + new Date();

    
   // console.log(json.request.query);


    document.body.style.background = "#f3f3f3";

    



  })

}