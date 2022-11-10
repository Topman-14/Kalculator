const keys = document.querySelectorAll("button");
const ac = document.querySelector("#ac");
const del = document.querySelector("#del");

for (let i = 0; i<keys.length; i++){
   keys[i].addEventListener("click", function(){
      document.querySelector('#operation').textContent += keys[i].value;
      try{
         document.querySelector("#result").textContent = eval(document.querySelector('#operation').textContent)
      }
      catch{
         document.querySelector("#result").textContent = "null"
      }
   })
}

del.addEventListener("click", ()=>{
   document.querySelector('#operation').textContent = document.querySelector('#operation').textContent.slice(0, -1);
   try{
      document.querySelector("#result").textContent = eval(document.querySelector('#operation').textContent);
   }
   catch{
      document.querySelector("#result").textContent = "null";
   }
});

ac.addEventListener('click', ()=>{
   document.querySelector('#operation').textContent = ""
   document.querySelector("#result").textContent = ""
})