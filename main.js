const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL2 not supported');
}

// --- 1. Shader Sources ---
const vertexShaderSource = `#version 300 es
layout(location = 0) in vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  gl_PointSize = 20.0;
}
`;

const fragmentShaderSource = `#version 300 es
precision mediump float;
out vec4 outColor;

void main() {
  outColor = vec4(1.0, 0.5, 0.0, 1.0);  // ← fixed missing semicolon
}
`;

// --- 2. Compile Shaders ---
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

// --- 3. Link Program ---
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);

// --- 4. Initialize ---
function init() {
  // Resize canvas and set up viewport
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);

  // Clear the canvas
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Use shader program
  gl.useProgram(program);

  // --- 5. Setup geometry ---
  const positions = new Float32Array([
    0.0, 0.0  // center point
  ]);

  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  gl.enableVertexAttribArray(0); // layout(location = 0)
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  // --- 6. Draw ---
  gl.drawArrays(gl.POINTS, 0, 1);
}

init();
