import styled from 'styled-components';
import React, {FC} from 'react';
import {useTags} from 'useTags';
import {createId} from '../../lib/createId';

const Wrapper = styled.section`
  background-color: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;

    > li {
      display: inline-block;
      border-radius: 18px;
      background-color: #D9D9D9;
      padding: 3px 18px;
      margin: 8px 12px;
      font-size: 14px;
      &.selected{
        color: orange;
      }
    }
  }

  > button {
    background: none;
    border: none;
    border-bottom: 1px #333 solid;
    padding: 2px 4px;
    margin-top: 3px;
    color: #666;
  }
`;

type Props={
  value:number[],
  onChange:(selected:number[])=>void
}
const TagsSection:FC<Props> = (props)=>{
  const {tags,setTags} = useTags();
  const selectedTags=props.value;
  const onAddTag = ()=>{
    const tagName = window.prompt('请输入新的标签名')
    if(tagName!== null){
      setTags([...tags, {id:createId(),name:tagName}]);
    }
  }
  const onToggleTag=(tagId:number)=>{
    const index = selectedTags.indexOf(tagId);
    if(index>=0){
      props.onChange(selectedTags.filter(t=>t!==tagId))
    }else{
      props.onChange([...selectedTags,tagId])
    }
  }
  return(
    <Wrapper>
      <ol>
        {tags.map(tag=><li key={tag.id} onClick={()=>onToggleTag(tag.id)}
          className={selectedTags.indexOf(tag.id)>=0?'selected':''}
        >{tag.name}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection}