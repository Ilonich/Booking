// 1) Делаем неактивными поля форм
var fieldsets = form.querySelectorAll('.form__element');
setInputsDisabled(fieldsets, true);

// 2) Вешаем на главную кнопку событие

var map = document.querySelector('.map');
var mainPin = map.querySelector('.map__pin--main');
mainPin.addEventListener('mouseup', mainPinEvent);
