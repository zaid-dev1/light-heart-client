export const FILTEROPTIONS = [
  { value: "lashArtist", label: "Lash Artists" },
  { value: "student", label: "Students" },
  { value: "partner", label: "Retail Partners" },
  { value: "educator", label: "Educators" },
  { value: "lightHQ", label: "Light HQ" }
];

export const allRoles = [
  "student",
  "lashArtist",
  "partner",
  "educator",
  "lightHQ",
];

export const SORTOPTIONS = [
  { value: 5, label: "Nearest" },
  { value: 10, label: "10 KM Radius" },
  { value: 20, label: "20 KM Radius" },
  { value: 50, label: "50 KM Radius" },
  { value: 100, label: "100 KM Radius" },
];

export const userTypeIcons = {
  lashArtist: "/assets/svgs/icons/map-star.svg",
  student: "/assets/svgs/icons/map-heart.svg",
  partner: "/assets/svgs/icons/map-cart.svg",
  educator: "/assets/svgs/icons/map-student.svg",
  lightHQ: "/assets/svgs/icons/card-hq.svg",
};

export const userCardIcons = {
  lashArtist: "/assets/svgs/icons/card-star.svg",
  student: "/assets/svgs/icons/card-heart.svg",
  partner: "/assets/svgs/icons/card-retail.svg",
  educator: "/assets/svgs/icons/card-educator.svg",
  lightHQ: "/assets/svgs/icons/card-hq.svg",
};

export const InitialCheckboxText = {
  student: "#2A2A2A",
  lashArtist: "#787777",
  educator: "#787777",
  partner: "#787777",
  lightHQ: "#787777",
};

export const ValueToUserTypeMap = {
  student: "student",
  lashArtist: "lashArtist",
  educator: "educator",
  partner: "partner",
  lightHQ: "lightHQ",
};

export const Radius = 5;

export const PageLimit = 10;
