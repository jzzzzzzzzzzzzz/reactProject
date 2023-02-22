import { themeColor } from "@/assets/theme";
import styled from "styled-components";
export const HrightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: end;
  color: ${themeColor.textColor1};
  .btns {
    width: 100px;
    display: flex;
    line-height: 32px;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
  }
  .profile {
    position: relative;
    border: 1px solid #dddddd;
    height: 32px;
    border-radius: 21px;
    color: #717171;
    display: flex;
    width: 58px;
    padding: 5px 5px 5px 12px;
    line-height: 32px;
    align-items: center;
    justify-content: space-around;
    ${themeColor.boxShadow}
    .panel {
      
      background-color: white;
      font-weight: normal;
      width: 220px;
      height: 250px;
      box-shadow: 0 0 2px 2px rgba(0,0,0,.2);
      position: fixed;
      right: 40px;
      top:73px;
      border-radius: 10px;
      /* padding-left: 10px; */
      text-indent: 18px;
      .top {
        padding-top: 5px;
        display: flex;
        flex-direction: column;
        height: 40%;
        border-bottom: 1px solid  rgba(0,0,0,.18);
        div:first-child {
          font-weight: 900;
          color:${themeColor.textColor2}
        }
        div {
          line-height: 50px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
      .btm {
        height: 60%;
        display: flex;
        flex-direction: column;
        div {
          line-height: 50px;
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`;
