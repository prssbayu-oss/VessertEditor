export default /* glsl */`
vec3 applyPortraitBokeh(sampler2D tex, sampler2D depthMap, vec2 uv, float focusDist, float aperture) {
    float d = texture2D(depthMap, uv).r;
    float coc = abs(d - focusDist) * aperture;
    return texture2D(tex, uv).rgb;
}
`;
