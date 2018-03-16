import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/myBlog'

export default () => {
  const httpLink = new HttpLink({ uri: GRAPHCMS_API })

  // auth token
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1MjExNzIwNzQsImNsaWVudElkIjoiY2l2Z29zNmNqMDE5MjAxODRucDAxZGRkMiIsInByb2plY3RJZCI6ImNqZThzbXkwaTFidzAwMTc0ejl4Z2VlbHMiLCJwZXJtYW5lbnRBdXRoVG9rZW5JZCI6ImNqZXRla3NraDF3b3UwMTA1cnFtZG9vOGQifQ.1K-mwQ8DUaQJKirqudwSxrj2Bx8dilnTSbXNxV7NlaA'

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // operation.setContext()
    operation.setContext({
      headers: { Authorization: `bearer ${token}` }
    })
    return forward(operation)
  })
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}
