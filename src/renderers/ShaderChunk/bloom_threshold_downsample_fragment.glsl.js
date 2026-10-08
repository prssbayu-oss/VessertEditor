export default /* glsl */`
vec3 extractBloomHighlight(vec3 color, float threshold) {
    return max(vec3(0.0), color - threshold);
}
`;
