export default /* glsl */`
vec3 applyBleachBypass(vec3 color, float amount) {
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    vec3 blend = mix(2.0 * color * vec3(lum), 1.0 - 2.0 * (1.0 - color) * (1.0 - lum), step(0.5, lum));
    return mix(color, blend, amount);
}
`;
