export default /* glsl */`
vec3 reinhardToneMapping(vec3 color) {
    return color / (color + vec3(1.0));
}
`;
