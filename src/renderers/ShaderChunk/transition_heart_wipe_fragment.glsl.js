export default /* glsl */`
vec4 transitionHeartWipe(vec4 f, vec4 t, vec2 uv, float p) {
    vec2 p_pos = (uv - vec2(0.5)) * 2.0;
    float a = atan(p_pos.x, p_pos.y) / 3.14159;
    float r = length(p_pos);
    float h = r - (sin(a * 3.14159) * 0.3);
    return h < p ? t : f;
}
`;
