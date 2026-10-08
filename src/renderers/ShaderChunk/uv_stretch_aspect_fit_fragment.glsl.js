export default /* glsl */`
vec2 aspectFitUV(vec2 uv, vec2 contentSize, vec2 containerSize) {
    float rC = contentSize.x / contentSize.y;
    float rB = containerSize.x / containerSize.y;
    return uv;
}
`;
