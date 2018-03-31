var dragPinEvent = function() {
    map.classList.remove('map--faded');
    form.classList.remove('notice__form--disabled');
    map.appendChild(fragment);
    fieldsetsDisable(false);
};

var renderAdOnMap = function (pin) {
    var adWindow = adWindowTemplate.cloneNode(true);
    adWindow.querySelector('h3').textContent = pin.offer.title;
    adWindow.querySelector('small').textContent = pin.offer.adress;
    adWindow.querySelector('.popup__price').innerHTML = pin.offer.price + '&#x20bd;/ночь';
    adWindow.querySelector('h4').textContent = pin.offer.type;

    var fragment = document.createDocumentFragment();
    fragment.appendChild(adWindow);

    map.appendChild(fragment);

    var adWindowClose = adWindow.querySelector('.popup__close');
    adWindowClose.addEventListener('click', function () {
        map.removeChild(adWindow);
    });
};