export default /* glsl */`
float circleAvatarMask(vec2 uv) {
    return 1.0 - smoothstep(0.48, 0.5, distance(uv, vec2(0.5)));
}
`;
