import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money_components/CategorySection';
import {NoteSection} from './money_components/NoteSection';
import {NumberPadSection} from './money_components/NumberPadSection';
import {TagsSection} from './money_components/TagsSection';



const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const Money = () => {
  const [selected,setSelected]=useState({
    tags:[] as string[],
    note:'',
    category:'-' as '-'|'+',
    amount:0
  })
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
      {selected.tags.join(',')}
      {selected.note}
      {selected.category}
      {selected.amount}
      <TagsSection value={selected.tags} onChange={(tags)=>onChange({tags})}/>
      <NoteSection value={selected.note} onChange={(note)=>onChange({note})}/>
      <CategorySection value={selected.category} onChange={(category)=>onChange({category})}/>
      <NumberPadSection value={selected.amount} onChange={(amount)=>onChange({amount})}/>
    </MyLayout>
  );
};
export default Money;