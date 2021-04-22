import gql from 'graphql-tag';

export default gql`
    type Course {
        ciccio: String
        id: ID!
    }
    type Query {
        numberSix: Int! # Should always return the number 6 when queried
        numberSeven: Int! # Should always return 7
    }
`;
