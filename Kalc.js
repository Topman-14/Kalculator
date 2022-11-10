const keys = document.querySelectorAll("button");

for (let i = 0; i<keys.length; i++){
   keys[i].addEventListener("click", function(){
      document.querySelector('#operation').textContent += keys[i].value;
      console.log(Math.eval(document.querySelector('#operation').textContent))

   })
}