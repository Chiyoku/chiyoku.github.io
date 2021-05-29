exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query MyQuery {
      mds: allMdx {
        list: edges {
          md: node {
            slug
          }
        }
      }
    }
  `);
  data.mds.list.forEach(({ md: { slug } }) => {
    actions.createPage({
      path: `post/${slug}`,
      component: require.resolve('./src/templates/post.tsx'),
      context: { slug },
    });
  });
};
