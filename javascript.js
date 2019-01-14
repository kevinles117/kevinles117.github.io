function getDate() {
var dt = new Date();
alert(("0"+(dt.getMonth()+1)).slice(-2)) +"/"+ (("0"+dt.getDate()).slice(-2)) +"/"+ (dt.getFullYear()) +" "+ (("0"+dt.getHours()+1).slice(-2)) +":"+ (("0"+dt.getMinutes()+1).slice(-2));
}
