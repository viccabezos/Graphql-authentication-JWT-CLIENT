import { gql } from "@apollo/client";

export const LIST_BOOKS = gql`
  query BookList {
    listBooks {
      title
      author
    }
  }
`;
