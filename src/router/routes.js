const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Index.vue")
      },
      {
        path: "tarjet",
        name: "tarjet",
        component: () => import("pages/Tarjet.vue")
      },
      {
        path: "about",
        name: "about",
        component: () => import("pages/About.vue")
      },
      {
        path: "contact",
        name: "contact",
        component: () => import("pages/Contact.vue")
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
