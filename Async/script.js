const sayTanveer = function(){
  console.log("Tanveer")
}
setTimeout(sayTanveer, 2000);

const changeText = function(){
  document.querySelector('h1').innerHTML = "Best Javascript Course"
}
 const changeMe = setTimeout(changeText, 4000)

 document.querySelector('#stop').addEventListener('click', function(){
  clearTimeout(changeMe)
  console.log("STOPPED")
 })

