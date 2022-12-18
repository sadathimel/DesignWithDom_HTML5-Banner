let innityAppsMaterials = [
  {
    id: "innity-apps-perspective-layer",
    childs: [
      {
        id: "innity-apps-rotation-layer",
        cssClass: ["innity-apps-rotation-layer"],
        childs: [],
      },
    ],
  },

  {
    id: "innity-apps-btn-next",
    cssClass: ["innity-apps-navigation", "type-next"],
    childs: [{ elType: "img", attrs: { src: "arrow.png" } }],
  },
  {
    id: "innity-apps-btn-prev",
    cssClass: ["innity-apps-navigation", "type-prev"],
    childs: [{ elType: "img", attrs: { src: "arrow.png" } }],
  },
];

let innityAppsCloneItem = {
  id: "page-1",
  cssClass: ["right", "js-page"],
  attrs: { "data-clicktag": "clickTAG", "data-time-track": "frame1" },
  childs: [
    {
      elType: "img",
      cssClass: ["background", "innity-apps-layer-background"],
      attrs: { src: "background_1.png" },
    },
    {
      cssClass: ["content", "innity-apps-layer-center", "flex-item"],
      childs: [
        {
          cssClass: ["add-cart"],
          innerHTML: '<svg><use xlink:href="#basket"></use></svg>',
        },
        {
          cssClass: ["info-pallete"],
          childs: [
            {
              cssClass: ["text"],
              childs: [{ elType: "p", innerHTML: "Tealive RM20 Cash Voucher" }],
            },
            {
              cssClass: ["price"],
              childs: [{ elType: "p", innerHTML: "RM20.00" }],
            },
          ],
        },
        {
          cssClass: ["footer-shop-more"],
          childs: [
            { elType: "span", innerHTML: "Shop more at" },
            { elType: "img", cssClass: ["brand"], attrs: { src: "logo.png" } },
          ],
        },
      ],
    },
  ],
};
