import styled from 'styled-components';
import React, {FC, useState} from 'react';

const Wrapper = styled.section`
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
  const categoryMap = {'-':'支出','+':'收入'}
  const categoryList:('-'|'+')[]= ['-','+'];
  // const [categoryList] = useState<('-'|'+')[]>(['-','+']);
  const [category,setCategory]=useState('-');
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li className={category !== c ? '':'selected' }
              onClick={()=>{setCategory(c)}}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection}