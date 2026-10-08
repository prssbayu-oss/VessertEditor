export default /* glsl */`
vec2 applyKaleidoscopeUV(vec2 uv, float segments) {
    vec2 p = uv - 0.5;
    float a = atan(p.y, p.x);
    float r = length(p);
    a = mod(a, 6.28318 / segments);
    return vec2(cos(a), sin(a)) * r + 0.5;
}
`;
