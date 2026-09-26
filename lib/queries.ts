export const PRODUCTS_QUERY = `*[_type == "product"] | order(order asc, name asc){
  "slug": slug.current, name, category, art, price, featured, inStock,
  description, story, images,
  "wood": wood->slug.current,
  "specs": specs[]{label, value}
}`;

export const PRODUCT_QUERY = `*[_type == "product" && slug.current == $slug][0]{
  "slug": slug.current, name, category, art, price, featured, inStock,
  description, story, images,
  "wood": wood->slug.current,
  "specs": specs[]{label, value}
}`;

export const PRODUCT_SLUGS_QUERY = `*[_type == "product" && defined(slug.current)].slug.current`;

export const WOODS_QUERY = `*[_type == "wood"] | order(priceIndex desc){
  "slug": slug.current, name, localName, origin, hardness, tone, grain,
  bestFor, notes, priceIndex, swatchFrom, swatchTo, image
}`;

export const PROJECTS_QUERY = `*[_type == "project"] | order(order asc, year desc){
  "slug": slug.current, title, location, year, duration, scope,
  brief, outcome, pieces, woods, art, images
}`;
