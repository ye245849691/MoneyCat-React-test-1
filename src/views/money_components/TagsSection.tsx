import styled from 'styled-components';
import React, {FC, useState} from 'react';

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
const TagsSection:FC = ()=>{

  const [tags,setTags] = useState<string[]>(['衣','食','住','行']);
  const [selectedTags,setSelectedTags] = useState<string[]>([]);
  const onAddTag = ()=>{
    const tagName = window.prompt('请输入新的标签名')
    if(tagName!== null){
      setTags([...tags,tagName]);
    }
  }
  const onToggleTag=(tag:string)=>{
    const index = selectedTags.indexOf(tag);
    if(index>=0){
      setSelectedTags(selectedTags.filter(t=>t!==tag))
    }else{
      setSelectedTags([...selectedTags,tag])
    }
  }
  return(
    <Wrapper>
      <ol>
        {tags.map(tag=><li key={tag} onClick={()=>onToggleTag(tag)}
          className={selectedTags.indexOf(tag)>=0?'selected':''}
        >{tag}</li>)}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  )
}
export {TagsSection}