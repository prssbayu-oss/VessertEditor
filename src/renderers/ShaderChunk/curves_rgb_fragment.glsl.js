export default /* glsl */`
vec3 applyToneCurve(vec3 color, float contrastPivot, float contrastSlope) {
    return pow(color / contrastPivot, vec3(contrastSlope)) * contrastPivot;
}
`;
