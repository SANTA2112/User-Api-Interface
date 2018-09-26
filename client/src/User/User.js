import React from 'react';
import { UserBlock, Label, Info, ButtonWrap } from './styled';
import { Button, Input } from "../AddUser/styled";

const User = ({ name, address, phone, deleteUser, id, isEditable, changeEditMode, handleCancel, handleSave }) => (
  <UserBlock>
    <form action="" onSubmit={handleSave}>
      <Info><Label>Name: </Label>{ isEditable ? <Input type="text" defaultValue={name} name="name" required/> : name }</Info>
      <Info><Label>Address: </Label>{ isEditable ? <Input type="text" defaultValue={address} name="address" required/> : address }</Info>
      <Info><Label>Phone: </Label>{ isEditable ? <Input type="text" defaultValue={phone} name="phone" /> : phone }</Info>
      {
        isEditable && (
          <ButtonWrap>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button>Save</Button>
          </ButtonWrap>
        )
      }
    </form>
    <ButtonWrap>
      { !isEditable && <Button onClick={() => changeEditMode(true)}>Edit</Button> }
      <Button onClick={() => deleteUser(id)}>Delete</Button>
    </ButtonWrap>
  </UserBlock>
)

export default User
