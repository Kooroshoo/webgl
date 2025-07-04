const canvas = document.getElementById('glCanvas');
const gl = canvas.getContext('webgl2');

if (!gl) {
  alert('WebGL2 not supported');
}

// --- 1. Shader Sources ---
const vertexShaderSource = `#version 300 es
layout(location = 0) in vec2 a_position;
layout(location = 1) in vec3 a_color;

out vec3 v_color;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_color = a_color;
}
`;

const fragmentShaderSource = `#version 300 es
precision mediump float;

in vec3 v_color;
out vec4 outColor;

void main() {
  outColor = vec4(v_color, 1.0);
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
  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.useProgram(program);

  // --- 5. Setup Geometry ---
  const triangle1 = new Float32Array([
    // x,    y,    r,  g,  b
    -0.3,  0.5,  1,  0,  0,  // top-left 
    -0.8, -0.5,  0,  1,  0,  // bottom-left 
    0.2, -0.5,  0,  0,  1,  // bottom-right 
  ]);

  const triangle2 = new Float32Array([
    // x,    y,    r,  g,  b
    0.3,  0.5,  1,  1,  0,  // top-right 
    -0.2, -0.5,  0,  1,  1,  // bottom-left 
    0.8, -0.5,  1,  0,  1,  // bottom-right 
  ]);

  function createVAO(data) {
    const vao = gl.createVertexArray();
    const vbo = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);

    const stride = 5 * Float32Array.BYTES_PER_ELEMENT;
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, stride, 0);

    gl.enableVertexAttribArray(1);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, stride, 2 * Float32Array.BYTES_PER_ELEMENT);

    return vao;
  }

  const vao1 = createVAO(triangle1);
  const vao2 = createVAO(triangle2);

  // --- 6. Draw ---
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw first triangle
  gl.bindVertexArray(vao1);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  // Draw second triangle
  gl.bindVertexArray(vao2);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

}

init();
