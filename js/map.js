'use strict';

var map = document.querySelector('.map');
var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');
var mainPin = map.querySelector('.map__pin--main');
var fragment = document.createDocumentFragment();
var adWindowTemplate = document.querySelector('template').content.querySelector('.map__card');
var form = document.querySelector('.notice__form');
var fieldsets = form.querySelectorAll('.form__element');

var renderPins = function (pin) {
    var mapPin = mapPinTemplate.cloneNode(true);
    mapPin.style.left = pin.location.x + 'px';
    mapPin.style.top = pin.location.y + 'px';
    mapPin.querySelector('img').src = pin.author.avatar;
    mapPin.addEventListener('mouseup', renderAdOnMap(pin));
    return mapPin;
};

for (var i = 0; i < ADS.length; i++) {
    fragment.appendChild(renderPins(ADS[i]));
}

var fieldsetsDisable = function (boolean) {
    for (var i = 0; i < fieldsets.length; i++) {
        fieldsets[i].disabled = boolean;
    }
};
fieldsetsDisable(true);


mainPin.addEventListener('mouseup', dragPinEvent);


	

