import * as ShaderUtils from './shaderUtils.js';

async function main() {
  const canvas = document.getElementById('glCanvas');
  const gl = canvas.getContext('webgl2');
  if (!gl) return alert('WebGL 2 not supported');

  // Load shaders
  const [vsSource, fsSource] = await Promise.all([
    ShaderUtils.loadShaderSource('shaders/vertexShader.glsl'),
    ShaderUtils.loadShaderSource('shaders/fragmentShader.glsl'),
  ]);

  // Create shader program
  const program = ShaderUtils.createShaderProgram(gl, vsSource, fsSource);

  // Triangle vertices (x, y)
  const vertices = new Float32Array([
    0, 0.5,
    -0.5, -0.5,
    0.5, -0.5,
  ]);

  // Setup VAO and VBO
  const vao = ShaderUtils.createAndBindVAO(gl);
  const vbo = ShaderUtils.createBufferWithData(gl, vertices);
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  ShaderUtils.enableVertexAttrib(gl, 0, 2, gl.FLOAT);
  ShaderUtils.unbindVAO(gl);

  // Set viewport and clear screen
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.15, 0.15, 0.15, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw the triangle
  gl.useProgram(program);
  gl.bindVertexArray(vao);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
  gl.bindVertexArray(null);
}

main();
