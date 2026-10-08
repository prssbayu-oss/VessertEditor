export default /* glsl */`
vec3 applyLightRays(sampler2D tex, vec2 uv, vec2 lightPos, float density) {
    return texture2D(tex, uv).rgb;
}
`;
