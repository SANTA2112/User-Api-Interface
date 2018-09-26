import styled from 'styled-components';

export const Form = styled.form`
  border-radius: 15px;
  padding: 15px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  display: inline-flex;
  flex-direction: column;
  width: 290px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  color: rgb(85, 85, 85);


`;

export const Input = styled.input`
  padding: 4px 4px 4px 6px;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 1px 1px inset;
  border: none;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(204, 204, 204);
`;

export const Button = styled.button`
  border: none;
  border: 1px solid rgb(227, 141, 19);
  background-image: linear-gradient(rgb(240, 173, 78) 0px, rgb(235, 147, 22) 100%);
  background-repeat: repeat-x;
  text-shadow: rgba(0, 0, 0, 0.2) 0px -1px 0px;
  box-shadow: rgba(255, 255, 255, 0.15) 0px 1px 0px inset, rgba(0, 0, 0, 0.075) 0px 1px 1px;
  color: rgb(255, 255, 255);
  display: inline-block;
  border-radius: 4px;
  font-size: 14px;
  align-self: flex-end;
  padding: 4px 10px;
  &:hover {
    background-color: rgb(235, 147, 22);
    background-position: 0px -15px;
  }
  &:last-child {
    margin-left: 10px;
  }
`;
