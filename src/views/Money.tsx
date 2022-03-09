import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  >ol{
    margin: 0 -12px;
    >li{
      display: inline-block;
      border-radius: 18px;
      background-color: #D9D9D9;
      padding: 3px 18px;
      margin: 8px 12px;
      font-size: 14px;
    }
  }
  >button{
    background: none;
    border: none;
    border-bottom: 1px #333 solid;
    padding: 2px 4px;
    margin-top: 3px;
    color: #666;
  }
`;
const NotesSection = styled.section`
`;
const CategorySection = styled.section`
`;
const NumberPadSection = styled.section`
`;

const Money=()=> {
  return(
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
        <span>备注</span>
        <input type="text" placeholder="在这里添加备注"/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>
            支出
          </li>
          <li>
            收入
          </li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>100</div>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>ok</button>
        <button>0</button>
        <button>.</button>
      </NumberPadSection>
    </Layout>
  );
}
export default Money;