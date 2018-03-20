'use strict';

var ADS = [
    {
        'author': {
            'avatar': 'img/avatars/user01.png'
        },
        'offer': {
            'title': 'Большая уютная квартира',
            'adress': 'location.x, location.y',
            'price': Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000,
            'type': 'flat',
            'rooms': Math.floor(Math.random() * 5 + 1),
            'guests': Math.floor(Math.random() * 5 + 1),
            'checkin': '12:00',
            'checkout': '12:00',
            'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
            'description': '',
            'photos': []
        },

        'location': {
            'x': Math.floor(Math.random() * (900 - 300 + 1)) + 300,
            'y': Math.floor(Math.random() * (500 - 100 + 1)) + 100
        }
		},
		{
			'author': {
					'avatar': 'img/avatars/user02.png'
			},
			'offer': {
					'title': 'Огромный прекрасный дворец',
					'adress': 'location.x, location.y',
					'price': Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000,
					'type': 'house',
					'rooms': Math.floor(Math.random() * 5 + 1),
					'guests': Math.floor(Math.random() * 5 + 1),
					'checkin': '12:00',
					'checkout': '13:00',
					'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
					'description': '',
					'photos': []
			},

			'location': {
					'x': Math.floor(Math.random() * (900 - 300 + 1)) + 300,
					'y': Math.floor(Math.random() * (500 - 100 + 1)) + 100
			}
	},
	{
		'author': {
				'avatar': 'img/avatars/user03.png'
		},
		'offer': {
				'title': 'Маленькая неуютная квартира',
				'adress': 'location.x, location.y',
				'price': Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000,
				'type': 'flat',
				'rooms': Math.floor(Math.random() * 5 + 1),
				'guests': Math.floor(Math.random() * 5 + 1),
				'checkin': '13:00',
				'checkout': '14:00',
				'features': ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
				'description': '',
				'photos': []
		},

		'location': {
				'x': Math.floor(Math.random() * (900 - 300 + 1)) + 300,
				'y': Math.floor(Math.random() * (500 - 100 + 1)) + 100
		}
}
];


console.log(Math.floor(Math.random() * 5 + 1));
var map = document.querySelector('.map');
map.classList.remove('map--faded');


var mapPinTemplate = document.querySelector('template').content.querySelector('.map__pin');

var renderPins = function(pin) {
	var mapPin = mapPinTemplate.cloneNode(true);
	mapPin.style.left = ADS[i].location.x + 'px';
	mapPin.style.top = ADS[i].location.y + 'px';
	mapPin.querySelector('img').src = ADS[i].author.avatar;

	return mapPin;
}

var fragment = document.createDocumentFragment();
for(var i = 0; i < ADS.length; i++) {
	fragment.appendChild(renderPins(ADS[i]));
}

map.appendChild(fragment);

