export default /* glsl */`
vec3 applySplitToning(vec3 color, vec3 shadowColor, vec3 highlightColor, float balance) {
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    float t = smoothstep(0.5 - balance * 0.5, 0.5 + (1.0 - balance) * 0.5, lum);
    vec3 tone = mix(shadowColor, highlightColor, t);
    return mix(color, color * tone, 0.5);
}
`;
