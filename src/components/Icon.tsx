import React from 'react';
import classname from 'classnames'
// require('icons/money.svg')
// require('icons/chart.svg')
// require('icons/tag.svg')
//require一整个目录
let importAll = (requireContext:__WebpackModuleApi.RequireContext)=> requireContext.keys().forEach(requireContext);
try{
  importAll(require.context('icons',true,/\.svg$/));
}catch(error){
  console.log(error)
}

//Props加上SVG标签的其他属性
type Props={
  name?:string;
} & React.SVGAttributes<SVGElement>

const Icon =(props:Props)=>{
  //...rest表示加入svg的其他属性
  const {name,children,className,...rest} = props
  return (
    <svg className={classname("icon",className)} {...rest}>
      {props.name && <use xlinkHref={"#"+props.name}/>}
    </svg>
  )
}
export default Icon;