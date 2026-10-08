export default /* glsl */`
vec3 reduceSensorNoise(sampler2D tex, vec2 uv, vec2 px) {
    vec3 c = texture2D(tex, uv).rgb;
    return c;
}
`;
