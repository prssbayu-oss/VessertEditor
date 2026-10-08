export default /* glsl */`
vec3 applyCRTScanlines(vec3 color, vec2 uv, float lines) {
    float scanline = sin(uv.y * lines * 3.14159) * 0.5 + 0.5;
    return color * mix(0.7, 1.0, scanline);
}
`;
