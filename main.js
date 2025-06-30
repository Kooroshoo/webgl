import * as ShaderUtils from './shaderUtils.js';

async function main() {
  const canvas = document.getElementById('glCanvas');
  const gl = canvas.getContext('webgl2');
  if (!gl) return alert('WebGL 2 not supported');

  const [vsSource, fsSource] = await Promise.all([
    ShaderUtils.loadShaderSource('shaders/vertexShader.glsl'),
    ShaderUtils.loadShaderSource('shaders/fragmentShader.glsl'),
  ]);

  const program = ShaderUtils.createShaderProgram(gl, vsSource, fsSource);

  const vertices = new Float32Array([
    0, 0
  ]);

  // Setup VAO to store vertex attribute state
  const vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  // Create VBO and upload vertex data
  const vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  // Define vertex attribute pointer for position 
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  // Unbind VAO
  gl.bindVertexArray(null);

  // Prepare canvas
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.15, 0.15, 0.15, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw 
  gl.useProgram(program);
  gl.bindVertexArray(vao);
  gl.drawArrays(gl.POINTS, 0, 1);
  gl.bindVertexArray(null);
}

main();
