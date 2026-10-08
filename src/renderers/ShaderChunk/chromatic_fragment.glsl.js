export default /* glsl */`
// RGB chromatic dispersion / lens fringe
vec3 sampleChromatic(sampler2D image, vec2 uv, vec2 direction, float amount) {
    if (amount <= 0.0) return texture2D(image, uv).rgb;
    vec2 offset = direction * amount;
    float r = texture2D(image, uv + offset).r;
    float g = texture2D(image, uv).g;
    float b = texture2D(image, uv - offset).b;
    return vec3(r, g, b);
}
`;
