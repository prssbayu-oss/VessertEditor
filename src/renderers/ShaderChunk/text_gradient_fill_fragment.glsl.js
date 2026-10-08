export default /* glsl */`
vec3 textGradient(vec2 uv, vec3 colorA, vec3 colorB) {
    return mix(colorA, colorB, uv.y);
}
`;
