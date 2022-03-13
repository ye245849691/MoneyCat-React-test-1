import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money_components/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import {TagsPopup} from './Statistics_components/TagsPopup'
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
    width: 60px;
  }

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
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
          <TagsPopup value={allTagNames} onChange={()=>closeTags()} />
          }
        </RecordList>);
      })}


    </Layout>
  );
};
export default Statistics;