export default /* glsl */`
vec4 applyChromaKey(vec4 color, vec3 keyColor, float tolerance, float softness) {
    float dist = distance(color.rgb, keyColor);
    float alpha = smoothstep(tolerance, tolerance + softness, dist);
    return vec4(color.rgb, color.a * alpha);
}
`;
