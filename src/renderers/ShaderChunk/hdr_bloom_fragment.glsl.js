export default /* glsl */`
vec3 applyBloomComposite(vec3 base, vec3 bloom, float intensity) {
    return base + bloom * intensity;
}
`;
