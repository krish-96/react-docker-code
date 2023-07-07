function projectEnvironment() {
  if (process.env.NODE_ENV === "development") {
    // Development-specific code or configurations
    console.log("Running in development mode");
    return "Developement";
  } else if (
    process.env.NODE_ENV === "development" &&
    process.env.REACT_APP_ENV === "staging"
  ) {
    // Production-specific code or configurations
    console.log("Running in production mode");
    return "Production";
  } else if (process.env.NODE_ENV === "production") {
    // Production-specific code or configurations
    console.log("Running in production mode");
    return "Production";
  }
}

export default { whichEnv: projectEnvironment() };
