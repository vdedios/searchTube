import styled from 'styled-components';

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 134px;
`;

export const Logo = styled.img`
    width: 333px;
`;

export const Form = styled.form`
    width: 675px;
    height: 45px;
    display: flex;
    margin-top: 28px;
`;

export const Input = styled.input`
    width: 625px;
    height: 45px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #DCE0E0;
    border-right: none;
    padding-left: 18px;
    font-family: Helvetica Neue;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    color: #DCE0E0;
    &:focus {
        outline: none;
    }

`;

export const Button = styled.button`
    width: 48px;
    height: 49px;
    border-radius: 0 5px 5px 0;
    border: none;
    background-color: #68BFCD;
    color: white;
`;

export const MagnifyingGlass = styled.span`
    position:relative;
    display:inline-block;
    border-radius: 30px;
    height: 18px;
    width: 18px;
    border: 1px solid #fff;
    &:after {
        content: "";
        height: 1px;
        width: 7px;
        background: #fff;
        position:absolute;
        top:18px;
        left:15px;
        -webkit-transform: rotate(45deg);
         -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
           -o-transform: rotate(45deg);
      }
`;