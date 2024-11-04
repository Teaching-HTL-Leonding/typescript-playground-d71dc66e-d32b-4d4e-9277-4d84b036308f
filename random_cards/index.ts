let cardImage: p5.Image;
const BASE_URL: string = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload(): void {
  const colorIx: number = Math.floor(random(0, 4));

  const cardIx: number = Math.floor(random(1, 14));

  let color: string;
  let rank: string;


  switch (colorIx) {
    case 0:
      color = 'clubs';
      break;
    case 1:
      color = 'diamonds';
      break;
    case 2:
      color = 'hearts';
      break;
    case 3:
      color = 'spades';
      break;
    default:
      color = 'clubs';
  }

  switch (cardIx) {
    case 1:
      rank = 'A';
      break;
    case 11:
      rank = 'J';
      break;
    case 12:
      rank = 'Q';
      break;
    case 13:
      rank = 'K';
      break;
    default:
      rank = cardIx.toString(); // Für die Zahlen 2 bis 10
  }

  const cardURL: string = `${BASE_URL}/${color}/${rank}.png`;

  cardImage = loadImage(cardURL);
}

function setup(): void {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
