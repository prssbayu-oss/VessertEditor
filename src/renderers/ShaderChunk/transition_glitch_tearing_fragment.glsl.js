export default /* glsl */`
vec4 transitionGlitch(sampler2D f, sampler2D t, vec2 uv, float p) {
    float shift = sin(uv.y * 30.0 + p * 20.0) * p * 0.1;
    return mix(texture2D(f, uv + vec2(shift, 0.0)), texture2D(t, uv), p);
}
`;
