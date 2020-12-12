// /**
//  * Layout component that queries for data
//  * with Gatsby's useStaticQuery component
//  *
//  * See: https://www.gatsbyjs.org/docs/use-static-query/
//  */

import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./Header"
// import Footer from "./Footer"
// import "./layout.css"

type Props = {
  children?: any
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="layout">
        {/* <Header/>
                <main>
                    {children}
                </main>
                <Footer/> */}
        <h1>hello from home</h1>
        {children}
      </div>
    </>
  )
}
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
