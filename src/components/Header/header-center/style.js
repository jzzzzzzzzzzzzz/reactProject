import { themeColor } from '@/assets/theme'
import styled from 'styled-components'
export const HcenterWrapper = styled.div`
    width: 300px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dddddd;
    height: 32px;
    padding: 5px 8px 5px 30px;
    border-radius: 21px;
    cursor: pointer;
    ${themeColor.boxShadow}
    .icon {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-color: ${themeColor.primayColor};
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
    }
`