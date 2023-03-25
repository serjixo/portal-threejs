void main() {
    vec4 modelPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = modelPosition;
    gl_PointSize = 40.0;
}