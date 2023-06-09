//public int x;
// var let const

var v1=0,v2=0,res=0,caja;

function captura1(){
    v1= document.getElementById("val1").value
    v1=Number.parseFloat(v1)
}

function captura2(){
    v2=document.getElementById("v2").value
    v2=Number.parseFloat(v2)    
    caja=document.getElementById("resultado")
}

function sum (){
    res=v1+v2
    caja.textContent = "El resultado de la suma es : "+res
}

function resta(){
    res=v1-v2
    caja.textContent="El resultado de la resta es : "+res
}

function mul(){
    res=v1*v2
    caja.textContent="El resultado de la multiplicacion es : "+res
}

function div(){
    res=v1/v2
    if(v2!=0)
        caja.textContent="El resultado de la division es : "+res
    else
        caja.textContent="Valores inadecuados"
}