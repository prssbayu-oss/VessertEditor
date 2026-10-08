export default /* glsl */`
vec3 brightenSkin(vec3 rgb, float skinMask, float amount) {
    return mix(rgb, rgb * (1.0 + amount * 0.2), skinMask);
}
`;
