//void main()
//{
//    gl_Position =  vec4(position, 1.0);
//}
void main() {
    vec4 modelPosition = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//    vec4 viewPosition = modelPosition * viewMatrix;
//    vec4 projectionPosition = viewPosition * projectionMatrix;
    gl_Position = modelPosition;
    gl_PointSize = 40.0;
}