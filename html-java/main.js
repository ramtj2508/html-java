
      var n1= 10
      var n2 = 5;
      var resultado;
      function mult()
      {
          n1 = document.getElementById("num1").value; 
          n2 = document.getElementById("num2").value; 
          resultado=parseInt(n1) * parseInt(n2);
          document.getElementById("resultado").innerHTML = resultado;
      }
