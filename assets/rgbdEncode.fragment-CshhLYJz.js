import{n as e,r as t}from"./rolldown-runtime-CNC7AqOf.js";import{n,t as r}from"./shaderStore-C5hmi3ce.js";import{r as i}from"./helperFunctions-BpTMumSv.js";var a=t({rgbdEncodePixelShaderWGSL:()=>c}),o,s,c,l=e((()=>{n(),i(),o=`rgbdEncodePixelShader`,s=`varying vUV: vec2f;var textureSamplerSampler: sampler;var textureSampler: texture_2d<f32>;
#include<helperFunctions>
#define CUSTOM_FRAGMENT_DEFINITIONS
@fragment
fn main(input: FragmentInputs)->FragmentOutputs {fragmentOutputs.color=toRGBD(textureSample(textureSampler,textureSamplerSampler,input.vUV).rgb);}`,r.ShadersStoreWGSL[o]||(r.ShadersStoreWGSL[o]=s),c={name:o,shader:s}}));export{c as n,a as r,l as t};