export default /* glsl */`
vec2 twirlVortexUV(vec2 uv, float angle) {
    vec2 p = uv - 0.5;
    float r = length(p);
    float a = atan(p.y, p.x) + angle * (1.0 - smoothstep(0.0, 0.5, r));
    return vec2(cos(a), sin(a)) * r + 0.5;
}
`;
