const ENV = "local";

const ENVIRONMENT_LOCAL = {
  Base_API_URL: "https://api.dev.lucky-minute.com/v1",
};

const ENVIRONMENT_DEVELOPMENT = {
  Base_API_URL: "https://api.dev.lucky-minute.com/v1",
};

const ENVIRONMENT_PRODUCTION = {
  Base_API_URL: "https://api.dev.lucky-minute.com/v1",
};

let ENVIRONMENT_VARIABLES;

if (ENV === "local") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_LOCAL;
} else if (ENV === "development") {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_DEVELOPMENT;
} else {
  ENVIRONMENT_VARIABLES = ENVIRONMENT_PRODUCTION;
}

export default ENVIRONMENT_VARIABLES;
