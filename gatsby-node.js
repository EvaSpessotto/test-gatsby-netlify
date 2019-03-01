const path = require("path");
const _ = require("lodash")

const createTagPages = (createPage, posts) => {
  const singleTagIndexTemplate = path.resolve('src/templates/singleTagIndex.js')

  const postsByTag = {}

  posts.forEach(({node}) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = []
        }

        postsByTag[tag].push(node)
      })
    }
  })

  const tags  = Object.keys(postsByTag)
  
  tags.forEach(tagName => {
    const posts = postsByTag[tagName]

    createPage({
      path: `/tags/${tagName}`,
      component: singleTagIndexTemplate,
      context: {
        posts, 
        tagName
      }
    })
  })
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/blogTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
              tags
              thumbnail
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) return Promise.reject(result.errors);

    const posts = result.data.allMarkdownRemark.edges
    createTagPages(createPage, posts)

    posts.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        tags: node.frontmatter.tags,
        component: postTemplate,
      });
    });

    let tags = []

    posts.forEach(edge => {
      if (_.get(edge, 'node.frontmatter.tags')) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    tags = _.uniq(tags)


  });
};


