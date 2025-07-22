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

## 2. Draw a Colored Triangle

- **Goal**: Learn to pass vertex attributes and vary colors.
- **Tasks**:
  - Draw the same triangle as your original code.
  - Add a color attribute per vertex.
  - Pass color from the vertex shader to the fragment shader.
  - Output the interpolated color in the fragment shader.

---

## 3. Draw Two Triangles with Different Buffers

- **Goal**: Learn managing multiple VAOs/VBOs and rendering multiple objects.
- **Tasks**:
  - Create two separate triangles using two different VBOs and VAOs.
  - Draw both triangles in one frame.

---

## 4. Use Uniforms to Change Triangle Color

- **Goal**: Understand uniforms and dynamic shader input.
- **Tasks**:
  - Use a uniform variable in the fragment shader for color.
  - Change the uniform color dynamically from JavaScript before each draw call.

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
