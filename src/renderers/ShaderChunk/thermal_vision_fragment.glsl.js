export default /* glsl */`
vec3 applyThermalVision(float lum) {
    return vec3(smoothstep(0.5, 1.0, lum), smoothstep(0.2, 0.8, lum), smoothstep(0.0, 0.5, lum));
}
`;
