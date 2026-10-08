export default /* glsl */`
vec3 applyCrosshatch(vec3 color, vec2 uv) {
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    return vec3(lum > 0.5 ? 1.0 : 0.0);
}
`;
