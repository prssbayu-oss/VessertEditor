export default /* glsl */`
vec2 tileUV(vec2 uv, vec2 repeat) { return fract(uv * repeat); }
`;
