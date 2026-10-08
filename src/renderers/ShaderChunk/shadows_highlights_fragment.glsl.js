export default /* glsl */`
vec3 adjustShadowsHighlights(vec3 color, float shadows, float highlights) {
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    float sFactor = 1.0 - smoothstep(0.0, 0.5, lum);
    float hFactor = smoothstep(0.5, 1.0, lum);
    return clamp(color + (sFactor * shadows) + (hFactor * highlights), 0.0, 1.0);
}
`;
