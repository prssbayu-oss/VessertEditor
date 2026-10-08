export default /* glsl */`
vec3 applyGradientLeak(vec3 color, vec2 uv, vec3 leakColor, float intensity) {
    float dist = distance(uv, vec2(1.0, 0.0));
    return color + leakColor * max(0.0, 1.0 - dist) * intensity;
}
`;
