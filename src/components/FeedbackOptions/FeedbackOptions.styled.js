import styled from '@emotion/styled';

export const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionButton = styled.button`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 15px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  width: 200px;
  border-radius: 12px;
  background-color: white;
  border: none;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
