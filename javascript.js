function getDateandTime() {
  var dt = new Date();

  var formattedTime = (dt.getMonth() + 1)  + "/"
                + dt.getDate() + "/"
                + dt.getFullYear() + " @ "
                + dt.getHours() + ":"
                + dt.getMinutes() + ":"
                + dt.getSeconds();
  return [alert(formattedTime)]
}
