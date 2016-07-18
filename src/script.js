function removeMargin() {
  document.body.style = 'margin: 0';
}
removeMargin();

function redBox() {
  var redDiv = document.createElement('div');
  redDiv.style = 'background-color:red; width:11.1%; padding-bottom:11.1%; float:left';
  document.body.appendChild(redDiv);
}

function blackBox() {
  var blackDiv = document.createElement('div');
  blackDiv.style = 'background-color:black; width:11.1%; padding-bottom:11.1%; float:left';
  document.body.appendChild(blackDiv);
}

for (var i = 1; i < 127; i++) {
  if (i % 2 === 0) {
    redBox();
  } else {
    blackBox();
  }
}
