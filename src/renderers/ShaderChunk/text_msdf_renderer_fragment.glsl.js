export default /* glsl */`
float sampleMSDF(sampler2D msdf, vec2 uv, float pxRange) {
    vec3 s = texture2D(msdf, uv).rgb;
    float sigDist = max(min(s.r, s.g), min(max(s.r, s.g), s.b)) - 0.5;
    return clamp(sigDist * pxRange + 0.5, 0.0, 1.0);
}
`;
