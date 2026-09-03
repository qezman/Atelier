// One responsibility: a typed fetch wrapper with revalidation tags,
// so every page-level fetch call is consistent.

import { client } from './client';
import type { QueryParams } from 'next-sanity';
import { FEATURED_PROJECTS_QUERY, ALL_PROJECTS_QUERY, PROJECT_BY_SLUG_QUERY, STUDIO_MEMBERS_QUERY } from './queries';
import { FALLBACK_PROJECTS, FALLBACK_MEMBERS } from './seedData';

function resolveFallback<T>(query: string, params: QueryParams = {}): T {
  if (query === FEATURED_PROJECTS_QUERY) {
    return FALLBACK_PROJECTS.filter((p) => p.featured).slice(0, 4) as unknown as T;
  }
  if (query === ALL_PROJECTS_QUERY) {
    return FALLBACK_PROJECTS as unknown as T;
  }
  if (query === PROJECT_BY_SLUG_QUERY) {
    const project = FALLBACK_PROJECTS.find((p) => p.slug.current === params.slug);
    return (project || null) as unknown as T;
  }
  if (query === STUDIO_MEMBERS_QUERY) {
    return FALLBACK_MEMBERS as unknown as T;
  }
  return [] as unknown as T;
}

export const sanityFetch = async <T>(
  query: string,
  params: QueryParams = {},
  tags: string[] = []
): Promise<T> => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

  if (!projectId || projectId === 'dummy-id') {
    return resolveFallback<T>(query, params);
  }

  try {
    return await client.fetch<T>(query, params, { next: { tags } });
  } catch (error) {
    console.warn('Sanity fetch encountered an issue, serving fallback content:', error);
    return resolveFallback<T>(query, params);
  }
};
