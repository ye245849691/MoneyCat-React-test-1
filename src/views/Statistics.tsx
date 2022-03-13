import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './money_components/CategorySection';
import styled from 'styled-components';
import {recordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import {TagsPopup} from './Statistics_components/TagsPopup';
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
    width: 15%;
  }

  > .note {
    margin-right: auto;
    padding-left: 8px;
    color: #999;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 65%
  }

  > .amount {
    width: 20%;
    display: flex;
    justify-content: flex-start;
  }

`;
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getNames} = useTags();
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [allTagNames, setAllTagNames] = useState<string>('');
  const closeTags = () => {
    setShowAllTags(false);
  };
  const showTags = (ids: number[]) => {
    setAllTagNames(getNames(ids));
    setShowAllTags(true);
  };
  const hash:{[k:string]:recordItem[]}={};
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.map(r=>{
    const key = day(r.createAt).format('YYYY年MM月DD日');
    if(!(key in hash)){
      hash[key]=[];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a,b)=>{
    if(a[0]===b[0]) return 0;
    if(a[0]>b[0]) return -1;
    if(a[0]<b[0]) return 1;
    return 0;
  })
  return (
    <Layout>
      <CategorySection value={category} onChange={(category) => setCategory(category)}/>
      {
        array.map(([data,records])=>
        <div>
          <Header>{data}</Header>
          <div>
            {records.map((item, index) => {
              return (<RecordList key={index}>
                <div className="name" onClick={() => showTags(item.tagIds)}>{
                  item.tagIds.length > 0 ?
                    getNames(item.tagIds) :
                    <span>无标签</span>}
                </div>
                {item.note && <div className="note"> {item.note}</div>}
                <div className="amount"><span className="rmb">￥</span><span className="rmbValue">{item.amount}</span></div>
                {showAllTags &&
                <TagsPopup value={allTagNames} onChange={() => closeTags()}/>
                }
              </RecordList>);
            })}
          </div>
        </div>
        )
      }



    </Layout>
  );
};
export default Statistics;