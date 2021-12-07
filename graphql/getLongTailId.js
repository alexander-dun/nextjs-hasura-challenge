export const getLongTailIdQuery = `
  query getLongTailId($tail: String!) {
    long_tails(where: {tail: {_eq: $tail}}) {
     json_id
   }
  }`;
