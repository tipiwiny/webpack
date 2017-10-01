import smaller from '../assets/smaller.jpeg'
import '../styles/image_viewer.css';

export default () => {
  const smallImage = document.createElement('img');
  smallImage.src = smaller;
  document.body.appendChild(smallImage);

}
