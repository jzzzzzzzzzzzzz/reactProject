import mainImg from '@/assets/image/cover_01.jpeg'
const { default: styled } = require("styled-components");
export const HomeBannerWrapper = styled.div`
    height: 500px;
    background: url(${mainImg}) center/cover;
`