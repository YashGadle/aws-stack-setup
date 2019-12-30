import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import AWSAppSyncClient from "aws-appsync";
import { Auth } from "aws-amplify";
import config from "./aws-exports";
import MyComponent from "./MyComponent";

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  disableOffline: true,
  auth: {
    //@ts-ignore
    type: config.aws_appsync_authenticationType,
    // credentials: () => Auth.currentCredentials(),
    jwtToken: async () =>
      (await Auth.currentSession()).getAccessToken().getJwtToken()
  },
  complexObjectsCredentials: () => Auth.currentCredentials()
});

const App: React.FC = () => {
  const checkUser = function() {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(err => console.log(err));
  };

  const signOut = function() {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyComponent />
          <button
            onClick={() => {
              //@ts-ignore
              Auth.federatedSignIn();
            }}
          >
            Sign In
          </button>
          <button onClick={checkUser}>Check User</button>
          <button onClick={signOut}>Sign Out</button>
        </header>
      </div>
    </ApolloProvider>
  );
};

export default App;
