export default /* glsl */`
vec4 transitionWhipPan(sampler2D f, sampler2D t, vec2 uv, float p) {
    vec2 u1 = uv + vec2(p, 0.0);
    vec2 u2 = uv - vec2(1.0 - p, 0.0);
    return p < 0.5 ? texture2D(f, u1) : texture2D(t, u2);
}
`;
