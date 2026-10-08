export default /* glsl */`
vec4 textNeonGlow(float dist, vec4 textColor, vec3 glowColor, float glowRadius) {
    float textA = smoothstep(0.48, 0.52, dist);
    float glowA = smoothstep(0.5 - glowRadius, 0.5, dist);
    return mix(vec4(glowColor, glowA * 0.8), textColor, textA);
}
`;
