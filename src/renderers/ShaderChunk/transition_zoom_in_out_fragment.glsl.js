export default /* glsl */`
vec4 transitionZoom(sampler2D f, sampler2D t, vec2 uv, float p) {
    vec2 center = vec2(0.5);
    vec2 z1 = (uv - center) * (1.0 + p * 2.0) + center;
    vec2 z2 = (uv - center) * (0.5 + p * 0.5) + center;
    return mix(texture2D(f, z1), texture2D(t, z2), p);
}
`;
