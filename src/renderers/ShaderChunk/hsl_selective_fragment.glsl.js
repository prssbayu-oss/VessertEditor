export default /* glsl */`
vec3 adjustSelectiveHue(vec3 rgb, float targetHue, float hueRange, float hueShift) {
    vec3 hsv = rgb2hsv(rgb);
    float dist = abs(hsv.x - targetHue);
    if (dist < hueRange) {
        float factor = 1.0 - (dist / hueRange);
        hsv.x = fract(hsv.x + hueShift * factor);
    }
    return hsv2rgb(hsv);
}
`;
