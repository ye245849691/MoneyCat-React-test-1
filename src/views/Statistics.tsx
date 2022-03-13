import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money_components/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';

const RecordList = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  font-family: inherit;

  > .name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100px;
  }

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }

  > .popup {
    position: fixed;
    border-radius: 12px;
    background-color: #fff;
    top: 25%;
    left: 7.2%;
    width: 85.6%;
    height: 170px;
    z-index: 999;

    > .logo {
      display: block;
      background: #0080FF;
      color: white;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      padding: 2.7% 0;
      margin: 0 auto;

    }

    > .allTags {
      font-size: 24px;
      margin-top: 8%;
      width: 76%;
      margin-left: 12%;
      text-align: center
    }

    > .but {
      margin-top: 10%;
      > .close {
        text-align: center;
        background: #ff7c50;
        display: block;
        width: 30.4%;
        margin: 0 auto;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        height: 36px;
        border-radius: 12px;
        line-height: 36px;
      }
    }
  }
`;


const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getNames} = useTags();
  const [showAllTags,setShowAllTags] = useState<boolean>(false)
  const [allTagNames,setAllTagNames] = useState<string>('')
  const closeTags = () => {
    setShowAllTags(false)
  };
  const showTags = (ids:number[]) => {
    setAllTagNames(getNames(ids));
    setShowAllTags(true);
  };
  return (
    <Layout>
      <CategorySection value={category} onChange={(category) => setCategory(category)}/>
      {records.map((item, index) => {
        return (<RecordList key={index}>
          <div className="name" onClick={()=>showTags(item.tagIds)}>{getNames(item.tagIds)}</div>
          {item.note && <div className="note"> {item.note}</div>}
          <div className="amount">￥{item.amount}</div>
          {/*<hr/>*/}
          {/*{day(item.createAt).format('YYYY年MM月DD日')}*/}
          {showAllTags &&
          <div className="popup">
              <div className="logo">标签</div>
              <div className="allTags">{allTagNames}</div>
              <div className="but"><span className="close" onClick={closeTags}>关闭</span></div>
          </div>
          }
        </RecordList>);
      })}


    </Layout>
  );
};
export default Statistics;