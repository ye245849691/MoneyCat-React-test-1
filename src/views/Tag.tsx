import React, {FC, useRef} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {useTags} from '../hooks/useTags';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {GrayBgButton} from '../components/GrayBgButton';
import styled from 'styled-components';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TopBar = styled.header`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;

  > .icon {
    width: 24px;
    height: 24px;
  }
`;
const TagLabel = styled.div`
  background-color: white;
  margin: 8px 0;
  padding: 12px 8px;

  > label {
    display: flex;
    align-items: center;

    > span {
      padding: 0 8px;
    }

    > input {
      border: none;
      font-size: 16px;
    }
  }
`;


type Param = {
  id: string;
}

const Tag: FC = () => {
  const {findTag, updateTag, deleteTag} = useTags();
  const {id} = useParams<Param>();
  const tag = findTag(parseInt(id));
  const history = useHistory();
  const onClickBack=()=>{
    history.goBack();
  }
  const refInput = useRef<HTMLInputElement>(null)
  const onBlur=(value:string)=>{
    if(refInput.current!==null){
      updateTag(tag.id, value)
    }
  }

  return (
    <Layout>
      <TopBar>
        <Icon onClick={onClickBack} name="left"/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {
        tag ?
          (
            <div>
              <TagLabel>
                <label>
                  <span>标签名</span>
                  <input type="text" defaultValue={tag.name} onBlur={(e)=>onBlur(e.target.value)} ref={refInput}/>

                  {/*<input type="text" value={tag.name} onChange={(e) => updateTag(tag.id, e.target.value)}/>*/}
                </label>
              </TagLabel>
              <Space/>
              <Center>
                <GrayBgButton onClick={() => deleteTag(tag.id)}>删除标签</GrayBgButton>
              </Center>
              <Space/>
            </div>


          )
          : (
            <Center>
              不存在
            </Center>)
      }

    </Layout>
  );
};

export {Tag};