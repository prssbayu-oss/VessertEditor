export default {
    uniforms: { tFrom: { value: null }, tTo: { value: null }, progress: { value: 0.0 } },
    vertexShader: /* glsl */`
attribute vec2 position; attribute vec2 uv; varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 0.0, 1.0); }
`,
    fragmentShader: /* glsl */`
precision highp float; varying vec2 vUv; uniform sampler2D tFrom; uniform sampler2D tTo; uniform float progress; void main() { gl_FragColor = mix(texture2D(tFrom, vUv), texture2D(tTo, vUv), progress); }
`
};
