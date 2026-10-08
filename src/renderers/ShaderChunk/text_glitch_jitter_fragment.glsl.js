export default /* glsl */`
vec2 textGlitchJitter(vec2 uv, float time, float amt) {
    return uv + vec2(sin(time * 50.0) * amt, 0.0);
}
`;
