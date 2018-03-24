const imageBackground = document.querySelector(".main__image");
const colorSelector = document.querySelector(".content__colors");

function changeBackground(x) {
    imageBackground.style.background = x.value;
}

