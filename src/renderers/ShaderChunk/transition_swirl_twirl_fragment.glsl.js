export default /* glsl */`
vec4 transitionSwirl(sampler2D f, sampler2D t, vec2 uv, float p) { return mix(texture2D(f, uv), texture2D(t, uv), p); }
`;
