import loadable from "@/utils/loadable";

//引入组件
const Index = loadable(() => import("@/views/index"));

//表单
const FormBaseView = loadable(() => import("@/views/FormView/FormBaseView"));
const FormStepView = loadable(() => import("@/views/FormView/FormStepView"));

// 导航
const DropdownView = loadable(() =>
  import(/* webpackChunkName: 'dropdown' */ "@/views/NavView/Dropdown")
);

const routes = [
  { path: "/index", exact: true, name: "index", component: Index, auth: [1] },
  {
    path: "/nav/dropdown",
    exact: false,
    name: "下拉菜单",
    component: DropdownView
  },
  {
    path: "/form/base-form",
    exact: false,
    name: "表单",
    component: FormBaseView
  },
  {
    path: "/form/step-form",
    exact: false,
    name: "表单",
    component: FormStepView
  }
];

export default routes;
