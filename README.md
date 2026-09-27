# The Top Weight Loss

Source for [thetopweightloss.com](https://www.thetopweightloss.com): an independent comparison site for online GLP-1 weight-loss providers (semaglutide and tirzepatide).

Built from the same Next.js template as the HRT Women, Top TRT and ED Treatment Hub sites. All site content (providers, rankings, reviews, comparisons, articles, FAQs) lives in `src/lib/seeds/weight-loss.ts` (articles in `src/lib/seeds/weight-loss-articles.ts`).

## Development

```bash
npm install
npm run dev
```

## Environment variables (Vercel)

- `ADMIN_PASSWORD`: password for `/admin`
- `NEXT_PUBLIC_GA_ID`: Google Analytics measurement ID (optional)
- `NEXT_PUBLIC_META_PIXEL_ID`: Meta Pixel ID (optional)
