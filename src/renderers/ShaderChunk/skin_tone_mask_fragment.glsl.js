export default /* glsl */`
float detectSkinTone(vec3 rgb) {
    float r = rgb.r; float g = rgb.g; float b = rgb.b;
    bool isSkin = (r > 0.35 && g > 0.25 && b > 0.15 && (r - g) > 0.05 && r > b);
    return isSkin ? 1.0 : 0.0;
}
`;
