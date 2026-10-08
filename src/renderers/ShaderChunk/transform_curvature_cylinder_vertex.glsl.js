export default /* glsl */`
vec3 applyCylinderWrap(vec2 pos, float radius) {
    return vec3(sin(pos.x / radius) * radius, pos.y, cos(pos.x / radius) * radius);
}
`;
