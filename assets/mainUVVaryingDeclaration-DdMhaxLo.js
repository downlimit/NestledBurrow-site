import{n as e}from"./rolldown-runtime-CNC7AqOf.js";import{n as t,t as n}from"./shaderStore-C5hmi3ce.js";var r,i,a=e((()=>{t(),r=`sceneUboDeclaration`,i=`struct Scene {viewProjection : mat4x4<f32>,
#ifdef MULTIVIEW
viewProjectionR : mat4x4<f32>,
#endif 
view : mat4x4<f32>,
projection : mat4x4<f32>,
vEyePosition : vec4<f32>,};
#define SCENE_UBO
var<uniform> scene : Scene;
`,n.IncludesShadersStoreWGSL[r]||(n.IncludesShadersStoreWGSL[r]=i)})),o,s,c=e((()=>{t(),o=`logDepthDeclaration`,s=`#ifdef LOGARITHMICDEPTH
uniform logarithmicDepthConstant: f32;varying vFragmentDepth: f32;
#endif
`,n.IncludesShadersStoreWGSL[o]||(n.IncludesShadersStoreWGSL[o]=s)})),l,u,d=e((()=>{t(),l=`meshUboDeclaration`,u=`struct Mesh {world : mat4x4<f32>,
visibility : f32,};var<uniform> mesh : Mesh;
#define WORLD_UBO
`,n.IncludesShadersStoreWGSL[l]||(n.IncludesShadersStoreWGSL[l]=u)})),f,p,m=e((()=>{t(),a(),d(),f=`defaultUboDeclaration`,p=`uniform diffuseLeftColor: vec4f;uniform diffuseRightColor: vec4f;uniform opacityParts: vec4f;uniform reflectionLeftColor: vec4f;uniform reflectionRightColor: vec4f;uniform refractionLeftColor: vec4f;uniform refractionRightColor: vec4f;uniform emissiveLeftColor: vec4f;uniform emissiveRightColor: vec4f;uniform vDiffuseInfos: vec2f;uniform vAmbientInfos: vec2f;uniform vOpacityInfos: vec2f;uniform vReflectionInfos: vec2f;uniform vReflectionPosition: vec3f;uniform vReflectionSize: vec3f;uniform vEmissiveInfos: vec2f;uniform vLightmapInfos: vec2f;uniform vSpecularInfos: vec2f;uniform vBumpInfos: vec3f;uniform diffuseMatrix: mat4x4f;uniform ambientMatrix: mat4x4f;uniform opacityMatrix: mat4x4f;uniform reflectionMatrix: mat4x4f;uniform emissiveMatrix: mat4x4f;uniform lightmapMatrix: mat4x4f;uniform specularMatrix: mat4x4f;uniform bumpMatrix: mat4x4f;uniform vTangentSpaceParams: vec2f;uniform pointSize: f32;uniform alphaCutOff: f32;uniform refractionMatrix: mat4x4f;uniform vRefractionInfos: vec4f;uniform vRefractionPosition: vec3f;uniform vRefractionSize: vec3f;uniform vSpecularColor: vec4f;uniform vEmissiveColor: vec3f;uniform vDiffuseColor: vec4f;uniform vAmbientColor: vec3f;
#define ADDITIONAL_UBO_DECLARATION
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`,n.IncludesShadersStoreWGSL[f]||(n.IncludesShadersStoreWGSL[f]=p)})),h,g,_=e((()=>{t(),h=`mainUVVaryingDeclaration`,g=`#ifdef MAINUV{X}
varying vMainUV{X}: vec2f;
#endif
`,n.IncludesShadersStoreWGSL[h]||(n.IncludesShadersStoreWGSL[h]=g)}));export{a,c as i,m as n,d as r,_ as t};