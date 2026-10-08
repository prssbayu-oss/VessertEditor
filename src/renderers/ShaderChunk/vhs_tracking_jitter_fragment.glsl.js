export default /* glsl */`
vec2 applyVHSJitter(vec2 uv, float time, float intensity) {
    float offset = sin(uv.y * 40.0 + time * 10.0) * 0.002 * intensity;
    return vec2(uv.x + offset, uv.y);
}
`;
