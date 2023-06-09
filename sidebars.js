/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // {
    //   type: "link",
    //   label: "Learn more",
    //   href: "/doc/example.com",
    // },
    // {
    //   type: "html",
    //   value: "<div onclick='alert()'>www</div>", // The HTML to be rendered
    //   defaultStyle: true, // Use the default menu item styling
    // },
    {
      type: "category",
      label: "教程",
      link: {
        type: "generated-index",
        title: "Docusaurus 教程",
        description: "学习最重要的 Docusaurus 概念！",
        slug: "/category1/docusaurus-guides",
        // keywords: ["guides"],
        // image: "/img/docusaurus.png",
      },
      items: [
        "tutorial-basics/create-a-document",
        // {
        //   type: "link",
        //   label: "Learn more",
        //   href: "/doc/example.com",
        // },
      ],
    },
    { type: "autogenerated", dirName: "." },
  ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
