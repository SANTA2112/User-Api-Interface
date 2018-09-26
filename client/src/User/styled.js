import styled from 'styled-components'

export const UserBlock = styled.div`
  border-radius: 15px;
  padding: 15px;
  box-shadow: inset 0 1px 3px rgba(0,0,0,.05), 0 1px 0 rgba(255,255,255,.1);
  background-color: #f5f5f5;
  border: 1px solid #e3e3e3;
  display: inline-flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
`;

export const Label = styled.span`
  display: inline-block;
  width: 70px;
  font-weight: 600;
`;

export const Info = styled.p`
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;
