export const resolvers = {
  Query: {
    books: () => {
      return [
        {
          id: 1,
          name: "Suman",
        },
      ];
    },
    authors: () => {
      [
        {
          id: 1,
          title: "new book",
        },
      ];
    },
  },
};
