import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDeviconClassName = (techName: string) => {
  // replace blank space and . from techName and transform it to lowercase
  const normalizedTechname = techName.replace(/[ .]/g, "").toLowerCase();

  // This is a lookup table that maps each normalized technology name to its corresponding Devicon CSS class name.
  const techMap: { [key: string]: string } = {
    javascript: "devicon-javascript-plain",
    js: "devicon-javascript-plain colored",
    typescript: "devicon-typescript-plain",
    ts: "devicon-typescript-plain colored",
    react: "devicon-react-original",
    reactjs: "devicon-react-original colored",
    nextjs: "devicon-nextjs-original",
    next: "devicon-nextjs-plain colored",
    vue: "devicon-vuejs-plain",
    vuejs: "devicon-vuejs-plain colored",
    angular: "devicon-angularjs-plain",
    angularjs: "devicon-angularjs-plain colored",
    python: "devicon-python-plain",
    py: "devicon-python-plain colored",
    django: "devicon-django-plain",
    flask: "devicon-flask-original",
    java: "devicon-java-plain",
    csharp: "devicon-csharp-plain",
    ruby: "devicon-ruby-plain",
    rails: "devicon-rails-plain",
    php: "devicon-php-plain",
    laravel: "devicon-laravel-plain",
    go: "devicon-go-plain",
    golang: "devicon-go-plain colored",
    rust: "devicon-rust-plain",
    kotlin: "devicon-kotlin-plain",
    swift: "devicon-swift-plain",
    html: "devicon-html5-plain",
    css: "devicon-css3-plain",
    sass: "devicon-sass-original",
    scss: "devicon-sass-original colored",
    tailwindcss: "devicon-tailwindcss-plain",
    tailwind: "devicon-tailwindcss-plain colored",
    bootstrap: "devicon-bootstrap-plain",
    mysql: "devicon-mysql-plain",
    postgresql: "devicon-postgresql-plain",
    mongoDB: "devicon-mongodb-plain",
    mongodb: "devicon-mongodb-plain colored",
    redis: "devicon-redis-plain",
    docker: "devicon-docker-plain",
    kubernetes: "devicon-kubernetes-plain",
    aws: "devicon-amazonwebservices-plain",
    azure: "devicon-azure-plain",
    gcp: "devicon-googlecloud-plain",
    git: "devicon-git-plain",
    github: "devicon-github-original",
    linux: "devicon-linux-plain",
    nodejs: "devicon-nodejs-plain",
    node: "devicon-nodejs-plain colored",
    express: "devicon-express-original",
    graphql: "devicon-graphql-plain",
    apollo: "devicon-apollo-graphql-plain",
    webpack: "devicon-webpack-plain",
    babel: "devicon-babel-plain",
    jest: "devicon-jest-plain",
    mocha: "devicon-mocha-plain",
    c: "devicon-c-plain",
    cpp: "devicon-cplusplus-plain",
    cplusplus: "devicon-cplusplus-plain colored",

    cs: "devicon-csharp-plain colored",

    objectivec: "devicon-objectivec-plain",
    objectiveC: "devicon-objectivec-plain colored",

    wordpress: "devicon-wordpress-plain",
    wordpressorg: "devicon-wordpress-plain colored",
  };

  /*
   * ✅ If it exists, it adds " colored" to the mapped class (ensures a colored icon version).
   * ❌ If it doesn’t exist, it returns a default fallback: "devicon-devicon-plain".
  */
  return techMap[normalizedTechname]
    ? `${techMap[normalizedTechname]} colored`
    : "devicon-devicon-plain";
};
