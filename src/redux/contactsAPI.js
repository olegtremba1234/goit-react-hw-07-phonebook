import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({
        baseUrl:'https://63a9856f594f75dc1db818b0.mockapi.io/',
    }),
    endpoints: builder => ({
        getContactsApi: builder.query({
            query: () => 'contacts',
            providesTags: result =>
            result ? [
                ...result.map(({id}) => ({type: 'Contacts', id})),
                {type: 'Contacts', id: 'LIST'}
                ] : [
                {type: 'Contacts', id: 'LIST'}
                ],
            }),
            addContact: builder.mutation({
                query: body => ({
                    url: `contacts`,
                    method: 'POST',
                    body,
                }),
                invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
            }),
            deleteContact: builder.mutation({
                query: contactId => ({
                    url: `contacts/${contactId}`,
                    method: 'DELETE',
                }),
                invalidatesTags: [{ type: 'Contacts', id: 'LIST' }],
            }),
    }),
});

export const {
    useGetContactsApiQuery,
    useAddContactMutation,
    useDeleteContactMutation,
  } = contactsApi;