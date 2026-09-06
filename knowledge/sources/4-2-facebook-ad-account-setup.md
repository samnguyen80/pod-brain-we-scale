# 4.2 Facebook Ad Account Setup

Stage: 4) Marketing
Video: https://www.youtube.com/watch?v=hduC-C8pBpE&t=18355s
Transcript: [../../transcripts/4-2-facebook-ad-account-setup.md](../../transcripts/4-2-facebook-ad-account-setup.md)

## The job of this lesson

A merchant should walk away with a fully wired Meta advertising stack — Business Manager, Facebook Page, ad account, pixel, and product catalog all connected to the Shopify store — such that the only remaining step is building and launching an actual ad. This is a one-time setup that (per the instructor) should never need to be touched again barring bugs.

## Playbook

1. [05:06:23] Four Meta assets needed: Business Manager (folder holding everything), Ad Account (where ads run), Facebook Page (brand identity on every ad), Pixel + Product Catalog (tracking + feed, set up together).
2. [05:07:38] Create the Business Manager at `business.facebook.com/settings` → "Login with Facebook." Meta requires linking a real personal Facebook profile for identity verification (an old, rarely-used one is fine) — unlike most ad platforms, email/password alone isn't enough. Enter business name, your name and email, then bookmark the page.
3. [05:09:51] Create the Facebook Page: Business Manager → Pages → "Create new Facebook page" — name, category (e.g. "Apparel and clothing"), optional AI-generated bio. Keep it bare-bones; this isn't an organic social strategy, just brand identity for ads.
4. [05:12:22]-[05:16:56] Add a centered logo as profile picture and a cover photo (build in Canva's "Facebook cover" template or Gemini/Nano Banana, then clean up with Canva's magic eraser).
5. [05:17:20] Fill in Page details (website URL, optional support email) and strip out irrelevant default sections.
6. [05:19:32] Publish a public welcome post with the logo image. Never click "Boost post" on this or any organic post.
7. [05:20:19] Create the Ad Account: Business Manager → Ad Accounts → Add → Create. Name it after the brand; the only two settings that matter are **time zone** (your own) and **native currency**. Skip payment info for now.
8. [05:22:22] Connect Pixel + Catalog via Shopify: Apps → Apps and sales channels → Shopify App Store → search "Meta" → install "Facebook and Instagram" → connect your Facebook account and Page → leave data-sharing defaults → Save → "Create Meta Pixel" → confirm.
9. [05:23:43] Deselect every ad account except the one you're using, then Submit for review — ignore transient errors, they often clear on a refresh.
10. [05:25:12] Assign the new pixel to yourself with full permissions.
11. [05:25:53] Create a Business Asset Group: Business Manager → Add → Create → "Separate brands or lines of business" → name it → add Page, Ad Account, Catalog/Pixel → assign yourself full access.
12. [05:26:34] In Events Manager, turn ON "automatic advanced matching" and "track events automatically." Skip the Conversion API gateway — the Shopify-Meta app already provides a direct integration.
13. [05:28:24] Final checklist: Business Manager bookmarked; Page live with logo + cover (bonus: one post); Pixel installed and assigned; Shopify catalog synced.

## Numbers and thresholds

None — this lesson is a setup walkthrough with no budgets, benchmarks, or test thresholds.

## Decision rules

None explicit — purely sequential setup steps, no branching test-result logic.

## Tools and services named

- Meta Business Manager (`business.facebook.com/settings`) — hub for Page, Ad Account, Pixel, Catalog
- Meta Events Manager — pixel configuration (automatic advanced matching, automatic event tracking)
- Shopify App Store "Facebook and Instagram" (Meta) app — connects store to Meta Page/Pixel/Catalog
- Canva — cover photo design, background/watermark cleanup (magic eraser)
- Gemini / Nano Banana — AI-generated cover photo asset
- Claude / ChatGPT — optional copy generation (page bio, welcome post text)

## Watch-outs

- Meta requires a real personal Facebook profile for verification — a brand-new, empty account may look suspicious; use one that's a year or two old with some activity. (claimed: "~95% of people already have an account")
- Meta changes its UI/button layout frequently ("almost week to week") — follow the underlying setting names, not exact screen positions; if stuck, screenshot and ask ChatGPT or the course GPT.
- Setup errors (pixel connection, business info prompts) are common and often resolve on a refresh or short wait — don't assume something is broken.
- Set ad account currency/timezone correctly at creation — presented as a "get it right the first time" best practice.

## Related

[[meta-business-manager]], [[meta-pixel-setup]], [[shopify-meta-integration]], [[meta-campaign-structure]]
