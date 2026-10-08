export default /* glsl */`
vec4 transitionPixelCrumble(sampler2D f, sampler2D t, vec2 uv, float p) {
    vec2 pSize = vec2(sin(p * 3.14159) * 0.05);
    vec2 pUv = pSize.x > 0.001 ? floor(uv / pSize) * pSize : uv;
    return mix(texture2D(f, pUv), texture2D(t, pUv), p);
}
`;
