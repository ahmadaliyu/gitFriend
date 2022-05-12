import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GITHUB_API_URL } from ".././../baseUrl";

export const githubApi = createApi({
  reducerPath: "gitApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GITHUB_API_URL,
  }),
  endpoints: (builder) => ({
    fetchRepos: builder.mutation({
      query: (username) => `/${username}/repos`,
      transformResponse: (response) => response,
    }),

    fetchOrganizations: builder.mutation({
      query: (username) => `/${username}/orgs`,
      transformResponse: (response) => response,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useFetchReposMutation,
  useFetchOrganizationsMutation,
} = githubApi;
