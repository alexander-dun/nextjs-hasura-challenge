import { gql } from '@apollo/client';

export const GetTailIdQuery = gql`
    query getLongTailId($tail: String!) {
        long_tails(where: {tail: {_eq: $tail}}) {
            json_id
        }
    }
`;
