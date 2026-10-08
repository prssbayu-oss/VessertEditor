export default {
    uniforms: { tDiffuse: { value: null }, opacity: { value: 1.0 } },
    vertexShader: /* glsl */`
attribute vec2 position; attribute vec2 uv; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`,
    fragmentShader: /* glsl */`
precision highp float; varying vec2 vUv; uniform sampler2D tDiffuse; uniform float opacity; void main() { gl_FragColor = texture2D(tDiffuse, vUv) * opacity; }
`
};
