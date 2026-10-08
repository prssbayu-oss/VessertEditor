export default /* glsl */`
vec3 adjustVibrance(vec3 color, float vibrance) {
    float maxColor = max(color.r, max(color.g, color.b));
    float minColor = min(color.r, min(color.g, color.b));
    float sat = maxColor - minColor;
    float lum = dot(color, vec3(0.299, 0.587, 0.114));
    return mix(vec3(lum), color, 1.0 + vibrance * (1.0 - sat));
}
`;
