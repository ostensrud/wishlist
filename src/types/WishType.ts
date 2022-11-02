export enum Who {
  o,
  k,
  a,
  f,
}

export interface WishType {
  who: Who
  wish: {
    what: string
    description?: string
    link?: string
    showTo?: string
  }
}

export interface AllTheWishes {
  [key: string]: WishType[]
}
