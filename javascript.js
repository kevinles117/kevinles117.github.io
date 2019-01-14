function getDate() {
var dt = new Date(unix_timestamp*1000);

var hours = dt.getHours();

var minutes = "0" + dt.getMinutes();

var seconds = "0" + dt.getSeconds();

var formattedTime = hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
alert(getDate());
}
