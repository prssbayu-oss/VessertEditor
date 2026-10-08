export default /* glsl */`
vec4 transitionIris(vec4 from, vec4 to, vec2 uv, float p) {
    float dist = distance(uv, vec2(0.5));
    return dist < p * 0.707 ? to : from;
}
`;
