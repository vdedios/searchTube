import styled from 'styled-components';

export const VideoWrapper = styled.a`
    display: flex;
    flex-direction: row;
    margin: 7px 40px;
    padding: 7px;
    text-decoration: none;
    border-radius: 4px;
    position: relative;
    &:hover {
        background-color: #e8e8e8;
    }
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
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #465870;
`;

export const Channel = styled.p`
    margin: 3px 0 0 0;
    padding: 3px 0;
    font-family: Helvetica Neue;
    font-size: 12px;
    font-weight: 400;
    color: #8D9798;
`;

export const ViewsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 3px 0 15px 0;
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
    line-height: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #8D9798;
    margin-top: 0px;
`;

export const Published = styled.p`
    font-family: Helvetica Neue;
    font-size: 12px;
    color: #8D9798;
    position: absolute;
    bottom: 7px;
    margin: 0px;
`; 