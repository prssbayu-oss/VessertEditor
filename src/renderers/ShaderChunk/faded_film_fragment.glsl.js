export default /* glsl */`
vec3 applyFadedFilm(vec3 color, float liftBlacks, float compressHighlights) {
    color = mix(vec3(liftBlacks), color, 1.0 - liftBlacks * 0.5);
    color = min(color, vec3(1.0 - compressHighlights * 0.2));
    return color;
}
`;
