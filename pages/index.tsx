import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import { Session } from "next-auth"

export default function IndexPage() {
  const { data: session } = useSession()

  console.log(session?.accessToken)
  return (
    <Layout>
      <h1>NextAuth.js Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
      </p>
    </Layout>
  )
}
