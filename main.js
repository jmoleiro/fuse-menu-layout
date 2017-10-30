var Observable = require("FuseJS/Observable");

var screenMode = Observable(true);
var columns = Observable(2);
var sidebarName = Observable('edgeSide');

var navOn = function(){
    screenMode.value = true;
}

var navOff = function(){
    screenMode.value = false;
}

var dism = function() {
    mnav.dismiss();
}

var shows = function() {
    mnav.open();
}

module.exports = {
    screenMode: screenMode,
    navOn: navOn,
    navOff: navOff,
    sidebarName: sidebarName,
    dism: dism,
    shows: shows,
    columns: columns
}