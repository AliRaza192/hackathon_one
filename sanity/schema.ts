import { type SchemaTypeDefinition } from 'sanity'
import Products from './lib/Products'
// import Products from "./Products"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Products],
}
