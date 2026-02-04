import {
  FiBook,
  FiLayers,
  FiUsers,
  FiCalendar,
  FiHeart,
  FiMessageCircle,
  FiDollarSign,
  FiShoppingCart,
  FiAward,
  FiUser,
  FiUserPlus,
  FiSettings,
} from "react-icons/fi";
import { MdSchool } from "react-icons/md";

const sideMenuData = [
  {
    id: 1,
    title: "My courses",
    link: "/student/courses",
    Icon: FiBook,
  },
  {
    id: 2,
    title: "Course bundles",
    link: "/student/course-bundles",
    Icon: FiLayers,
  },
  {
    id: 3,
    title: "Bootcamp",
    link: "/student/bootcamp",
    Icon: MdSchool,
  },
  {
    id: 4,
    title: "My teams",
    link: "/student/teams",
    Icon: FiUsers,
  },
  {
    id: 5,
    title: "Booked tuition",
    link: "/student/booked-tuition",
    Icon: FiCalendar,
  },
  {
    id: 6,
    title: "My ebooks",
    link: "/student/ebooks",
    Icon: FiBook,
  },
  {
    id: 7,
    title: "Wishlist",
    link: "/student/wishlist",
    Icon: FiHeart,
  },
  {
    id: 8,
    title: "Messages",
    link: "/student/messages",
    Icon: FiMessageCircle,
  },
  {
    id: 9,
    title: "Affiliate history",
    link: "/student/affiliate-history",
    Icon: FiDollarSign,
  },
  {
    id: 10,
    title: "Payout settings",
    link: "/student/payout-settings",
    Icon: FiSettings,
  },
  {
    id: 11,
    title: "Purchase history",
    link: "/student/purchase-history",
    Icon: FiShoppingCart,
  },
  {
    id: 12,
    title: "Badges",
    link: "/student/badges",
    Icon: FiAward,
  },
  {
    id: 13,
    title: "Profile",
    link: "/student/profile",
    Icon: FiUser,
  },
  {
    id: 14,
    title: "Instructor followings",
    link: "/student/instructor-followings",
    Icon: FiUserPlus,
  },
  {
    id: 15,
    title: "Account",
    link: "/student/account",
    Icon: FiSettings,
  },
];

export { sideMenuData };
