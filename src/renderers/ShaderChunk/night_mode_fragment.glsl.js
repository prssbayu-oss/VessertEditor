export default /* glsl */`
vec3 applyNightVision(vec3 color) {
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    return vec3(0.1, lum * 1.4, 0.2);
}
`;
