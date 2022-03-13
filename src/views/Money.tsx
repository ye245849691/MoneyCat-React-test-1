import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money_components/CategorySection';
import {NoteSection} from './money_components/NoteSection';
import {NumberPadSection} from './money_components/NumberPadSection';
import {TagsSection} from './money_components/TagsSection';
import {useRecords} from '../hooks/useRecords';



const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const defaultRecord={
  tagIds:[] as number[],
  note:'',
  category:'-' as '-'|'+',
  amount:0
};

const Money = () => {
  const [selected,setSelected]=useState(defaultRecord);
  const {addRecord} = useRecords();
  const submit=()=>{
   if(addRecord(selected)){
     alert('账单添加成功！')
     setSelected(defaultRecord);
   }
  }
  //typeof selected获取selected的类型，
  //Partial表示obj是selected对象类型的一部分
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj
    })
  }
  return (
    <MyLayout>
      <TagsSection value={selected.tagIds} onChange={(tagIds)=>onChange({tagIds})}/>
      <NoteSection value={selected.note} onChange={(note)=>onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category)=>onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={(amount)=>onChange({amount})} onOk={submit}/>
    </MyLayout>
  );
};
export default Money;