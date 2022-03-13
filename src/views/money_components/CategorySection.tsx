import styled from 'styled-components';
import React, {FC} from 'react';

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

      &.selected{
        background-color:#D8D8D8;
        color:#0080FF;
        ::after {
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
  }
`;
type Props={
  value:'-'|'+',
  onChange:(category:'-'|'+')=>void
}
const CategorySection:FC<Props> = (props)=>{
  const categoryMap = {'-':'支出','+':'收入'}
  const categoryList:('-'|'+')[]= ['-','+'];
  // const [categoryList] = useState<('-'|'+')[]>(['-','+']);
  const category = props.value;
  return(
    <Wrapper>
      <ul>
        {categoryList.map(c=>
          <li className={category !== c ? '':'selected' }
              onClick={()=>{props.onChange(c)}} key={c}
          >
            {categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}
export {CategorySection}