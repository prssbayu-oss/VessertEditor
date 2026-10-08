export default /* glsl */`
vec2 applyBarrelDistortion(vec2 uv, float k) {
    vec2 p = uv * 2.0 - 1.0;
    float r2 = dot(p, p);
    vec2 distorted = p * (1.0 + k * r2);
    return (distorted + 1.0) * 0.5;
}
`;
