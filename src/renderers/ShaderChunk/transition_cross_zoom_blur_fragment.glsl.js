export default /* glsl */`
vec4 transitionCrossZoomBlur(vec4 f, vec4 t, float p) { return mix(f, t, p); }
`;
