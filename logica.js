
    Par_Impar = () =>
    {
        num = document.getElementById("numero").value;
        if(num%2==0&&num!=0){
            document.getElementById("resultado").innerHTML = "Resultado = es par" ;
        }
        else if(num == ""){
            alert("Debe ingresar un numero");
        }
        else if(num==0){
            document.getElementById("resultado").innerHTML = "Resultado = es cero";
        }
        else if (num%2!=0){
            document.getElementById("resultado").innerHTML = "Resultado = es impar";
        }
    }
