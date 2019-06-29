function validTime(time) {
let arrayTime=time.split(":");
return (parseInt(arrayTime[0])<24 && parseInt(arrayTime[1])<60);
}
console.log(validTime("23:02"));