export default /* glsl */`
vec4 applyStickerOutline(sampler2D tex, vec2 uv, vec2 step, vec3 outlineColor) {
    vec4 c = texture2D(tex, uv);
    float a = texture2D(tex, uv + vec2(step.x, 0.0)).a + texture2D(tex, uv - vec2(step.x, 0.0)).a +
              texture2D(tex, uv + vec2(0.0, step.y)).a + texture2D(tex, uv - vec2(0.0, step.y)).a;
    if (c.a < 0.5 && a > 0.5) return vec4(outlineColor, 1.0);
    return c;
}
`;
