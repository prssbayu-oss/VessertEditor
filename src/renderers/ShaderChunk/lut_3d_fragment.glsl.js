export default /* glsl */`
vec4 sample3DLUT(sampler2D lutTexture, vec3 color, float intensity) {
    float blue = color.b * 63.0;
    vec2 q1 = vec2(floor(blue) - floor(floor(blue) / 8.0) * 8.0, floor(floor(blue) / 8.0));
    vec2 q2 = vec2(ceil(blue) - floor(ceil(blue) / 8.0) * 8.0, floor(ceil(blue) / 8.0));
    vec2 p1 = (q1 * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.rg);
    vec2 p2 = (q2 * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.rg);
    vec4 c1 = texture2D(lutTexture, p1);
    vec4 c2 = texture2D(lutTexture, p2);
    return mix(vec4(color, 1.0), mix(c1, c2, fract(blue)), intensity);
}
`;
