import React from 'react';

import { Form, Label, Input, Button } from './styled';

const AddUser = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Label>Name: <Input placeholder="Mr. Smith" type="text" name="name" required maxLength='20'/></Label>
    <Label>Address: <Input placeholder="Large st. 13 - 23" type="text" name="address" required maxLength='140'/></Label>
    <Label>Phone: <Input placeholder="+7 (999) 999 - 99 - 99" type="text" name="phone" maxLength='22'/></Label>
    <Button>Add User</Button>
  </Form>
)

export default AddUser
