import { socialLinkData } from "@/libs/data/socialData";
import { expect, test } from "@playwright/test";

test("Basic tests", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Mikey Villavicencio" }),
  ).toBeVisible();

  for (const card of await page.getByRole("article").all()) {
    await card.scrollIntoViewIfNeeded();
    await expect(card.getByRole("img")).toHaveAttribute("src");
    await expect(card.getByRole("img")).toBeVisible();
    await expect(card.getByRole("heading")).not.toBeEmpty();

    const visitLinks = await page.getByRole("link", { name: "Visit" }).all();
    for (const link of visitLinks) {
      await expect(link).toHaveAttribute("href");
      await expect(link).not.toBeEmpty();
      const visitLink = await link.filter({ hasText: "Visit" }).all();
      if (visitLink.length > 0) {
        for (const link of visitLink) {
          await expect(link).toHaveAttribute("target", "_blank");
        }
      }
    }
  }

  page.getByText("quicklorem.dev");
  page.getByText("carematey");
  page.getByText("petsitting");
});

test("All social accounts are present, have hrefs, and target='_blank'", async ({
  page,
}) => {
  await page.goto("/");
  const socialAccounts = Object.keys(socialLinkData);

  for (const socialAccount of socialAccounts) {
    const allLinks = await page
      .getByRole("link", { name: socialAccount })
      .all();

    for (const link of allLinks) {
      await expect(link).toBeVisible();
      await expect(link)
        .toHaveAttribute("href")
        .then(href => {
          expect(href).not.toBeUndefined;
          expect(href).not.toBeNull;
        });
      await expect(link).toHaveAttribute("target", "_blank");
    }
  }
});
