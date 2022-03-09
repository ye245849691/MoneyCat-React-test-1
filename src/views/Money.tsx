import Layout from '../components/Layout';
import React from 'react';
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
  return (
    <MyLayout>
      <TagsSection>
      </TagsSection>
      <NoteSection>

      </NoteSection>
      <CategorySection>

      </CategorySection>
      <NumberPadSection>


      </NumberPadSection>
    </MyLayout>
  );
};
export default Money;