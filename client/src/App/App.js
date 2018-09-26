import React from 'react';

import { Wrapper, Card } from "./styled";

import User from '../User';
import AddUser from '../AddUser';



const App = ({ users }) => (console.log(users),
  <Wrapper>
    <div>
      <AddUser />
    </div>
    <Card>
      {
        users.map(({ _id, name, address, phone }) => <User key={_id} name={name} address={address} phone={phone} id={_id}/>)
      }
    </Card>

  </Wrapper>
)

export default App;

