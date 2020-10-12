const hexColorsCreator = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const buttonClick = document.getElementById('button')
const textColorChange = document.querySelector('.color')

// Função principal
buttonClick.addEventListener('click', function() {
    let hexColor = '#'
    //Loop para contar os valores do Hex
    for (let indice = 0; indice < 6; indice++) {
        hexColor += hexColorsCreator[getRandomNumber()];
    }

    textColorChange.textContent = hexColor; //Muda o texto da cor no HTML
    document.body.style.backgroundColor = hexColor; //Muda o background
    textColorChange.style.color = hexColor; // Muda a cor do texto na span
})

// Randomizar as escolhas no array
function getRandomNumber() {
    return Math.floor(Math.random() * hexColorsCreator.length)
}