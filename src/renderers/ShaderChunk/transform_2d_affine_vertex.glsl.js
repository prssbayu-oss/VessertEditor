export default /* glsl */`
vec2 applyAffine2D(vec2 pos, mat3 matrix) {
    return (matrix * vec3(pos, 1.0)).xy;
}
`;
