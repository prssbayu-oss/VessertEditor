export default /* glsl */`
// Real-time bilateral skin smoothing filter for mobile camera
vec3 applyBeautySmoothing(sampler2D image, vec2 uv, vec2 texelSize, float intensity) {
    if (intensity <= 0.0) return texture2D(image, uv).rgb;

    vec3 centerColor = texture2D(image, uv).rgb;
    float centerLum = dot(centerColor, vec3(0.299, 0.587, 0.114));

    vec3 accumColor = centerColor;
    float accumWeight = 1.0;

    // 5-point cross sample
    vec2 offsets[4];
    offsets[0] = vec2(texelSize.x * 2.0, 0.0);
    offsets[1] = vec2(-texelSize.x * 2.0, 0.0);
    offsets[2] = vec2(0.0, texelSize.y * 2.0);
    offsets[3] = vec2(0.0, -texelSize.y * 2.0);

    for (int i = 0; i < 4; i++) {
        vec3 sampleColor = texture2D(image, uv + offsets[i]).rgb;
        float sampleLum = dot(sampleColor, vec3(0.299, 0.587, 0.114));
        float diff = abs(centerLum - sampleLum);

        // Edge preserving threshold: preserve sharp edges (eyes, lips), smooth skin tones
        float weight = exp(-diff * 8.0);
        accumColor += sampleColor * weight;
        accumWeight += weight;
    }

    vec3 smoothed = accumColor / accumWeight;
    return mix(centerColor, smoothed, intensity);
}
`;
