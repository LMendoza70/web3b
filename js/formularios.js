var formulario=document.getElementById("frmlogin")
var usuario="admin",password="0000",contador=0

function declara(){
    var uss=document.getElementById("user").value
    var pss=document.getElementById("pass").value
    var btn=document.getElementById("boton")
    var url="../respuesta.html"
    var parametros="?usuario="+encodeURIComponent(uss)+"&contra="+encodeURIComponent(pss)
}


formulario.addEventListener("submit",function (evento){
    //con la funcion prevent default se detiene  el evento 
    declara()
    evento.preventDefault()
    if(uss==usuario && pss==password)
    {
        window.location.href=url+parametros
    }else{
        if(contador<3){
            contador=contador+1
            alert("Credenciales incorrectas intento : "+contador)
        }else{
            btn.disabled=true
        }
    }
})