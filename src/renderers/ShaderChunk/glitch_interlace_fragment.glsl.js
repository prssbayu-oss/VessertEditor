export default /* glsl */`
vec3 applyInterlacing(vec3 color, vec2 uv, float height) {
    bool isOdd = mod(floor(uv.y * height), 2.0) == 0.0;
    return isOdd ? color * 0.8 : color;
}
`;
