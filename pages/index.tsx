import React, { useEffect } from "react";
import "./App.css";
import { Auth } from "aws-amplify";
import MyComponent from "../components/MyComponent";
import withData from "../hoc/withData";
import cookies from "next-cookies";
import { NextPage } from "next";

export const AuthContext = React.createContext({
  token: "",
  userDetails: {} as any
});

interface Props {
  token: string;
  userDetails: any;
}

const App: NextPage<Props> = props => {
  const { token, userDetails } = props;

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => console.log({ user }))
      .catch(err => console.log(err));
  });

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
    <AuthContext.Provider
      value={{
        token,
        userDetails
      }}
    >
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MyComponent />
          <button
            onClick={() => {
              //@ts-ignore
              Auth.federatedSignIn({ provider: "Google" });
            }}
          >
            Sign In
          </button>
          <button onClick={checkUser}>Check User</button>
          <button onClick={signOut}>Sign Out</button>
        </header>
      </div>
    </AuthContext.Provider>
  );
};

App.getInitialProps = async function(ctx) {
  //TODO: Token check for private routes
  //Cookie access token or not
  // if(ctx does not include accessToken then private route){}

  const _cookies = cookies(ctx);
  let accessToken = "";
  let userDetails = {} as any;

  Object.entries(_cookies).forEach(([key, value]) => {
    if (key.includes("accessToken")) accessToken = value;
    if (key.includes("user")) userDetails = value;
  });

  console.log(_cookies);

  return {
    token: accessToken,
    userDetails: userDetails
  };
};

export default withData(App);
