export default /* glsl */`
vec3 sharpenEyes(vec3 color, float centerLum, float blurLum, float mask, float amount) {
    return color + (centerLum - blurLum) * amount * mask;
}
`;
