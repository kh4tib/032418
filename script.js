const imageBackground = document.querySelector(".main__image");
const colorSelector = document.querySelector(".content__colors");

colorSelector.onchange = function() {changeBackground(this)};

function changeBackground(x) {
    console.log(x.value);
    imageBackground.style.background = x.value;
}