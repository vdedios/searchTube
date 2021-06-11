import styled from 'styled-components';

export const VideoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 14px 40px
`;

export const Thumbnail = styled.img`
    height: 135px;
    width: 240px;
`;

export const InfoWrapper = styled.div`
    margin-left: 14px;
    width: 600px;
    height: 135px;
`;

export const Title = styled.h1`
    font-family: Helvetica Neue;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    margin: 0px;
    color: #465870;
`;

export const Channel = styled.p`
    margin: 3px 0 0 0;
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 400;
    color: #8D9798;
`;

export const ViewsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;


export const Views = styled.p`
    margin: 0 10px 0 0;
    font-family: Georgia;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    text-align: right;
    color: #E73E48;
`;

export const ViewsLabel = styled.p`
    margin: 0px;
    font-family: Helvetica Neue;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    text-align: left;
    color: #8D9798;
`;

export const Description = styled.p`
    font-family: OpenSans;
    font-size: 12px;
    letter-spacing: 0px;
    color: #8D9798;
`;