export default /* glsl */`
vec2 warpLiquify(vec2 uv, vec2 center, float radius, float strength) {
    vec2 dir = uv - center;
    float dist = length(dir);
    if (dist < radius) {
        float f = 1.0 - (dist / radius);
        return uv - dir * (f * strength);
    }
    return uv;
}
`;
