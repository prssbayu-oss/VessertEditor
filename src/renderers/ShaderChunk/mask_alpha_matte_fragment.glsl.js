export default /* glsl */`
vec4 applyAlphaMatte(vec4 layer, float matteAlpha) {
    return vec4(layer.rgb, layer.a * matteAlpha);
}
`;
