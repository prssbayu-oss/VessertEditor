export default /* glsl */`
vec3 applyExposure(vec3 color, float ev) {
    return color * exp2(ev);
}
`;
