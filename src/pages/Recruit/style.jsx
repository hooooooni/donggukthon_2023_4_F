import styled from "styled-components";
import volunmateLogo from "../../assets/Logo/volunmate.svg";
import postWriteBtn from "../../assets/Button/postWrite.svg";
import uploadPost from "../../assets/Button/uploadPost.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid black;
  overflow-y: scroll;
  height: 100%;
`;

const Logo = styled.img.attrs({
  src: volunmateLogo,
})`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

const RecruitTitleBox = styled.div`
  width: 380px;
  height: 98px;
  background-color: #f3fffa;
  padding-top: 18px;
  padding-left: 20px;
`;

const BoldFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0 0 10px 0;
`;

const LightFont = styled.p`
  color: #000;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const ColoredFormFont = styled.p`
  color: #82aa9b;
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.166px; /* 95.611% */
`;

const FormFont = styled.p`
  font-family: Inter;
  font-size: 19px;
  font-style: normal;
  font-weight: 700;
  line-height: 18.166px; /* 95.611% */
`;

const CardBox = styled.div`
  width: 332px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: skyblue;
  overflow-y: scroll;
  border: 1px solid black;
  /* position: relative; */

  /* overflow-x: auto; */
  /* overflow: auto; */
`;

// recruitForm.jsx
const WirteButton = styled.button`
  background-image: url(${postWriteBtn});
  width: 296px;
  height: 43px;
`;

const UploadButton = styled.button`
  background-image: url(${uploadPost});
  background-repeat: no-repeat;
  width: 296px;
  height: 43px;
  padding: 0px;
`;

const CalendarDiv = styled.div`
  width: 233px;
  height: 45px;
  background-color: pink;
  border: 1px solid black;
`;

// 모달 관련
const ModalBox = styled.div`
  width: 333px;
  height: 176px;
  position: fixed;
  top: 35%;
  left: 5%;
  z-index: 100;
  background-color: #fff;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const ModalButton = styled.button`
  width: 145px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 4.459px;
  background-color: #878d91;
`;

const WhiteFont = styled.p`
  color: white;
`;

// Post관련

const PostContainer = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: skyblue;
  overflow-y: scroll;
  border: 1px solid black;
  /* position: relative; */

  /* overflow-x: auto; */
  /* overflow: auto; */
`;

const PostImg = styled.img`
  width: 390px;
  height: 243px;
  background-color: #f3fffa;
  alt="썸네일";
`;

export const S = {
  Container,
  Logo,
  RecruitTitleBox,
  BoldFont,
  LightFont,
  CardBox,
  WirteButton,
};

export const F = {
  ColoredFormFont,
  FormFont,
  CalendarDiv,
  UploadButton,
};

export const M = {
  ModalBox,
  RowBox,
  ModalButton,
  WhiteFont,
};

export const P = {
  PostContainer,
  PostImg,
};
