export default /* glsl */`
vec4 applyStickerDropShadow(sampler2D tex, vec2 uv, vec2 offset, vec4 shadowColor) {
    vec4 s = texture2D(tex, uv - offset);
    vec4 c = texture2D(tex, uv);
    return mix(vec4(shadowColor.rgb, s.a * shadowColor.a), c, c.a);
}
`;
