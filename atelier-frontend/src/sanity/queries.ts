// One responsibility: every GROQ query the frontend uses, in one place.
// No component ever writes its own inline GROQ string.

import { defineQuery } from 'next-sanity';

// orderRank is used instead of _createdAt so studio staff can
// manually resequence the project grid from Sanity Studio.
export const FEATURED_PROJECTS_QUERY = defineQuery(`
  *[_type == "project" && featured == true] | order(orderRank asc) [0...4] {
    _id, title, slug, category, location, year,
    coverImage { asset, alt }
  }
`);

export const ALL_PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(orderRank asc) {
    _id, title, slug, category, location, year,
    coverImage { asset, alt }
  }
`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, category, location, year, summary, body,
    coverImage { asset, alt },
    gallery[] { asset, alt }
  }
`);

export const STUDIO_MEMBERS_QUERY = defineQuery(`
  *[_type == "studioMember"] | order(orderRank asc) {
    _id, name, role, bio, photo { asset, alt }
  }
`);
