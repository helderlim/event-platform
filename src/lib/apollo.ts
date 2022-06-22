import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4p13gex1c1u01xnaxlaexhk/master',
  cache: new InMemoryCache()
})