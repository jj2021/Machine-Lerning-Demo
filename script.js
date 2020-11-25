const canvas = document.getElementById('diagram');
const ctx = canvas.getContext('2d');
const radius = 50;
canvas.width = 800;
canvas.height = 500;

/**
 * Draw the diagram of the neural network onto the canvas
 */
function animate() {
  // Draw neurons
  drawNeuron(100,100,'x1');
  drawNeuron(100,300,'x2');
  drawNeuron(250,400,'b1');
  drawNeuron(400,100,'h1');
  drawNeuron(400,300,'h2');
  drawNeuron(550,400,'b2');
  drawNeuron(700,200,'y1');

  // Connect the neurons

  // Connect x1 to h1
  connectNeurons(100,100,400,100);
  // Connect x2 to h2
  connectNeurons(100,300,400,300);
  //Connect x1 to h2
  connectNeurons(100,100,400,300);
  // Connect x2 to h1
  connectNeurons(100,300,400,100);
  // Connect b1 to h1
  connectNeurons(250,400,400,100);
  // Connect b1 to h2
  connectNeurons(250,400,400,300);
  // Connect h1 to y1
  connectNeurons(400,100,700,200);
  // Connect h2 to y1
  connectNeurons(400,300,700,200);
  // Connect b2 to y1
  connectNeurons(550,400,700,200);
}

/**
 * Connect two neurons in the diagram
 * @param {number} x1 - X coordinate of neuron 1
 * @param {number} y1 - Y coordinate of neuron 1
 * @param {number} x2 - X coordinate of neuron 2
 * @param {number} y2 - Y coordinate of neuron 2
 */
function connectNeurons(x1,y1,x2,y2) {
  // Calculate angle of line from neuron 1 to neuron 2
  // and set the start point 
  let angle = Math.atan2(y2-y1,x2-x1);
  let startX = radius * Math.cos(angle) + x1;
  let startY = radius * Math.sin(angle) + y1;

  // Calculate angle from neuron 2 to neuron 1
  // and set the destination point
  angle = Math.atan2(y1-y2, x1-x2);
  let targetX = radius * Math.cos(angle) + x2;
  let targetY = radius * Math.sin(angle) + y2;

  // Draw the line
  ctx.beginPath();
  ctx.moveTo(startX,startY);
  ctx.lineTo(targetX,targetY);
  ctx.stroke();
}

/**
 * Draws a neuron on the canvas
 * @param {number} x - X coordinate of the neuron on the canvas
 * @param {number} y - Y coordinate of the neuron on the canvas
 * @param {string} lable - Descriptive lable for the neuron
 */
function drawNeuron(x, y, lable) {
  // Draw the neuron
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2*Math.PI);
  ctx.stroke();

  // Draw neuron lable
  ctx.font = '20px Arial';
  ctx.fillText(lable, x-10, y+5);
}
animate();