// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  tagTypes: ['employee'],
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => `employee`,
      providesTags: ['employee']
    }),
    getEmployeeById: builder.query({
      query: (id) => `employee/${id}`,
    }),
    createEmployee: builder.mutation({
      query: (data) => ({
        url: 'employee',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['employee'],
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['employee'],
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEmployeesQuery, useGetEmployeeByIdQuery, useCreateEmployeeMutation, useDeleteEmployeeMutation } = baseApi