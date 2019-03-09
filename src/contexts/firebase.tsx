import React, { ComponentType } from 'react';

const FirebaseContext = React.createContext({});

export const withFirebase = (InComponent: ComponentType) => (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <InComponent {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;
