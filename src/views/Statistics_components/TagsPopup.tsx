import React, {FC} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: fixed;
    border-radius: 12px;
    background-color: #fff;
    top: 25%;
    left: 7.2%;
    width: 85.6%;
    height: 170px;
    z-index: 999;

    > .logo {
      display: block;
      background: #0080FF;
      color: white;
      font-size: 16px;
      font-weight: 700;
      text-align: center;
      padding: 2.7% 0;
      margin: 0 auto;

    }

    > .allTags {
      font-size: 24px;
      margin-top: 8%;
      width: 76%;
      margin-left: 12%;
      text-align: center
    }

    > .but {
      margin-top: 10%;

      > .close {
        text-align: center;
        background: #ff7c50;
        display: block;
        width: 30.4%;
        margin: 0 auto;
        font-size: 16px;
        color: #fff;
        font-weight: 700;
        height: 36px;
        border-radius: 12px;
        line-height: 36px;
      }

    }
`;

type Props = {
  value: string
  onChange: () => void
}

const TagsPopup: FC<Props> = (props) => {

  return (
    <Wrapper>
      <div className="logo">标签</div>
      <div className="allTags">{props.value}</div>
      <div className="but"><span className="close" onClick={props.onChange}>关闭</span></div>
    </Wrapper>
  );
};
export {TagsPopup};