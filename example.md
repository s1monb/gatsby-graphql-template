```import React from "react"
import { useQuery, gql } from "@apollo/client"

const QUERY = gql`
  query {
    users {
      username
    }
  }
`

interface Props {}

const Index: React.FC<Props> = () => {
  const { data, error, loading } = useQuery(QUERY)
  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  return (
    <div className="text-blue-400">
      <p>
        {data.users.map((child, key) => {
          return (
            <span className="" key={key}>
              {child.username}
            </span>
          )
        })}
      </p>
    </div>
  )
}

export default Index
```
