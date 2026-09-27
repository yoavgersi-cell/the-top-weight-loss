import type { ArticleData } from "@/lib/config";

// Editorial articles for The Top Weight Loss. All provider prices and trial
// figures come from the verified facts sheet (checked September 2026) - update
// them here when provider pricing changes.
const DISCLAIMER = `<p><em>This article is general information, not medical advice. A licensed clinician should decide what treatment, if any, is right for you. Results vary.</em></p>`;

export const weightLossArticles: ArticleData[] = [
  {
    slug: "compounded-vs-brand-name-glp1",
    title: "Compounded vs Brand-Name GLP-1s: What You're Actually Paying For",
    description:
      "Compounded semaglutide and tirzepatide can cost a fraction of Wegovy or Zepbound. Here's what the price gap really buys you, what it doesn't, and how to choose safely.",
    category: "Treatments",
    readTime: "6 min read",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    heroColor: "#E8F1FD",
    image: "/editorial-injection.png",
    imageAlt:
      "Woman holding a GLP-1 injection syringe at her abdomen before a weekly semaglutide or tirzepatide dose",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Brand-name semaglutide (Wegovy) and tirzepatide (Zepbound) are FDA-approved for chronic weight management; compounded versions are not FDA-approved and are not reviewed by the FDA for safety, effectiveness or quality.",
      "The FDA declared the tirzepatide shortage resolved in December 2024 and the semaglutide shortage resolved in February 2025, which restricted mass compounding of essentially copies of these drugs.",
      "Self-pay brand-name prices run well over $1,000 a month (for example, altRx lists Wegovy at $1,579/mo), while compounded programs we track start at $49-$149/mo for semaglutide.",
      "Insurance can make brand-name medication far cheaper - Ro checks coverage and handles prior authorizations for you.",
    ],
    sections: [
      {
        heading: "The short answer",
        body: `<p>A <strong>brand-name GLP-1</strong> - Wegovy, Zepbound, Ozempic - is made by the manufacturer, approved by the FDA and sold in standardized pens or pills. A <strong>compounded GLP-1</strong> is prepared by a state-licensed pharmacy using the same active ingredient (semaglutide or tirzepatide), usually in vials you draw up with a syringe. It is <strong>not FDA-approved</strong>: the FDA does not review compounded drugs for safety, effectiveness or quality before they reach you.</p><p>So the price gap - often more than $1,000 a month - is paying for regulatory review, manufacturing consistency and a product that insurance may cover. Whether that is worth it depends on your budget, your coverage and how much uncertainty you are comfortable with.</p>`,
      },
      {
        heading: "What does the brand-name premium actually buy?",
        body: `<ul><li><strong>FDA approval and oversight.</strong> The product was tested in large clinical trials, and its manufacturing is inspected. The trial results you read about - such as around 15% average weight loss in STEP-1 and about 21% in SURMOUNT-1 - were achieved with the approved products.</li><li><strong>Consistency.</strong> Every pen contains exactly the labeled dose in a fixed device. No vials, no drawing up doses.</li><li><strong>Insurance eligibility.</strong> Only brand-name medication can be billed to insurance. If your plan covers it, your out-of-pocket cost can be far lower than any cash price.</li><li><strong>Legal clarity.</strong> You are not relying on a compounding exemption that regulators are still actively shaping.</li></ul><p>For scale, self-pay brand-name list prices on the platforms we track include Ozempic at $1,149/mo, Zepbound at $1,249/mo and Wegovy at $1,579/mo (altRx), or Ozempic at $1,399/mo and Zepbound at $1,599/mo (wellmedr).</p>`,
      },
      {
        heading: "What you get - and give up - with compounded",
        body: `<p>The obvious win is price. Compounded semaglutide on our list runs from <strong>$49/mo</strong> (wellmedr, 12-month plan) to <strong>$149/mo</strong> (trimrx), and compounded tirzepatide from <strong>$89/mo</strong> (wellmedr) to <strong>$259/mo</strong> (trimrx). Many programs also bundle the clinician visits, messaging and shipping into that price, and some allow <strong>custom dosing</strong> that fixed brand pens don't.</p><p>What you give up is independent verification. Quality depends on the specific pharmacy, and the legal landscape changed once the FDA declared the shortages over: 503A pharmacies may still compound for an individual patient's documented clinical need (such as a dose or formulation change), but mass-producing copies is restricted. Rules and enforcement are still evolving, so ask your provider how their prescriptions meet current requirements.</p><p>Regulators are also watching marketing. In June 2026 the FDA sent a warning letter to altRx's parent company for marketing its compounded semaglutide and tirzepatide in a way that suggested FDA approval - details are in our <a href="/reviews/altrx">altRx review</a>.</p>`,
      },
      {
        heading: "Questions to ask any compounded provider",
        body: `<ul><li><strong>Which pharmacy fills it,</strong> and is it state-licensed (503A)? A reputable service will name it.</li><li><strong>Is a licensed US clinician reviewing my intake</strong> and able to adjust or stop treatment?</li><li><strong>How is it shipped?</strong> GLP-1s should arrive cold-chain packed.</li><li><strong>Does any marketing or label say "FDA-approved"?</strong> For a compounded product, that is a red flag.</li><li><strong>What happens to my price</strong> after a promo or when my dose goes up? (See our breakdown of <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of online GLP-1s</a>.)</li></ul>`,
      },
      {
        heading: "Which should you choose?",
        body: `<ul><li><strong>If your insurance may cover Wegovy or Zepbound,</strong> check that first. A service like <a href="/reviews/ro">Ro</a> runs the coverage check and prior authorization for you, and sells only FDA-approved brand-name medication.</li><li><strong>If you want only FDA-approved medication</strong> regardless of cost, choose brand-name - it is the only option with FDA review behind it.</li><li><strong>If you are paying cash and brand-name is out of reach,</strong> compounded is the realistic route for many people. <a href="/reviews/embody">embody</a> offers compounded semaglutide at $69/mo month-to-month from licensed 503A pharmacies; <a href="/reviews/wellmedr">wellmedr</a> is cheapest long-run if you'll commit to 12 months.</li><li><strong>If you need a non-standard dose,</strong> ask about custom dosing - <a href="/reviews/trimrx">trimrx</a> builds its program around it.</li><li><strong>If you want dietitian access and coaching bundled in,</strong> <a href="/reviews/medvi">MEDVi</a> includes both in one all-inclusive price.</li></ul><p>Not sure which molecule to start on? Read <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>, or compare every provider in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "semaglutide-vs-tirzepatide",
    title: "Semaglutide vs Tirzepatide: Which GLP-1 Should You Start On?",
    description:
      "Tirzepatide produced more weight loss head-to-head, but semaglutide is cheaper and has the longer track record. Here's how the two compare on results, side effects and price.",
    category: "Treatments",
    readTime: "6 min read",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    heroColor: "#DEEAFB",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Semaglutide (Wegovy, Ozempic) mimics one gut hormone, GLP-1; tirzepatide (Zepbound, Mounjaro) acts on two, GIP and GLP-1.",
      "In the SURMOUNT-5 head-to-head trial (NEJM, 2025), tirzepatide produced about 20.2% average weight loss vs about 13.7% for semaglutide at 72 weeks.",
      "Both commonly cause nausea, diarrhea, constipation and reduced appetite, mostly during dose escalation.",
      "Compounded tirzepatide typically costs more than compounded semaglutide - for example $119 vs $69 a month at embody.",
    ],
    sections: [
      {
        heading: "How the two drugs differ",
        body: `<p><strong>Semaglutide</strong> is a GLP-1 receptor agonist: it copies a gut hormone that slows stomach emptying, increases fullness and lowers appetite. It is sold as Wegovy (approved for chronic weight management) and Ozempic (approved for type 2 diabetes).</p><p><strong>Tirzepatide</strong> activates both the GLP-1 receptor and the GIP receptor, a second appetite- and metabolism-related hormone pathway. It is sold as Zepbound (approved for chronic weight management) and Mounjaro (type 2 diabetes). Both are usually taken as a weekly injection, starting at a low dose that a clinician steps up over several months.</p>`,
      },
      {
        heading: "Which one causes more weight loss?",
        body: `<p>On average, tirzepatide. The key trial numbers:</p><ul><li><strong>STEP-1</strong> (semaglutide 2.4 mg): about <strong>15%</strong> average body-weight loss at 68 weeks.</li><li><strong>SURMOUNT-1</strong> (tirzepatide 15 mg): about <strong>21%</strong> at 72 weeks.</li><li><strong>SURMOUNT-5</strong>, the direct head-to-head published in NEJM in 2025: tirzepatide about <strong>20.2%</strong> vs semaglutide about <strong>13.7%</strong> at 72 weeks.</li></ul><p>Those are trial averages with brand-name medication, diet and activity support. Individual results vary widely - some people do very well on semaglutide, and some respond less than average to either. Compounded versions were not the products tested in these trials.</p>`,
      },
      {
        heading: "Side effects and tolerability",
        body: `<p>The side-effect profiles are similar: <strong>nausea, vomiting, diarrhea, constipation, reflux, fatigue and reduced appetite</strong>, usually worst in the days after a dose increase. Both carry the same boxed warning about thyroid C-cell tumors seen in rodents, and neither is used by people with a personal or family history of medullary thyroid carcinoma or MEN2, or during pregnancy.</p><p>There is no reliable way to predict in advance which one you will tolerate better. If one drug causes persistent side effects, a clinician may slow the titration, hold your dose or switch you to the other. Our guide to <a href="/articles/glp1-side-effects-first-12-weeks">side effects in the first 12 weeks</a> covers what to expect.</p>`,
      },
      {
        heading: "What each costs online",
        body: `<p>Tirzepatide costs more almost everywhere. Compounded prices on our list:</p><ul><li><a href="/reviews/embody">embody</a>: semaglutide $69/mo, tirzepatide $119/mo (month-to-month)</li><li><a href="/reviews/wellmedr">wellmedr</a>: semaglutide $49/mo on a 12-month plan, tirzepatide $89/mo</li><li><a href="/reviews/altrx">altRx</a>: semaglutide $89/mo, tirzepatide $149/mo (promo rates; regular $199 and $299)</li><li><a href="/reviews/trimrx">trimrx</a>: semaglutide $149/mo, tirzepatide $259/mo</li><li><a href="/reviews/medvi">MEDVi</a>: semaglutide $99/mo, tirzepatide $166/mo (promo rates; regular $199 and $299)</li></ul><p>On brand-name self-pay, Zepbound is listed at $1,249-$1,599/mo and Wegovy at $1,579/mo on the platforms we track. With insurance, the picture depends entirely on your plan - <a href="/reviews/ro">Ro</a> can check coverage for both. Full breakdown: <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>.</p>`,
      },
      {
        heading: "Which should you start on?",
        body: `<ul><li><strong>If maximum average weight loss is your priority</strong> and the higher price fits your budget, tirzepatide has the stronger head-to-head data.</li><li><strong>If cost is the deciding factor,</strong> semaglutide is typically $40-$110 a month cheaper compounded and still produced about 15% average loss in STEP-1.</li><li><strong>If your insurance covers only one,</strong> start with the covered one - the savings usually outweigh the difference in averages.</li><li><strong>If you would prefer a pill to a weekly injection,</strong> ask about oral options: Ro offers brand-name oral medication, and embody offers a daily oral compounded option.</li><li><strong>If you have tried one and stalled or could not tolerate it,</strong> ask your clinician whether switching makes sense.</li></ul><p>A licensed clinician makes the final call based on your history, other medications and goals. Compare providers side by side in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "real-cost-of-glp1-weight-loss",
    title: "The Real Cost of Online GLP-1 Weight Loss in 2026 (Read the Fine Print)",
    description:
      "Promo rates, 12-month prepay plans, membership fees and dose-tiered pricing can make the headline price misleading. Here's how to work out what a year of GLP-1 treatment actually costs.",
    category: "Pricing",
    readTime: "7 min read",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    heroColor: "#E9F2FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "altRx's $89/mo semaglutide and $149/mo tirzepatide are time-limited promo rates; regular prices are $199 and $299 a month.",
      "wellmedr's $49/mo semaglutide requires the 12-month plan; month-to-month is advertised around $88/mo.",
      "Ro charges a membership ($39 the first month, then $149/mo, or about $74/mo on an annual plan) plus medication billed separately.",
      "embody, altRx, trimrx and wellmedr all price compounded medication the same at every dose, so costs don't climb as your dose increases.",
    ],
    sections: [
      {
        heading: "Why the headline price is rarely the real price",
        body: `<p>Most people stay on a GLP-1 for many months, and the dose rises during that time. So the number that matters is not the first-month price - it is <strong>what you will pay over a year at your likely maintenance dose</strong>. Four pricing mechanics change that number:</p><ul><li><strong>Promo vs regular price.</strong> An intro rate may only last a limited period.</li><li><strong>12-month prepay or commitment vs month-to-month.</strong> The lowest rates often require committing up front.</li><li><strong>Membership + medication vs all-in.</strong> Some services bill the clinical program and the drug separately.</li><li><strong>Flat vs dose-tiered pricing.</strong> Some programs charge more as you move to higher doses. embody, altRx, trimrx and wellmedr all charge the same at every dose - confirm this with any provider before you sign up.</li></ul>`,
      },
      {
        heading: "2026 price comparison",
        body: `<table><thead><tr><th>Provider</th><th>Semaglutide</th><th>Tirzepatide</th><th>Model</th><th>Commitment</th></tr></thead><tbody><tr><td><a href="/reviews/embody">embody</a></td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/ro">Ro</a></td><td colspan="2">Brand-name only; membership $39 first month, then $149/mo (~$74/mo annual) + medication</td><td>Membership + medication</td><td>Monthly or annual</td></tr><tr><td><a href="/reviews/altrx">altRx</a></td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Compounded, flat all doses</td><td>None - pause or cancel</td></tr><tr><td><a href="/reviews/trimrx">trimrx</a></td><td>$149/mo</td><td>$259/mo</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$49/mo on 12-month plan (~$88 month-to-month)</td><td>$89/mo</td><td>Compounded, flat all doses</td><td>12-month plan for lowest rate</td></tr><tr><td><a href="/reviews/medvi">MEDVi</a></td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>All-inclusive: visits, dietitian, coaching</td><td>None - no membership</td></tr></tbody></table><p>Prices are provider-published figures checked in September 2026 and can change at any time. Compounded medications are not FDA-approved.</p>`,
      },
      {
        heading: "First-year cost: worked examples",
        body: `<p>Here is what 12 months of <strong>compounded semaglutide</strong> works out to under each model (medication and program only):</p><ul><li><strong>wellmedr, 12-month plan:</strong> 12 × $49 = <strong>$588</strong>. Note that wellmedr ships every 4 weeks, so confirm whether a year means 12 or 13 billing cycles. The same year month-to-month at about $88 would be roughly <strong>$1,056</strong>.</li><li><strong>embody, month-to-month:</strong> 12 × $69 = <strong>$828</strong>; if you pay the regular $79, it is <strong>$948</strong>.</li><li><strong>altRx:</strong> at the $89 promo all year, <strong>$1,068</strong>. If the promo ended after the first month and you paid the regular $199 for the other 11, it would be <strong>$2,278</strong>. Ask exactly how long the promo lasts.</li><li><strong>trimrx:</strong> 12 × $149 = <strong>$1,788</strong>, with custom dosing and unlimited check-ins included.</li><li><strong>Ro:</strong> membership alone is $39 + (11 × $149) = <strong>$1,678</strong> month-to-month, or about <strong>$888</strong> on the annual plan - before medication. With good insurance coverage, total cost can still come out lowest; without it, you pay the manufacturer's self-pay price on top.</li><li><strong>MEDVi:</strong> at the $99 promo all year, <strong>$1,188</strong>, with dietitian access and coaching included; at the regular $199 it would be <strong>$2,388</strong>.</li></ul><p>For tirzepatide, the same math gives $1,428 at embody ($119 × 12) and $3,108 at trimrx ($259 × 12).</p>`,
      },
      {
        heading: "Is a 12-month prepay plan worth it?",
        body: `<p>The discount is real - wellmedr's committed rate is roughly half its month-to-month price. But commitment carries risk: you may not tolerate the medication, your clinician may stop or change it, or you may reach your goal early. Before committing, read the refund and cancellation terms.</p><ul><li><strong>If you have already been on a GLP-1 and tolerate it well,</strong> a 12-month plan is usually the cheapest route.</li><li><strong>If this is your first GLP-1,</strong> consider month-to-month for the first few months while you find out how your body responds - <a href="/reviews/embody">embody</a> is the lowest no-commitment price on our list.</li></ul>`,
      },
      {
        heading: "Fine-print checklist before you pay",
        body: `<ul><li>Is this a promo price? For how long, and what is the regular price?</li><li>Does the price change at higher doses?</li><li>Are clinician visits, messaging and shipping included, or billed separately?</li><li>Is it billed monthly or every 4 weeks?</li><li>What is the cancellation and refund policy, especially on prepaid plans?</li><li>Can you use HSA/FSA funds? (embody, trimrx and MEDVi say yes.)</li></ul><p>Price is only one factor - quality, oversight and support matter too. See how the full picture stacks up in our <a href="/">GLP-1 provider rankings</a>, and read <a href="/articles/compounded-vs-brand-name-glp1">compounded vs brand-name GLP-1s</a> to understand what the price gap buys.</p>${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "glp1-side-effects-first-12-weeks",
    title: "GLP-1 Side Effects: What to Expect in Your First 12 Weeks",
    description:
      "Most GLP-1 side effects are digestive and peak right after dose increases. Here's a week-by-week guide to the first three months, practical ways to manage them, and the warning signs that need urgent care.",
    category: "Guides",
    readTime: "7 min read",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    heroColor: "#EDF4FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Common GLP-1 side effects include nausea, vomiting, diarrhea, constipation, reduced appetite, reflux and fatigue - usually worst during dose escalation.",
      "Serious side effects are rare but include pancreatitis, gallbladder disease, kidney injury from dehydration, and low blood sugar when combined with some diabetes medications.",
      "GLP-1s carry a boxed warning about thyroid C-cell tumors in rodents and are not used with a personal or family history of medullary thyroid carcinoma or MEN2, or in pregnancy.",
    ],
    sections: [
      {
        heading: "Why side effects follow the dose schedule",
        body: `<p>Semaglutide and tirzepatide slow how quickly your stomach empties and turn down appetite signals. That is how they work - and it is also why most side effects are digestive. Treatment starts at a low dose and is stepped up gradually, typically about every four weeks, so your body can adjust. The pattern most people notice: side effects flare for a few days after each increase, then settle.</p><p>Over 12 weeks you will usually move through your starting dose and one or two increases, as your clinician decides. Not everyone gets side effects, and severity varies a lot from person to person.</p>`,
      },
      {
        heading: "Week-by-week: what to expect",
        body: `<ul><li><strong>Weeks 1-2 (starting dose):</strong> Appetite often drops within days. Mild nausea, feeling full quickly, burping or reflux are common, especially 1-3 days after the injection. Some people feel tired. Weight changes early are often partly water.</li><li><strong>Weeks 3-4:</strong> Many people settle into a rhythm. Constipation can show up as you eat less. This is a good time to lock in hydration, fiber and protein habits.</li><li><strong>Weeks 5-8 (first increase):</strong> Expect a short flare of nausea or bowel changes after stepping up. If it is manageable, it usually eases within days. If you are struggling to eat or drink, tell your clinician before your next increase.</li><li><strong>Weeks 9-12 (next increase, if prescribed):</strong> Appetite suppression is typically stronger. The risk now is under-eating - skipping meals, too little protein and too little fluid - which can worsen fatigue, dizziness and constipation.</li></ul><p>Your clinician can slow the titration or keep you at a dose longer. Moving up is not a race - staying at a tolerable dose is a normal decision.</p>`,
      },
      {
        heading: "Practical ways to manage common side effects",
        body: `<ul><li><strong>Nausea:</strong> eat smaller meals, stop at the first sign of fullness, and go easy on greasy, fried or very sweet foods. Bland foods help on injection days.</li><li><strong>Reflux:</strong> avoid lying down for a few hours after eating and skip large late-night meals.</li><li><strong>Constipation:</strong> drink plenty of water, add fiber gradually, and stay active. Ask your clinician before using laxatives regularly.</li><li><strong>Diarrhea or vomiting:</strong> prioritize fluids and electrolytes - dehydration is how minor side effects become serious ones.</li><li><strong>Fatigue:</strong> often a sign of eating too little. Aim for protein at every meal.</li></ul><p>Use your provider's messaging: services like <a href="/reviews/trimrx">trimrx</a> (unlimited check-ins), <a href="/reviews/ro">Ro</a> (unlimited messaging) and <a href="/reviews/embody">embody</a> (care-team messaging) let you ask about side effects between visits, and <a href="/reviews/medvi">MEDVi</a> includes dietitian access for help eating well on a smaller appetite.</p>`,
      },
      {
        heading: "When should you get urgent care?",
        body: `<p>Seek prompt medical attention - and stop taking the medication until a clinician advises you - if you have:</p><ul><li><strong>Severe, persistent abdominal pain</strong>, especially if it spreads to your back, with or without vomiting (possible pancreatitis).</li><li><strong>Pain in the upper right abdomen, fever, yellowing skin or eyes, or clay-colored stools</strong> (possible gallbladder problem).</li><li><strong>Being unable to keep fluids down</strong>, very little or dark urine, or dizziness when standing (dehydration, which can injure the kidneys).</li><li><strong>Shakiness, sweating, confusion or a racing heart</strong> if you also take insulin or a sulfonylurea (possible low blood sugar).</li><li><strong>A lump or swelling in the neck, trouble swallowing or persistent hoarseness.</strong></li><li><strong>Signs of a serious allergic reaction</strong> - swelling of the face, lips or throat, or trouble breathing. Call emergency services.</li></ul><p>If you become pregnant or plan to, tell your clinician right away - GLP-1s are not for use in pregnancy.</p>`,
      },
      {
        heading: "Make the next 12 weeks easier",
        body: `<ul><li><strong>If side effects are mild,</strong> stick with the plan and use the tips above - they usually fade.</li><li><strong>If they flare after every increase,</strong> ask about a slower titration or custom dosing.</li><li><strong>If one drug stays hard to tolerate,</strong> ask whether switching is appropriate - see <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>.</li></ul><p>Thinking long term? Read <a href="/articles/stopping-glp1-maintenance">what happens when you stop a GLP-1</a>, or compare providers on support and price in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "stopping-glp1-maintenance",
    title: "What Happens When You Stop a GLP-1? Regain, Plateaus and Maintenance",
    description:
      "Trials show most people regain weight after stopping semaglutide or tirzepatide. Here's what the evidence says, why plateaus happen, and how to plan maintenance with your clinician.",
    category: "Guides",
    readTime: "6 min read",
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    heroColor: "#DCE9FB",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "In the STEP-1 extension, people who stopped semaglutide regained about two-thirds of their lost weight within a year.",
      "In SURMOUNT-4, people switched to placebo after 36 weeks of tirzepatide regained a substantial share (about 14%), while those who continued lost further.",
      "Adequate protein intake and resistance training help preserve lean muscle mass during GLP-1 weight loss.",
    ],
    sections: [
      {
        heading: "What the trials show about stopping",
        body: `<p>GLP-1 medications treat obesity as a chronic condition - they work while you take them. Two trials looked directly at what happens when treatment stops:</p><ul><li><strong>STEP-1 extension (semaglutide):</strong> after stopping treatment, participants regained about <strong>two-thirds of the weight they had lost</strong> within a year.</li><li><strong>SURMOUNT-4 (tirzepatide):</strong> after 36 weeks on tirzepatide, people switched to placebo regained a substantial share (about <strong>14%</strong>), while those who stayed on the drug continued to lose weight.</li></ul><p>Appetite tends to return once the medication wears off, and the body defends its previous weight. That does not mean the effort was wasted - but it does mean stopping should be a planned decision, not a surprise.</p>`,
      },
      {
        heading: "Why do plateaus happen?",
        body: `<p>Almost everyone plateaus eventually. As you lose weight, your body needs less energy, and appetite-regulating signals push back. In trials, average weight loss flattened out over time rather than continuing indefinitely.</p><ul><li><strong>If you plateau early</strong> (in the first few months, often at a low dose), your clinician may simply continue the planned titration.</li><li><strong>If you plateau at your top tolerated dose,</strong> you may be near your new set point. Discuss whether the goal shifts from losing to maintaining, and review protein, activity and sleep.</li><li><strong>If you plateau well short of your goal on semaglutide,</strong> ask whether tirzepatide is an option - see <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>.</li></ul>`,
      },
      {
        heading: "Protect your muscle while you lose",
        body: `<p>Rapid weight loss includes some lean mass, not only fat. Keeping muscle matters for strength, metabolism and how well you maintain your results. Two habits have the best support:</p><ul><li><strong>Protein at every meal.</strong> With a smaller appetite, protein is the first thing to slip. Put it first on your plate, and ask your clinician or a dietitian for a daily target that suits you (some programs, such as <a href="/reviews/medvi">MEDVi</a>, include dietitian access).</li><li><strong>Resistance training.</strong> Two to three sessions a week of weights, bands or bodyweight exercises is a practical starting point. Walking helps too, but it doesn't replace strength work.</li></ul><p>These habits also carry over if you later reduce or stop the medication.</p>`,
      },
      {
        heading: "Maintenance options to discuss with your clinician",
        body: `<p>There is no single right answer, and evidence on the best long-term strategy is still developing. Options clinicians commonly discuss include:</p><ul><li><strong>Continuing long term</strong> at the dose that works - the approach best supported by SURMOUNT-4.</li><li><strong>A lower maintenance dose</strong> once you reach your goal, if your clinician thinks it is appropriate.</li><li><strong>A gradual taper</strong> rather than an abrupt stop, with close weight monitoring and a plan to resume if needed.</li></ul><p>Don't adjust or space out doses on your own. Compounded programs with custom dosing, such as <a href="/reviews/trimrx">trimrx</a>, can make dose changes easier, but a licensed clinician should decide.</p>`,
      },
      {
        heading: "If cost is why you want to stop",
        body: `<p>Price is one of the most common reasons people quit - and the trials suggest abrupt stops carry a real regain risk. Before stopping for financial reasons, look at cheaper ways to continue:</p><ul><li><strong>If you can commit for a year,</strong> <a href="/reviews/wellmedr">wellmedr</a> offers compounded semaglutide at $49/mo on its 12-month plan.</li><li><strong>If you want no commitment,</strong> <a href="/reviews/embody">embody</a> charges $69/mo for compounded semaglutide, month-to-month.</li><li><strong>If you have insurance,</strong> <a href="/reviews/ro">Ro</a> can check whether brand-name medication is covered.</li></ul><p>Remember that compounded GLP-1s are not FDA-approved. Run the numbers in <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>, or compare every option in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
];
