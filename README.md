# WebGL2 Learning Exercises

This series of exercises introduces key WebGL2 concepts through step-by-step examples. Each step focuses on one fundamental technique to build your understanding of WebGL2 rendering pipeline.

---

## 1. Draw a Single Point

- **Goal**: Understand basic WebGL2 setup and rendering a primitive.
- **Tasks**:
  - Initialize a WebGL2 context.
  - Draw a single point in the center of the canvas.
  - Use a simple vertex shader that passes through the position.
  - Set the point size in the vertex shader.

---

## 2. Draw a Colored Triangle (Using Buffers)

- **Goal**: Learn to pass vertex attributes (position and color) using buffers and vary the color across the triangle.
- **Tasks**:
  - Use a vertex buffer to define a triangle with position and color per vertex.
  - Add a color attribute (e.g. RGB) to each vertex.
  - Pass the color attribute from the vertex shader to the fragment shader using a varying.
  - In the fragment shader, output the interpolated color from the vertex data.
  - Use a VAO to manage the vertex attribute state.

---

## 3. Draw Two Triangles with Different Buffers

- **Goal**: Learn managing multiple VAOs/VBOs and rendering multiple objects.
- **Tasks**:
  - Create two separate triangles using two different VBOs and VAOs.
  - Draw both triangles in one frame.

---

## 4. Use Uniforms to Dynamically Change Triangle Color

- **Goal**: Learn how to use uniform variables to pass data from JavaScript to shaders, enabling dynamic updates to shader behavior.
- **Tasks**:
  - Define a uniform variable in the fragment shader to represent the triangle color.
  - From JavaScript, update this uniform value dynamically before each draw call to change the triangle’s color in real-time.
  - Implement a rendering loop that animates or modifies the uniform color continuously using `requestAnimationFrame`.

---

## 5. Add Rotation Transformation

- **Goal**: Learn matrix uniforms and animations.
- **Tasks**:
  - Pass a 4x4 rotation matrix as a uniform to the vertex shader.
  - Apply the rotation to the vertex positions.
  - Animate rotation over time using `requestAnimationFrame`.

---

## 6. Texture Mapping

- **Goal**: Learn texture coordinates, texture loading, and sampling.
- **Tasks**:
  - Load a texture image.
  - Pass UV coordinates as vertex attributes.
  - Sample the texture in the fragment shader to color the triangle.

---

## 7. Draw a Square using Element Array Buffer (EBO)

- **Goal**: Understand indexed drawing for efficiency.
- **Tasks**:
  - Define vertices for a square (made of two triangles).
  - Use an element/index buffer.
  - Draw using `gl.drawElements`.

---

## 8. Implement Simple Lighting

- **Goal**: Learn basic lighting models and use of normals.
- **Tasks**:
  - Add normals to your vertices.
  - Implement a simple directional light in the fragment shader.
  - Calculate diffuse lighting with the normal and light direction.

---

## 9. Framebuffer and Render to Texture

- **Goal**: Learn offscreen rendering and render-to-texture workflows.
- **Tasks**:
  - Create a framebuffer object.
  - Render your scene to a texture attached to the framebuffer.
  - Render a fullscreen quad using that texture.

---

## 10. Multiple Shader Programs

- **Goal**: Understand switching between multiple shader programs.
- **Tasks**:
  - Create two different shader programs (e.g., one for color, one for texture).
  - Switch between shader programs to draw different objects in one scene.

---

Happy coding and exploring WebGL2!
