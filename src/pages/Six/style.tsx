import styled from "styled-components";

export const SixCss = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 120px;
  .mainCard {
    padding: 2.5rem;
  }
  .avatar{
    width:120px;
    height:120px;
  }
  .chat1{
    width:814px;
    height:90px;
  }
  .chat2{
    width:814px;
    height:210px;

  }
  .chatMe{
    width:606px;
    height:60px;
  }


  .mainCard2{
    padding:64px 50px;
    display:flex;
    column-gap:1rem;
  }
  .meetingCard{
    padding:40px 24px;
    width:357px;
    height:464px;
    border: 3px solid #5137FF;
    border-radius: 24px;
    display:flex;
    flex-direction:column;
    row-gap:1rem;
  }
  .title{
    color:var(--yellow);
    font-weight: 400;
    font-size: 32px;
    line-height: 100%;
  }
  .theme{
    color:var(--purple);
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
  }
  .text{
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
  }
`;
