// centralised place to redirect routes
// prevent typo
// profile route dynamic
// dynamic routes created for profile and tags reusable 
const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  PROFILE: (id: string) => `/profile/${id}`,
  TAGS:(id:string) =>`/tags/${id}`
};
export default ROUTES;
