import styled from 'styled-components';
import React, {FC} from 'react';

const _CategorySection = styled.section`
  > ul {
    background-color: #c4c4c4;
    font-size: 24px;
    display: flex;

    > li {
      width: 50%;
      text-align: center;
      position: relative;
      padding: 16px 0;

      &.selected::after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
`;
const CategorySection:FC = ()=>{
  return(
    <_CategorySection>
      <ul>
        <li className="selected">
          支出
        </li>
        <li>
          收入
        </li>
      </ul>
    </_CategorySection>
  )
}
export {CategorySection}