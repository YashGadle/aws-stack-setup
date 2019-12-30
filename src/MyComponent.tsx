import React from "react";
import { useQuery } from "@apollo/react-hooks";
import * as queries from "./graphql/queries";
import gql from "graphql-tag";

const MyComponent = () => {
  const { data, loading, error } = useQuery(
    gql(`query Blogs {
        listBlogs {
          items{
            id
            name
          }
        }
      }`)
  );

  if (loading) return <span>Loading...</span>;

  if (error) return <span>Error...</span>;

  return (
    <div>
      <span>{JSON.stringify(data)}</span>
    </div>
  );
};

export default MyComponent;
