export default /* glsl */`
vec4 transitionCrossfade(vec4 from, vec4 to, float p) {
    return mix(from, to, p);
}
`;
