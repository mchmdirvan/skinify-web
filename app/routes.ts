import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/app-layout.tsx", [
    route("/", "routes/home.tsx"),
    route("brand/:slug", "routes/model.tsx"),
    route("products/iphone", "routes/iphone.tsx"),
  ]),

  layout("./layouts/auth-layout.tsx", [
    route("login", "routes/login.tsx"),
    // ...
  ]),
] satisfies RouteConfig;
