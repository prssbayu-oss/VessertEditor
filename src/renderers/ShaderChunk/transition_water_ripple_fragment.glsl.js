export default /* glsl */`
vec4 transitionWaterRipple(sampler2D f, sampler2D t, vec2 uv, float p) {
    float r = sin(distance(uv, vec2(0.5)) * 40.0 - p * 10.0) * 0.02 * (1.0 - p);
    return mix(texture2D(f, uv + r), texture2D(t, uv), p);
}
`;
