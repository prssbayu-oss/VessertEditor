export default /* glsl */`
vec3 applyCinematicContrast(vec3 color, float strength) {
    return smoothstep(0.0, 1.0, color);
}
`;
