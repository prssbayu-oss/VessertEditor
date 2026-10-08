export default /* glsl */`
vec3 whitenTeeth(vec3 rgb, float mask, float amount) {
    float lum = dot(rgb, vec3(0.299, 0.587, 0.114));
    return mix(rgb, mix(rgb, vec3(lum), amount * 0.5), mask);
}
`;
