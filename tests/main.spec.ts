import { expect, test } from "@playwright/test";

test("get started link", async ({ page }) => {
	await page.goto("/");

	await expect(
		page.getByRole("heading", { name: "Mikey Villavicencio" }),
	).toBeVisible();

	await expect(page.getByRole("link", { name: "SubStack" })).toBeVisible();
	await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Email" })).toBeVisible();
	await expect(page.getByRole("link", { name: "Resume" })).toBeVisible();
	await expect(
		page.getByRole("link", { name: "GitHub" }).first(),
	).toHaveAttribute("href", /github\.com\/mikikiv/);

	for (const card of await page.getByRole("article").all()) {
		await expect(card.getByRole("img")).toHaveAttribute("src");
		await expect(card.getByRole("img")).toBeVisible();
		await expect(card.getByRole("heading")).not.toBeEmpty();
		for (const link of await page.getByRole("link").all()) {
			await expect(link).toHaveAttribute("href");
			await expect(link).not.toBeEmpty();
		}
	}

	page.getByText("quicklorem.dev");
});
