export default /* glsl */`
vec2 applyPixelation(vec2 uv, vec2 pixelSize) {
    return floor(uv / pixelSize) * pixelSize;
}
`;
