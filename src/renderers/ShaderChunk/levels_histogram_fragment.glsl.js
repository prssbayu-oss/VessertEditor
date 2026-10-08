export default /* glsl */`
vec3 applyLevels(vec3 color, float inBlack, float inGamma, float inWhite) {
    color = clamp((color - inBlack) / max(0.001, inWhite - inBlack), 0.0, 1.0);
    return pow(color, vec3(1.0 / max(0.001, inGamma)));
}
`;
