import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/app-layout.tsx", [
    route("/", "routes/home.tsx"),
    route("/:brandSlug", "routes/brand-slug.tsx"),
    route("/:brandSlug/:modelSlug", "routes/model-slug.tsx"),
    route("/:brandSlug/:modelSlug/:productSlug", "routes/product-slug.tsx"),
  ]),

  layout("./layouts/auth-layout.tsx", [
    route("login", "routes/login.tsx"),
    // ...
  ]),
] satisfies RouteConfig;
