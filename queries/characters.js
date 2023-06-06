import gql from 'graphql-tag'

let characterQuery = gql`query CharactersQuery($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      results {
        image
        species
        status
        name
      }
      info {
        count
        next
        pages
        prev
      }
    }
  }`

export default characterQuery