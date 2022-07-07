alert("hello");
const time = new Date();
console.log(time.getHours());
console.log(time.getMinutes());
const Hours = time.getHours()
const Minutes = time.getMinutes()

if (Hours === 8 && Minutes >= 30){
  alert('9'Hours,Minutes)
}else if(Hours === 18 && Minutes === 3)