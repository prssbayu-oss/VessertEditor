export default /* glsl */`
vec2 applyGlitchTearing(vec2 uv, float time, float intensity) {
    float block = floor(uv.y * 10.0);
    float shift = sin(block + time * 5.0) * intensity;
    return vec2(uv.x + shift, uv.y);
}
`;
