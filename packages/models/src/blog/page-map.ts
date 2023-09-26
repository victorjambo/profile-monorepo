export type PageMap<T> = T & {
  kind: string
  name: string
  route: string
  frontMatter: FrontMatter
  meta: Meta
}

export interface FrontMatter {
  title: string
  date: string
  description: string
  tag: string
  author: string
}

export interface Meta {
  title: string
}
