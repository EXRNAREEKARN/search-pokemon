import { gql } from "graphql-tag";

export const SEARCH_POKEMON = gql`
query pokemon($name: String){
  pokemon(name: $name){
    id
    number
    name
    classification
    types
    resistant
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }
      image
    }
  }
}
`