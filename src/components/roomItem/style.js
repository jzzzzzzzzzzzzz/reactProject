import { themeColor } from "@/assets/theme";

const { default: styled } = require("styled-components");

export const RoomItemWrapper = styled.div`
  box-sizing: border-box;
  /* width: 25%; */
  width: ${props=>props.width};
  padding: 8px;
  .inner,
  .cover,
  img {
    border-radius: 5px;
    width: 100%;
    margin-bottom: 5px;
  }
  .desc {
    margin-bottom: 5px;
    font-size: 12px;
    color: ${(props) => props.color};
    font-weight: 900;
  }
  .price {
    margin-bottom: 5px;
    font-size: 12px;
  }
  img {
    height: 170px;
  }
  .name {
    font-size: 14px;
    color: #484848;
    margin-bottom: 5px;
    font-weight: 900;
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box; 
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }
  .MuiRating-readyOnly {
    margin-top: 2px;
  }
`;
