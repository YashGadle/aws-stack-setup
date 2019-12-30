import React, { useContext } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { AuthContext } from "../pages";

const MyComponent = () => {
  const { token } = useContext(AuthContext);

  return (
    <div>
      <Query
        context={{
          headers: {
            Authorization: token
          }
        }}
        query={gql(`
        query Blogs {
          listBlogs {
            items{
              id
              name
            }
          }
        }
      `)}
      >
        {data => {
          return null;
        }}
      </Query>
    </div>
  );
};

export default MyComponent;
