// shaderUtils.js

/**
 * Loads shader source text from a URL/file.
 * @param {string} url
 * @returns {Promise<string>}
 */
export async function loadShaderSource(url) {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load shader source from ${url}: ${response.statusText}`);
    }
    return response.text();
  }
  
  /**
   * Compiles a shader from source.
   * @param {WebGL2RenderingContext} gl
   * @param {string} source
   * @param {number} type gl.VERTEX_SHADER or gl.FRAGMENT_SHADER
   * @returns {WebGLShader}
   */
  export function createShader(gl, source, type) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error(`Shader compile error (${type === gl.VERTEX_SHADER ? 'VERTEX' : 'FRAGMENT'}):\n${log}`);
    }
    return shader;
  }
  
  /**
   * Creates and links a shader program from vertex and fragment sources.
   * @param {WebGL2RenderingContext} gl
   * @param {string} vertexSource
   * @param {string} fragmentSource
   * @returns {WebGLProgram}
   */
  export function createShaderProgram(gl, vertexSource, fragmentSource) {
    const vertexShader = createShader(gl, vertexSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fragmentSource, gl.FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const log = gl.getProgramInfoLog(program);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      throw new Error(`Program link error:\n${log}`);
    }
    // shaders can be deleted after linking
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);
    return program;
  }
  
  /**
   * Creates a buffer and fills it with given data.
   * @param {WebGL2RenderingContext} gl
   * @param {TypedArray} data
   * @param {GLenum} usage default gl.STATIC_DRAW
   * @returns {WebGLBuffer}
   */
  export function createBufferWithData(gl, data, usage = gl.STATIC_DRAW) {
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, data, usage);
    return buffer;
  }
  
  /**
   * Enables a vertex attribute pointer.
   * @param {WebGL2RenderingContext} gl
   * @param {number} location attribute location
   * @param {number} size components per attribute (1-4)
   * @param {GLenum} type data type, e.g. gl.FLOAT
   * @param {boolean} normalized normalize fixed-point data (default false)
   * @param {number} stride bytes between attributes (default 0)
   * @param {number} offset byte offset in buffer (default 0)
   */
  export function enableVertexAttrib(gl, location, size, type, normalized = false, stride = 0, offset = 0) {
    gl.enableVertexAttribArray(location);
    gl.vertexAttribPointer(location, size, type, normalized, stride, offset);
  }
  
  /**
   * Creates and binds a Vertex Array Object (VAO).
   * @param {WebGL2RenderingContext} gl
   * @returns {WebGLVertexArrayObject}
   */
  export function createAndBindVAO(gl) {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    return vao;
  }
  
  /**
   * Unbinds the currently bound VAO.
   * @param {WebGL2RenderingContext} gl
   */
  export function unbindVAO(gl) {
    gl.bindVertexArray(null);
  }
  
  /**
   * Sets a 4x4 float matrix uniform.
   * @param {WebGL2RenderingContext} gl
   * @param {WebGLUniformLocation} location
   * @param {Float32Array} mat4
   */
  export function setUniformMat4(gl, location, mat4) {
    gl.uniformMatrix4fv(location, false, mat4);
  }
  
  /**
   * Clears the canvas and draws a simple triangle.
   * (Useful for quick tests or 2D examples)
   * @param {WebGL2RenderingContext} gl
   * @param {WebGLProgram} program
   * @param {WebGLBuffer} buffer
   * @param {number} attribLocation
   * @param {GLenum} mode
   * @param {number} offset
   * @param {number} count
   */
  export function clearAndDraw(gl, program, buffer, attribLocation, mode, offset, count) {
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
  
    gl.useProgram(program);
  
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    enableVertexAttrib(gl, attribLocation, 2, gl.FLOAT);
  
    gl.drawArrays(mode, offset, count);
  }
  