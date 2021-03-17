const h2 = document.createElement('h2');
h2.innerHTML = 'События';
document.body.append(h2);
h2.style.textAlign = 'center';

const div = document.createElement('div');
div.style.cssText = 'width: 400px; height: 400px; background-color: gray; margin: auto;';
document.body.append(div);

const text1 = document.createElement('p');
document.body.insertBefore(text1, div);
text1.style.textAlign = 'center';
text1.innerHTML = 'X: 0 Y: 0';

document.onmousemove = function (event) {
    text1.innerHTML = `X: ${event.pageX} Y: ${event.pageY}`;
}

const text2 = document.createElement('p');
document.body.append(text2);
text2.style.textAlign = 'center';
text2.innerHTML = `Координаты внтури блока X: 0 Y: 0`;

div.onmousemove = function (event) {
    text2.innerHTML = `Координаты внтури блока: X: ${event.offsetX} Y: ${event.offsetY}`;
}