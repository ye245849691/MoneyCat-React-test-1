import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './money_components/CategorySection';
import {NotesSection} from './money_components/NotesSection';
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
      <NotesSection>

      </NotesSection>
      <CategorySection>

      </CategorySection>
      <NumberPadSection>


      </NumberPadSection>
    </MyLayout>
  );
};
export default Money;