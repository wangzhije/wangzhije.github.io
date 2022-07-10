module.exports = [
  {
    title: "Git",
    sidebarDepth: 2,
    collapsable: true,
    children: [
      "Git/",
      {
        title: 'Git',
        sidebarDepth: 1,
        collapsable: true,
        children: [
          "Git/git/githooks",
          "Git/git/license",
        ]
      },
      {
        title: 'Github',
        sidebarDepth: 1,
        collapsable: true,
        children: [
          "Git/github/tokens",
          "Git/github/actions",
        ]
      },
      // 'HTML/metaAll.md',
      // 'HTML/linkAll.md',
    ],
  },
];
