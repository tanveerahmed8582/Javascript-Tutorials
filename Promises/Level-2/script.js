const sayDate = function(str){
  console.log(str, Date.now());
}


const intervalId = setInterval(sayDate, 2000, "hii")


clearInterval(intervalId)