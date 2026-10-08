export default {
    uniforms: {
        tDiffuse: { value: null },
        tLUT: { value: null },
        lutIntensity: { value: 1.0 },
        vignetteIntensity: { value: 0.3 },
        grainIntensity: { value: 0.08 },
        time: { value: 0.0 }
    },
    vertexShader: /* glsl */`
        attribute vec2 position;
        attribute vec2 uv;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `,
    fragmentShader: /* glsl */`
        precision highp float;
        varying vec2 vUv;

        uniform sampler2D tDiffuse;
        uniform sampler2D tLUT;
        uniform float lutIntensity;
        uniform float vignetteIntensity;
        uniform float grainIntensity;
        uniform float time;

        #include <common>
        #include <lut_fragment>
        #include <vignette_fragment>
        #include <grain_fragment>

        void main() {
            vec4 baseColor = texture2D(tDiffuse, vUv);
            vec3 color = sampleLUT(tLUT, baseColor.rgb, lutIntensity).rgb;
            color = applyVignette(color, vUv, 0.75, 0.45, vignetteIntensity);
            color = applyFilmGrain(color, vUv, time, grainIntensity);
            gl_FragColor = vec4(color, baseColor.a);
        }
    `
};
