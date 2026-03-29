export type RouteComponents = Record<string, string | undefined>;

export interface RouteStyle {
  href: string;
}

export interface RouteScript {
  src: string;
}

export interface Route {
  id: string;
  path: string;
  components: RouteComponents;
  favicon: string;
  pageTitle: string;
  headerTitle: string;
  styles?: RouteStyle[] | null;
  scripts?: RouteScript[] | null;
}
