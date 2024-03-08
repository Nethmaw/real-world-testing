/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}  */

const sidebars = {
 
  tutorialSidebar:
  [
    'intro', 'description','system-features',
    {
      type: 'category',
      label: 'Navigation Bar',
      link: {
        type: 'generated-index',
      },collapsed: true,
      items: [
        'user-interface/home-page','user-interface/article',
        'user-interface/sign-in','user-interface/sign-up','user-interface/your-feed',
        'user-interface/new-article','user-interface/settings','user-interface/profile',
        'user-interface/author-profile',
      ],
    },
      'non-functional-requirements','bugs',
  ],


  api: [
    {
      type: 'category',
      label: 'Swagger',
      link: {
        type: 'generated-index',
      },collapsed: false,
    
      items: [
      'api/Swagger/api_swagger_user_and_authentication',
      'api/Swagger/api_swagger_articles',
      'api/Swagger/api_swagger_comments' ,
      'api/Swagger/api_swagger_favorites' ,
      'api/Swagger/api_swagger_profile' ,
      'api/Swagger/api_swagger_tags' ,
      ]
    
    }
  ],
};

export default sidebars;
