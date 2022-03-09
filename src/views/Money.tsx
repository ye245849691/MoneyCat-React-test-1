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
    mount:0
  })
  return (
    <MyLayout>
      <TagsSection value={selected.tags} onChange={(tags)=>setSelected({
        ...selected,
        tags:tags
      })}/>
      <NoteSection value={selected.note} onChange={(note)=>setSelected({
        ...selected,
        note:note
      })}/>
      <CategorySection value={selected.category} onChange={(category)=>setSelected({
        ...selected,
        category:category
      })}/>
      <NumberPadSection value={selected.mount} onChange={(mount)=>setSelected({
        ...selected,
        mount:mount
      })}/>
    </MyLayout>
  );
};
export default Money;