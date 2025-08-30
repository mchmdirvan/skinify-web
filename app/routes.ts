import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/app-layout.tsx", [
    route("/", "routes/home.tsx"),
    route("/shop", "routes/shop.tsx"),
    route("/shop/:brandSlug", "routes/brand-slug.tsx"),
    route("/shop/:brandSlug/:modelSlug", "routes/model-slug.tsx"),
    route(
      "/shop/:brandSlug/:modelSlug/:productSlug",
      "routes/product-slug.tsx",
    ),
    route("/dashboard", "routes/dashboard.tsx"),
  ]),

  layout("./layouts/auth-layout.tsx", [
    route("login", "routes/login.tsx"),
    route("register", "routes/register.tsx"),
  ]),
] satisfies RouteConfig;
