export default /* glsl */`
vec3 applyFog(vec3 c, float d, float near, float far, vec3 fogColor) {
    float f = clamp((d - near) / (far - near), 0.0, 1.0);
    return mix(c, fogColor, f);
}
`;
