export default /* glsl */`
vec3 compositeBloom(vec3 base, vec3 bloom, float intensity) {
    return base + bloom * intensity;
}
`;
