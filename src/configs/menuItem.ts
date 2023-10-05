export const MenuItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: require("../assets/icons/menu/dashboard.svg").default,
    route: "/",
  },
  {
    id: 2,
    title: "مشتریان",
    icon: require("../assets/icons/menu/customer.svg").default,
    activeIcon:require("../assets/icons/menu/customer_a.svg"),
    route: "/customers",
  },
  {
    id: 3,
    title: "مشوق ها",
    icon: require("../assets/icons/menu/dashboard.svg").default,
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
