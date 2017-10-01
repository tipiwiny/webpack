import big from '../assets/big.jpeg';
import smaller from '../assets/smaller.jpeg'
import '../styles/image_viewer.css';

const smallImage = document.createElement('img');
smallImage.src = smaller;
document.body.appendChild(smallImage);

const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);
