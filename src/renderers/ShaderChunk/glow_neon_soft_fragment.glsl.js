export default /* glsl */`
vec3 applyNeonGlow(vec3 color, vec3 glowColor, float intensity) {
    return color + glowColor * intensity;
}
`;
