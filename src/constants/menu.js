import { adminRoot } from "./defaultValues";
// import { UserRole } from "../helpers/authHelper"

const data = [
  {
    id: 'dashboards',
    icon: 'iconsminds-shop-4',
    label: 'Lobby',
    to: `${adminRoot}/dashboards/default`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: 'applications',
    icon: 'simple-icon-screen-desktop',
    label: 'Sessions',
    to: `${adminRoot}/applications`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Agenda',
        to: `${adminRoot}/applications/todo`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'Conference',
        to: `${adminRoot}/applications/conference`,
      },
      {
        icon: 'simple-icon-bubbles',
        label: 'Speakers Profile',
        to: `${adminRoot}/applications/chat`,
      },
    ],
  },
  {
    id: 'pages',
    icon: 'simple-icon-phone',
    label: 'Lounge',
    to: `${adminRoot}/dashboards/analytics`,
    // roles: [UserRole.Admin, UserRole.Editor],
  },
  {
    id: 'docs',
    icon: 'iconsminds-library',
    label: 'Resources',
    to: 'https://gogo-react-docs.coloredstrategies.com/',
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Document library',
        to: `${adminRoot}/applications/todo`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'Video library',
        to: `${adminRoot}/applications/survey`,
      },
    ],
  },
  {
    id: 'blankpage',
    icon: 'iconsminds-bucket',
    label: 'Support',
    to: `${adminRoot}/pages`,
    subs: [
      {
        icon: 'simple-icon-check',
        label: 'Help Desk',
        to: `${adminRoot}/pages/knowledge-base`,
      },
      {
        icon: 'simple-icon-calculator',
        label: 'FAQs',
        to: `${adminRoot}/pages/faq`,
      },
    ],
  },
  {
    id: 'menu',
    icon: 'iconsminds-three-arrow-fork',
    label: 'Menu',
    to: `${adminRoot}/menu`,
  },
];
export default data;
