export default /* glsl */`
vec3 applyBlend(vec3 base, vec3 blend, int mode) {
    if (mode == 0) return blend;
    if (mode == 1) return base * blend; // Multiply
    if (mode == 2) return 1.0 - (1.0 - base) * (1.0 - blend); // Screen
    if (mode == 3) return mix(2.0*base*blend, 1.0-2.0*(1.0-base)*(1.0-blend), step(0.5, base)); // Overlay
    return abs(base - blend); // Difference
}
`;
