'use strict';

var ADS = [
    {
        'author': {
            'avatar': 'img/avatars/user01.png'
        },
        'offer': {
            'title': 'Большая уютная квартира',
            'adress': 'location.x, location.y',
            'price': getRandomValue(1000000, 1000),
            'type': 'flat',
            'rooms': getRandomNumber(5),
            'guests': getRandomNumber(5),
            'checkin': '12:00',
            'checkout': '12:00',
            'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            'description': '',
            'photos': []
        },

        'location': {
            	'x': getRandomValue(900, 300),
				'y': getRandomValue(500, 100)
        }
		},
		{
			'author': {
					'avatar': 'img/avatars/user02.png'
			},
			'offer': {
					'title': 'Огромный прекрасный дворец',
					'adress': 'location.x, location.y',
					'price': getRandomValue(1000000, 1000),
					'type': 'house',
					'rooms': getRandomNumber(5),
					'guests': getRandomNumber(5),
					'checkin': '12:00',
					'checkout': '13:00',
					'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
					'description': '',
					'photos': []
			},

			'location': {
				'x': getRandomValue(900, 300),
				'y': getRandomValue(500, 100)
			}
	},
	{
		'author': {
				'avatar': 'img/avatars/user03.png'
		},
		'offer': {
				'title': 'Маленькая неуютная квартира',
				'adress': 'location.x, location.y',
				'price': getRandomValue(1000000, 1000),
				'type': 'flat',
				'rooms': getRandomNumber(5),
				'guests': getRandomNumber(5),
				'checkin': '13:00',
				'checkout': '14:00',
				'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
				'description': '',
				'photos': []
		},

		'location': {
				'x': getRandomValue(900, 300),
				'y': getRandomValue(500, 100)
		}
}
];


function getRandomValue(max, min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomNumber(value) {
	return Math.floor(Math.random() * value + 1)
}

var map = document.querySelector('.map');
//map.classList.remove('map--faded');

//Pins
var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');


var renderPins = function(pin) {
	var mapPin = mapPinTemplate.cloneNode(true);
	mapPin.style.left = ADS[i].location.x + 'px';
	mapPin.style.top = ADS[i].location.y + 'px';
	mapPin.querySelector('img').src = ADS[i].author.avatar;
	return mapPin;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < ADS.length; i++) {
	fragment.appendChild(renderPins(ADS[i]));
}

var renderPinsOnMap = function() {
	map.appendChild(fragment);
}

//Ad window
var adWindowTemplate = document.querySelector('template').content.querySelector('.map__card');

var renderAdOnMap = function() {

	var addWindow = adWindowTemplate.cloneNode(true);
	addWindow.querySelector('h3').textContent = ADS[0].offer.title;
	addWindow.querySelector('small').textContent = ADS[0].offer.adress;
	addWindow.querySelector('.popup__price').innerHTML =  ADS[0].offer.price + '&#x20bd;/ночь';
	addWindow.querySelector('h4').textContent = ADS[0].offer.type;

	var fragment = document.createDocumentFragment();
	fragment.appendChild(addWindow);

	map.appendChild(fragment);
}

//Event listeners on Main Pin
var mainPin = map.querySelector('.map__pin--main');
var form = document.querySelector('.notice__form');
var fieldsets = form.querySelectorAll('.form__element');

var fieldsetsDisable = function(boolen) {
	for (var i = 0; i < fieldsets.length; i++) {
		fieldsets[i].disabled = boolen;
}
}
fieldsetsDisable(true);

mainPin.addEventListener('mouseup', function() {
	map.classList.remove('map--faded');
	form.classList.remove('notice__form--disabled');
	renderAdOnMap();
	renderPinsOnMap();
	fieldsetsDisable(false);
});