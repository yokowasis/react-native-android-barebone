import Test from "./Test";

type drawerType = {
  name: string;
  component: (props: any) => JSX.Element;
  tab?: drawerType;
}[];

export { drawerType };

const drawer: drawerType = [
  { name: "Home Drawer", component: Test },
  {
    name: "Home Drawer 2",
    component: Test,
    tab: [
      {
        name: "Tab 1",
        component: Test,
      },
      {
        name: "Tab 2",
        component: Test,
      },
    ],
  },
];
export default drawer;
