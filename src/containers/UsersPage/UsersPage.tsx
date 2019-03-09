import React from 'react';
import Users from '../../components/Users/Users';
import { withFirebase } from '../../contexts/firebase';

const UsersPage = (props: any) => (
  <div>
    <Users firebase={props.firebase} />
  </div>
);

export default withFirebase(UsersPage);
