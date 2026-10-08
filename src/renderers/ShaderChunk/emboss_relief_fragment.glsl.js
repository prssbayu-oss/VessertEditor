export default /* glsl */`
vec3 applyEmboss(sampler2D tex, vec2 uv, vec2 step) {
    vec3 c1 = texture2D(tex, uv - step).rgb;
    vec3 c2 = texture2D(tex, uv + step).rgb;
    return (c1 - c2) + vec3(0.5);
}
`;
