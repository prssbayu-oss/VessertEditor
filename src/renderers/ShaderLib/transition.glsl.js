export default {
    uniforms: {
        tFrom: { value: null },
        tTo: { value: null },
        progress: { value: 0.0 },
        type: { value: 0 } // 0: dissolve, 1: whip_pan, 2: zoom, 3: glitch
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
        uniform sampler2D tFrom;
        uniform sampler2D tTo;
        uniform float progress;
        uniform int type;

        void main() {
            if (type == 0) {
                // Crossfade dissolve
                vec4 cFrom = texture2D(tFrom, vUv);
                vec4 cTo = texture2D(tTo, vUv);
                gl_FragColor = mix(cFrom, cTo, progress);
            } else if (type == 1) {
                // Whip pan horizontal
                vec2 pFrom = vUv + vec2(progress, 0.0);
                vec2 pTo = vUv - vec2(1.0 - progress, 0.0);
                vec4 cFrom = texture2D(tFrom, pFrom);
                vec4 cTo = texture2D(tTo, pTo);
                gl_FragColor = mix(cFrom, cTo, step(1.0, pFrom.x));
            } else if (type == 2) {
                // Zoom punch
                vec2 center = vec2(0.5);
                vec2 uvZoomFrom = (vUv - center) * (1.0 + progress * 0.8) + center;
                vec2 uvZoomTo = (vUv - center) * (0.6 + progress * 0.4) + center;
                vec4 cFrom = texture2D(tFrom, uvZoomFrom);
                vec4 cTo = texture2D(tTo, uvZoomTo);
                gl_FragColor = mix(cFrom, cTo, progress);
            } else {
                // Glitch RGB split
                float split = sin(progress * 3.14159) * 0.04;
                vec4 cFrom = vec4(
                    texture2D(tFrom, vUv + vec2(split, 0.0)).r,
                    texture2D(tFrom, vUv).g,
                    texture2D(tFrom, vUv - vec2(split, 0.0)).b,
                    1.0
                );
                vec4 cTo = texture2D(tTo, vUv);
                gl_FragColor = mix(cFrom, cTo, progress);
            }
        }
    `
};
