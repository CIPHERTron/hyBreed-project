var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg = 'dice' + randomNumber1 + '.png';

var randomImgSrc = 'images/' + randomDiceImg;

document.querySelector('.img1').setAttribute('src', randomImgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImg2 = 'dice' + randomNumber2 + '.png';

var randomImgSrc2 = 'images/' + randomDiceImg2;

document.querySelector('.img2').setAttribute('src', randomImgSrc2);

if (randomNumber1 > randomNumber2)
{
  document.querySelector('h1').innerHTML = '🚩Player 1 wins!';
}

else if (randomNumber2 > randomNumber1)
{
  document.querySelector('h1').innerHTML = '🚩Player 2 wins!';
}

else
{
  document.querySelector('h1').innerHTML = 'Draw!!';
}
