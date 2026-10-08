export default {
    uniforms: {
        tDiffuse: { value: null },
        tLUT: { value: null },
        lutIntensity: { value: 1.0 },
        beautyIntensity: { value: 0.3 },
        grainIntensity: { value: 0.05 },
        texelSize: { value: [1 / 1080, 1 / 1920] },
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
        uniform float beautyIntensity;
        uniform float grainIntensity;
        uniform vec2 texelSize;
        uniform float time;

        #include <common>
        #include <beauty_smoothing_fragment>
        #include <lut_fragment>
        #include <grain_fragment>

        void main() {
            vec3 color = applyBeautySmoothing(tDiffuse, vUv, texelSize, beautyIntensity);
            color = sampleLUT(tLUT, color, lutIntensity).rgb;
            color = applyFilmGrain(color, vUv, time, grainIntensity);
            gl_FragColor = vec4(color, 1.0);
        }
    `
};
