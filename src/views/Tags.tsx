import Layout from '../components/Layout';
import React from 'react';
import {useTags} from '../useTags';
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link} from 'react-router-dom';
import {GrayBgButton} from '../components/GrayBgButton';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;

  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

  }
`;





const Tags = () => {
  const {tags} = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right"/>
            </Link>
          </li>
        )}
      </TagList>
      <Space/>
      <Space/>
      <Center>
        <GrayBgButton>
          添加标签
        </GrayBgButton>
      </Center>
      <Space/>
    </Layout>
  );
};

export default Tags;