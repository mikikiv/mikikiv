import { expect, test } from "@playwright/test";

test("get started link", async ({ page }) => {
	await page.goto("/");

	await expect(
		page.getByRole("heading", { name: "Mikey Villavicencio" }),
	).toBeVisible();

	const socialLinks = [
		page.getByRole("link", { name: "SubStack" }),
		page.getByRole("link", { name: "LinkedIn" }),
		page.getByRole("link", { name: "Email" }),
		page.getByRole("link", { name: "Resume" }),
		page.getByRole("link", { name: "GitHub" }).first(),
	];

	for (const link of socialLinks) {
		await expect(link).toBeVisible();
		await expect(link).toHaveAttribute("target", "_blank");
	}

	for (const card of await page.getByRole("article").all()) {
		await card.scrollIntoViewIfNeeded();
		await expect(card.getByRole("img")).toHaveAttribute("src");
		await expect(card.getByRole("img")).toBeVisible();
		await expect(card.getByRole("heading")).not.toBeEmpty();

		page.getByRole("link", { name: "Visit" });
		for (const link of await page.getByRole("link").all()) {
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
