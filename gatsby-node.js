exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    //path: "/using-dsg",
    path: "/index",
    //component: require.resolve("./src/templates/using-dsg.js"),
    component: require.resolve("./src/pages/index.tsx"),
    context: {},
    defer: true,
  })
}
