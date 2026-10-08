export default /* glsl */`
vec3 applyLensDispersion(sampler2D tex, vec2 uv, float dispersion) {
    vec2 dir = (uv - 0.5) * dispersion;
    return vec3(texture2D(tex, uv + dir).r, texture2D(tex, uv).g, texture2D(tex, uv - dir).b);
}
`;
