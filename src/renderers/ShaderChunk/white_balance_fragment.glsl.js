export default /* glsl */`
vec3 applyWhiteBalance(vec3 color, float temperature, float tint) {
    color.r += temperature * 0.1;
    color.b -= temperature * 0.1;
    color.g += tint * 0.05;
    return clamp(color, 0.0, 1.0);
}
`;
