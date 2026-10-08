export default /* glsl */`
vec3 applyMonochromeFilm(vec3 color, vec3 weights, float contrast) {
    float mono = dot(color, weights);
    mono = (mono - 0.5) * contrast + 0.5;
    return clamp(vec3(mono), 0.0, 1.0);
}
`;
