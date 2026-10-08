export default /* glsl */`
vec3 applyCameraVignette(vec3 color, vec2 uv, float radius, float intensity) {
    float dist = length(uv - vec2(0.5));
    return color * (1.0 - smoothstep(radius * 0.5, radius, dist) * intensity);
}
`;
