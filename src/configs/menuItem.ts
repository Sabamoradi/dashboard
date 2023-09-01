export const MenuItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: require("../assets/icons/dashboard.svg").default,
    route: "/",
  },
  {
    id: 2,
    title: "مشتریان",
    icon: require("../assets/icons/dashboard.svg").default,
    route: "/",
  },
  {
    id: 3,
    title: "مشوق ها",
    icon: require("../assets/icons/dashboard.svg").default,
    route: "/",
    children: [
      {
        id: 31,
        title: "کد تخفیف",
        route: "",
      },
      {
        id: 32,
        title: "کوپن",
        route: "",
      },
    ],
  },
];
