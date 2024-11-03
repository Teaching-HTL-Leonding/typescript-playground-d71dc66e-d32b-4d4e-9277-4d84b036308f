let cardImage: p5.Image;

const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  const colorIx = Math.floor(random(0, 4));

  const cardIx = Math.floor(random(1, 14));

  let color: string;
  let rank: string;

  switch (colorIx) {
    case 0:
      color = "clubs";
      break;
    case 1:
      color = "diamonds";
      break;
    case 2:
      color = "hearts";
      break;
      case 3: 
      color = "spades";
      break;
      default:
      color = "clubs";

  }
switch (cardIx) {
  case 1:
    rank = 'A'; // Ace
    break;
  case 11:
    rank = 'J'; // Jack
    break;
  case 12:
    rank = 'Q'; // Queen
    break;
  case 13:
    rank = 'K'; // King
    break;
  default:
    rank = cardIx.toString(); 
}
const cardURL: string = `${BASE_URL}/${color}/${rank}.png`;

}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
