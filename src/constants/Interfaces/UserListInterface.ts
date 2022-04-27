export type User = {
  avatar: {
    url: string;
  };
  email: string;
  id: string;
  name: {
    first: string;
    last: string;
  };
  __typename: string;
};

export interface Users extends Array<User> {}
