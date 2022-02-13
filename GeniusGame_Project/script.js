let order = [];
let clickedOrder = [];
let score = 0;

//0 - green
//1 - red
//2 - yellow
//3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//create the randon colors order
let shuffleOrder = () =>
{
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order)
    {
        let elementColor = createdColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

//ligth the next color
let lightColor = (element, number) =>
{
    number = number * 400;
    
    setTimeout(() =>
    {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() =>
    {
        element.classList.remove('selected');
    });
}

//check if the clicked buttons are the same as the order created by the game
let checkOrder = () =>
{
    for(let i in clickedOrder)
    {
        if(clickedOrder[i] != order[i])
        {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length)
    {
        alert(`Score: ${score}\n You Got It! Starting the next level..`)
        nextLevel();
    }
}

//function when the user click
let click = (color) =>
{
    clickedOrder[clickedOrder.length] = color;
    createdColorElement(color).classList.add('selected');

    setTimeout(() =>
    {
        createdColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}

//function to return the color
let createdColorElement = (color) =>
{
    if(color == 0) { return green; }
    if(color == 1) { return red; }
    if(color == 2) { return yellow; }
    if(color == 3) { return blue; }
}

//function to call the next level
let nextLevel = () =>
{
    score++;
    shuffleOrder();
}

//function to game over
let gameOver = () =>
{
    alert(`Score: ${score}!\n Game Over!\n Click 'Ok' to start a new game`)
    order = [];
    clickedOrder = [];

    playGame();
}

//function to start the game
let playGame = () =>
{
    alert('Welcome to GENESIS! Starting a New Game!')
    score = 0;

    nextLevel();
}

//event click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//start the game
playGame();