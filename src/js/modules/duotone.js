function convertToDueTone(color1, color2) {
    var matrix = document.querySelector('feColorMatrix');
    if (matrix) {
        var value = [];
        value = value.concat(
          [color1[0] / 256 - color2[0] / 256, 0, 0, 0, color2[0] / 256]);
        value = value.concat(
          [color1[1] / 256 - color2[1] / 256, 0, 0, 0, color2[1] / 256]);
        value = value.concat(
          [color1[2] / 256 - color2[2] / 256, 0, 0, 0, color2[2] / 256]);
        value = value.concat([0, 0, 0, 1, 0]);
        matrix.setAttribute('values', value.join(' '));
    }
}

convertToDueTone([50, 50, 170], [20, 15, 70]);
