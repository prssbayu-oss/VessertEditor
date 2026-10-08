export default /* glsl */`
vec3 applyColorMatrix(vec3 c, mat4 m) {
    return clamp((m * vec4(c, 1.0)).rgb, 0.0, 1.0);
}
`;
