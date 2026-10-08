export default /* glsl */`
vec2 waveTextBaseline(vec2 pos, float time, float freq, float amp) {
    return vec2(pos.x, pos.y + sin(pos.x * freq + time) * amp);
}
`;
