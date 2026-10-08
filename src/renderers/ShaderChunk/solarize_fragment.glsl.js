export default /* glsl */`
vec3 applySolarize(vec3 color, float threshold) {
    return mix(color, 1.0 - color, step(threshold, color));
}
`;
