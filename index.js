// Import stylesheets
import './style.css';
import { fabric } from 'fabric';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>FabricJS Clip Example</h1>`;

const canvas = new fabric.Canvas('c');

let rect1 = new fabric.Rect({
  left: 100,
  top: 100,
  width: 100,
  height: 75,
  fill: '#ffff00',
});

canvas.add(rect1);
