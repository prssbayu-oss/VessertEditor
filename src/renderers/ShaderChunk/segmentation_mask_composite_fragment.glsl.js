export default /* glsl */`
vec4 compositeSegmentedSelfie(vec4 foreground, vec4 background, float mask) {
    return mix(background, foreground, mask);
}
`;
