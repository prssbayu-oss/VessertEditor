export default /* glsl */`
vec3 applyHalftone(vec3 color, vec2 uv, float freq) {
    float dot = distance(fract(uv * freq), vec2(0.5));
    return color * step(dot, 0.35);
}
`;
