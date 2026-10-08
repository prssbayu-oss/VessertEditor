export default /* glsl */`
vec4 transitionBurn(sampler2D f, sampler2D t, sampler2D noise, vec2 uv, float p) {
    float n = texture2D(noise, uv).r;
    return n < p ? t : f;
}
`;
