function removeMargin() {
  document.body.style = 'margin: 0';
}
removeMargin();

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var rColor = '#';
  for (var i = 0; i < 6; i++) {
    rColor += letters[Math.floor(Math.random() * 16)];
  } return rColor;
}

function coloredBox() {
  var colorBox = document.createElement('div');
  colorBox.style = 'background-color:' + getRandomColor() + '; width:11.1%; padding-bottom:11.1%; float:left';
  document.body.appendChild(colorBox);
}

for (var i = 1; i < 127; i++) {
  coloredBox();
}
