export default /* glsl */`
// High quality procedural animated film grain
float randomGrain(vec2 p, float time) {
    vec2 K1 = vec2(
        23.14069263277926, // e^pi
        2.665144142690225  // 2^sqrt(2)
    );
    return fract(cos(dot(p + time, K1)) * 12345.6789);
}

vec3 applyFilmGrain(vec3 color, vec2 uv, float time, float amount) {
    if (amount <= 0.0) return color;
    float grain = (randomGrain(uv, time) - 0.5) * amount;
    return clamp(color + grain, 0.0, 1.0);
}
`;
