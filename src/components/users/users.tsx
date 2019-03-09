import React, { Component } from 'react';
import Firebase from '../../services/firebase.service';
import Button from 'react-bootstrap/Button';

interface IProps {
  firebase: any;
}

interface IState {
  name: string;
}

class Users extends Component<IProps, IState> {
  componentDidMount() {
    Firebase.instance.firestore
      .collection('users')
      .get()
      .then(() => {
        console.log('s');
      })
      .catch(() => {
        console.log('er');
      });

    // this.props.firebase
    //   .collection('users')
    //   .then((u: any) => {
    //     console.log(u);
    //   })
    //   .catch(() => {
    //     console.log('error');
    //   });
  }

  render() {
    console.log('users');
    return (
      <div>
        <Button variant="primary">CLick me</Button>
        {this.props.firebase ? (
          <div>I've access to and render something.</div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default Users;
