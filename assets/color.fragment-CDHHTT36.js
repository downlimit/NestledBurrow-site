import{n as e,r as t}from"./rolldown-runtime-CNC7AqOf.js";import{n,t as r}from"./shaderStore-C5hmi3ce.js";import{i,s as a,t as o,u as s}from"./fogFragment-iYXP4rMt.js";var c=t({colorPixelShader:()=>d}),l,u,d,f=e((()=>{n(),a(),i(),s(),o(),l=`colorPixelShader`,u=`#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
#define VERTEXCOLOR
varying vec4 vColor;
#else
uniform vec4 color;
#endif
#include<clipPlaneFragmentDeclaration>
#include<fogFragmentDeclaration>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) {
#define CUSTOM_FRAGMENT_MAIN_BEGIN
#include<clipPlaneFragment>
#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)
gl_FragColor=vColor;
#else
gl_FragColor=color;
#endif
#include<fogFragment>(color,gl_FragColor)
#define CUSTOM_FRAGMENT_MAIN_END
}`,r.ShadersStore[l]||(r.ShadersStore[l]=u),d={name:l,shader:u}}));export{c as n,f as r,d as t};