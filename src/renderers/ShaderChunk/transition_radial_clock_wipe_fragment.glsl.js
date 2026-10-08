export default /* glsl */`
vec4 transitionClockWipe(vec4 f, vec4 t, vec2 uv, float p) {
    float angle = (atan(uv.y - 0.5, uv.x - 0.5) + 3.14159) / 6.28318;
    return angle < p ? t : f;
}
`;
