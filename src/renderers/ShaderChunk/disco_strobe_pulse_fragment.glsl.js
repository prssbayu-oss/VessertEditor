export default /* glsl */`
vec3 applyStrobePulse(vec3 color, float time, float bpm) {
    float pulse = sin(time * bpm * 0.1047) * 0.5 + 0.5;
    return color * (0.8 + 0.4 * pulse);
}
`;
