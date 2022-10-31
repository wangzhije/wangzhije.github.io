module.exports = {
  title: "JavaScript",
  sidebarDepth: 3,
  collapsable: true,
  children: [
    "JavaScript/start.md",
    {
      title: "ECMAScript",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        "JavaScript/ecmascript/syntax.md",
        "JavaScript/ecmascript/object.md",
        "JavaScript/ecmascript/function.md",
        "JavaScript/ecmascript/oop.md",
      ],
    },
    {
      title: "BOM",
      sidebarDepth: 2,
      collapsable: true,
      children: [],
    },
    {
      title: "DOM",
      sidebarDepth: 2,
      collapsable: true,
      children: [
        // 'JavaScript/DOM/event'
      ],
    },
    "JavaScript/comment.md",
    "JavaScript/",
  ],
};
