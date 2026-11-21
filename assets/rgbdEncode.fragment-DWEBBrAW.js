import{n as e,r as t}from"./rolldown-runtime-CNC7AqOf.js";import{n,t as r}from"./shaderStore-C5hmi3ce.js";import{r as i}from"./helperFunctions-DpkT7aTU.js";var a=t({rgbdEncodePixelShader:()=>c}),o,s,c,l=e((()=>{n(),i(),o=`rgbdEncodePixelShader`,s=`varying vec2 vUV;uniform sampler2D textureSampler;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
void main(void) 
{gl_FragColor=toRGBD(texture2D(textureSampler,vUV).rgb);}`,r.ShadersStore[o]||(r.ShadersStore[o]=s),c={name:o,shader:s}}));export{c as n,a as r,l as t};