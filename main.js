const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL2 not supported');
}

// --- 1. Shader Sources ---
const vertexShaderSource = `#version 300 es
// Write vertex shader here
`;

const fragmentShaderSource = `#version 300 es
// Write fragment shader here
`;

// --- 2. Compile Shader ---
function compileShader(gl, type, source) {
  // Create and compile shader
}

// --- 3. Link Program ---
function createProgram(gl, vsSource, fsSource) {
  // Compile shaders and link them into a program
}

// --- 4. Initialize ---
function init() {
  // Resize canvas and set up viewport
  // Clear the canvas
  // Create and use shader program

  // --- 5. Setup geometry ---
  // Define vertex positions
  // Create VAO
  // Create and bind VBO
  // Enable and set vertex attribute pointer

  // --- 6. Draw ---
  // Issue draw call
}

init();
