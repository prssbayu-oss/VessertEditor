export default /* glsl */`
vec4 karaokeSweep(vec4 baseColor, vec4 activeColor, vec2 uv, float sweepProgress) {
    return uv.x < sweepProgress ? activeColor : baseColor;
}
`;
