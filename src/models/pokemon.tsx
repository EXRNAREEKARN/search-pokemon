export interface Pokemon {
  id: string,
  number: string,
  name: string,
  weight: {
    minimum: string,
    maximum: string
  },
  height: {
    minimum: string,
    maximum: string
  },
  classification: string,
  types: [
    string
  ],
  resistant: [
    string
  ],
  weaknesses: [
    string
  ],
  fleeRate: number,
  maxCP: number,
  maxHP: number,
  image: string
  attacks: {
    fast: [
      {
        name: string,
        type: string,
        damage: number
      }
    ],
    special: [
      {
        name: string,
        type: string,
        damage: number
      }
    ]
  }
  Evaluation: Evaluation
}

export interface Evaluation {
  id: string,
  number: string,
  name: string,
  weight: {
    minimum: string,
    maximum: string
  },
  height: {
    minimum: string,
    maximum: string
  },
  classification: string,
  types: [
    string
  ],
  resistant: [
    string
  ],
  weaknesses: [
    string
  ],
  fleeRate: number,
  maxCP: number,
  maxHP: number,
  image: string
  attacks: {
    fast: [
      {
        name: string,
        type: string,
        damage: number
      }
    ],
    special: [
      {
        name: string,
        type: string,
        damage: number
      }
    ]
  }
}