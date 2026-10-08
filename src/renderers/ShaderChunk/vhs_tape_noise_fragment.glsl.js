export default /* glsl */`
vec3 applyVHSTapeNoise(vec3 color, vec2 uv, float time) {
    float noise = fract(sin(dot(uv + time, vec2(12.9898, 78.233))) * 43758.5453);
    return color + (noise - 0.5) * 0.1;
}
`;
