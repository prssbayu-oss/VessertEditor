export default {
    uniforms: { tVideo: { value: null }, time: { value: 0.0 } },
    vertexShader: /* glsl */`
attribute vec2 position; attribute vec2 uv; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`,
    fragmentShader: /* glsl */`
precision highp float; varying vec2 vUv; uniform sampler2D tVideo; void main() { gl_FragColor = texture2D(tVideo, vUv); }
`
};
