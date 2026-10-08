export default /* glsl */`
vec4 textOutline(float dist, float outlineWidth, vec4 textColor, vec4 outlineColor) {
    float textAlpha = smoothstep(0.5 - 0.05, 0.5 + 0.05, dist);
    float outlineAlpha = smoothstep(0.5 - outlineWidth - 0.05, 0.5 - outlineWidth + 0.05, dist);
    return mix(vec4(outlineColor.rgb, outlineAlpha * outlineColor.a), textColor, textAlpha);
}
`;
