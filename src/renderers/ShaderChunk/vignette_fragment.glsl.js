export default /* glsl */`
// Smooth radial vignette falloff for story framing
vec3 applyVignette(vec3 color, vec2 uv, float radius, float softness, float intensity) {
    if (intensity <= 0.0) return color;
    vec2 position = uv - vec2(0.5);
    float dist = length(position);
    float vignette = smoothstep(radius, radius - softness, dist);
    return mix(color, color * vignette, intensity);
}
`;
