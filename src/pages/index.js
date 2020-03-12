import React from "react"
import Layout from "../components/App/Layout"
import Promo from "../components/Promo/Promo"
import Items from "../components/Items/Items"

export default () => {
  return (
    <Layout>
      <Promo />
      <Items />
    </Layout>
  )
}
