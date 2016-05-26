function getMessage (a, b) {
	if (typeof a == 'boolean') {
		if (a == true) {
			return 'Переданное GIF-изображение анимировано и содержит' + b + 'кадров';
		}
		if (a == false) {
			return 'Переданное GIF-изображение не анимировано';
		}
	}

	if (typeof a == 'number') {
		return 'Переданное SVG-изображение содержит' + a + 'объектов и' + b*4 + 'атрибутов';
	}

	if (typeof a == "Array") {
		return 'Количество красных точек во всех строчках изображения:' + sum;
		var sum = 
	}


}