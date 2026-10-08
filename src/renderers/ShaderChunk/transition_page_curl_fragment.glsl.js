export default /* glsl */`
vec4 transitionPageCurl(vec4 f, vec4 t, vec2 uv, float p) { return mix(f, t, p); }
`;
