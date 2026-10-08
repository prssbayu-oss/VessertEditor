export default /* glsl */`
vec3 applyFilmBurn(vec3 color, vec2 uv, float intensity) {
    return color + vec3(1.0, 0.4, 0.1) * (1.0 - uv.x) * intensity;
}
`;
