
 let op;
function func() {
    
}
 
 
 
 
 
 
 
 
 
 
 function calc() {
     let expression = document.getElementById("expression").value;
     let array = expression.split('');
     let num1 = Number(array[0]);
     let num2 = Number(array[2]);
     
     let result;

        switch (array[1]) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }

      document.getElementById('result').innerHTML=result;
 };
