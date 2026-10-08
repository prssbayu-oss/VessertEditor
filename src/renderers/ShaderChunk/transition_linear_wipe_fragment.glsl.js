export default /* glsl */`
vec4 transitionWipe(vec4 from, vec4 to, vec2 uv, float p) {
    return uv.x < p ? to : from;
}
`;
