export default /* glsl */`
vec3 adjustPhoto(vec3 c, float bri, float con, float sat) {
    c = (c + bri - 0.5) * con + 0.5;
    return mix(vec3(dot(c, vec3(0.299, 0.587, 0.114))), c, sat);
}
`;
