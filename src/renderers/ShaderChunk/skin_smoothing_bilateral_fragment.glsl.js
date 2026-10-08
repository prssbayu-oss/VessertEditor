export default /* glsl */`
vec3 smoothSkin(sampler2D tex, vec2 uv, vec2 stepSize, float strength) {
    vec3 c = texture2D(tex, uv).rgb;
    vec3 acc = c; float w = 1.0;
    for (int i = -2; i <= 2; i++) {
        for (int j = -2; j <= 2; j++) {
            vec3 s = texture2D(tex, uv + vec2(float(i), float(j)) * stepSize).rgb;
            float dw = exp(-distance(c, s) * 10.0);
            acc += s * dw; w += dw;
        }
    }
    return mix(c, acc / w, strength);
}
`;
