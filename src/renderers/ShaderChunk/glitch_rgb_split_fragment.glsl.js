export default /* glsl */`
vec3 applyRGBGlitch(sampler2D tex, vec2 uv, float amount) {
    return vec3(texture2D(tex, uv + vec2(amount, 0.0)).r, texture2D(tex, uv).g, texture2D(tex, uv - vec2(amount, 0.0)).b);
}
`;
