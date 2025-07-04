import { createProgram, createShader, resizeCanvasToDisplaySize } from './shaderUtils.js';

const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL2 is not supported in this browser.');
}

// === Challenge implementation goes below ===
function init() {
  resizeCanvasToDisplaySize(canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // You will define your shaders, buffers, and drawing logic here.
}

init();
