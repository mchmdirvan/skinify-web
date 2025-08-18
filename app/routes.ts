import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/app-layout.tsx", [
    route("/", "routes/home.tsx"),
    route("products/iphone", "routes/iphone.tsx"),
  ]),
] satisfies RouteConfig;
