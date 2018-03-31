'use strict';

var renderPins = function (pin) {
    var mapPin = mapPinTemplate.cloneNode(true);
    mapPin.style.left = pin.location.x + 'px';
    mapPin.style.top = pin.location.y + 'px';
    mapPin.querySelector('img').src = pin.author.avatar;
    mapPin.addEventListener('mouseup', function () {
        renderAdOnMap(pin)
    });
    return mapPin;
};

var setInputsDisabled = function (fieldArray, boolean) {
    for (var i = 0; i < fieldsets.length; i++) {
        fieldArray[i].disabled = boolean;
    }
};





	

