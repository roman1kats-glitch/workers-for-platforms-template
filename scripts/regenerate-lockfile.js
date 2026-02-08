const { execSync } = require("child_process");

try {
  console.log("Regenerating pnpm-lock.yaml...");
  execSync("pnpm install --no-frozen-lockfile", {
    stdio: "inherit",
    cwd: process.cwd(),
  });
  console.log("Lockfile regenerated successfully.");
} catch (error) {
  console.error("Failed to regenerate lockfile:", error.message);
  process.exit(1);
}
