export default /* glsl */`
vec3 sampleTetrahedralLUT(sampler2D lut, vec3 rgb) {
    vec3 c = clamp(rgb, 0.0, 1.0) * 15.0;
    vec3 i0 = floor(c);
    vec3 f = fract(c);
    return mix(texture2D(lut, i0.xy / 16.0).rgb, texture2D(lut, (i0.xy + 1.0) / 16.0).rgb, f.x);
}
`;
