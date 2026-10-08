export default /* glsl */`
vec3 applyGrain(vec3 c, vec2 uv, float t, float a) {
    float n = fract(sin(dot(uv * t, vec2(12.9898, 78.233))) * 43758.5453);
    return c + (n - 0.5) * a;
}
`;
