import{n as e}from"./rolldown-runtime-CNC7AqOf.js";import{n as t,t as n}from"./shaderStore-C5hmi3ce.js";var r,i,a=e((()=>{t(),r=`sceneUboDeclaration`,i=`layout(std140,column_major) uniform;uniform Scene {mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif 
mat4 view;mat4 projection;vec4 vEyePosition;};
`,n.IncludesShadersStore[r]||(n.IncludesShadersStore[r]=i)})),o,s,c=e((()=>{t(),o=`logDepthDeclaration`,s=`#ifdef LOGARITHMICDEPTH
uniform float logarithmicDepthConstant;varying float vFragmentDepth;
#endif
`,n.IncludesShadersStore[o]||(n.IncludesShadersStore[o]=s)})),l,u,d=e((()=>{t(),l=`meshUboDeclaration`,u=`#ifdef WEBGL2
uniform mat4 world;uniform float visibility;
#else
layout(std140,column_major) uniform;uniform Mesh
{mat4 world;float visibility;};
#endif
#define WORLD_UBO
`,n.IncludesShadersStore[l]||(n.IncludesShadersStore[l]=u)})),f,p,m=e((()=>{t(),a(),d(),f=`defaultUboDeclaration`,p=`layout(std140,column_major) uniform;uniform Material
{vec4 diffuseLeftColor;vec4 diffuseRightColor;vec4 opacityParts;vec4 reflectionLeftColor;vec4 reflectionRightColor;vec4 refractionLeftColor;vec4 refractionRightColor;vec4 emissiveLeftColor;vec4 emissiveRightColor;vec2 vDiffuseInfos;vec2 vAmbientInfos;vec2 vOpacityInfos;vec2 vReflectionInfos;vec3 vReflectionPosition;vec3 vReflectionSize;vec2 vEmissiveInfos;vec2 vLightmapInfos;vec2 vSpecularInfos;vec3 vBumpInfos;mat4 diffuseMatrix;mat4 ambientMatrix;mat4 opacityMatrix;mat4 reflectionMatrix;mat4 emissiveMatrix;mat4 lightmapMatrix;mat4 specularMatrix;mat4 bumpMatrix;vec2 vTangentSpaceParams;float pointSize;float alphaCutOff;mat4 refractionMatrix;vec4 vRefractionInfos;vec3 vRefractionPosition;vec3 vRefractionSize;vec4 vSpecularColor;vec3 vEmissiveColor;vec4 vDiffuseColor;vec3 vAmbientColor;
#define ADDITIONAL_UBO_DECLARATION
};
#include<sceneUboDeclaration>
#include<meshUboDeclaration>
`,n.IncludesShadersStore[f]||(n.IncludesShadersStore[f]=p)})),h,g,_=e((()=>{t(),h=`mainUVVaryingDeclaration`,g=`#ifdef MAINUV{X}
varying vec2 vMainUV{X};
#endif
`,n.IncludesShadersStore[h]||(n.IncludesShadersStore[h]=g)}));export{a,c as i,m as n,d as r,_ as t};