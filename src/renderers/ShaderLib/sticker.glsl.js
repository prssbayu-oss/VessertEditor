export default {
    uniforms: {
        tDiffuse: { value: null },
        opacity: { value: 1.0 },
        shadowColor: { value: [0.0, 0.0, 0.0, 0.4] },
        shadowOffset: { value: [0.005, -0.005] }
    },
    vertexShader: /* glsl */`
        attribute vec2 position;
        attribute vec2 uv;
        uniform mat3 modelViewMatrix;
        uniform mat3 projectionMatrix;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec3 transformed = projectionMatrix * modelViewMatrix * vec3(position, 1.0);
            gl_Position = vec4(transformed.xy, 0.0, 1.0);
        }
    `,
    fragmentShader: /* glsl */`
        precision highp float;
        varying vec2 vUv;
        uniform sampler2D tDiffuse;
        uniform float opacity;
        uniform vec4 shadowColor;
        uniform vec2 shadowOffset;

        void main() {
            vec4 shadowSample = texture2D(tDiffuse, vUv - shadowOffset);
            vec4 stickerSample = texture2D(tDiffuse, vUv);

            vec4 shadow = vec4(shadowColor.rgb, shadowSample.a * shadowColor.a);
            vec4 color = mix(shadow, stickerSample, stickerSample.a);

            gl_FragColor = vec4(color.rgb, color.a * opacity);
        }
    `
};
