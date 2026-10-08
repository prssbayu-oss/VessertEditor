export default /* glsl */`
vec3 applyPosterize(vec3 color, float levels) {
    return floor(color * levels) / levels;
}
`;
