// Import stylesheets
import './style.css';
import { fabric } from 'fabric';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>FabricJS Clip Example</h1>`;

const canvas = new fabric.Canvas('c');

let rect = new fabric.Rect({
  left: 100,
  top: 100,
  width: 300,
  height: 300,
  fill: '#ffff00',
});

const maskCanvas = document.createElement('canvas');
maskCanvas.width = 100;
maskCanvas.height = 100;
const maskCtx = maskCanvas.getContext('2d');
maskCtx.beginPath();
maskCtx.arc(50, 50, 50, 0, 2 * Math.PI);
maskCtx.closePath();
maskCtx.fillStyle = '#000';
maskCtx.fill();

canvas.add(rect);

const url = maskCanvas.toDataURL();

fabric.Image.fromURL(url, function (img) {
  img.set({
    left: 200,
    top: 200,
  });
  // clip
  img.globalCompositeOperation = 'destination-in';
  // mask
  // img.globalCompositeOperation = 'destination-out';
  canvas.add(img);
});
