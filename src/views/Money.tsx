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
  background-color: #f5f5f5;
  padding:0 16px;
  font-size: 14px;
  >label{
    display: flex;
    justify-content: center;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      display: block;
      border: none;
      background: none;
      width: 100%;
      height: 72px;
    }
  }
  
`;
const CategorySection = styled.section`
  >ul{
    background-color: #c4c4c4;
    font-size: 24px;
    display: flex;
    
    >li{
      width: 50%;
      text-align: center;
      position: relative;
      padding: 16px 0;
      &.selected::after{
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: #333;
        position: absolute;
        bottom:0;
        left: 0;
      }
    }
  }
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
          <li className="selected">
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