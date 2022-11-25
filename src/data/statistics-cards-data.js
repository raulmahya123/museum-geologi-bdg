import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "blue",
    icon: ChartBarIcon,
    title: "Vetebrata",
    value: "53,252",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "pink",
    icon: ChartBarIcon,
    title: "Invetebrata",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last week",
    },
  },
  {
    color: "green",
    icon: ChartBarIcon,
    title: "Bebatuan",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than last week",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Artefak",
    value: "103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than last week",
    },
  },
];

export default statisticsCardsData;
