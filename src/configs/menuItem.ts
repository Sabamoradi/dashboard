export const MenuItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: require("../assets/icons/dashboard.svg").default,
    route: "/",
  },
  {
    id: 2,
    title: "مشوق ها",
    icon: require("../assets/icons/dashboard.svg").default,
    route: "/",
    children: [
      {
        id: 21,
        title: "کد تخفیف",
        route: "",
      },
      {
        id: 22,
        title: "کوپن",
        route: "",
      },
    ],
  },
];
