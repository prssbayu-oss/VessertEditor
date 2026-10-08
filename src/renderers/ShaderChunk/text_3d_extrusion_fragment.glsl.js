export default /* glsl */`
vec4 text3DExtrusion(sampler2D sdf, vec2 uv, vec2 dir, int layers, vec4 fill, vec4 shade) {
    for (int i = layers; i > 0; i--) {
        if (texture2D(sdf, uv - dir * float(i)).a > 0.5) return shade;
    }
    return texture2D(sdf, uv).a > 0.5 ? fill : vec4(0.0);
}
`;
