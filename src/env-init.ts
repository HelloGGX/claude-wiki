if (typeof MACRO === "undefined") {
  globalThis.MACRO = {
    VERSION: "2.1.87-dev",
    BUILD_TIME: new Date().toISOString(),
    PACKAGE_URL: "claude-code-source-snapshot",
    NATIVE_PACKAGE_URL: undefined,
    FEEDBACK_CHANNEL: "github",
    ISSUES_EXPLAINER:
      "This reconstructed source snapshot does not include Anthropic internal issue routing.",
    VERSION_CHANGELOG: "Local development build",
  };
}
