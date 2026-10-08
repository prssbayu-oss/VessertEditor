export default /* glsl */`
vec2 applyWaterReflectionUV(vec2 uv) {
    return vec2(uv.x, uv.y < 0.5 ? uv.y : 1.0 - uv.y);
}
`;
