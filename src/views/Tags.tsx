import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  >li{
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    padding: 12px 16px 12px 0;
    margin-left: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
const Button = styled.button`
  border: none;
  background-color: #767676;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Space = styled.div`
  height: 16px;
`



const Tags = () => {
  const {tags, setTags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right" />
          </li>
        )}
      </TagList>
      <Space/>
      <Space/>
      <Center>
        <Button>
          添加标签
        </Button>
      </Center>
      <Space/>
    </Layout>
  );
};

export default Tags;