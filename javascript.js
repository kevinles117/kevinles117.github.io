function getDateandTime() {
var dt = new Date();

var formattedTime = dt.getDate() + "/"
                + (dt.getMonth() + 1)  + "/"
                + dt.getFullYear() + " @ "
                + dt.getHours() + ":"
                + dt.getMinutes() + ":"
                + dt.getSeconds();
alert(formattedTime);
}
