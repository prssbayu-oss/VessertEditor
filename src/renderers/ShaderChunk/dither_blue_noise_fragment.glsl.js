export default /* glsl */`
vec3 applyBlueNoiseDither(vec3 color, float noise) {
    return color + (noise - 0.5) / 255.0;
}
`;
