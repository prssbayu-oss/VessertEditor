export default /* glsl */`
vec3 generateFalseColor(float lum) {
    if (lum < 0.1) return vec3(0.0, 0.0, 1.0); // Crushed
    if (lum > 0.9) return vec3(1.0, 0.0, 0.0); // Blown
    return vec3(lum);
}
`;
