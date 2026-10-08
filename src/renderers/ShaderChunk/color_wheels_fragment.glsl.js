export default /* glsl */`
vec3 applyColorWheels(vec3 color, vec3 lift, vec3 gamma, vec3 gain) {
    vec3 c = color * (gain - lift) + lift;
    return pow(max(c, vec3(0.0)), 1.0 / max(gamma, vec3(0.001)));
}
`;
