export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62273d622d188bb638adc71e',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-vdh686oa',
                  apiId: '6eacd22a-9151-4b62-9c1a-34ab6f6b9308'
                },
                {
                  buildHookId: '62273d6270836fae551586ad',
                  title: 'Portfolio Website',
                  name: 'sanity-test-web-su5dirjz',
                  apiId: '822459fd-cb8d-4544-a541-d49e1fd1cf83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aidanm1999/sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-web-su5dirjz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
