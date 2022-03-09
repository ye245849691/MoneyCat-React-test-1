import styled from 'styled-components';
import React, {FC, useRef} from 'react';

const Wrapper = styled.section`
  background-color: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;

  > label {
    display: flex;
    justify-content: center;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      border: none;
      background: none;
      width: 100%;
      height: 72px;
    }
  }

`;
type Props={
  value:string;
  onChange:(value:string)=>void
}

const NoteSection:FC<Props> = (props)=>{
  const note=props.value;
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur=()=>{
    if(refInput.current!==null){
      props.onChange(refInput.current.value);
    }
  }
  return(
    <Wrapper>
      <label>
        <span>备注</span>
        {/*非受控组件：只在事件触发后得到数值*/}
        <input type="text" placeholder="在这里添加备注" defaultValue={note} onBlur={onBlur} ref={refInput}/>
          {/*受控组件：实时监控数值变化
          <input type="text" placeholder="在这里添加备注" value={note} onChange={e=>setNote(e.target.value)}/>*/}
      </label>
    </Wrapper>

  )
}
export {NoteSection}