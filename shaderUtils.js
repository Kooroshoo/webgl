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
  

  