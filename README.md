# Things to check in next js

1. Revalidate the DB calls in React Server Component (ISR implementation) - done
   implementaton - create a function -> query the db -> return async data with type -> set route config revaliation = number. ISR will revalidate after set time.
2. Managing Global States Cilent vs Server Component
   - Context API - will only work with client component
   - Redux
3. View Screen with Filter Condition in Popup
   - Complete Client Component based with API routes - can be done with client component
   - Server Component based with URL param filter based
     implementation - this can be done with server component
   - For Complex multiple filter condition
   - Show loader while searching
     - this can be done with using Suspense with a key
4. Sharing data Server to Client Components
5. Sharing data client to Server Components
6. Showing loading
   - normal api call in client component
   - while streaming a server component in suspense
     - with adding a key to the suspense component
