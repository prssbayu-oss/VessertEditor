export default /* glsl */`
vec2 applyCornerPin(vec2 pos, mat3 homography) {
    vec3 p = homography * vec3(pos, 1.0);
    return p.xy / p.z;
}
`;
