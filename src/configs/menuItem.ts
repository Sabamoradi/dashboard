export const MenuItems = [
  {
    id: 1,
    title: "داشبورد",
    icon: require("../assets/icons/menu/dashboard.svg").default,
    route: "/",
    baseRoute: true,
  },
  {
    id: 2,
    title: "لیست مشتریان",
    icon: require("../assets/icons/menu/customer.svg").default,
    activeIcon: require("../assets/icons/menu/customer_a.svg"),
    route: "/customers",
    baseRoute: true,
  },
  {
    id: 3,
    title: "دسته بندی",
    icon: require("../assets/icons/menu/customer.svg").default,
    activeIcon: require("../assets/icons/menu/customer_a.svg"),
    route: "/category",
    baseRoute: true,
  },
  {
    id: 4,
    title: "مشوق ها",
    icon: require("../assets/icons/menu/dashboard.svg").default,
    route: "/",
    baseRoute: false,
    children: [
      {
        id: 41,
        title: "کد تخفیف",
        route: "/incentiveDiscount",
      },
      {
        id: 42,
        title: "کوپن",
        route: "",
      },
      {
        id: 43,
        title: "هدیه اعتباری",
        route: "/incentiveCreditGift",
      },
      {
        id: 44,
        title: "کش‌بک",
        route: "",
      },
      {
        id: 45,
        title: "امتیاز",
        route: "",
      },
      {
        id: 46,
        title: "جایزه",
        route: "/incentiveGift",
      },
    ],
  },
  {
    id: 5,
    title: "گزارش ها",
    icon: require("../assets/icons/menu/dashboard.svg").default,
    route: "/",
    baseRoute: false,
    children: [
      {
        id: 51,
        title: "کوپن ها",
        route: "",
      },
      {
        id: 52,
        title: "کش بک ها",
        route: "",
      },
      {
        id: 53,
        title: "جایزه ها",
        route: "",
      },
    ],
  },
  {
    id: 6,
    title: "برچسب پویایی",
    icon: require("../assets/icons/menu/customer.svg").default,
    activeIcon: require("../assets/icons/menu/customer_a.svg"),
    baseRoute: false,
    children: [
      {
        id: 61,
        title: "درجه",
        route: "",
      },
      {
        id: 62,
        title: "برچسب",
        route: "",
      },
    ],
  },
  {
    id: 7,
    title: "هوش تجاری",
    icon: require("../assets/icons/menu/dashboard.svg").default,
    route: "/",
    baseRoute: false,
    children: [
      {
        id: 71,
        title: "ارزیابی مشتریان از دست رفته",
        route: "",
      },
      {
        id: 72,
        title: "ارزیابی وفاداری مشتریان",
        route: "",
      },
      {
        id: 73,
        title: "روندهای خودکار",
        route: "",
      },
    ],
  },
  {
    id: 8,
    title: "نظرات",
    icon: require("../assets/icons/menu/customer.svg").default,
    activeIcon: require("../assets/icons/menu/customer_a.svg"),
    route: "/comments",
    baseRoute: true,
  },
];
