// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getStorage } from "./utils";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers) => {
      const token = getStorage("idToken")
      console.log(token)
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
  
      return headers
    },
  }),
  tagTypes: ["Employee"],
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "employee/login",
        method: "POST",
        body: data
      })
    }),
    getEmployees: builder.query({
      query: () => `employee`,
      
      providesTags: ["Employee"],
    }),
    getEmployeeById: builder.query({
      query: (id) => `employee/${id}`,
    }),
    createEmployee: builder.mutation({
      query: (data) => ({
        url: "employee",
        method: "POST",
        body: data,
      }),
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `employee/${id}`,
        method: "DELETE",
      }),
      
      invalidatesTags: ["Employee"],
    }),
    updateEmployee: builder.mutation({
      query: ({ id, data }) => {
        console.log(id, data);
        alert("yo");
        return {
          url: `employee/${id}`,
          method: "PUT",
          body: data,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useUpdateEmployeeMutation,
  useLoginMutation,
} = baseApi;
