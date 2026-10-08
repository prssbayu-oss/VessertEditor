Official Commercial Graphics, Shaders, Textures, Models & Standards Bundle

Overview
This directory stores official commercial binary assets (textures, shaders, models, font atlases) and normative specifications directly from the governing industry standard organizations: The Khronos Group Inc. and W3C (World Wide Web Consortium).

Structure & Complete Inventory

1. khronos/webgl/ (The Khronos Group Inc. - Official WebGL Standard Assets)
- textures/:
  - webgl-logo.png: Official Khronos WebGL trademark raster graphic
  - opengl_logo.jpg: Official Khronos OpenGL standard graphic
  - red-green-512x512.png: Official color-channel calibration texture
  - gray-ramp-256.png: Official linear ramp luminance gradient test asset
  - red-green-hard.hdr: Official High Dynamic Range (HDR) radiance texture
- shaders/:
  - vertexShader.vert: Official Khronos WebGL conformance vertex shader
  - fragmentShader.frag: Official Khronos WebGL conformance fragment shader
  - uniformBlockShader.vert & uniformBlockShader.frag: Official WebGL2 uniform buffer shader pair
- webgl.idl & webgl2.idl: Official Khronos WebIDL interface standards

2. khronos/gltf/ (The Khronos Group Inc. - Official 3D Asset Standard)
- models/:
  - Duck.glb: Official Khronos glTF benchmark binary 3D model (118 KB)
  - Box.glb: Official Khronos unit cube spatial model (1.7 KB)
- Schemas: glTF.schema.json, node.schema.json, mesh.schema.json, material.schema.json, buffer.schema.json, texture.schema.json

3. w3c/webgpu/ (World Wide Web Consortium & GPU for the Web WG)
- textures/:
  - webgpu.png: Official W3C WebGPU branding & test graphic
  - brickwall_albedo.png & brickwall_normal.png: Official PBR surface test textures
- models/:
  - whale.glb: Official W3C WebGPU sample geometry (141 KB)
- fonts/:
  - ya-hei-ascii.png & ya-hei-ascii-msdf.json: Official Multi-channel Signed Distance Field (MSDF) font texture atlas
- webgpu.d.ts: Official W3C WebGPU & WGSL normative API contract definition

4. w3c/webxr/ (World Wide Web Consortium - Immersive Web WG)
- webxr.d.ts: Official W3C WebXR Device API normative contract definition
