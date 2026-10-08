export default /* glsl */`
float typewriterReveal(float charIndex, float currentCount) {
    return charIndex <= currentCount ? 1.0 : 0.0;
}
`;
