import styled from 'styled-components';
import React, {FC} from 'react';

const _NotesSection = styled.section`
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

const NotesSection:FC = ()=>{
  return(
    <_NotesSection>
      <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"/>
      </label>
    </_NotesSection>

  )
}
export {NotesSection}