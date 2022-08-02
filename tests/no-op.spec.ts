import { test } from "@playwright/test";

test.describe("This will freeze playwright in webkit", () => {
  test("Freezer", async ({ page }) => {});
});
