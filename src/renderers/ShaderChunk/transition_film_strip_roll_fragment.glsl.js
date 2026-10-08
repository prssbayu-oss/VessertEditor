export default /* glsl */`
vec4 transitionFilmRoll(sampler2D f, sampler2D t, vec2 uv, float p) {
    vec2 u = vec2(uv.x, fract(uv.y + p));
    return p < 0.5 ? texture2D(f, u) : texture2D(t, u);
}
`;
