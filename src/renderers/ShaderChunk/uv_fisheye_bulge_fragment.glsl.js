export default /* glsl */`
vec2 fisheyeBulgeUV(vec2 uv, float amount) {
    vec2 p = uv - 0.5;
    float r = length(p);
    return p * (1.0 + amount * r * r) + 0.5;
}
`;
