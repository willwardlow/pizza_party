import Nav from '../Nav/Nav'

function Layout(props) {
  return (
    <Layout>
      <Nav />
      {props.children}
    </Layout>
  )
}

export default Layout
