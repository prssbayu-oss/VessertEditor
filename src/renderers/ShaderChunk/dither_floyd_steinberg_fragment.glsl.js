export default /* glsl */`
vec3 applyFloydSteinberg(vec3 color) {
    return floor(color * 8.0) / 8.0;
}
`;
