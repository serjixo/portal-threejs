uniform float uPixelRatio;
uniform float uSize;
uniform float uTime;

attribute float aScale;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    modelPosition.y += sin(uTime / 1000.0) * 0.2;
    modelPosition.x += sin(uTime * aScale / 1000.0) * 0.3;
    modelPosition.z += sin(uTime * aScale / 1500.0) * 0.5;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;

//    gl_PointSize = uSize * aScale * uPixelRatio;
    gl_PointSize = uSize *  uPixelRatio;
    gl_PointSize *= (1.0 / -viewPosition.z);
}