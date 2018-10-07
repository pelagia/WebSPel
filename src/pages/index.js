import React from "react"
import Layout from "../components/layout"
import List from '../components/list'

export default () => (
  <Layout headerText='hello'>
    <List />
    <div>
      <h3>This is a site for the most dangerous people :P</h3>
      <div>
        <img
          src="http://news.goodcause.gr/images/blog/alligoria-tou-spilaiou-platonas.jpg"
          alt="plato cave"
        />
      </div>
    </div>
  </Layout>
)
