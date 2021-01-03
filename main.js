var css = document.querySelector("h3")
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.querySelector("body");


// FUNCION QUE CAMBIA EL GRADIENT DEL BACKGROUND CON LOS COLORES "color1" & "color2"
function setGradient (){
    body.style.background = "linear-gradient(to right, " +color1.value +", " + color2.value + ")";
    // TAMBIEN VAMOS CREAR TEXTO EN LA TAG H3 VACÍA QUE MOSTRARÁ EL RGB QUE SE ESTÁ USANDO    
    css.textContent = body.style.background;
}



// LISTENER DEL COLOR 1&2  --->  CON 2 PARAMTROS ("a quien escuchar" , FUNCTION() ) 
color1.addEventListener ("input", setGradient);
color2.addEventListener ("input", setGradient);



// BOTON RANDOMCOLOR IZQUIERDA
var randomleft = document.querySelector("#randomleftBtn")
// LISTENER DEL BOTON IZQUIERDA QUE REALIZA LA FUNCION generateRandomRGB (que esta definida mas adelante) 
randomleft.addEventListener("click", function() { 
    generateRandomRgb()
});
//FUNCION QUE NOS CREA UN COLOR RGB ALEATORIO (STACKOVERFLOW) & LO INTRODUCE A LA IZQUIERDA DEL BODY
// EN LA LINEA 40 TAMBIEN NOS CAMBIA EL RGB A HEX (NO SE PUEDE USAR RGB PARA INPUT.VALUE)**confirmar

function generateRandomRgb(){
    var num = Math.round(0xffffff * Math.random());
    var rr = num >> 16;
    var gg = num >> 8 & 255;
    var bb = num & 255;
    var result =  'rgb(' + rr + ', ' + gg + ', ' + bb + ')';
    var css = document.querySelector("h3")

    
    body.style.background = "linear-gradient(to right, " + result +", " + color2.value + ")";
    color1.addEventListener ("input", setGradient);    
    // RGB TO HEX
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    
    console.log("Para ver como devuelve el hex --> ",rgbToHex(rr, gg, bb));
    //AHORA  COLOR1.VALUE ACEPTA ESTE FORMATO
    color1.value  = (rgbToHex(rr, gg, bb));  
    //QUE NOS MUESTRE POR PANTALLA EL COLOR QUE SE ESTA USANDO TAMBIEN 
    css.textContent = body.style.background;



}


// BOTON RANDOMCOLOR DERECHA
var randomRight = document.querySelector("#randomrightBtn")
// LISTENER DEL BOTON DERECHA QUE REALIZA LA FUNCION generateRandomRGB (que esta definida mas adelante) 
randomRight.addEventListener("click", function() { 
    generateRandomRgb2()
});
//FUNCION QUE NOS CREA UN COLOR RGB ALEATORIO (STACKOVERFLOW) & LO INTRODUCE A LA IZQUIERDA DEL BODY
// EN LA LINEA 40 TAMBIEN NOS CAMBIA EL RGB A HEX (NO SE PUEDE USAR RGB PARA INPUT.VALUE)**confirmar

function generateRandomRgb2(){
    var num = Math.round(0xffffff * Math.random());
    var rr = num >> 16;
    var gg = num >> 8 & 255;
    var bb = num & 255;
    var result =  'rgb(' + rr + ', ' + gg + ', ' + bb + ')';
    console.log(result);
    body.style.background = "linear-gradient(to right, " + color1.value +", " + result + ")";  
    color2.addEventListener ("input", setGradient);
    
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    
    console.log("Para ver como devuelve el hex --> ",rgbToHex(rr, gg, bb));
    //AHORA  COLOR1.VALUE ACEPTA ESTE FORMATO
    color2.value  = (rgbToHex(rr, gg, bb));  
    //QUE NOS MUESTRE POR PANTALLA EL COLOR QUE SE ESTA USANDO TAMBIEN 
    css.textContent = body.style.background;
}

// __________________________________________________ IDEA OF COPY TO CLIPBOARD
var copyText = document.querySelector("#copyBtn");
var text = document.querySelector("#h3");



copyText.addEventListener("click",function(){
window.prompt("Copy to clipboard: Ctrl+C, Enter", text.innerHTML.toLocaleLowerCase());
  
} )



 

