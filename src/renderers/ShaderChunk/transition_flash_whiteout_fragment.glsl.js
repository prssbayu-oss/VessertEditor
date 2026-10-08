export default /* glsl */`
vec4 transitionFlashWhite(vec4 f, vec4 t, float p) {
    float flash = sin(p * 3.14159);
    return mix(mix(f, t, p), vec4(1.0), flash);
}
`;
