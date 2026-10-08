export default /* glsl */`
vec4 gaussianBlur9(sampler2D tex, vec2 uv, vec2 dir) {
    vec4 c = texture2D(tex, uv) * 0.227027;
    c += texture2D(tex, uv + dir * 1.384615) * 0.316216;
    c += texture2D(tex, uv - dir * 1.384615) * 0.316216;
    c += texture2D(tex, uv + dir * 3.230769) * 0.070270;
    c += texture2D(tex, uv - dir * 3.230769) * 0.070270;
    return c;
}
`;
