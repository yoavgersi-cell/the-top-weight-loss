import type { ArticleData } from "@/lib/config";

// Editorial articles for The Top Weight Loss. All provider prices and trial
// figures come from the verified facts sheet (checked September 2026) - update
// them here when provider pricing changes.
const DISCLAIMER = `<p><em>This article is general information, not medical advice. A licensed clinician should decide what treatment, if any, is right for you. Results vary.</em></p>`;

export const weightLossArticles: ArticleData[] = [
  {
    slug: "new-weight-loss-drugs-2026",
    title: "New Weight-Loss Drugs in 2026: GLP-1 Pills, Wegovy HD, Retatrutide, CagriSema and What's Next",
    description:
      "Every new weight-loss drug of 2026 explained with sources: Wegovy pill, Foundayo, Wegovy HD, retatrutide, CagriSema, MariTide, real prices and Medicare coverage.",
    category: "Guides",
    readTime: "55 min read",
    publishedAt: "2026-10-24",
    updatedAt: "2026-10-24",
    heroColor: "#E8F1FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "The FDA approved three new weight-loss treatments in 2025-2026: the Wegovy pill (Dec 22, 2025; 13.6% average weight loss at 64 weeks in OASIS 4), Wegovy HD 7.2 mg (Mar 19, 2026; 18.7% at 72 weeks in STEP UP) and Foundayo, a daily orforglipron pill with no food rules (Apr 1, 2026; 11.2% at 72 weeks on the top dose in ATTAIN-1).",
      "Retatrutide, Lilly's investigational GIP/GLP-1/glucagon drug, produced 28.3% average weight loss at 80 weeks on 12 mg in TRIUMPH-1 (on-treatment estimate); Lilly plans to file it with the FDA in Q1 2027, and the FDA warns that 'research peptide' versions sold online are unapproved and of unknown quality.",
      "CagriSema (cagrilintide + semaglutide) has an FDA decision expected in Q4 2026; it averaged 20.4% at 68 weeks in REDEFINE 1 but produced less weight loss than tirzepatide in the head-to-head REDEFINE 4 trial.",
      "Manufacturer self-pay prices fell to $149-$449 a month for most doses of Wegovy, Zepbound and the GLP-1 pills, and the Medicare GLP-1 Bridge (July 1, 2026 - Dec 31, 2027) offers eligible Part D enrollees a $50 monthly copay.",
    ],
    sections: [
      {
        heading: "What are the new weight-loss drugs of 2026?",
        body: `<p><strong>Three new weight-loss medicines reached US patients between December 2025 and April 2026: the Wegovy pill (oral semaglutide), Wegovy HD (a 7.2 mg weekly injection) and Foundayo (orforglipron, a daily pill with no food rules). Behind them, retatrutide, CagriSema, MariTide, amycretin and survodutide are in late-stage trials, and CagriSema has an FDA decision expected by the end of 2026.</strong></p>
<p>For most of 2024 and 2025, "GLP-1 weight loss" meant one of two weekly injections - Wegovy or Zepbound - or a compounded copy of them. That market has changed faster in the last twelve months than at any point since Wegovy was approved in 2021. There are now pills, a higher-dose injection, a monthly injection in phase 3, a triple-hormone drug that produced close to 30% average weight loss in trials, and cash prices for brand-name medication that are a fraction of what they were.</p>
<p>Here is the field at a glance, as of October 2026:</p>
<table>
<thead><tr><th>Drug</th><th>Company</th><th>What it targets</th><th>How it is taken</th><th>US status (Oct 2026)</th></tr></thead>
<tbody>
<tr><td>Wegovy pill (oral semaglutide 25 mg)</td><td>Novo Nordisk</td><td>GLP-1</td><td>Daily pill, empty stomach</td><td>Approved Dec 22, 2025</td></tr>
<tr><td>Wegovy HD (semaglutide 7.2 mg)</td><td>Novo Nordisk</td><td>GLP-1</td><td>Weekly injection</td><td>Approved Mar 19, 2026</td></tr>
<tr><td>Foundayo (orforglipron)</td><td>Eli Lilly</td><td>GLP-1 (non-peptide)</td><td>Daily pill, no food or water rules</td><td>Approved Apr 1, 2026</td></tr>
<tr><td>CagriSema (cagrilintide + semaglutide)</td><td>Novo Nordisk</td><td>Amylin + GLP-1</td><td>Weekly injection</td><td>Filed Dec 2025; decision expected Q4 2026</td></tr>
<tr><td>Retatrutide</td><td>Eli Lilly</td><td>GIP + GLP-1 + glucagon</td><td>Weekly injection</td><td>Phase 3 complete; filing planned Q1 2027</td></tr>
<tr><td>MariTide (maridebart cafraglutide)</td><td>Amgen</td><td>GLP-1 activator, GIP blocker</td><td>Monthly injection</td><td>Phase 3 ongoing</td></tr>
<tr><td>Amycretin</td><td>Novo Nordisk</td><td>GLP-1 + amylin in one molecule</td><td>Weekly injection; pill in development</td><td>Phase 3 ongoing</td></tr>
<tr><td>Survodutide</td><td>Boehringer Ingelheim</td><td>Glucagon + GLP-1</td><td>Weekly injection</td><td>Phase 3 results reported; no filing announced</td></tr>
</tbody>
</table>
<p>This guide explains each one in plain English: what it is, what the trials actually showed (including the less flattering numbers companies tend to leave out of headlines), what it costs, when the pipeline drugs might arrive, and - most importantly - what all of this means if you are deciding about weight-loss treatment today.</p>
<p><strong>How we sourced it.</strong> Every figure comes from FDA approval documents and labels, peer-reviewed trial publications (NEJM, The Lancet, Nature Medicine), company announcements, CMS program pages and independent analysis from KFF. Where a company's headline number differs from the more conservative published result, we give both and say which is which. A full source list is at the end. Pipeline drugs are investigational: their results can change, and none of them should be bought outside a clinical trial.</p>`,
      },
      {
        heading: "What changed in the weight-loss drug market in 2025 and 2026?",
        body: `<p><strong>Five things changed: the FDA approved the first GLP-1 pills and a higher-dose Wegovy, manufacturer cash prices for brand-name GLP-1s fell to roughly $149-$449 a month for most doses, Medicare began covering weight-loss GLP-1s for some beneficiaries at $50 a month, the FDA stepped up enforcement against compounded and "research" GLP-1s, and the next generation of drugs produced phase 3 results.</strong></p>
<p>The timeline below shows how quickly the landscape moved. Each event is covered in detail later in this guide.</p>
<table>
<thead><tr><th>Date</th><th>What happened</th></tr></thead>
<tbody>
<tr><td>Feb-May 2025</td><td>FDA grace periods for compounding copies of tirzepatide and semaglutide end after both shortages were declared resolved</td></tr>
<tr><td>Aug 15, 2025</td><td>Wegovy receives accelerated approval for the liver disease MASH</td></tr>
<tr><td>Sept 2025</td><td>FDA launches a crackdown on misleading drug advertising, including dozens of letters about compounded GLP-1 marketing</td></tr>
<tr><td>Nov 6, 2025</td><td>White House announces pricing agreements with Novo Nordisk and Eli Lilly</td></tr>
<tr><td>Dec 18, 2025</td><td>Novo files CagriSema with the FDA</td></tr>
<tr><td>Dec 22, 2025</td><td>FDA approves the Wegovy pill, the first oral GLP-1 for weight management</td></tr>
<tr><td>Jan 2026</td><td>Wegovy pill launches; FDA asks makers to remove the suicidal-behavior warning from Wegovy, Zepbound and Saxenda labels</td></tr>
<tr><td>Feb 2026</td><td>TrumpRx.gov launches; Zepbound KwikPen (a four-dose pen) announced</td></tr>
<tr><td>Mar 2026</td><td>FDA warns 30 telehealth companies over compounded GLP-1 marketing; Wegovy HD 7.2 mg approved</td></tr>
<tr><td>Apr 1, 2026</td><td>FDA approves Foundayo (orforglipron)</td></tr>
<tr><td>Apr 30, 2026</td><td>FDA proposes removing semaglutide, tirzepatide and liraglutide from the list large outsourcing facilities can compound from</td></tr>
<tr><td>May 2026</td><td>Retatrutide's pivotal TRIUMPH-1 trial reports about 28% average weight loss on the top dose</td></tr>
<tr><td>July 1, 2026</td><td>Medicare GLP-1 Bridge begins: $50 a month for eligible beneficiaries</td></tr>
<tr><td>Aug 2026</td><td>Lilly files six lawsuits against sellers of gray-market retatrutide; FDA issues more warning letters to "research peptide" sellers</td></tr>
<tr><td>Oct 2026</td><td>A University of Pennsylvania study of Reddit posts documents side effects reported by people using unapproved retatrutide</td></tr>
</tbody>
</table>
<p><strong>The big picture.</strong> Weight-loss medication is no longer a niche treatment. In EY-Parthenon's 2026 consumer survey of more than 3,600 current and former users, 54% said they take a GLP-1 primarily for weight management - the first time that share passed half. More options, lower cash prices and new coverage routes mean more people can get FDA-approved medication than a year ago. At the same time, employer coverage has not kept pace: KFF's 2026 survey found only 18% of firms with 200 or more workers cover GLP-1s for weight loss.</p>
<p>For anyone shopping for treatment, the practical effect is that the gap between brand-name and compounded medication has narrowed sharply. We explain what that means for choosing a provider later in the guide.</p>`,
      },
      {
        heading: "Why do weight-loss trial results differ depending on who reports them?",
        body: `<p><strong>Most weight-loss trials report two results. The "treatment-policy" (or intention-to-treat) result counts everyone who was randomly assigned, including people who stopped the drug. The "efficacy" or "trial-product" result estimates what happens if everyone keeps taking it. Companies usually headline the second, which is always higher. Neither is wrong, but comparing one drug's efficacy number with another's treatment-policy number is misleading.</strong></p>
<p>This is the single most useful idea for reading weight-loss drug news, and almost no consumer coverage explains it. Take the Wegovy pill's OASIS 4 trial:</p>
<ul>
<li><strong>Treatment-policy result:</strong> 13.6% average weight loss at 64 weeks, vs 2.2% on placebo. This is the primary result in the published NEJM paper.</li>
<li><strong>Trial-product result:</strong> 16.6% vs 2.7%. This is the figure in Novo Nordisk's announcement.</li>
</ul>
<p>Both describe the same trial. The difference is the people who stopped treatment early, whose weight loss is fully counted in the first number and modeled away in the second.</p>
<p><strong>The same gap appears everywhere:</strong></p>
<table>
<thead><tr><th>Drug and trial</th><th>Treatment-policy (everyone randomized)</th><th>Efficacy / trial-product (if everyone stays on)</th></tr></thead>
<tbody>
<tr><td>Wegovy pill - OASIS 4 (64 weeks)</td><td>13.6%</td><td>16.6%</td></tr>
<tr><td>Foundayo, top dose - ATTAIN-1 (72 weeks)</td><td>11.2%</td><td>12.4%</td></tr>
<tr><td>Wegovy HD 7.2 mg - STEP UP (72 weeks)</td><td>18.7%</td><td>20.7%</td></tr>
<tr><td>CagriSema - REDEFINE 1 (68 weeks)</td><td>20.4%</td><td>22.7%</td></tr>
<tr><td>Survodutide, top dose - SYNCHRONIZE-1 (76 weeks)</td><td>13.0%</td><td>16.6%</td></tr>
<tr><td>MariTide - phase 2 (52 weeks)</td><td>12.3%-16.2%</td><td>16.3%-19.9%</td></tr>
</tbody>
</table>
<p><strong>Three more traps to watch for:</strong></p>
<ul>
<li><strong>Different trial lengths.</strong> A 36-week result and an 80-week result are not comparable, because weight loss keeps building for a year or more on most of these drugs.</li>
<li><strong>Different populations.</strong> People with type 2 diabetes consistently lose less weight on these drugs than people without it. A result from a diabetes trial will look smaller.</li>
<li><strong>Placebo differences.</strong> Some trials report placebo-adjusted figures (drug minus placebo); others report raw averages. Always check which.</li>
</ul>
<p>Throughout this guide we label which result we are quoting. When we compare drugs side by side, we use the same type of result where it is available - and we flag cross-trial comparisons as the rough guides they are. Only head-to-head trials, like SURMOUNT-5 (tirzepatide vs semaglutide) or REDEFINE 4 (CagriSema vs tirzepatide), compare drugs directly.</p>`,
      },
      {
        heading: "Is there a GLP-1 weight-loss pill now?",
        body: `<p><strong>Yes - two. The Wegovy pill (oral semaglutide 25 mg) was approved by the FDA on December 22, 2025, and Foundayo (orforglipron) on April 1, 2026. Both are once-daily tablets approved for chronic weight management in adults with obesity, or with overweight and a weight-related condition. They work on the same GLP-1 pathway as the injections, but they are different products with different rules.</strong></p>
<p>The pills matter for a simple reason: many people who would benefit from a GLP-1 never start because they do not want to inject themselves. Before these approvals, the only oral GLP-1 was Rybelsus, approved for type 2 diabetes at doses studied for blood-sugar control, not weight loss.</p>
<table>
<thead><tr><th></th><th>Wegovy pill</th><th>Foundayo</th></tr></thead>
<tbody>
<tr><td>Active ingredient</td><td>Semaglutide (a peptide)</td><td>Orforglipron (a small molecule, not a peptide)</td></tr>
<tr><td>FDA approval</td><td>December 22, 2025</td><td>April 1, 2026</td></tr>
<tr><td>How often</td><td>Once daily, in the morning</td><td>Once daily, any time</td></tr>
<tr><td>Food and water rules</td><td>Empty stomach, up to 4 oz of plain water, wait 30 minutes before eating, drinking or other pills</td><td>None - with or without food</td></tr>
<tr><td>Maintenance dose</td><td>25 mg</td><td>Varies; up to 17.2 mg</td></tr>
<tr><td>Key trial result (everyone randomized)</td><td>13.6% at 64 weeks (OASIS 4)</td><td>11.2% at 72 weeks on the top dose (ATTAIN-1)</td></tr>
<tr><td>Other approved use</td><td>Reducing the risk of heart attack and stroke in adults with established cardiovascular disease and obesity or overweight</td><td>Weight management only in the US (diabetes filing submitted)</td></tr>
<tr><td>Starting self-pay price</td><td>$149/month (1.5 mg)</td><td>$149/month (lowest dose)</td></tr>
</tbody>
</table>
<p><strong>Why the two pills behave so differently.</strong> Semaglutide is a peptide - a chain of amino acids that the digestive system normally breaks down. The Wegovy pill uses an absorption enhancer that lets semaglutide be absorbed in the stomach, and that only works on an empty stomach with very little water. Orforglipron is a small-molecule drug designed from scratch to be swallowed, so it does not need those conditions. That design difference is why Foundayo can be taken with breakfast and the Wegovy pill cannot.</p>
<p><strong>What they share.</strong> Both carry the same boxed warning about thyroid C-cell tumors seen in rodents as the injectable GLP-1s, and both list the same class warnings, including pancreatitis, gallbladder disease and dehydration-related kidney problems. Both cause mainly digestive side effects, especially while the dose is being increased.</p>
<p>The next sections cover each pill in detail, then compare them directly. If you are already on an injection, see the section on switching to a pill for maintenance - it is one of the most practical findings of 2026.</p>`,
      },
      {
        heading: "How does the Wegovy pill work, and how well does it work?",
        body: `<p><strong>The Wegovy pill is daily oral semaglutide - the same active ingredient as Wegovy injections - stepped up every 30 days from 1.5 mg to a 25 mg maintenance dose. In the OASIS 4 trial, adults without diabetes lost an average of 13.6% of their body weight at 64 weeks, compared with 2.2% on placebo, counting everyone randomized; Novo's on-treatment estimate is 16.6%.</strong></p>
<p><strong>Dosing (FDA label):</strong></p>
<table>
<thead><tr><th>Days</th><th>Daily dose</th></tr></thead>
<tbody>
<tr><td>1-30</td><td>1.5 mg</td></tr>
<tr><td>31-60</td><td>4 mg</td></tr>
<tr><td>61-90</td><td>9 mg</td></tr>
<tr><td>91 onward</td><td>25 mg (maintenance)</td></tr>
</tbody>
</table>
<p><strong>How to take it.</strong> Every morning on an empty stomach, swallowed whole with no more than 4 ounces (about half a cup) of plain water. Then wait at least 30 minutes before eating, drinking anything else, or taking other oral medications. If you miss a dose, the label says to skip it and resume the next day. These rules are not optional: they are how the drug gets absorbed.</p>
<p><strong>What OASIS 4 found.</strong> The trial randomly assigned 307 adults with obesity or overweight, without diabetes, to the pill or placebo for 64 weeks, alongside lifestyle support. Key results, published in NEJM in 2025:</p>
<ul>
<li>Average weight loss of <strong>13.6% vs 2.2%</strong> on placebo (treatment-policy), or 16.6% vs 2.7% if everyone had stayed on treatment.</li>
<li>About <strong>30%</strong> of people on the pill lost at least 20% of their body weight, vs about 3% on placebo.</li>
<li>Digestive side effects were common: nausea in about 47% vs 19% on placebo, and vomiting in about 31% vs 6%.</li>
<li>About 7% stopped because of side effects, vs about 6% on placebo.</li>
</ul>
<p><strong>How it compares with Wegovy injections.</strong> Novo describes the pill's weight loss as similar to injectable Wegovy 2.4 mg, which produced about 15% in the STEP-1 trial. The trials were separate, so this is an indirect comparison, but the numbers are in the same range. The trade-off is convenience: one injection a week vs one pill every morning with a fasting routine.</p>
<p><strong>Who it suits.</strong> People who want FDA-approved semaglutide without needles and who can keep a consistent morning routine. It also carries the cardiovascular risk-reduction indication for adults with established heart disease, which the injectable Wegovy also has. It suits people less well if they take several other morning medications that conflict with the 30-minute wait, or if they know they will not stick to a fasting rule every day.</p>
<p><strong>Where to get it.</strong> Novo says it is available at about 70,000 US pharmacies, through NovoCare Pharmacy, Amazon Pharmacy and telehealth services. Among the providers we rank, <a href="/reviews/ro">ro</a> prescribes brand-name GLP-1s and handles insurance checks.</p>`,
      },
      {
        heading: "What is Foundayo (orforglipron), and how well does it work?",
        body: `<p><strong>Foundayo is Eli Lilly's once-daily orforglipron pill, approved on April 1, 2026 for chronic weight management. It can be taken at any time of day with or without food. In the ATTAIN-1 trial, the top dose produced 11.2% average weight loss at 72 weeks vs 2.1% on placebo counting everyone randomized, or 12.4% (about 27 lb) for people who stayed on treatment.</strong></p>
<p><strong>Dosing (FDA label).</strong> Foundayo starts at 0.8 mg once daily. After at least 30 days the dose moves to 2.5 mg, then after at least 30 more days to 5.5 mg. From there, your clinician may increase it to 9 mg, 14.5 mg and finally 17.2 mg, each after at least 30 days, depending on how you respond and what you tolerate. The maximum is 17.2 mg a day (9 mg if you also take certain drugs, called strong CYP3A4 inhibitors, that slow how the body clears it). If you miss a dose, take it as soon as possible, but never double up.</p>
<p><strong>A detail that confuses many readers.</strong> The phase 3 trials used capsules at 6, 12 and 36 mg. The tablets sold today use different numbers that deliver equivalent exposure: the 36 mg trial dose corresponds to the 17.2 mg tablet, 12 mg to 9 mg, and 6 mg to 5.5 mg. So when you read "36 mg" in a trial report, it means the top Foundayo dose, not a dose higher than the label allows.</p>
<p><strong>ATTAIN-1 results</strong> (3,127 adults with obesity or overweight, without diabetes, 72 weeks, NEJM 2025):</p>
<table>
<thead><tr><th>Trial dose (tablet equivalent)</th><th>Everyone randomized</th><th>If everyone stayed on treatment</th><th>Lost at least 10% (on treatment)</th></tr></thead>
<tbody>
<tr><td>6 mg (5.5 mg)</td><td>7.5%</td><td>7.8%</td><td>35.9%</td></tr>
<tr><td>12 mg (9 mg)</td><td>8.4%</td><td>9.3%</td><td>45.1%</td></tr>
<tr><td>36 mg (17.2 mg)</td><td>11.2%</td><td>12.4%</td><td>59.6%</td></tr>
<tr><td>Placebo</td><td>2.1%</td><td>0.9%</td><td>8.6%</td></tr>
</tbody>
</table>
<p><strong>Side effects.</strong> As with other GLP-1s, they are mostly digestive: nausea, constipation, diarrhea, vomiting, indigestion and abdominal pain, plus headache, fatigue and hair loss among the more common effects on the label. In ATTAIN-1, 5.3% to 10.3% of people stopped treatment because of side effects across doses, compared with 2.7% on placebo.</p>
<p><strong>How it fits.</strong> Foundayo's average weight loss is lower than the injectables and lower than the Wegovy pill in cross-trial comparisons. Its advantages are practical: no fasting routine, no needles, a manufacturing process that does not depend on injectable peptide supply, and - as the next sections show - promising data as a maintenance option after an injection. For someone who needs moderate weight loss, or who wants to keep off weight already lost, it may be enough. For someone who needs 20% or more, the injections have stronger evidence.</p>
<p><strong>Where to get it.</strong> Lilly sells it through LillyDirect, retail pharmacies and telehealth partners. Among the providers we rank, <a href="/reviews/ro">ro</a> offers Foundayo.</p>`,
      },
      {
        heading: "Wegovy pill vs Foundayo: which GLP-1 pill is better?",
        body: `<p><strong>No trial has compared the two pills directly in people with obesity. In separate trials, the Wegovy pill produced more average weight loss (13.6% at 64 weeks vs 11.2% at 72 weeks for Foundayo's top dose, counting everyone randomized). Foundayo is easier to take, with no food or water restrictions. Each company has published an indirect analysis that favors its own drug.</strong></p>
<table>
<thead><tr><th>Factor</th><th>Wegovy pill</th><th>Foundayo</th><th>Edge</th></tr></thead>
<tbody>
<tr><td>Average weight loss (separate trials, everyone randomized)</td><td>13.6% at 64 weeks</td><td>11.2% at 72 weeks (top dose)</td><td>Wegovy pill</td></tr>
<tr><td>Daily routine</td><td>Empty stomach, little water, 30-minute wait</td><td>Any time, with or without food</td><td>Foundayo</td></tr>
<tr><td>Dose steps</td><td>4 steps to 25 mg over 90 days</td><td>Up to 6 steps; maintenance dose can stop lower</td><td>Depends on you</td></tr>
<tr><td>Cardiovascular indication</td><td>Yes (established heart disease)</td><td>No (US weight label)</td><td>Wegovy pill</td></tr>
<tr><td>Maintenance after an injection</td><td>Not specifically tested</td><td>Tested in ATTAIN-MAINTAIN</td><td>Foundayo</td></tr>
<tr><td>Self-pay price range</td><td>$149-$299/month</td><td>$149-$349/month</td><td>Similar</td></tr>
<tr><td>Medicare GLP-1 Bridge</td><td>Covered</td><td>Covered</td><td>Tie</td></tr>
</tbody>
</table>
<p><strong>The dueling analyses.</strong> Novo Nordisk sponsored an indirect comparison, presented in 2026, estimating that oral semaglutide 25 mg produced about 3 percentage points more weight loss than orforglipron's top dose, with higher odds of stopping because of side effects on orforglipron. Lilly sponsored its own analysis in adults with type 2 diabetes, estimating that Foundayo's top dose produced 1.5 to 2.4 points more weight loss than oral semaglutide 25 mg. Indirect comparisons cannot fully adjust for differences between trials, and it is no coincidence that each favors its sponsor. Treat both as hypotheses, not verdicts.</p>
<p><strong>The one true head-to-head.</strong> In ACHIEVE-3, published in The Lancet in 2026, orforglipron was compared directly with Rybelsus (oral semaglutide at the lower 7 mg and 14 mg diabetes doses, not the 25 mg Wegovy pill) in people with type 2 diabetes. Orforglipron lowered A1C and weight more (weight loss of 9.2% on its top dose vs 5.3% on 14 mg oral semaglutide over 52 weeks), but caused more digestive side effects and more discontinuations. Because the semaglutide doses were lower than the Wegovy pill, this trial does not settle the obesity question.</p>
<p><strong>Our decision rules:</strong></p>
<ul>
<li><strong>If you want the most weight loss from a pill</strong> and can manage a strict morning routine, the Wegovy pill has the stronger trial result.</li>
<li><strong>If a fasting routine would not survive your real life</strong> - shift work, morning medications, unpredictable mornings - Foundayo's flexibility may matter more than a few percentage points, because the best drug is the one you take consistently.</li>
<li><strong>If you have established heart disease,</strong> the Wegovy pill's cardiovascular indication is a point in its favor; discuss it with your clinician.</li>
<li><strong>If you are coming off an injection to maintain your weight,</strong> Foundayo has the only dedicated maintenance trial (see below).</li>
</ul>`,
      },
      {
        heading: "Are GLP-1 pills as effective as injections?",
        body: `<p><strong>Not on average. Weekly injections still produce the largest weight loss: about 15% for Wegovy 2.4 mg (STEP-1), about 18.7% for Wegovy HD 7.2 mg (STEP UP) and up to about 20.9% for Zepbound 15 mg (SURMOUNT-1). The Wegovy pill (13.6%) comes closest; Foundayo's top dose produced 11.2%. These are cross-trial comparisons, and individual results vary widely.</strong></p>
<table>
<thead><tr><th>Medication</th><th>Form</th><th>Trial</th><th>Average weight loss</th></tr></thead>
<tbody>
<tr><td>Zepbound (tirzepatide) 15 mg</td><td>Weekly injection</td><td>SURMOUNT-1, 72 weeks</td><td>About 20.9% (placebo 3.1%)</td></tr>
<tr><td>Wegovy HD (semaglutide 7.2 mg)</td><td>Weekly injection</td><td>STEP UP, 72 weeks</td><td>18.7% (placebo 3.9%)</td></tr>
<tr><td>Wegovy (semaglutide 2.4 mg)</td><td>Weekly injection</td><td>STEP-1, 68 weeks</td><td>About 15% (placebo 2.4%)</td></tr>
<tr><td>Wegovy pill (semaglutide 25 mg)</td><td>Daily pill</td><td>OASIS 4, 64 weeks</td><td>13.6% (placebo 2.2%)</td></tr>
<tr><td>Foundayo (orforglipron, top dose)</td><td>Daily pill</td><td>ATTAIN-1, 72 weeks</td><td>11.2% (placebo 2.1%)</td></tr>
</tbody>
</table>
<p><em>Figures are treatment-policy results where available; the STEP-1 and SURMOUNT-1 figures are the widely cited primary results of those trials.</em></p>
<p><strong>Why "less" can still be "enough".</strong> Clinical guidelines generally treat a 5% to 10% loss of body weight as meaningful for health - it can improve blood pressure, blood sugar and other markers. A pill producing 11% to 14% on average clears that bar for many people. Whether a pill is enough for you depends on your starting point and your goal, not on which drug tops a league table.</p>
<p><strong>What pills do better.</strong></p>
<ul>
<li><strong>No needles,</strong> which removes the main reason some people never start.</li>
<li><strong>No refrigeration or cold-chain shipping,</strong> which simplifies travel and delivery.</li>
<li><strong>Easy to stop and restart</strong> day to day if a side effect flares - though stopping altogether brings the same regain risk as with injections.</li>
</ul>
<p><strong>What injections do better.</strong></p>
<ul>
<li><strong>Larger average effect,</strong> particularly tirzepatide and the higher semaglutide dose.</li>
<li><strong>Once a week,</strong> so a missed dose is a rarer event than with a daily pill.</li>
<li><strong>Longer track record</strong> in large outcome trials.</li>
</ul>
<p><strong>A cost note.</strong> At manufacturer self-pay prices, pills and injections now cost roughly the same at comparable steps - the Wegovy pill and Foundayo top out around $299 to $349 a month, while Wegovy injections are $349 and Zepbound $449 at most doses with on-time refills. Price is no longer the main reason to choose one form over the other.</p>`,
      },
      {
        heading: "Can I switch from a weight-loss injection to a pill to maintain my weight?",
        body: `<p><strong>The evidence for this is new but encouraging. In ATTAIN-MAINTAIN (Nature Medicine, May 2026), adults who had lost weight on Wegovy or Zepbound were switched to orforglipron or placebo for a year. People switched from Wegovy kept off most of their loss, and people switched from Zepbound kept off about three-quarters of it, while those switched to placebo regained much more. Any switch should be planned with your clinician.</strong></p>
<p>Maintenance is the hardest part of GLP-1 treatment. In earlier trials, people who stopped semaglutide or tirzepatide regained a large share of their weight within a year. A pill that costs less, needs no injections and holds most of the weight off would change the long-term picture for many patients.</p>
<p><strong>What ATTAIN-MAINTAIN did.</strong> It enrolled 376 adults who had already lost weight on injectable Wegovy or Zepbound in an earlier trial, then randomly assigned them to daily orforglipron or placebo for 52 weeks.</p>
<p><strong>What it found:</strong></p>
<ul>
<li><strong>Switched from Wegovy:</strong> Lilly reported that people on orforglipron stayed within about 0.9 kg (2 lb) of the weight they had reached on the injection. The published analysis reported that they kept off about 79% of their earlier weight loss, compared with about 38% for those switched to placebo.</li>
<li><strong>Switched from Zepbound:</strong> people on orforglipron regained about 5 kg (11 lb) on average and kept off about 75% of their earlier loss.</li>
<li><strong>Side effects:</strong> between about 5% and 8% stopped orforglipron because of side effects.</li>
</ul>
<p><strong>The important limitation.</strong> The trial had no group that simply stayed on the injection, so it cannot tell you whether switching is as good as continuing. It shows the pill is much better than stopping, not that it equals the injection. Zepbound produces more weight loss than orforglipron, so it makes sense that more weight came back after that switch.</p>
<p><strong>Who might consider it:</strong></p>
<ul>
<li>People at a stable goal weight who want to stop injecting.</li>
<li>People whose insurance or budget covers a pill more easily than an injection.</li>
<li>People who tolerated their injection well and want a lower-intensity maintenance option.</li>
</ul>
<p><strong>How to do it safely.</strong> Agree on a plan with your clinician: when to stop the injection, which pill dose to start at, how often to weigh yourself, and how much regain would trigger a change of plan. Keep up the habits that protect maintenance - adequate protein, resistance training and regular activity. Our guide to <a href="/articles/stopping-glp1-maintenance">stopping a GLP-1 and maintenance</a> covers the broader evidence.</p>`,
      },
      {
        heading: "How much do the GLP-1 pills cost?",
        body: `<p><strong>At manufacturer self-pay prices, the Wegovy pill costs $149 a month for the 1.5 mg starting dose, $199 for 4 mg, and $299 for the 9 mg and 25 mg doses. Foundayo ranges from $149 at its lowest doses to $299 for most higher doses, and $349 for the top two doses if you do not refill within 45 days. Commercially insured patients may pay as little as $25 with savings cards, and eligible Medicare beneficiaries pay $50.</strong></p>
<table>
<thead><tr><th>Dose</th><th>Wegovy pill (NovoCare self-pay)</th></tr></thead>
<tbody>
<tr><td>1.5 mg</td><td>$149/month</td></tr>
<tr><td>4 mg</td><td>$199/month</td></tr>
<tr><td>9 mg</td><td>$299/month</td></tr>
<tr><td>25 mg</td><td>$299/month</td></tr>
</tbody>
</table>
<table>
<thead><tr><th>Dose</th><th>Foundayo (LillyDirect self-pay)</th></tr></thead>
<tbody>
<tr><td>0.8 mg</td><td>$149/month</td></tr>
<tr><td>2.5 mg</td><td>$149/month promotional price through Dec 31, 2026 (regular $199)</td></tr>
<tr><td>5.5 mg</td><td>$199/month promotional price through Dec 31, 2026 (regular $299)</td></tr>
<tr><td>9 mg</td><td>$299/month</td></tr>
<tr><td>14.5 mg and 17.2 mg</td><td>$299/month if refilled within 45 days; otherwise $349</td></tr>
</tbody>
</table>
<p><strong>Reading the fine print:</strong></p>
<ul>
<li><strong>Prices rise as the dose rises.</strong> Both pills have dose-tiered pricing, so the starting price is not your long-term price. Budget for the maintenance dose: about $299 a month for most people on either pill.</li>
<li><strong>The 45-day refill rule.</strong> Lilly's lowest prices on higher doses depend on refilling on time. A late refill can cost $50 more.</li>
<li><strong>Promotions end.</strong> Foundayo's reduced prices on 2.5 mg and 5.5 mg run through December 31, 2026. Check the current price before you order.</li>
<li><strong>TrumpRx lists the same products</strong> and routes orders to the manufacturers' pharmacies; it does not usually offer a lower price than buying directly.</li>
</ul>
<p><strong>Annual cost at maintenance.</strong> At $299 a month, a year of either pill at a full dose costs about $3,588. That is several times the cost of the cheapest compounded semaglutide programs we track, but it buys an FDA-approved product - and it is a tiny fraction of what brand-name GLP-1s cost at list price just two years ago.</p>
<p><strong>With insurance.</strong> Coverage for weight-loss drugs depends entirely on your plan. If you have commercial coverage, ask whether the pill is on your formulary and whether prior authorization is required. Telehealth services with insurance support, such as <a href="/reviews/ro">ro</a>, can check this for you. Medicare coverage is covered later in this guide.</p>
<p>Prices are the manufacturers' published self-pay prices as of October 2026 and can change; confirm before ordering.</p>`,
      },
      {
        heading: "What is Wegovy HD (semaglutide 7.2 mg)?",
        body: `<p><strong>Wegovy HD is a higher-dose version of the Wegovy injection: 7.2 mg of semaglutide once a week, three times the standard 2.4 mg maintenance dose. The FDA approved it on March 19, 2026 for adults with obesity, or overweight and a weight-related condition, who have tolerated 2.4 mg and need more weight loss. In the STEP UP trial, it produced 18.7% average weight loss at 72 weeks, vs 15.6% on 2.4 mg and 3.9% on placebo.</strong></p>
<p>Wegovy HD was approved under the FDA's Commissioner's National Priority Voucher pilot, which aims to speed up reviews of selected drugs. Some news coverage called it an "accelerated" approval; that describes the fast review, not the FDA's formal Accelerated Approval pathway. It launched nationwide on April 7, 2026.</p>
<p><strong>STEP UP results</strong> (1,407 adults with obesity, without diabetes, 72 weeks, published in The Lancet Diabetes &amp; Endocrinology in 2025):</p>
<table>
<thead><tr><th>Group</th><th>Everyone randomized</th><th>If everyone stayed on treatment</th></tr></thead>
<tbody>
<tr><td>Semaglutide 7.2 mg</td><td>18.7%</td><td>20.7%</td></tr>
<tr><td>Semaglutide 2.4 mg</td><td>15.6%</td><td>17.5%</td></tr>
<tr><td>Placebo</td><td>3.9%</td><td>2.4%</td></tr>
</tbody>
</table>
<p>About one in three people on 7.2 mg lost at least 25% of their body weight.</p>
<p><strong>The side effect to know about: dysesthesia.</strong> Dysesthesia means unusual or unpleasant skin sensations - tingling, burning, sensitivity to touch. In STEP UP it was reported by about 22% of people on 7.2 mg, compared with about 6% on 2.4 mg and 0.3% on placebo. Digestive side effects were also more frequent at the higher dose. Dysesthesia has now appeared with several high-efficacy weight-loss drugs, including retatrutide, and is worth asking your clinician about if you are considering a higher dose.</p>
<p><strong>Who it is for.</strong> The label is aimed at people who are already on 2.4 mg, tolerate it, and need further weight reduction. It is not a starting dose and not a shortcut. The extra gain over 2.4 mg in the trial averaged about 3 percentage points of body weight - meaningful for some people, especially those with a lot of weight to lose or who have plateaued, but modest compared with the jump from no treatment to 2.4 mg.</p>
<p><strong>Price.</strong> Novo lists Wegovy HD at about $399 a month self-pay, compared with $349 for standard Wegovy doses. Commercially insured patients may pay as little as $25 a month with the savings offer if their plan covers it.</p>
<p><strong>Do not recreate it with compounded semaglutide.</strong> Drawing extra units from a compounded vial to reach 7.2 mg is not the same as being prescribed Wegovy HD, and dosing errors with compounded semaglutide have already sent people to hospital. Our <a href="/articles/glp1-dosage-guide">GLP-1 dosage guide</a> explains why.</p>`,
      },
      {
        heading: "What is the Zepbound KwikPen, and did Zepbound change in 2026?",
        body: `<p><strong>The Zepbound KwikPen is a new multi-dose pen that holds four weekly doses - one month of treatment - instead of the single-use pens Zepbound launched with. Lilly announced it in February 2026, and since March 2026 its self-pay price has been available at major pharmacies. Zepbound's active ingredient (tirzepatide), doses and indications did not change.</strong></p>
<p>Zepbound itself remains approved for chronic weight management and for moderate to severe obstructive sleep apnea in adults with obesity. We found no new Zepbound indication in 2025 or 2026. What changed is how it is sold and what it costs.</p>
<p><strong>Three formats are now available:</strong></p>
<table>
<thead><tr><th>Format</th><th>How it works</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Single-dose autoinjector pen</td><td>One pen per weekly dose; hidden needle</td><td>The original format</td></tr>
<tr><td>Single-dose vial</td><td>One vial per weekly dose; drawn up with a syringe</td><td>Sold through LillyDirect; Walmart pickup available since October 2025</td></tr>
<tr><td>KwikPen</td><td>Four doses in one pen; new pen needle each week</td><td>Self-pay price available at retail pharmacies; pen needles sold separately</td></tr>
</tbody>
</table>
<p><strong>Self-pay prices (LillyDirect, October 2026).</strong> Lilly says vials and KwikPen are priced the same:</p>
<table>
<thead><tr><th>Dose</th><th>Price with refill within 45 days</th><th>Otherwise</th></tr></thead>
<tbody>
<tr><td>2.5 mg</td><td>$299/month</td><td>$299/month</td></tr>
<tr><td>5 mg</td><td>$399/month</td><td>$399/month</td></tr>
<tr><td>7.5 mg</td><td>$449/month</td><td>$499/month</td></tr>
<tr><td>10 mg, 12.5 mg, 15 mg</td><td>$449/month</td><td>$699/month</td></tr>
</tbody>
</table>
<p>The 45-day rule is important: at the higher doses, a refill that is more than 45 days after the last one can cost $250 more. If you are on Zepbound self-pay, put your refill date in your calendar.</p>
<p><strong>Medicare.</strong> The Medicare GLP-1 Bridge covers the Zepbound KwikPen specifically - not the single-dose pens or vials - at a $50 monthly copay for eligible beneficiaries. If you are on Medicare and use another Zepbound format, ask your prescriber about switching formats.</p>
<p><strong>Why this matters for comparison shopping.</strong> At $449 a month for most maintenance doses, brand-name Zepbound now costs roughly 1.5 to 5 times as much as the compounded tirzepatide programs we track (which start between $89 and $299 a month), instead of ten times as much at its old list price. For some people, that gap is now small enough to choose the FDA-approved product. For a direct comparison of the molecules, see <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>.</p>`,
      },
      {
        heading: "What is retatrutide?",
        body: `<p><strong>Retatrutide is an investigational once-weekly injection from Eli Lilly that activates three hormone receptors - GIP, GLP-1 and glucagon - which is why it is often called a "triple agonist" or "triple G" drug. It is not FDA-approved. In phase 3 trials it produced the largest average weight loss of any weight-loss drug tested so far: about 28% at 80 weeks on the top dose in the pivotal TRIUMPH-1 trial.</strong></p>
<p>To understand why retatrutide gets so much attention, it helps to see how it builds on the drugs already on the market:</p>
<table>
<thead><tr><th>Drug</th><th>Receptors activated</th><th>Status</th></tr></thead>
<tbody>
<tr><td>Semaglutide (Wegovy)</td><td>GLP-1</td><td>Approved</td></tr>
<tr><td>Tirzepatide (Zepbound)</td><td>GIP + GLP-1</td><td>Approved</td></tr>
<tr><td>Retatrutide</td><td>GIP + GLP-1 + glucagon</td><td>Investigational</td></tr>
</tbody>
</table>
<p><strong>What each hormone adds.</strong> GLP-1 and GIP are gut hormones that reduce appetite and help regulate blood sugar. Glucagon is better known for raising blood sugar, but it also increases energy expenditure and helps the liver burn fat. The idea behind retatrutide is that adding glucagon activity to a GIP/GLP-1 drug produces more weight loss and more liver-fat reduction than appetite effects alone. Survodutide, covered later, pairs glucagon with GLP-1 only.</p>
<p><strong>How it is taken in trials.</strong> Once a week by injection under the skin, with doses of 4 mg, 9 mg and 12 mg studied in phase 3 after a gradual escalation.</p>
<p><strong>The early evidence.</strong> Retatrutide first drew wide attention with a phase 2 trial published in NEJM in 2023: at 48 weeks, people on the 12 mg dose had lost 24.2% of their body weight on average, vs 2.1% on placebo, and their weight had not yet plateaued. That trial was small (338 people) and short. The phase 3 TRIUMPH program, which reported in 2025 and 2026, was designed to show whether those results hold in larger, longer trials - and they largely did.</p>
<p><strong>Why it matters for patients today.</strong> Retatrutide is not available legally outside clinical trials. The intense interest has created a large gray market of products sold online as "research peptides," which the FDA and Lilly are actively targeting. We cover the trial results, side effects, expected timeline and the risks of the gray market in the next four sections.</p>`,
      },
      {
        heading: "How much weight do people lose on retatrutide?",
        body: `<p><strong>In Lilly's pivotal TRIUMPH-1 trial, adults without diabetes lost an average of 28.3% of their body weight at 80 weeks on the 12 mg dose (about 70 lb), vs 2.2% on placebo, for people who stayed on treatment; the published treatment-policy result is lower, reported at about 25%. In a 104-week extension, the 12 mg group averaged 30.3%. People with type 2 diabetes lost less - about 20.8% at 80 weeks in TRIUMPH-2.</strong></p>
<p>The TRIUMPH program tested retatrutide across different groups of patients. Lilly's headline results (efficacy estimand, for people who stayed on treatment):</p>
<table>
<thead><tr><th>Trial</th><th>Who was studied</th><th>Duration</th><th>Weight loss on retatrutide</th><th>Placebo</th></tr></thead>
<tbody>
<tr><td>Phase 2 (NEJM 2023)</td><td>Obesity or overweight, no diabetes (n=338)</td><td>48 weeks</td><td>24.2% on 12 mg</td><td>2.1%</td></tr>
<tr><td>TRIUMPH-4</td><td>Obesity or overweight with knee osteoarthritis</td><td>68 weeks</td><td>28.7% on 12 mg; 26.4% on 9 mg</td><td>2.1%</td></tr>
<tr><td>TRIUMPH-1</td><td>Obesity or overweight, no diabetes (n=2,339)</td><td>80 weeks</td><td>28.3% on 12 mg; 25.9% on 9 mg; 19.0% on 4 mg</td><td>2.2%</td></tr>
<tr><td>TRIUMPH-1 extension</td><td>Same participants, pre-specified</td><td>104 weeks</td><td>30.3% on 12 mg</td><td>-</td></tr>
<tr><td>TRIUMPH-2</td><td>Obesity or overweight with type 2 diabetes</td><td>80 weeks</td><td>20.8% on 12 mg; 19.1% on 9 mg; 12.7% on 4 mg</td><td>About 4%</td></tr>
<tr><td>TRIUMPH-3</td><td>Severe obesity with established cardiovascular disease</td><td>80 weeks</td><td>Up to 22.6%</td><td>-</td></tr>
</tbody>
</table>
<p><strong>What else the trials showed:</strong></p>
<ul>
<li><strong>A large share reached very high losses.</strong> In TRIUMPH-1, 45.3% of people on 12 mg lost at least 30% of their body weight, and 65.3% ended with a BMI below 30.</li>
<li><strong>Knee pain improved.</strong> In TRIUMPH-4, a standard knee-pain score fell by about 74% to 76% on retatrutide, vs about 40% on placebo.</li>
<li><strong>Sleep apnea improved.</strong> Two sleep apnea trials published in NEJM in October 2026 found retatrutide reduced breathing interruptions during sleep significantly more than placebo.</li>
<li><strong>The cardiovascular signal was less clear.</strong> TRIUMPH-3 enrolled people with heart disease and produced large weight loss, but trade press reported that major cardiovascular events did not differ significantly from placebo. The trial was not designed as a cardiovascular outcomes study; a dedicated outcomes trial (TRIUMPH-Outcomes) is still running.</li>
</ul>
<p><strong>How to read "28%" responsibly.</strong> The figure is Lilly's on-treatment estimate for the highest dose. The treatment-policy result, which counts people who stopped, is reported at about 25% - still the largest ever seen in a phase 3 obesity trial, but a few points lower than the headline. For context, tirzepatide 15 mg produced about 20.9% at 72 weeks in SURMOUNT-1. No head-to-head trial of retatrutide against tirzepatide has reported.</p>`,
      },
      {
        heading: "What are the side effects of retatrutide?",
        body: `<p><strong>Retatrutide's side effects were mainly digestive, as with other GLP-1-based drugs, and more common at higher doses. In TRIUMPH-1, 11.3% of people on the 12 mg dose stopped because of side effects, vs 4.9% on placebo. Dysesthesia - unusual skin sensations - was reported by about 12.5% on 12 mg vs 0.9% on placebo.</strong></p>
<table>
<thead><tr><th>TRIUMPH-1 (80 weeks)</th><th>4 mg</th><th>9 mg</th><th>12 mg</th><th>Placebo</th></tr></thead>
<tbody>
<tr><td>Stopped because of side effects</td><td>4.1%</td><td>6.9%</td><td>11.3%</td><td>4.9%</td></tr>
<tr><td>Dysesthesia (abnormal skin sensations)</td><td>5.1%</td><td>12.3%</td><td>12.5%</td><td>0.9%</td></tr>
</tbody>
</table>
<p><strong>Digestive side effects.</strong> Nausea, diarrhea, vomiting and constipation were the most common side effects, as they are with semaglutide and tirzepatide. In the phase 2 trial, they were dose-related and partly reduced by starting at a lower dose. This is the same pattern seen with every drug in the class: slower escalation means fewer problems.</p>
<p><strong>Dysesthesia.</strong> Lilly describes the cases as mostly mild to moderate, with most resolving during treatment. It is notable because it was rare with the earlier GLP-1 drugs at standard doses but appears more often with the newest high-efficacy treatments - it was also reported by about 22% of people on Wegovy HD 7.2 mg. Researchers are still working out why. If you experience new tingling, burning or skin sensitivity on any GLP-1 drug, tell your clinician.</p>
<p><strong>Discontinuation depends on the population.</strong> In TRIUMPH-2, which enrolled people with type 2 diabetes, discontinuation due to side effects was 3.8%, 11.6% and 7.7% across the three doses, vs 4.9% on placebo. These numbers are in a similar range to other high-dose incretin drugs.</p>
<p><strong>What we do not know yet.</strong></p>
<ul>
<li><strong>Long-term safety beyond about two years</strong> in large numbers of people.</li>
<li><strong>Cardiovascular outcomes,</strong> which the ongoing TRIUMPH-Outcomes trial is designed to measure.</li>
<li><strong>Muscle and bone effects</strong> of losing 25% to 30% of body weight - a question for any drug that produces this much loss.</li>
<li><strong>The full label,</strong> including warnings and contraindications, which will not exist until the FDA completes a review.</li>
</ul>
<p>The trial safety data apply only to the genuine product, made by Lilly, given at tested doses under medical supervision. They say nothing about the safety of products sold online as "retatrutide," which is the subject of the next two sections.</p>`,
      },
      {
        heading: "When will retatrutide be approved?",
        body: `<p><strong>Not before 2027 at the earliest. Lilly said in July 2026 that it plans to submit retatrutide to the FDA in the first quarter of 2027, later than its earlier 2026 target, to complete manufacturing and quality data. Standard FDA reviews of new drugs aim to finish about 10 months after an application is formally accepted - roughly a year after submission - though priority programs can be faster. Until then, it is available only in clinical trials.</strong></p>
<p>Lilly's second-quarter 2026 report stated that the clinical data package for obesity, obstructive sleep apnea and knee osteoarthritis pain is complete. The delay, according to Lilly, is about chemistry, manufacturing and controls - the data that show the company can produce the drug consistently at scale - rather than about the trial results.</p>
<p><strong>What could change the timeline:</strong></p>
<ul>
<li><strong>Faster review.</strong> The FDA's National Priority Voucher pilot has produced very fast reviews for some weight-loss drugs in 2026; Foundayo's review reportedly took about 50 days. Whether retatrutide would receive similar treatment has not been announced.</li>
<li><strong>Updated guidance.</strong> Lilly reports quarterly results and could update its filing plans.</li>
<li><strong>FDA questions.</strong> Any regulatory review can be extended if the agency requests more data.</li>
</ul>
<p><strong>Can I get it through a clinical trial?</strong> Possibly. Retatrutide trials continue, including the cardiovascular outcomes trial and a maintenance trial. You can search for recruiting studies at ClinicalTrials.gov by entering "retatrutide." Trials have strict eligibility criteria, and you may be assigned to placebo, but trial participants receive the genuine drug under medical supervision at no cost.</p>
<p><strong>What should I do in the meantime?</strong> If you need weight-loss treatment now, the approved options are strong. Tirzepatide (Zepbound) produced about 20.9% average weight loss in SURMOUNT-1, and its self-pay price has fallen sharply. Starting an approved treatment now and discussing retatrutide with your clinician once it is approved is a better plan than waiting - or than buying an unapproved product. Our <a href="/">ranking of online GLP-1 providers</a> compares programs that offer tirzepatide today.</p>`,
      },
      {
        heading: "Is it safe or legal to buy retatrutide online?",
        body: `<p><strong>No. Retatrutide is not approved for any use, cannot legally be compounded, and the FDA warns that products sold online "for research purposes" or "not for human consumption" are of unknown quality and may be harmful. The FDA has sent multiple rounds of warning letters to sellers, and Lilly has filed lawsuits against several. A 2026 University of Pennsylvania study of Reddit posts found thousands of users reporting side effects from gray-market products.</strong></p>
<p>A large online market sells vials labeled "retatrutide," often branded with names like "GLP-3" or "RT," usually as freeze-dried powder that buyers mix themselves. Sellers typically label them "research use only." Here is what regulators and researchers say about them.</p>
<p><strong>The FDA's position.</strong> On its page about unapproved GLP-1 drugs, the FDA states that retatrutide and cagrilintide are not components of any FDA-approved drug, cannot be used in compounding, and have not been found safe and effective for any condition. It warns consumers against GLP-1 products sold for "research purposes," noting they do not go through FDA review for safety, effectiveness or quality.</p>
<p><strong>Enforcement against sellers.</strong> The FDA has issued warning letters to peptide sellers in several waves, including December 2024, September 2025, March 2026 and August 2026. Letters dated August 24, 2026 to Royal Peptides and NuScience Peptides called retatrutide an unapproved new drug; FDA has said that a "research use only" label does not protect a seller when the evidence shows the product is intended for people. The advocacy group Public Citizen reported in 2026 that many sellers who received letters continued advertising peptides.</p>
<p><strong>Lilly's lawsuits.</strong> On August 12, 2026, Lilly filed six lawsuits against businesses it accused of selling retatrutide, and said it had referred more than 200 individuals and companies to federal and state authorities. These are allegations; courts had not ruled on them at the time of writing.</p>
<p><strong>What users report.</strong> Researchers at the University of Pennsylvania used AI to analyze about 150,000 Reddit posts and comments and identified roughly 14,000 users who described taking unapproved retatrutide; 7,823 of them reported at least one symptom. The most commonly reported symptom was increased appetite - surprising for a drug designed to suppress it - along with sleep problems and a faster heart rate. In the clinical trials, digestive side effects dominated. The authors are clear that they cannot show the products caused these symptoms, or even that people were taking real retatrutide.</p>
<p><strong>Why that last point matters.</strong> A gray-market vial may contain the wrong amount of drug, a different drug, impurities, or bacterial contamination. Buyers also have to mix and measure doses themselves - the same kind of measuring that produced serious dosing errors even with pharmacy-labeled compounded semaglutide. None of the trial safety data applies to these products.</p>
<p><strong>What about buyers?</strong> Enforcement reported so far has targeted sellers, not individual buyers. That does not make purchasing safe, and you have no recourse if a product is contaminated or mislabeled.</p>`,
      },
      {
        heading: "What is CagriSema, and how well does it work?",
        body: `<p><strong>CagriSema is Novo Nordisk's once-weekly injection combining cagrilintide (a long-acting amylin analogue) with semaglutide 2.4 mg in a dual-chamber pen. In the REDEFINE 1 trial, adults without diabetes lost 20.4% of their body weight on average at 68 weeks, vs 3.0% on placebo, counting everyone randomized. But in the head-to-head REDEFINE 4 trial, it produced less weight loss than tirzepatide.</strong></p>
<p><strong>Why amylin?</strong> Amylin is a hormone released by the pancreas alongside insulin after meals. It signals fullness, slows stomach emptying and reduces how much you eat, through pathways that partly differ from GLP-1. Combining it with semaglutide is meant to add appetite control on top of a proven drug.</p>
<p><strong>REDEFINE 1</strong> (3,417 adults with obesity or overweight, without diabetes, 68 weeks, NEJM June 2025):</p>
<table>
<thead><tr><th>Group</th><th>Everyone randomized</th><th>If everyone stayed on treatment</th></tr></thead>
<tbody>
<tr><td>CagriSema</td><td>20.4%</td><td>22.7%</td></tr>
<tr><td>Semaglutide 2.4 mg alone</td><td>-</td><td>16.1%</td></tr>
<tr><td>Cagrilintide 2.4 mg alone</td><td>-</td><td>11.8%</td></tr>
<tr><td>Placebo</td><td>3.0%</td><td>2.3%</td></tr>
</tbody>
</table>
<p><strong>REDEFINE 2</strong> (about 1,200 adults with type 2 diabetes, 68 weeks): 13.7% vs 3.4% on placebo counting everyone, or 15.7% vs 3.1% on treatment; 22.9% lost at least 20% of their weight, vs 0.5% on placebo.</p>
<p><strong>REDEFINE 4 - the head-to-head.</strong> In February 2026, Novo reported that CagriSema failed to show it was at least as effective as tirzepatide in a direct comparison. News reports put weight loss at about 20% on CagriSema vs about 24% on tirzepatide at 84 weeks, and Novo's shares fell sharply on the news. It is one of the few head-to-head trials in the field, and it matters: it suggests CagriSema is unlikely to displace tirzepatide as the most effective approved option.</p>
<p><strong>Side effects.</strong> In REDEFINE 1, digestive side effects were reported by about 80% of people on CagriSema vs about 40% on placebo, mostly mild to moderate and concentrated during dose escalation.</p>
<p><strong>Who might it suit?</strong> Until it is approved and priced, this is speculative. The combination produced more weight loss than semaglutide alone in REDEFINE 1, so it could become a step up for people who respond well to semaglutide but want more effect - with Wegovy HD now competing for the same role. A post-hoc analysis presented in October 2026 suggested women averaged about 25% weight loss at 68 weeks, but exploratory analyses like this need confirmation.</p>`,
      },
      {
        heading: "When will CagriSema be approved?",
        body: `<p><strong>Novo Nordisk submitted CagriSema to the FDA on December 18, 2025 and has said it expects a decision in the fourth quarter of 2026, with a US launch in early 2027 if approved. No exact decision date has been made public, and no decision had been reported as of late October 2026.</strong></p>
<p>The submission is for chronic weight management, based on the REDEFINE 1 and REDEFINE 2 trials. The drug would be given once weekly with a dual-chamber pen; Novo has said it dropped plans for a single-chamber version for portfolio reasons and that launch plans are unchanged.</p>
<p><strong>What to watch for:</strong></p>
<ul>
<li><strong>The FDA decision itself,</strong> expected by the end of 2026.</li>
<li><strong>The label:</strong> which patients it is approved for, the dosing schedule and any warnings.</li>
<li><strong>The price:</strong> Novo has not announced one. Today, its standard Wegovy injection costs $349 a month self-pay and Wegovy HD about $399, which gives some sense of where Novo's pricing sits.</li>
<li><strong>How clinicians position it</strong> against Wegovy HD and tirzepatide, given the REDEFINE 4 result.</li>
</ul>
<p><strong>Should I wait for CagriSema?</strong> For most people, no. Even if approved on schedule, it will take time to reach pharmacies, insurance formularies and telehealth programs. Tirzepatide is available now and produced more weight loss in the direct comparison. Semaglutide and Wegovy HD are also available now. If you are a strong semaglutide responder considering a future step up, it is reasonable to ask your clinician about CagriSema once it is approved.</p>
<p><strong>Do not buy cagrilintide online.</strong> The FDA lists cagrilintide, like retatrutide, as an ingredient that cannot be used in compounding and is not part of any approved drug. Products sold as "cagrilintide" or "cagri-sema" before approval are unapproved and of unknown quality.</p>`,
      },
      {
        heading: "What is MariTide, the monthly weight-loss injection?",
        body: `<p><strong>MariTide (maridebart cafraglutide) is an investigational Amgen drug given as an injection once a month, rather than once a week. It activates the GLP-1 receptor and blocks the GIP receptor. In its phase 2 trial, adults without diabetes lost 12.3% to 16.2% of their body weight at 52 weeks counting everyone randomized (up to about 20% for those who stayed on treatment), vs about 2.5% on placebo. Phase 3 trials are underway, and it has not been submitted to the FDA.</strong></p>
<p><strong>The unusual mechanism.</strong> Tirzepatide activates the GIP receptor. MariTide does the opposite: it blocks GIP while activating GLP-1. That both approaches produce weight loss is one of the open scientific puzzles in the field. MariTide is also built differently - a GLP-1 peptide attached to an antibody - which is what allows monthly dosing.</p>
<p><strong>Phase 2 results</strong> (592 adults, 52 weeks, NEJM June 2025):</p>
<ul>
<li>Weight loss of 12.3% to 16.2% across doses counting everyone, or 16.3% to 19.9% for those who stayed on treatment.</li>
<li>Weight had not plateaued at 52 weeks.</li>
<li>In a cohort with type 2 diabetes, weight loss reached about 17%, with A1C reductions of up to about 2.2 points.</li>
</ul>
<p><strong>The tolerability problem - and the fix.</strong> Digestive side effects, especially vomiting, were concentrated around the first doses. In study arms that started at a full dose, discontinuation was high, so Amgen moved to a slower dose escalation for phase 3. In arms that escalated gradually, about 11% stopped because of side effects. Monthly dosing means each injection is a larger dose, so how the dose is introduced matters a lot.</p>
<p><strong>Phase 3: the MARITIME program.</strong> Two 72-week trials - MARITIME-1 in people without diabetes and MARITIME-2 in people with type 2 diabetes - are fully enrolled, with MARITIME-2's primary completion estimated for January 2027. Additional phase 3 trials are testing MariTide in sleep apnea, heart failure and other conditions, and some are testing dosing every two or three months for maintenance, including in people switching from weekly semaglutide or tirzepatide.</p>
<p><strong>Why monthly dosing matters.</strong> Weekly injections are already convenient, but long-term treatment is where weight-loss drugs succeed or fail. An injection every month - or every few months for maintenance - could make staying on treatment easier for some people. Whether MariTide delivers that depends on phase 3 results, which have not been reported. With phase 3 completion dates running into 2027, approval before then is not realistic.</p>`,
      },
      {
        heading: "What is amycretin?",
        body: `<p><strong>Amycretin is an investigational Novo Nordisk drug that activates both the GLP-1 and amylin receptors with a single molecule - unlike CagriSema, which combines two separate drugs. In an early-stage trial published in The Lancet in 2025, the weekly injection produced 24.3% average weight loss at 36 weeks on the highest dose, vs 1.1% on placebo. It is now in phase 3 and has not been submitted for approval.</strong></p>
<p><strong>Why it gets attention.</strong> A 24% loss at 36 weeks is an unusually large result for such a short trial, and weight had not plateaued. But the trial was small - 125 participants in a phase 1b/2a study - and early-stage results often shrink in larger, longer trials with broader populations. STAT reported at the time that dosing and side effects were open questions.</p>
<p><strong>Two forms are in development:</strong></p>
<table>
<thead><tr><th>Form</th><th>Evidence so far</th><th>Stage</th></tr></thead>
<tbody>
<tr><td>Weekly injection</td><td>24.3% at 36 weeks on 60 mg; 22.0% on 20 mg (Lancet 2025, n=125)</td><td>Phase 3 (AMAZE program)</td></tr>
<tr><td>Daily pill</td><td>Roughly 12% to 13% at 12 weeks in a phase 1 study (reported figures differ)</td><td>Earlier stage</td></tr>
</tbody>
</table>
<p>Novo announced it was moving amycretin into phase 3 after the Lancet publication. The AMAZE 1 trial tests the weekly injection in people with obesity, with its primary endpoint at 84 weeks - which means results are years away. Newer scientific papers sometimes use the name "zenagamtide" for the same compound, so you may see both names.</p>
<p><strong>How it differs from CagriSema:</strong></p>
<ul>
<li><strong>One molecule vs two.</strong> Amycretin is a single drug engineered to act on both receptors. CagriSema is two drugs given together.</li>
<li><strong>Possible pill.</strong> Amycretin is being developed as both an injection and a pill; CagriSema is injection-only.</li>
<li><strong>Timeline.</strong> CagriSema has been submitted for approval; amycretin's phase 3 has only recently begun.</li>
</ul>
<p><strong>What it means for you.</strong> Nothing practical yet. Amycretin is a sign that amylin-based treatment is becoming a major direction in the field, alongside the GIP and glucagon approaches. If early results hold, it could become one of the most effective options later this decade. In the meantime, it is not available outside clinical trials, and products sold online under its name are not genuine approved medicine.</p>`,
      },
      {
        heading: "What is survodutide?",
        body: `<p><strong>Survodutide is an investigational once-weekly injection from Boehringer Ingelheim that activates the glucagon and GLP-1 receptors. In the phase 3 SYNCHRONIZE-1 trial, people without diabetes lost up to 16.6% of their body weight at 76 weeks on treatment, or 12.2% to 13.0% counting everyone randomized, vs 3.2% on placebo (on treatment). A notably high share stopped because of digestive side effects.</strong></p>
<p><strong>The glucagon angle.</strong> Like retatrutide, survodutide uses glucagon activity, which increases energy use and helps the liver burn fat. That makes it especially interesting for metabolic dysfunction-associated steatohepatitis (MASH), a serious form of fatty liver disease, for which it is also being developed. In a SYNCHRONIZE-1 sub-study, Boehringer reported reductions of up to 34% in visceral (belly) fat and 63% in liver fat.</p>
<p><strong>Phase 3 results:</strong></p>
<table>
<thead><tr><th>Trial</th><th>Population</th><th>Duration</th><th>Weight loss</th><th>Placebo</th></tr></thead>
<tbody>
<tr><td>SYNCHRONIZE-1</td><td>Obesity or overweight, no diabetes</td><td>76 weeks</td><td>Up to 16.6% on treatment (6.0 mg); 12.2%-13.0% counting everyone</td><td>3.2% (on treatment)</td></tr>
<tr><td>SYNCHRONIZE-2</td><td>Obesity or overweight with type 2 diabetes</td><td>76 weeks</td><td>Up to 13.1%</td><td>3.1%</td></tr>
</tbody>
</table>
<p><strong>Tolerability is the big question.</strong> Trade press reports of SYNCHRONIZE-1 put discontinuation because of digestive side effects at about 18% to 20% on survodutide vs about 3% on placebo. That is a much higher dropout rate than in the tirzepatide and semaglutide phase 3 trials, and it explains much of the gap between the on-treatment and everyone-randomized results. A drug only helps if people can stay on it.</p>
<p><strong>Status.</strong> Survodutide is investigational. We found no announcement of a US filing for weight management, and a cardiovascular outcomes trial (SYNCHRONIZE-CVOT) is still running. Its future may lie more in liver disease than in general weight management, where it would compete with tirzepatide, which produced more weight loss in its own trials.</p>
<p><strong>Glucagon-based drugs compared:</strong></p>
<ul>
<li><strong>Retatrutide</strong> (GIP + GLP-1 + glucagon): about 28% on treatment at 80 weeks in TRIUMPH-1.</li>
<li><strong>Survodutide</strong> (GLP-1 + glucagon): up to 16.6% on treatment at 76 weeks in SYNCHRONIZE-1.</li>
</ul>
<p>The difference suggests that the combination of receptors, not glucagon alone, drives retatrutide's results - although these were separate trials in different populations.</p>`,
      },
      {
        heading: "What are amylin drugs like petrelintide and eloralintide?",
        body: `<p><strong>Petrelintide (Zealand Pharma and Roche) and eloralintide (Eli Lilly) are investigational once-weekly amylin drugs being developed as weight-loss treatments on their own, not just as add-ons to GLP-1s. In phase 2, petrelintide produced up to 10.7% weight loss at 42 weeks and eloralintide up to 20.1% at 48 weeks. Both have moved into phase 3.</strong></p>
<p>Amylin has become one of the most active areas in obesity research because it may offer a different side-effect profile from GLP-1 drugs. Amylin is released alongside insulin after meals and signals fullness. The hope is that amylin-based treatment can deliver meaningful weight loss with less nausea and vomiting - and that it could be combined with GLP-1 drugs for larger effects.</p>
<table>
<thead><tr><th>Drug</th><th>Company</th><th>Phase 2 result</th><th>Notable</th><th>Stage</th></tr></thead>
<tbody>
<tr><td>Petrelintide</td><td>Zealand Pharma / Roche</td><td>Up to 10.7% at 42 weeks vs 1.7% placebo (on treatment); 10.2% vs 1.4% counting everyone</td><td>Vomiting rates were lower than placebo across dose groups</td><td>Phase 3</td></tr>
<tr><td>Eloralintide</td><td>Eli Lilly</td><td>9.5% to 20.1% at 48 weeks vs 0.4% placebo (on treatment; Lancet 2025)</td><td>A selective amylin receptor agonist</td><td>Phase 3 (recruiting)</td></tr>
<tr><td>Cagrilintide</td><td>Novo Nordisk</td><td>11.8% alone at 68 weeks (REDEFINE 1, on treatment)</td><td>The amylin half of CagriSema</td><td>Filed only as part of CagriSema</td></tr>
<tr><td>Amycretin</td><td>Novo Nordisk</td><td>24.3% at 36 weeks (early-stage, injection)</td><td>Amylin and GLP-1 in one molecule</td><td>Phase 3</td></tr>
</tbody>
</table>
<p><strong>How to interpret this.</strong> Petrelintide's 10.7% is less than the GLP-1 drugs produce, but its tolerability results are the headline: if a drug can produce roughly 10% weight loss with little nausea, it could suit people who cannot tolerate GLP-1s, or be paired with one. Eloralintide's top result of about 20% at 48 weeks is in the same range as tirzepatide, though from a smaller phase 2 trial; phase 3 will show whether it holds.</p>
<p><strong>Why it matters for patients.</strong> Today, roughly every effective weight-loss drug works through GLP-1, and digestive side effects are the main reason people stop. A second, independent pathway with a gentler side-effect profile would give clinicians a genuine alternative - and possibly a combination partner. These drugs are several years from approval, and none should be bought outside a trial.</p>`,
      },
      {
        heading: "Are there drugs that protect muscle during weight loss?",
        body: `<p><strong>Not yet approved, but they are being tested. In Lilly's phase 2b BELIEVE trial, published in Nature Medicine in 2026, adding the experimental antibody bimagrumab to semaglutide meant about 93% of the weight lost was fat, compared with about 72% on semaglutide alone. Until such drugs are approved, protein intake and resistance training remain the proven tools for preserving muscle.</strong></p>
<p><strong>Why muscle is a concern.</strong> Any large weight loss - from diet, surgery or medication - includes some loss of lean mass, which includes muscle. With drugs now producing 20% to 30% average losses, researchers and clinicians are paying close attention to how much of that is muscle, especially for older adults and people who start with low muscle mass.</p>
<p><strong>How bimagrumab works.</strong> It is an antibody that blocks activin type II receptors, a signaling pathway that limits muscle growth. Blocking it is meant to preserve or build muscle while other drugs drive fat loss.</p>
<p><strong>BELIEVE results</strong> (507 participants):</p>
<table>
<thead><tr><th>Group</th><th>Share of weight lost that was fat</th><th>Change in lean mass</th></tr></thead>
<tbody>
<tr><td>Bimagrumab + semaglutide</td><td>About 92.8%</td><td>About -3%</td></tr>
<tr><td>Semaglutide alone</td><td>About 71.8%</td><td>About -7%</td></tr>
<tr><td>Bimagrumab alone</td><td>-</td><td>About +2.5%</td></tr>
</tbody>
</table>
<p>Total weight loss on the combination was reported at about 20% to 22%. Some participants had temporary rises in liver enzymes and creatine kinase (a marker of muscle activity). This is a phase 2b trial; bimagrumab is investigational, and larger trials are needed to confirm both benefit and safety.</p>
<p><strong>What actually works now.</strong> The joint 2025 nutrition advisory from the American College of Lifestyle Medicine, the American Society for Nutrition, the Obesity Medicine Association and The Obesity Society calls for preserving muscle and bone during GLP-1 treatment through resistance training and appropriate diet, alongside managing digestive side effects and preventing nutrient deficiencies. In practice that means:</p>
<ul>
<li><strong>Prioritize protein at every meal,</strong> especially when appetite is low. Ask your clinician or a dietitian for a target suited to you.</li>
<li><strong>Do resistance training</strong> - weights, bands or bodyweight exercises - on a regular schedule.</li>
<li><strong>Avoid losing weight faster than necessary.</strong> Slower dose escalation makes it easier to eat enough.</li>
<li><strong>Ask about body-composition checks</strong> if you are older or losing a large amount of weight.</li>
</ul>
<p>Programs that include dietitian access, such as <a href="/reviews/medvi">MEDVi</a>, or coaching, such as <a href="/reviews/shed">SHED</a>, can help with the nutrition side.</p>`,
      },
      {
        heading: "What other weight-loss drugs are in development?",
        body: `<p><strong>Beyond the drugs above, the pipeline includes more oral GLP-1 pills (such as Structure Therapeutics' aleniglipron and Viking's VK2735 tablet), Viking's injectable VK2735, and drugs approved outside the US, such as ecnoglutide, approved in China in March 2026. None of these is close to US approval, and most will not report pivotal results before 2027-2028.</strong></p>
<table>
<thead><tr><th>Drug</th><th>Company</th><th>Type</th><th>Best result so far</th><th>Status</th></tr></thead>
<tbody>
<tr><td>Aleniglipron</td><td>Structure Therapeutics</td><td>Oral small-molecule GLP-1</td><td>Placebo-adjusted 8.2% to 11.3% at 36 weeks (phase 2b)</td><td>Phase 3 (ACCOMPLISH); results expected second half of 2028</td></tr>
<tr><td>VK2735 (oral)</td><td>Viking Therapeutics</td><td>Oral GLP-1/GIP</td><td>Up to 12.2% vs 1.3% placebo at 13 weeks (phase 2)</td><td>Phase 2 completed</td></tr>
<tr><td>Ecnoglutide</td><td>Sciwind Biosciences</td><td>Weekly GLP-1 injection</td><td>About 15% at 48 weeks (phase 3, China)</td><td>Approved in China; not FDA-approved</td></tr>
<tr><td>Oral amycretin</td><td>Novo Nordisk</td><td>Oral GLP-1 + amylin</td><td>Roughly 12%-13% at 12 weeks (phase 1)</td><td>Earlier stage</td></tr>
</tbody>
</table>
<p><strong>Three trends to watch:</strong></p>
<ol>
<li><strong>More pills.</strong> With two GLP-1 pills now approved, several companies are racing to offer oral options with better efficacy or simpler dosing. Small-molecule pills like orforglipron and aleniglipron are cheaper to manufacture at scale than peptide drugs, which could matter for long-term prices.</li>
<li><strong>Less frequent dosing.</strong> Monthly (MariTide) and potentially quarterly maintenance schedules are being tested, aimed at making long-term treatment easier.</li>
<li><strong>Better-quality weight loss.</strong> Muscle-preserving combinations and drugs with gentler side effects (amylin agents) target the main weaknesses of current treatment, not just the size of the effect.</li>
</ol>
<p><strong>How to read pipeline news.</strong> Early-stage results are exciting but unreliable predictors. Short trials, small samples and on-treatment estimates all inflate numbers, and many promising drugs never reach approval - Pfizer, for example, discontinued its oral GLP-1 candidate danuglipron in 2025. Treat any result from a trial shorter than a year, or with fewer than a few hundred participants, as a signal rather than a promise.</p>
<p><strong>A word on "peptide" shops.</strong> Whenever a pipeline drug makes headlines, unapproved versions appear for sale online. The FDA's warning about retatrutide applies equally to any investigational compound sold as a "research peptide."</p>`,
      },
      {
        heading: "Which weight-loss drug causes the most weight loss?",
        body: `<p><strong>Among approved drugs, tirzepatide (Zepbound) has the highest average weight loss in its pivotal trial - about 20.9% at 72 weeks on 15 mg - and beat semaglutide and CagriSema in head-to-head trials. Among investigational drugs, retatrutide has produced the largest results: about 28% on treatment at 80 weeks, with a reported treatment-policy result of about 25%.</strong></p>
<p>Here is every drug in this guide in one table. Use it as a rough map - trial lengths, populations and analysis methods differ, so small differences are not meaningful.</p>
<table>
<thead><tr><th>Drug</th><th>Status (US)</th><th>Form</th><th>Trial</th><th>Average weight loss</th></tr></thead>
<tbody>
<tr><td>Retatrutide 12 mg</td><td>Investigational</td><td>Weekly injection</td><td>TRIUMPH-1, 80 weeks</td><td>28.3% on treatment; about 25% everyone</td></tr>
<tr><td>Amycretin 60 mg</td><td>Investigational</td><td>Weekly injection</td><td>Phase 1b/2a, 36 weeks</td><td>24.3% (small, early trial)</td></tr>
<tr><td>Tirzepatide 15 mg (Zepbound)</td><td>Approved</td><td>Weekly injection</td><td>SURMOUNT-1, 72 weeks</td><td>About 20.9%</td></tr>
<tr><td>CagriSema</td><td>Decision expected Q4 2026</td><td>Weekly injection</td><td>REDEFINE 1, 68 weeks</td><td>20.4% everyone; 22.7% on treatment</td></tr>
<tr><td>Eloralintide</td><td>Investigational</td><td>Weekly injection</td><td>Phase 2, 48 weeks</td><td>Up to 20.1% on treatment</td></tr>
<tr><td>Semaglutide 7.2 mg (Wegovy HD)</td><td>Approved</td><td>Weekly injection</td><td>STEP UP, 72 weeks</td><td>18.7% everyone; 20.7% on treatment</td></tr>
<tr><td>MariTide</td><td>Investigational</td><td>Monthly injection</td><td>Phase 2, 52 weeks</td><td>12.3%-16.2% everyone; up to 19.9% on treatment</td></tr>
<tr><td>Survodutide 6.0 mg</td><td>Investigational</td><td>Weekly injection</td><td>SYNCHRONIZE-1, 76 weeks</td><td>13.0% everyone; 16.6% on treatment</td></tr>
<tr><td>Semaglutide 2.4 mg (Wegovy)</td><td>Approved</td><td>Weekly injection</td><td>STEP-1, 68 weeks</td><td>About 15%</td></tr>
<tr><td>Oral semaglutide 25 mg (Wegovy pill)</td><td>Approved</td><td>Daily pill</td><td>OASIS 4, 64 weeks</td><td>13.6% everyone; 16.6% on treatment</td></tr>
<tr><td>Orforglipron, top dose (Foundayo)</td><td>Approved</td><td>Daily pill</td><td>ATTAIN-1, 72 weeks</td><td>11.2% everyone; 12.4% on treatment</td></tr>
<tr><td>Petrelintide</td><td>Investigational</td><td>Weekly injection</td><td>Phase 2, 42 weeks</td><td>Up to 10.7% on treatment</td></tr>
</tbody>
</table>
<p><strong>The head-to-head evidence</strong> - the only direct comparisons:</p>
<ul>
<li><strong>SURMOUNT-5 (NEJM 2025):</strong> tirzepatide about 20.2% vs semaglutide about 13.7% at 72 weeks.</li>
<li><strong>REDEFINE 4 (2026):</strong> tirzepatide about 24% vs CagriSema about 20% at 84 weeks, as reported.</li>
<li><strong>ACHIEVE-3 (Lancet 2026, type 2 diabetes):</strong> orforglipron 9.2% vs oral semaglutide 14 mg 5.3% at 52 weeks.</li>
</ul>
<p><strong>"Most weight loss" is not the same as "best for you".</strong> The right drug depends on how much weight you need to lose, your other health conditions, what you can tolerate, whether you prefer pills or injections, and what you can afford or get covered. Someone who needs 10% may do well on a pill; someone with severe obesity and sleep apnea may need the most effective approved injection. A clinician can weigh those factors with you.</p>`,
      },
      {
        heading: "How much do brand-name weight-loss drugs cost in 2026?",
        body: `<p><strong>Manufacturer self-pay prices fell sharply after the November 2025 pricing deals. As of October 2026, Wegovy injections cost $349 a month (with a $199 introductory price on the two lowest doses), Wegovy HD about $399, Zepbound $299 to $449 with on-time refills, and the two GLP-1 pills $149 to $349 depending on dose. Commercially insured patients may pay as little as $25 with manufacturer savings cards.</strong></p>
<table>
<thead><tr><th>Medication</th><th>Where</th><th>Self-pay price (October 2026)</th></tr></thead>
<tbody>
<tr><td>Wegovy injection 0.25 mg and 0.5 mg</td><td>NovoCare Pharmacy</td><td>$199/month for the first two fills for new patients (through Dec 31, 2026), then $349</td></tr>
<tr><td>Wegovy injection 1 mg to 2.4 mg</td><td>NovoCare Pharmacy</td><td>$349/month</td></tr>
<tr><td>Wegovy HD 7.2 mg</td><td>NovoCare Pharmacy</td><td>About $399/month</td></tr>
<tr><td>Wegovy pill</td><td>NovoCare Pharmacy</td><td>$149 (1.5 mg), $199 (4 mg), $299 (9 mg and 25 mg)</td></tr>
<tr><td>Zepbound KwikPen or vials</td><td>LillyDirect</td><td>$299 (2.5 mg), $399 (5 mg), $449 (7.5-15 mg with refill within 45 days; otherwise $499 for 7.5 mg and $699 for higher doses)</td></tr>
<tr><td>Foundayo</td><td>LillyDirect</td><td>$149 to $299 for most doses; top two doses $299 with refill within 45 days, otherwise $349</td></tr>
</tbody>
</table>
<p><strong>What this means in a year.</strong> At maintenance doses, a year of Wegovy costs about $4,188 (12 x $349), Wegovy HD about $4,788, Zepbound about $5,388 with on-time refills (12 x $449), and either pill about $3,588 (12 x $299). Two years ago, brand-name list prices were well over $1,000 a month - more than $12,000 a year.</p>
<p><strong>Where else you can buy.</strong> Costco's member prescription program lists Wegovy and the Wegovy pill at the same prices as NovoCare (membership required; shipping extra). Lilly made Zepbound KwikPen self-pay pricing available at major pharmacies from March 2026. TrumpRx lists the products but routes orders to the manufacturers' channels.</p>
<p><strong>Watch for list prices that look outdated.</strong> Some telehealth programs still advertise brand-name GLP-1s at old list-price levels of $1,000 to $1,600 a month on their "brand shelf." Before paying that, check the manufacturer's self-pay price, which is often far lower. Novo has also announced that the list prices of Wegovy, Ozempic and Rybelsus will drop to $675 a month on January 1, 2027 - a change that mainly affects insurance and deductibles, not self-pay prices.</p>
<p><strong>How this compares with compounded medication.</strong> The cheapest compounded semaglutide programs we track still cost less ($49 to $199 a month, depending on provider and commitment), and compounded tirzepatide starts at $89. But the price gap is now hundreds of dollars a year, not thousands - and brand-name medication is FDA-approved. Our <a href="/articles/real-cost-of-glp1-weight-loss">real cost of GLP-1 weight loss</a> guide compares the options in detail.</p>
<p>Prices are manufacturers' published self-pay prices as of October 2026 and can change at any time; always confirm before ordering.</p>`,
      },
      {
        heading: "What is TrumpRx, and does it make weight-loss drugs cheaper?",
        body: `<p><strong>TrumpRx.gov is a federal website launched in February 2026 that lists discounted cash prices for brand-name drugs, including Wegovy, the Wegovy pill, Zepbound and Foundayo, and routes orders to the manufacturers' own pharmacies. It grew out of the November 2025 pricing agreements with Novo Nordisk and Eli Lilly. Independent analysts note that its "savings" are measured against list prices, and that many insured people already pay less.</strong></p>
<p><strong>What the November 2025 agreements said.</strong> According to the White House fact sheet, Wegovy and Ozempic would cost $350 a month on TrumpRx, the starting dose of an approved oral GLP-1 would be $150, and Medicare would pay $245 for Ozempic, Wegovy, Mounjaro and Zepbound, with beneficiaries paying a $50 monthly copay. Lilly's announcement listed Zepbound multi-dose pen prices of $299 to $449 and orforglipron prices of $149 to $399 through LillyDirect.</p>
<p><strong>At launch in February 2026,</strong> the White House said Wegovy and Ozempic pens averaged $350 (as low as $199 depending on dose), the Wegovy pill started at $149, and Zepbound averaged $346 (as low as $299).</p>
<p><strong>How it works in practice.</strong> TrumpRx is mainly a front door. Its product pages send you to the manufacturer's channel - LillyDirect for Lilly products, NovoCare for Novo products - where the purchase actually happens. The prices are the same self-pay prices you can get by going to the manufacturer directly.</p>
<p><strong>The critics' view.</strong></p>
<ul>
<li><strong>KFF</strong> notes that TrumpRx compares its prices with list prices (wholesale acquisition cost), which few people actually pay, and that an insured patient may pay less through insurance than through TrumpRx.</li>
<li><strong>STAT</strong> reported analyst skepticism that the broader "most favored nation" pricing deals would deliver the savings claimed, and that much of their impact falls on Medicaid, which already receives the lowest prices by law.</li>
</ul>
<p><strong>Our take.</strong> For people paying cash, the lower manufacturer prices are real and substantial, whichever website you start from. TrumpRx is useful as a price reference. It does not change whether a drug is right for you, and it does not replace a prescription - you still need a licensed clinician, whether in person or through a telehealth program, to prescribe the medication.</p>`,
      },
      {
        heading: "Does Medicare cover weight-loss drugs now?",
        body: `<p><strong>For some people, yes - temporarily. The Medicare GLP-1 Bridge, which began on July 1, 2026 and now runs through December 31, 2027, lets eligible Part D enrollees get Wegovy (injection or pill), Foundayo or the Zepbound KwikPen for weight management at a $50 monthly copay. Eligibility depends on BMI and specific health conditions, and a prescriber must request prior authorization.</strong></p>
<p>By law, Medicare Part D has long excluded drugs used for weight loss alone. The Bridge is a temporary demonstration program that sits outside the regular Part D benefit. It was originally set to end in 2026 and was extended after CMS delayed the Medicare part of its broader BALANCE model.</p>
<p><strong>Who qualifies</strong> (according to KFF's summary of the CMS criteria):</p>
<ul>
<li>You must be enrolled in Medicare Part D, and</li>
<li>Have a BMI of 35 or higher; or</li>
<li>Have a BMI of 30 or higher plus heart failure with preserved ejection fraction, uncontrolled high blood pressure, or stage 3a or higher chronic kidney disease; or</li>
<li>Have a BMI of 27 or higher plus prediabetes, a previous heart attack or stroke, or symptomatic peripheral artery disease.</li>
</ul>
<p><strong>Who is handled differently.</strong> People with type 2 diabetes, moderate to severe sleep apnea or MASH are excluded from the Bridge because those conditions can already qualify for GLP-1 coverage through regular Part D. CMS guidance also excludes people who already filled a Part D GLP-1 in 2026.</p>
<p><strong>How it works:</strong></p>
<ol>
<li>Your prescriber submits a prior authorization request. Enrollment is not automatic.</li>
<li>Humana processes requests on behalf of CMS, with decisions typically within 72 hours.</li>
<li>Once approved, you pay $50 per monthly fill at the pharmacy.</li>
<li>The $50 does not count toward your Part D deductible or out-of-pocket cap, and Low-Income Subsidy help does not apply.</li>
</ol>
<p><strong>Covered products:</strong> CMS lists all formulations of Wegovy (pens and the pill), Foundayo and the Zepbound KwikPen. If you use Wegovy HD, confirm with your prescriber that your dose is included. Zepbound single-dose pens and vials are not covered.</p>
<p><strong>How many people could use it.</strong> KFF estimated that about 3.8 million Medicare beneficiaries met the eligibility criteria in 2023. The administration said in September 2026 that hundreds of thousands of seniors had used the program in its first two months.</p>
<p><strong>What happens after 2027</strong> has not been decided. If you are on Medicare, ask your prescriber about the Bridge now and plan for the possibility that coverage changes in 2028.</p>`,
      },
      {
        heading: "Do Medicaid and employer plans cover weight-loss drugs in 2026?",
        body: `<p><strong>Coverage is shrinking in some places. KFF counted 13 state Medicaid programs covering GLP-1s for obesity as of January 2026, down from 16 in 2025. Among employers, KFF's 2026 survey found 18% of firms with 200 or more workers cover GLP-1s for weight loss - and the largest employers' coverage fell from 43% to 33%.</strong></p>
<p><strong>Medicaid.</strong> Several states dropped obesity coverage at the start of 2026, citing cost. CMS's BALANCE model offers states a way to join a negotiated-price coverage program, with states able to join on a rolling basis through January 1, 2027, but we found no public list of participating states. A September 2026 White House announcement extended "most favored nation" pricing to every state Medicaid program; that is a pricing change, not a requirement to cover weight-loss drugs. If you are on Medicaid, check your state's current policy.</p>
<p><strong>Employers - KFF 2026 Employer Health Benefits Survey:</strong></p>
<table>
<thead><tr><th>Firm size</th><th>Share covering GLP-1s for weight loss</th></tr></thead>
<tbody>
<tr><td>All firms with 200+ workers</td><td>18% (19% in 2025)</td></tr>
<tr><td>200-999 workers</td><td>16%</td></tr>
<tr><td>1,000-4,999 workers</td><td>29%</td></tr>
<tr><td>5,000+ workers</td><td>33% (down from 43% in 2025)</td></tr>
</tbody>
</table>
<p>Among firms that cover the drugs, 40% require participation in a lifestyle program or similar, and 29% reported a significant impact on drug spending. Among firms that do not cover them, 12% had stopped coverage in the past year, and 79% said they were not likely to add it. Mercer separately found that 6% of large employers dropped coverage for 2026, with another 5% planning or considering it for 2027.</p>
<p><strong>Why coverage is falling while prices fall.</strong> Employers pay negotiated prices through insurers and pharmacy benefit managers, and the cost of covering a large share of employees for years is still high. Lower cash prices also make it easier for employers to point workers toward self-pay options instead.</p>
<p><strong>What to do:</strong></p>
<ul>
<li><strong>Check your formulary.</strong> Ask your plan whether Wegovy, Zepbound or the pills are covered for weight management and what prior authorization requires.</li>
<li><strong>Use the savings cards</strong> if you have commercial coverage - the manufacturers advertise copays as low as $25.</li>
<li><strong>Get help with paperwork.</strong> Telehealth services with insurance support, such as <a href="/reviews/ro">ro</a>, check coverage and handle prior authorizations.</li>
<li><strong>Compare against self-pay.</strong> If your plan denies coverage, compare manufacturer self-pay prices with compounded programs before deciding.</li>
</ul>`,
      },
      {
        heading: "What is happening to compounded GLP-1s in 2026?",
        body: `<p><strong>Compounded semaglutide and tirzepatide are still available from licensed pharmacies for individual patients, but the FDA has tightened the rules steadily since the drug shortages ended in 2025. In 2026 it warned 30 telehealth companies about misleading marketing, signaled action against mass-marketed compounded GLP-1s, and proposed barring large outsourcing facilities from compounding semaglutide and tirzepatide. That proposal was not final as of October 2026.</strong></p>
<p>Compounded GLP-1s grew into a huge market while semaglutide and tirzepatide were on the FDA's shortage list, which allowed pharmacies to make copies. The FDA declared the tirzepatide shortage resolved in December 2024 and the semaglutide shortage in February 2025. After the grace periods ended in spring 2025, mass compounding of "essentially copies" of the approved drugs became restricted. Licensed 503A pharmacies can still compound for an individual patient's documented clinical need, such as a dose or formulation that the approved product does not offer.</p>
<p><strong>What the FDA has done since:</strong></p>
<table>
<thead><tr><th>Date</th><th>Action</th></tr></thead>
<tbody>
<tr><td>Sept 5, 2025</td><td>An import "green list" for GLP-1 ingredients: shipments are held unless the manufacturer and product have been cleared</td></tr>
<tr><td>Sept 9, 2025</td><td>A crackdown on misleading drug advertising, including warning letters about compounded GLP-1 marketing</td></tr>
<tr><td>Feb 6, 2026</td><td>FDA says it intends to act against non-approved GLP-1 drugs mass-marketed by telehealth companies</td></tr>
<tr><td>Mar 3, 2026</td><td>Warning letters to 30 telehealth companies over false or misleading compounded GLP-1 marketing</td></tr>
<tr><td>Apr 30, 2026</td><td>Proposal to exclude semaglutide, tirzepatide and liraglutide from the list of bulk substances 503B outsourcing facilities may compound from</td></tr>
</tbody>
</table>
<p><strong>The most common problems regulators flag:</strong> marketing that implies a compounded drug is the "same as" or "generic" FDA-approved Wegovy or Zepbound, branding a compounded drug under a telehealth company's name as if it were a product, and labeling that suggests FDA approval. Among the providers we rank, <a href="/reviews/altrx">altRx</a>'s parent company received an FDA warning letter in June 2026 over claims about its compounded products, which we disclose in its review.</p>
<p><strong>The lawsuits.</strong> Novo Nordisk has filed more than 130 lawsuits against pharmacies, clinics and others over copies. Its February 2026 suit against Hims &amp; Hers ended a month later with a deal under which Hims sells branded Wegovy. Lilly sued several pharmacies and telehealth companies over compounded tirzepatide in 2025.</p>
<p><strong>What it means if you use a compounded program:</strong></p>
<ul>
<li><strong>Your access may change.</strong> If the 503B proposal is finalized, programs that rely on large outsourcing facilities would need to change supply. Programs using 503A pharmacies for individual prescriptions are affected differently.</li>
<li><strong>Ask your provider directly</strong> which type of pharmacy fills your prescription, and what their plan is if the rules change.</li>
<li><strong>Know your fallback.</strong> With brand-name self-pay prices now $149 to $449 a month for most doses, switching to an FDA-approved product is more affordable than it used to be.</li>
<li><strong>Red flags stay red:</strong> any program calling its compounded product "FDA-approved," "generic Wegovy" or "the same as Zepbound" is making claims the FDA has specifically challenged.</li>
</ul>
<p>Our <a href="/articles/compounded-vs-brand-name-glp1">compounded vs brand-name GLP-1s</a> guide covers the trade-offs in detail.</p>`,
      },
      {
        heading: "What changed in GLP-1 safety labels in 2025 and 2026?",
        body: `<p><strong>Three label changes stand out. In January 2026 the FDA asked makers to remove the suicidal behavior and ideation warning from Wegovy, Zepbound and Saxenda after a review of 91 placebo-controlled trials found no increased risk. Wegovy gained an accelerated approval for the liver disease MASH in August 2025. And the newest high-dose drugs have highlighted dysesthesia, an unusual skin-sensation side effect.</strong></p>
<p><strong>1. The suicidality warning.</strong> Wegovy, Zepbound and Saxenda had carried a warning about suicidal thoughts and behavior, a precaution common to weight-management drugs. On January 13, 2026, the FDA said its review of 91 placebo-controlled trials involving 107,910 patients found no increased risk, and asked the companies to remove the warning. This does not mean mood changes can be ignored: anyone who experiences new depression or thoughts of self-harm on any medication should contact a clinician promptly.</p>
<p><strong>2. MASH.</strong> On August 15, 2025, the FDA granted Wegovy accelerated approval for metabolic dysfunction-associated steatohepatitis (MASH) with moderate to advanced liver fibrosis. Continued approval depends on a confirmatory outcomes trial. For people with this form of fatty liver disease, it adds a medical reason for treatment beyond weight.</p>
<p><strong>3. Dysesthesia.</strong> Unusual skin sensations - tingling, burning, sensitivity - were reported by about 22% of people on Wegovy HD 7.2 mg in STEP UP and by about 12% on retatrutide's higher doses in TRIUMPH-1, far more often than on placebo. It was uncommon with standard doses of earlier drugs. Most cases in trials were mild to moderate.</p>
<p><strong>Other safety topics in the news:</strong></p>
<ul>
<li><strong>NAION (an eye condition).</strong> European and UK regulators have added a very rare risk of non-arteritic anterior ischemic optic neuropathy, a cause of sudden vision loss, to semaglutide information. We did not find a corresponding FDA action. Anyone with sudden vision changes on a GLP-1 should seek urgent care.</li>
<li><strong>Dosing errors with compounded drugs.</strong> The FDA continues to warn about overdoses caused by measuring errors with compounded semaglutide vials. Our <a href="/articles/glp1-dosage-guide">dosage guide</a> explains how to avoid them.</li>
<li><strong>The class warnings remain.</strong> All GLP-1 drugs, including the new pills, carry the boxed warning about thyroid C-cell tumors in rodents and warnings about pancreatitis, gallbladder disease and dehydration-related kidney problems.</li>
</ul>
<p>Safety information evolves as more people use these drugs. Read the current Medication Guide that comes with your prescription, and ask your clinician about anything new.</p>`,
      },
      {
        heading: "Should I wait for the new weight-loss drugs or start treatment now?",
        body: `<p><strong>For most people who qualify, starting an approved treatment now makes more sense than waiting. Retatrutide is not expected to be filed until 2027, MariTide and amycretin are further away, and CagriSema - if approved on time - produced less weight loss than tirzepatide, which is available today. Treatment can be changed later as new options arrive.</strong></p>
<p>The appeal of waiting is understandable: retatrutide's results are remarkable, and nobody wants to start on a drug that is about to be overtaken. But waiting has costs, and the drugs already available are highly effective.</p>
<table>
<thead><tr><th>If you are thinking...</th><th>Consider this</th></tr></thead>
<tbody>
<tr><td>"I'll wait for retatrutide"</td><td>Filing is planned for Q1 2027, then FDA review, launch, pricing and coverage. Realistic access for most people is well into 2027 or later. Tirzepatide averaged about 20.9% in SURMOUNT-1.</td></tr>
<tr><td>"I'll wait for CagriSema"</td><td>It lost its head-to-head trial against tirzepatide. Wegovy HD is already available as a semaglutide step-up.</td></tr>
<tr><td>"I'll wait for a pill"</td><td>Two pills are already approved: the Wegovy pill and Foundayo.</td></tr>
<tr><td>"I'll wait for a monthly shot"</td><td>MariTide is still in phase 3, with key trials completing around 2027.</td></tr>
<tr><td>"I'll wait for prices to fall"</td><td>They already have: brand-name self-pay prices are $149-$449 a month for most doses, and compounded programs start lower.</td></tr>
</tbody>
</table>
<p><strong>When waiting might make sense:</strong></p>
<ul>
<li>You have tried semaglutide and tirzepatide and could not tolerate either - a different mechanism (such as amylin drugs) may suit you better later. Ask about clinical trials.</li>
<li>Your health is stable, your BMI is modest, and lifestyle changes alone are working.</li>
<li>You are planning a pregnancy soon, which is a reason to avoid starting a GLP-1 at all - discuss timing with your clinician.</li>
</ul>
<p><strong>Starting now does not lock you in.</strong> People switch between semaglutide and tirzepatide routinely, and many will switch again when new drugs are approved. Weight lost now improves blood pressure, blood sugar, joint pain and sleep apnea now. If a better option arrives, your clinician can help you move to it - and you will be starting from a lower weight.</p>
<p><strong>The one thing not to do</strong> is bridge the gap with an unapproved "research" version of a pipeline drug. The trial results that make retatrutide exciting apply only to the genuine product used under medical supervision.</p>`,
      },
      {
        heading: "How do the online providers we rank fit into the new landscape?",
        body: `<p><strong>The nine online programs we rank split into two groups. ro prescribes only FDA-approved brand-name medication - including the newer options such as Foundayo - and helps with insurance. The other eight focus on compounded GLP-1s at $49 to $299 a month, and several also offer brand-name medication or non-injection formats.</strong></p>
<table>
<thead><tr><th>Provider (our score)</th><th>Main offering</th><th>Brand-name options</th><th>Non-injection options</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/embody">embody</a> (9.8)</td><td>Compounded semaglutide $69/mo, tirzepatide $119/mo, flat at every dose</td><td>Not its focus</td><td>Daily oral compounded option</td></tr>
<tr><td><a href="/reviews/ro">ro</a> (9.6)</td><td>Brand-name only, with insurance concierge; membership $39 first month, then $149/mo</td><td>Wegovy, Zepbound, Ozempic, Foundayo</td><td>Foundayo pill</td></tr>
<tr><td><a href="/reviews/altrx">altRx</a> (9.3)</td><td>Compounded semaglutide $89/mo, tirzepatide $149/mo on promo</td><td>Brand-name shelf</td><td>-</td></tr>
<tr><td><a href="/reviews/trimrx">trimrx</a> (9.1)</td><td>Compounded with custom dosing; semaglutide $149/mo, tirzepatide $259/mo</td><td>Branded options available</td><td>-</td></tr>
<tr><td><a href="/reviews/wellmedr">wellmedr</a> (8.9)</td><td>Compounded semaglutide $49/mo (12-month plan), tirzepatide $89/mo</td><td>Brand-name shelf</td><td>-</td></tr>
<tr><td><a href="/reviews/medvi">MEDVi</a> (8.7)</td><td>Compounded with dietitian and coaching; $99/mo and $166/mo on promo</td><td>Through its clinicians</td><td>-</td></tr>
<tr><td><a href="/reviews/directmeds">DirectMeds</a> (8.6)</td><td>Compounded semaglutide or tirzepatide, $147/mo either</td><td>-</td><td>Sublingual drops</td></tr>
<tr><td><a href="/reviews/shed">SHED</a> (8.4)</td><td>Compounded with coaching and a money-back guarantee; from $199/mo</td><td>-</td><td>-</td></tr>
<tr><td><a href="/reviews/medgm">MEDGm</a> (8.2)</td><td>Compounded GLP-1 injections from $169/mo or daily tablets from $239/mo</td><td>Zepbound for a $99 membership plus medication cost</td><td>Daily dissolvable compounded tablet</td></tr>
</tbody>
</table>
<p><strong>How the 2026 changes affect the choice:</strong></p>
<ul>
<li><strong>If you want a GLP-1 pill,</strong> the FDA-approved pills come from brand-name channels. <a href="/reviews/ro">ro</a> offers Foundayo. Compounded oral and sublingual formats, such as those at <a href="/reviews/embody">embody</a> and <a href="/reviews/directmeds">DirectMeds</a>, are not FDA-approved and have little published evidence on absorption.</li>
<li><strong>If you have insurance or Medicare,</strong> a brand-name route is now much more attractive: a $25 commercial copay with a savings card or a $50 Medicare Bridge copay beats any compounded price.</li>
<li><strong>If you pay cash and want the lowest price,</strong> compounded programs remain cheaper - <a href="/reviews/wellmedr">wellmedr</a> and <a href="/reviews/embody">embody</a> lead on price - but compare a full year against manufacturer self-pay prices before deciding.</li>
<li><strong>If you see a brand shelf priced at $1,000 or more a month,</strong> check NovoCare and LillyDirect first; manufacturer self-pay prices are usually far lower.</li>
</ul>
<p>Prices are provider-published figures checked in fall 2026; confirm at checkout. Compounded medications are not FDA-approved. Full details are in each review and on our <a href="/">homepage ranking</a>.</p>`,
      },
      {
        heading: "What should I ask my clinician about the new weight-loss drugs?",
        body: `<p><strong>Ask which approved option fits your goals, health conditions and budget; whether a pill could work for you; whether you qualify for insurance or Medicare coverage; and how you would switch to a newer drug if one becomes a better fit. Bring your weight history, current medications and any side effects you have had on previous treatments.</strong></p>
<p><strong>If you are starting treatment:</strong></p>
<ol>
<li>"How much weight loss do I realistically need for my health goals - and which approved drug fits that?"</li>
<li>"Would a pill work for me, or is an injection a better choice given my goals?"</li>
<li>"Which option does my insurance cover, and do I qualify for the Medicare GLP-1 Bridge?"</li>
<li>"What is the manufacturer self-pay price compared with a compounded program?"</li>
<li>"Do any of my current medications or conditions affect which drug I should take?"</li>
</ol>
<p><strong>If you are already on a GLP-1:</strong></p>
<ol>
<li>"I have plateaued - is a higher dose, Wegovy HD or a switch to tirzepatide the right next step?"</li>
<li>"Could I move to a pill such as Foundayo for maintenance once I reach my goal?"</li>
<li>"My compounded program's supply may change - what is my backup plan?"</li>
<li>"How are we protecting my muscle mass while I lose weight?"</li>
</ol>
<p><strong>If you are interested in pipeline drugs:</strong></p>
<ol>
<li>"Am I a candidate for a clinical trial of retatrutide, MariTide, amycretin or an amylin drug?"</li>
<li>"When CagriSema or retatrutide is approved, how would we decide whether to switch?"</li>
<li>"What should I know about the dysesthesia reported with the newest high-dose drugs?"</li>
</ol>
<p><strong>Questions to ask an online provider:</strong></p>
<ul>
<li>"Do you prescribe FDA-approved brand-name medication, compounded medication, or both?"</li>
<li>"Which pharmacy fills compounded prescriptions, and is it a 503A or 503B facility?"</li>
<li>"Do you offer the Wegovy pill or Foundayo?"</li>
<li>"Will you help with insurance or prior authorization?"</li>
<li>"How quickly can I reach a clinician if I have side effects?"</li>
</ul>
<p>A good clinician will welcome these questions. The new options make shared decision-making more important, not less - there is now a genuine choice of drugs, forms and price points, and the best one depends on you.</p>`,
      },
      {
        heading: "Sources for this guide",
        body: `<p><strong>Every figure in this guide comes from the primary and independent sources below. Pipeline drugs are investigational, prices change frequently, and policies such as the Medicare GLP-1 Bridge are temporary; check the linked sources for the latest information.</strong></p>
<p><strong>FDA approvals and safety</strong></p>
<ul>
<li>FDA approval letter, Wegovy (semaglutide) tablets, December 2025: <a href="https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2025/218316Orig1s000ltr.pdf">accessdata.fda.gov</a></li>
<li>Eli Lilly, FDA approves Foundayo (orforglipron), April 2026: <a href="https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-foundayotm-orforglipron-only-glp-1-pill">investor.lilly.com</a></li>
<li>FDA, fourth product approved under the National Priority Voucher program (semaglutide 7.2 mg): <a href="https://www.fda.gov/news-events/press-announcements/fda-approves-fourth-product-under-national-priority-voucher-program-higher-dose-semaglutide">fda.gov</a></li>
<li>FDA, removal of the suicidal behavior and ideation warning from GLP-1 labels, January 2026: <a href="https://www.fda.gov/drugs/drug-safety-communications/fda-requests-removal-suicidal-behavior-and-ideation-warning-glucagon-peptide-1-receptor-agonist-glp">fda.gov</a></li>
<li>FDA, approval of Wegovy for MASH: <a href="https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-treatment-serious-liver-disease-known-mash">fda.gov</a></li>
<li>FDA, concerns with unapproved GLP-1 drugs used for weight loss: <a href="https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss">fda.gov</a></li>
<li>FDA, warning letters to 30 telehealth companies, March 2026: <a href="https://www.fda.gov/news-events/press-announcements/fda-warns-30-telehealth-companies-against-illegal-marketing-compounded-glp-1s">fda.gov</a></li>
<li>FDA, proposal to exclude semaglutide, tirzepatide and liraglutide from the 503B bulks list: <a href="https://www.fda.gov/news-events/press-announcements/fda-proposes-exclude-semaglutide-tirzepatide-and-liraglutide-503b-bulks-list">fda.gov</a></li>
<li>FDA warning letter to Royal Peptides LLC, August 2026: <a href="https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/royal-peptides-llc-734884-08242026">fda.gov</a></li>
</ul>
<p><strong>Clinical trials</strong></p>
<ul>
<li>OASIS 4, oral semaglutide 25 mg (NEJM 2025): <a href="https://pubmed.ncbi.nlm.nih.gov/40934115/">PubMed</a></li>
<li>ATTAIN-1, orforglipron (NEJM 2025): <a href="https://www.nejm.org/doi/10.1056/NEJMoa2511774">nejm.org</a></li>
<li>ACHIEVE-3, orforglipron vs oral semaglutide (Lancet 2026): <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(26)00202-3/abstract">thelancet.com</a></li>
<li>Retatrutide phase 2 (NEJM 2023): <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2301972">nejm.org</a></li>
<li>Eli Lilly, TRIUMPH-1 retatrutide results: <a href="https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss">investor.lilly.com</a></li>
<li>Eli Lilly, TRIUMPH-4 retatrutide results: <a href="https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-weight-loss-average">investor.lilly.com</a></li>
<li>Retatrutide sleep apnea trials (NEJM 2026): <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2611477">nejm.org</a></li>
<li>Novo Nordisk, REDEFINE 2 results: <a href="https://www.novonordisk.com/news-and-media/news-and-ir-materials/news-details.html?id=916353">novonordisk.com</a></li>
<li>MariTide phase 2 (NEJM 2025): <a href="https://www.nejm.org/doi/full/10.1056/NEJMoa2504214">nejm.org</a></li>
<li>Amycretin phase 1b/2a (Lancet 2025): <a href="https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(25)01185-7/abstract">thelancet.com</a></li>
<li>Boehringer Ingelheim, SYNCHRONIZE-1 survodutide results: <a href="https://www.boehringer-ingelheim.com/us/human-health/metabolic-diseases/results-phase-iii-synchronize-1-obesity-trial">boehringer-ingelheim.com</a></li>
<li>Roche, petrelintide phase 2 results: <a href="https://www.roche.com/media/releases/med-cor-2026-03-05">roche.com</a></li>
<li>MARITIME-2 trial record: <a href="https://clinicaltrials.gov/study/NCT06858878">ClinicalTrials.gov</a></li>
<li>Nutritional priorities to support GLP-1 therapy for obesity, joint advisory (2025): <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12304835/">PMC</a></li>
<li>University of Pennsylvania, AI analysis of Reddit reports on unapproved retatrutide: <a href="https://www.engineering.upenn.edu/stories/penn-engineers-use-ai-reddit-to-identify-potential-side-effects-of-unapproved-new-glp-1/">upenn.edu</a></li>
</ul>
<p><strong>Prices, coverage and policy</strong></p>
<ul>
<li>CMS, Medicare GLP-1 Bridge: <a href="https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge">cms.gov</a></li>
<li>KFF, what Medicare's temporary GLP-1 program means for beneficiaries: <a href="https://www.kff.org/quick-insights/what-medicares-temporary-program-covering-glp-1s-for-obesity-means-for-beneficiaries/">kff.org</a></li>
<li>KFF, TrumpRx: what's the value for customers: <a href="https://www.kff.org/patient-consumer-protections/trumprx-whats-the-value-for-customers/">kff.org</a></li>
<li>KFF, 2026 Employer Health Benefits Survey: <a href="https://www.kff.org/health-costs/2026-employer-health-benefits-survey/">kff.org</a></li>
<li>KFF, Medicaid coverage of GLP-1s: <a href="https://www.kff.org/medicaid/medicaid-coverage-of-and-spending-on-glp-1s/">kff.org</a></li>
<li>White House fact sheet on the November 2025 pricing agreements: <a href="https://www.whitehouse.gov/fact-sheets/2025/11/fact-sheet-president-donald-j-trump-announces-major-developments-in-bringing-most-favored-nation-pricing-to-american-patients/">whitehouse.gov</a></li>
<li>NovoCare Pharmacy, Wegovy self-pay pricing: <a href="https://www.novocare.com/pharmacy/wegovy.html">novocare.com</a></li>
<li>LillyDirect, Zepbound self-pay pricing: <a href="https://www.lilly.com/lillydirect/zepbound">lilly.com</a></li>
<li>LillyDirect, Foundayo self-pay pricing: <a href="https://www.lilly.com/lillydirect/foundayo">lilly.com</a></li>
<li>Eli Lilly lawsuits against retatrutide sellers (NPR, August 2026): <a href="https://www.npr.org/2026/08/13/g-s1-138594/eli-lilly-files-6-lawsuits-against-businesses-selling-black-market-obesity-drug">npr.org</a></li>
<li>EY-Parthenon GLP-1 consumer impact report (October 2026): <a href="https://www.prnewswire.com/news-releases/ey-parthenon-glp-1-consumer-impact-report-majority-of-glp-1-users-seek-weight-management-reshaping-shopping-carts-302916849.html">prnewswire.com</a></li>
</ul>
<p><strong>The bottom line.</strong> 2026 turned weight-loss medication from a choice between two weekly injections into a real menu: two pills, a higher-dose injection, much lower cash prices and, for some, Medicare coverage. The next wave - retatrutide, CagriSema, MariTide, amycretin and amylin drugs - promises more, but most of it is still a year or more from pharmacies. If you need treatment, the best approved options today are highly effective; start with a licensed clinician, use FDA-approved or properly prescribed medication, and revisit the choice as new drugs arrive. To compare online programs, see our <a href="/">2026 ranking</a> and the <a href="/articles/online-glp1-weight-loss-guide">complete guide to online GLP-1 weight loss</a>.</p>
${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "glp1-dosage-guide",
    title: "GLP-1 Dosage Guide: Semaglutide and Tirzepatide Doses, Units and Schedules (2026)",
    description:
      "Semaglutide and tirzepatide dosage charts in mg and units, Wegovy, Ozempic and Zepbound schedules, missed doses, switching drugs and dose-related side effects.",
    category: "Guides",
    readTime: "60 min read",
    publishedAt: "2026-10-20",
    updatedAt: "2026-10-20",
    heroColor: "#E8F1FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Wegovy (semaglutide) starts at 0.25 mg a week and steps up every 4 weeks through 0.5, 1 and 1.7 mg to a 2.4 mg maintenance dose from week 17; Zepbound (tirzepatide) starts at 2.5 mg and rises in 2.5 mg steps, at least 4 weeks apart, to a maintenance dose of 5, 10 or 15 mg.",
      "For compounded vials, units on a U-100 insulin syringe = dose in mg / concentration in mg/mL x 100 - so 0.25 mg of 2.5 mg/mL semaglutide is 10 units and 2.5 mg of 10 mg/mL tirzepatide is 25 units. Recalculate whenever the vial concentration changes.",
      "In SURMOUNT-1, average weight loss at 72 weeks was about 15% on tirzepatide 5 mg, 19.5% on 10 mg and 20.9% on 15 mg; in STEP-1, semaglutide 2.4 mg averaged about 15% at 68 weeks.",
      "Missed-dose windows differ: take a missed Wegovy dose if the next is more than 2 days away, Ozempic within 5 days, and Zepbound or Mounjaro within 4 days - never double up.",
    ],
    sections: [
      {
        heading: "What is the right GLP-1 dose for weight loss?",
        body: `<p><strong>There is no single right GLP-1 dose. Every patient starts at a low dose - 0.25 mg a week for semaglutide or 2.5 mg a week for tirzepatide - and steps up roughly every four weeks until they reach a maintenance dose that works and that they can tolerate. For weight management, the labeled maintenance doses are 2.4 mg of semaglutide (Wegovy) and 5 mg, 10 mg or 15 mg of tirzepatide (Zepbound).</strong></p>
<p>Dosing is the part of GLP-1 treatment people search for most and understand least. Brand-name pens make it simple: each pen holds one fixed dose, and you click a button. Compounded medication, which most online programs prescribe, comes in a vial at a concentration that differs from pharmacy to pharmacy, so the same 0.5 mg dose might be 20 units on one label and 10 units on another. That gap between milligrams and syringe markings is where most dosing confusion - and most dosing errors - begins.</p>
<p>This guide is built to close that gap. It covers:</p>
<ul>
<li><strong>The official schedules</strong> for Wegovy, Ozempic, Zepbound and Mounjaro, step by step, with the maintenance doses each label allows.</li>
<li><strong>What the trials showed at each dose,</strong> including the dose-by-dose weight-loss results from SURMOUNT-1.</li>
<li><strong>Unit conversion charts</strong> for compounded semaglutide and tirzepatide at the concentrations you are most likely to see, plus the one formula that works for any vial.</li>
<li><strong>The practical questions:</strong> missed doses, changing your injection day, what to do if you took too much, how long a vial lasts, and which syringe to use.</li>
<li><strong>The judgment calls:</strong> when to increase, when to stay put, how to switch between drugs or from pens to vials, and what maintenance dosing looks like.</li>
<li><strong>The money side:</strong> which of the online providers we rank charge the same price at every dose, and which do not.</li>
</ul>
<p><strong>How to use it.</strong> If you only need a number, jump to the chart for your medication. If you are about to start, read the sections on titration, syringes and common mistakes first - they take ten minutes and prevent the problems that send people to urgent care. Throughout, the figures come from the FDA-approved prescribing information for each brand-name product and from the published STEP and SURMOUNT trials.</p>
<p>One rule overrides everything in this article: <strong>your prescription and your pharmacy label are the source of truth for your dose.</strong> This guide explains how dosing works so you can follow your clinician's plan with confidence and spot a mistake before it reaches the syringe. It does not replace that plan, and a licensed clinician - not a chart - decides what dose is right for you.</p>`,
      },
      {
        heading: "How does GLP-1 dosing work?",
        body: `<p><strong>GLP-1 weight-loss medications are dosed in fixed steps, not by body weight. You take one injection a week, the dose rises gradually during the first few months, and once you reach a dose that is effective and tolerable, you stay there for maintenance.</strong></p>
<p>Four features make GLP-1 dosing different from most medications people are used to:</p>
<ul>
<li><strong>Fixed doses for adults.</strong> A 130 lb adult and a 300 lb adult start on the same dose and follow the same schedule. Your clinician adjusts the pace and the final dose based on how you respond and what you tolerate, not on a weight-based calculation.</li>
<li><strong>Once-weekly timing.</strong> Semaglutide has a half-life of about one week and tirzepatide about five days, which is why a single weekly injection keeps a fairly steady level in your body. The natural GLP-1 hormone, by comparison, lasts only minutes.</li>
<li><strong>A slow build-up.</strong> Because the drugs last so long, each dose change takes several weeks to settle. Levels reach a steady state after roughly four to five weeks on the same dose. That is the biological reason the labels hold each step for at least four weeks.</li>
<li><strong>Titration first, maintenance second.</strong> The first phase - titration - exists mainly to let your digestive system adapt. The second phase - maintenance - is where most of the weight loss accumulates. Many people confuse the two and expect full results from a starting dose that was never designed to produce them.</li>
</ul>
<p>The long half-life matters in practice, too. It is why a missed dose can usually be taken a few days late, why side effects from a dose increase can take a few days to appear and a week or more to fade, and why an accidental double dose can make you feel unwell for several days rather than a few hours.</p>
<table>
<thead><tr><th>Feature</th><th>Semaglutide</th><th>Tirzepatide</th></tr></thead>
<tbody>
<tr><td>Brand names</td><td>Wegovy (weight), Ozempic (type 2 diabetes)</td><td>Zepbound (weight), Mounjaro (type 2 diabetes)</td></tr>
<tr><td>How often</td><td>Once a week</td><td>Once a week</td></tr>
<tr><td>Approximate half-life</td><td>About 1 week</td><td>About 5 days</td></tr>
<tr><td>Starting dose</td><td>0.25 mg</td><td>2.5 mg</td></tr>
<tr><td>Minimum time per step</td><td>4 weeks</td><td>4 weeks</td></tr>
<tr><td>Weight-management maintenance dose (label)</td><td>2.4 mg (Wegovy)</td><td>5, 10 or 15 mg (Zepbound)</td></tr>
<tr><td>Highest labeled dose</td><td>7.2 mg (Wegovy HD, approved March 2026); 2 mg (Ozempic)</td><td>15 mg</td></tr>
</tbody>
</table>
<p>Notice that the numbers are not comparable across the two drugs. A 2.5 mg dose of tirzepatide is a starting dose; a 2.4 mg dose of semaglutide is a full maintenance dose. Milligram for milligram, the molecules have different potencies, so never assume a number on one schedule means the same thing on the other.</p>`,
      },
      {
        heading: "Why do GLP-1 doses start low and go up every 4 weeks?",
        body: `<p><strong>Starting low and increasing slowly - called titration or dose escalation - gives your stomach and gut time to adjust. Nausea, vomiting and diarrhea are most common in the days after a dose increase, and a gradual schedule makes them milder and less likely to force you to stop treatment.</strong></p>
<p>GLP-1 drugs slow the rate at which food leaves your stomach and act on areas of the brain involved in appetite and nausea. Jumping straight to a full dose overwhelms both systems at once. Stepping up in small increments lets each change settle before the next one arrives.</p>
<p>What the labels say about the pace:</p>
<ul>
<li><strong>Wegovy</strong> increases every four weeks through five steps. If a dose is not tolerated during escalation, the label suggests considering a four-week delay before the next increase.</li>
<li><strong>Zepbound and Mounjaro</strong> increase in 2.5 mg steps after at least four weeks on the current dose. The label describes four weeks as a minimum, not a deadline.</li>
<li><strong>Ozempic</strong> moves from 0.25 mg to 0.5 mg after four weeks, then up only if more effect is needed, again after at least four weeks at each dose.</li>
</ul>
<p><strong>Four weeks is a floor, not a schedule you must keep.</strong> This is the single most useful idea in GLP-1 dosing. Many clinicians extend a step to six or eight weeks when side effects are still noticeable or when a patient is already losing weight steadily at the current dose. There is no prize for reaching the top dose quickly. The goal is the lowest dose that produces steady progress with side effects you can live with.</p>
<p>The starting doses themselves are not meant to cause much weight loss. A 0.25 mg semaglutide dose or a 2.5 mg tirzepatide dose is mainly a tolerability step. Some people do notice reduced appetite straight away, and some lose a few pounds in the first month, but if you feel little during the first four weeks, that is expected - it is not a sign the drug is failing.</p>
<p>Titration is also why your first months of treatment cost the same as later months at many providers but deliver less effect: you are paying for the ramp. That is one reason we compare providers on a full year at maintenance dose, not on the first month. Our guide to <a href="/articles/glp1-side-effects-first-12-weeks">GLP-1 side effects in the first 12 weeks</a> walks through what most people feel at each step.</p>`,
      },
      {
        heading: "What is the Wegovy dosing schedule?",
        body: `<p><strong>Wegovy (semaglutide) starts at 0.25 mg once a week for four weeks, then rises to 0.5 mg, 1 mg and 1.7 mg, four weeks at each step, before reaching the 2.4 mg maintenance dose in week 17. The label lists 2.4 mg as the recommended maintenance dose and allows 1.7 mg for people who cannot tolerate 2.4 mg.</strong></p>
<table>
<thead><tr><th>Weeks</th><th>Weekly dose</th><th>Phase</th></tr></thead>
<tbody>
<tr><td>1-4</td><td>0.25 mg</td><td>Titration</td></tr>
<tr><td>5-8</td><td>0.5 mg</td><td>Titration</td></tr>
<tr><td>9-12</td><td>1 mg</td><td>Titration</td></tr>
<tr><td>13-16</td><td>1.7 mg</td><td>Titration</td></tr>
<tr><td>17 onward</td><td>2.4 mg (or 1.7 mg if 2.4 mg is not tolerated)</td><td>Maintenance</td></tr>
</tbody>
</table>
<p><strong>How the pens work.</strong> Wegovy comes as single-dose prefilled pens, one pen per weekly injection, usually four pens to a carton. Each strength is a separate pen, so you do not measure anything: you take the pen for your current step, inject, and dispose of it. That simplicity is one of the real advantages of brand-name medication, and it removes the unit-conversion errors that cause problems with compounded vials.</p>
<p><strong>Who it is approved for.</strong> Wegovy is approved for chronic weight management in adults with a BMI of 30 or more, or 27 or more with at least one weight-related condition, alongside a reduced-calorie diet and increased physical activity. It is also approved for some adolescents aged 12 and older, and for reducing the risk of major cardiovascular events in adults with established heart disease and either obesity or overweight. Adolescent dosing and eligibility should be handled by a clinician experienced with that age group.</p>
<p><strong>What if 2.4 mg is too much?</strong> Your clinician can keep you at 1.7 mg. In practice, many patients also spend longer than four weeks on one or more of the earlier steps. Staying at a lower dose that you tolerate is better than pushing to 2.4 mg and then stopping because of side effects.</p>
<p><strong>Where to get it online.</strong> Among the programs we rank, <a href="/reviews/ro">ro</a> prescribes Wegovy and handles insurance checks and prior authorizations, and Novo Nordisk's own NovoCare Pharmacy sells it self-pay for $349 a month ($199 for the first two fills of the lowest doses through December 31, 2026). <a href="/reviews/altrx">altRx</a> also lists it on its brand-name shelf. Whether insurance covers it depends entirely on your plan.</p>`,
      },
      {
        heading: "What is the Ozempic dosing schedule?",
        body: `<p><strong>Ozempic (semaglutide) starts at 0.25 mg once a week for four weeks, then increases to 0.5 mg. If more blood-sugar control is needed, the dose can rise to 1 mg after at least four weeks, and then to a maximum of 2 mg after at least four more weeks. Ozempic is approved for type 2 diabetes, not for weight management.</strong></p>
<table>
<thead><tr><th>Weeks</th><th>Weekly dose</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>1-4</td><td>0.25 mg</td><td>Starting dose; not intended for blood-sugar control</td></tr>
<tr><td>5 onward</td><td>0.5 mg</td><td>First treatment dose</td></tr>
<tr><td>After at least 4 weeks at 0.5 mg</td><td>1 mg</td><td>If more glycemic control is needed</td></tr>
<tr><td>After at least 4 weeks at 1 mg</td><td>2 mg</td><td>Highest labeled dose</td></tr>
</tbody>
</table>
<p><strong>Why Ozempic and Wegovy differ.</strong> They are the same molecule, but they were developed and tested for different jobs. Ozempic's dose range was studied for blood-sugar control in type 2 diabetes and tops out at 2 mg. Wegovy's range was studied for weight management and goes to 2.4 mg. When a clinician prescribes Ozempic for weight loss, that is off-label use - legal and common, but not what the product was approved for, and insurance plans that cover Ozempic for diabetes often will not cover it for weight.</p>
<p><strong>The multi-dose pen.</strong> Unlike Wegovy, an Ozempic pen holds several doses and has a dial that clicks as you select a dose. Some people try to "count clicks" to take a dose the dial does not offer. The manufacturer does not support this, the pen is not designed for it, and the click count varies between pen strengths. If you need a dose your pen does not provide, ask your clinician for a different pen or plan rather than improvising.</p>
<p><strong>Online availability.</strong> <a href="/reviews/ro">ro</a> prescribes Ozempic when clinically appropriate, and <a href="/reviews/altrx">altRx</a> and <a href="/reviews/wellmedr">wellmedr</a> list it on their brand shelves. Novo Nordisk's self-pay price for most Ozempic doses is $349 a month. If you have type 2 diabetes, your diabetes medications, blood-sugar targets and existing care team all shape the right dose - see the section on dosing alongside other medications below.</p>`,
      },
      {
        heading: "What is the Zepbound and Mounjaro dosing schedule?",
        body: `<p><strong>Zepbound and Mounjaro (tirzepatide) both start at 2.5 mg once a week for four weeks, then rise to 5 mg. After that, the dose can increase in 2.5 mg steps - to 7.5, 10, 12.5 and 15 mg - with at least four weeks at each dose. For weight management, the Zepbound label lists 5 mg, 10 mg or 15 mg as maintenance doses, and 15 mg is the maximum.</strong></p>
<table>
<thead><tr><th>Weeks (earliest)</th><th>Weekly dose</th><th>Phase</th></tr></thead>
<tbody>
<tr><td>1-4</td><td>2.5 mg</td><td>Starting dose - for tolerability, not maintenance</td></tr>
<tr><td>5-8</td><td>5 mg</td><td>First possible maintenance dose</td></tr>
<tr><td>9-12</td><td>7.5 mg</td><td>Titration step</td></tr>
<tr><td>13-16</td><td>10 mg</td><td>Possible maintenance dose</td></tr>
<tr><td>17-20</td><td>12.5 mg</td><td>Titration step</td></tr>
<tr><td>21 onward</td><td>15 mg</td><td>Maximum dose; possible maintenance dose</td></tr>
</tbody>
</table>
<p>The week numbers are the <strong>fastest</strong> possible pace. Unlike Wegovy, where every patient moves through the same five steps toward 2.4 mg, tirzepatide has three different maintenance doses. Many people stop climbing at 5 mg or 10 mg because they are losing weight steadily and see no reason to add side-effect risk. Others continue to 15 mg. Both are normal.</p>
<p><strong>Zepbound vs Mounjaro.</strong> They contain the same molecule at the same strengths. Zepbound is approved for chronic weight management (and for moderate to severe obstructive sleep apnea in adults with obesity); Mounjaro is approved for type 2 diabetes. As with Ozempic, prescribing Mounjaro for weight loss is off-label, and insurance coverage usually follows the approved use.</p>
<p><strong>Pens and vials.</strong> Zepbound pens are single-dose autoinjectors - one pen per week, with a hidden needle and no measuring. Eli Lilly also sells Zepbound in single-dose vials through its self-pay pharmacy; each vial holds one dose, which you draw up with a syringe. Check which form you have been prescribed before your first injection, because the technique is different.</p>
<p><strong>Where to get it online.</strong> <a href="/reviews/ro">ro</a> prescribes Zepbound with insurance support, and <a href="/reviews/altrx">altRx</a> and <a href="/reviews/wellmedr">wellmedr</a> list it on their brand shelves. Lilly's own LillyDirect self-pay price is $299 a month for 2.5 mg, $399 for 5 mg and $449 for higher doses with on-time refills. Compounded tirzepatide, which follows the same milligram steps in vial form, is covered further down.</p>`,
      },
      {
        heading: "What dose of semaglutide is used for weight loss?",
        body: `<p><strong>The dose of semaglutide approved and studied for weight management is 2.4 mg once a week, reached after 16 weeks of titration. In the STEP-1 trial, adults taking 2.4 mg lost about 15% of their body weight on average at 68 weeks, compared with about 2.4% on placebo. Lower doses can also produce weight loss, but the evidence suggests less of it.</strong></p>
<p>Three pieces of trial evidence help put semaglutide doses in context:</p>
<table>
<thead><tr><th>Trial</th><th>Population</th><th>Dose</th><th>Average weight loss</th></tr></thead>
<tbody>
<tr><td>STEP-1 (NEJM, 2021)</td><td>Adults with obesity or overweight, without diabetes</td><td>2.4 mg weekly</td><td>About 15% at 68 weeks (placebo about 2.4%)</td></tr>
<tr><td>STEP-2 (Lancet, 2021)</td><td>Adults with overweight or obesity and type 2 diabetes</td><td>2.4 mg vs 1 mg weekly</td><td>About 9.6% on 2.4 mg vs about 7% on 1 mg at 68 weeks (placebo about 3.4%)</td></tr>
<tr><td>SURMOUNT-5 (NEJM, 2025)</td><td>Adults with obesity, without diabetes</td><td>Maximum tolerated dose, up to 2.4 mg</td><td>About 13.7% at 72 weeks (vs about 20.2% on tirzepatide)</td></tr>
</tbody>
</table>
<p><strong>What STEP-2 tells you about dose.</strong> It is the clearest head-to-head look at two semaglutide doses for weight. The higher dose produced more weight loss, but the lower dose still produced a meaningful amount. People with type 2 diabetes tend to lose less weight on GLP-1s than people without diabetes, so the absolute numbers in STEP-2 are lower than in STEP-1 - the useful signal is the gap between doses.</p>
<p><strong>How to read this as a patient:</strong></p>
<ul>
<li><strong>2.4 mg is the evidence-backed target</strong> if your goal is the full average effect seen in trials.</li>
<li><strong>1 mg or 1.7 mg is a reasonable place to stay</strong> if you are losing weight steadily there, or if side effects make the next step hard. Less average effect is not the same as no effect.</li>
<li><strong>Doses below 0.5 mg</strong> are starting and adjustment doses. The major trials did not test them as long-term weight-loss doses.</li>
<li><strong>Doses above 2.4 mg</strong> now exist as a brand-name option: the FDA approved Wegovy HD (semaglutide 7.2 mg) in March 2026. In the STEP UP trial, 7.2 mg averaged about 18.7% weight loss at 72 weeks, compared with about 15.6% on 2.4 mg and 3.9% on placebo, with more dysesthesia (unusual skin sensations) - about 22% vs 6% on 2.4 mg. It is a prescription decision for people already on 2.4 mg, and taking more than your prescription - with a compounded vial, for example - is not a safe way to replicate it.</li>
</ul>
<p>Remember that STEP-1 participants also received lifestyle counseling, and that averages hide a wide spread: some people lost far more than 15%, and some lost very little. Your own response at a given dose is the best guide to whether you need more.</p>`,
      },
      {
        heading: "What dose of tirzepatide is used for weight loss?",
        body: `<p><strong>Tirzepatide is used for weight management at 5 mg, 10 mg or 15 mg once a week. In the SURMOUNT-1 trial, average weight loss at 72 weeks was about 15% on 5 mg, about 19.5% on 10 mg and about 20.9% on 15 mg, compared with about 3.1% on placebo. The jump from 5 mg to 10 mg added more than the jump from 10 mg to 15 mg.</strong></p>
<p>SURMOUNT-1 is unusually useful for patients because it randomly assigned people to three fixed maintenance doses, so it shows what each dose achieved on its own:</p>
<table>
<thead><tr><th>Maintenance dose</th><th>Average weight loss at 72 weeks (SURMOUNT-1)</th><th>Extra loss vs the dose below</th></tr></thead>
<tbody>
<tr><td>Placebo</td><td>About 3.1%</td><td>-</td></tr>
<tr><td>5 mg</td><td>About 15.0%</td><td>About 12 percentage points vs placebo</td></tr>
<tr><td>10 mg</td><td>About 19.5%</td><td>About 4.5 points vs 5 mg</td></tr>
<tr><td>15 mg</td><td>About 20.9%</td><td>About 1.4 points vs 10 mg</td></tr>
</tbody>
</table>
<p><strong>What that pattern means.</strong> Most of tirzepatide's effect is already present at 5 mg. Moving to 10 mg added a meaningful amount on average. Moving from 10 mg to 15 mg added a smaller average gain, though some individuals respond much more to the top dose than the average suggests. This is a classic dose-response curve that flattens near the top - and it is the reason many clinicians do not automatically push every patient to 15 mg.</p>
<p><strong>Putting it in pounds.</strong> For a 230 lb person, the trial averages translate to roughly 35 lb at 5 mg, 45 lb at 10 mg and 48 lb at 15 mg over 72 weeks. Those are illustrations of averages, not predictions - individual results in the trial ranged widely in both directions.</p>
<p><strong>Who stopped climbing, and why.</strong> In everyday practice, people tend to settle at a dose for one of three reasons: they are losing about as fast as they and their clinician want, side effects at the next step are not worth it, or the cost at their provider rises with the dose. The first two are clinical decisions. The third is avoidable - several providers we rank charge the same price at every dose, as the pricing section below shows.</p>
<p>For a direct comparison of the two molecules at their highest doses, see our <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a> guide, which covers the SURMOUNT-5 head-to-head results and who tends to start on which.</p>`,
      },
      {
        heading: "How does compounded GLP-1 dosing work?",
        body: `<p><strong>Compounded semaglutide and tirzepatide usually follow the same milligram steps as the brand-name schedules, but they come in multi-dose vials that you measure with a syringe. Your dose in milligrams stays the same; what changes is how many units you draw up, which depends on the concentration printed on your vial.</strong></p>
<p>Compounded GLP-1s are prepared by licensed compounding pharmacies, are not FDA-approved, and are not reviewed by the FDA for safety, effectiveness or quality before they reach patients. Eight of the nine online programs we rank prescribe compounded medication. Here is how dosing works in that setting:</p>
<ul>
<li><strong>The dose is written in milligrams.</strong> Your prescription might say "semaglutide 0.5 mg subcutaneously once weekly." That number is what matters clinically.</li>
<li><strong>The vial has a concentration.</strong> The label states how many milligrams are in each milliliter, for example 2.5 mg/mL for semaglutide or 10 mg/mL for tirzepatide. Pharmacies use different concentrations, and the same pharmacy may change concentration when your dose rises.</li>
<li><strong>The syringe measures volume.</strong> Insulin syringes are marked in units, where 100 units equals 1 mL. The number of units you inject is the bridge between your milligram dose and your vial's concentration.</li>
<li><strong>Instructions should state units explicitly.</strong> A good provider or pharmacy prints both the milligram dose and the matching unit count on the label or in your instructions. If yours only gives one of them, ask for both before you inject.</li>
</ul>
<p><strong>Why compounded schedules sometimes differ.</strong> After the FDA declared the semaglutide and tirzepatide shortages resolved, compounding of copies of commercially available drugs became restricted; 503A pharmacies can still prepare medication for an individual patient's documented clinical need, such as a dose or formulation change. In practice, some compounded programs use intermediate doses - for example a step between 1 mg and 1.7 mg semaglutide, or 3.75 mg tirzepatide - or slower escalation. Programs that emphasize individualized dosing, such as <a href="/reviews/trimrx">trimrx</a>, build their model around it. The regulatory picture continues to evolve, so ask your provider how it applies to your prescription.</p>
<p><strong>Additives do not change the math.</strong> Some compounded products include vitamin B12, glycine or other ingredients. The concentration on the label still refers to the semaglutide or tirzepatide content, so your unit calculation is the same. Those additives were not part of the STEP or SURMOUNT trials; ask your clinician what each adds and why.</p>
<p><strong>Oral and sublingual compounded formats</strong> - such as <a href="/reviews/embody">embody</a>'s daily oral option or <a href="/reviews/directmeds">DirectMeds</a>' sublingual drops - use their own dosing instructions and are not interchangeable milligram-for-milligram with weekly injections. We cover them separately below. For a wider look at the trade-offs, read <a href="/articles/compounded-vs-brand-name-glp1">compounded vs brand-name GLP-1s</a>.</p>`,
      },
      {
        heading: "How do I convert a GLP-1 dose from mg to units?",
        body: `<p><strong>Divide your dose in milligrams by your vial's concentration in mg/mL, then multiply by 100. The answer is the number of units to draw on a standard U-100 insulin syringe. For example, a 0.25 mg semaglutide dose from a 2.5 mg/mL vial is 0.25 ÷ 2.5 × 100 = 10 units.</strong></p>
<p>That one formula works for any GLP-1 vial, any dose and any concentration:</p>
<p><strong>Units = (dose in mg ÷ concentration in mg/mL) × 100</strong></p>
<p>It works because a U-100 insulin syringe is calibrated so that 100 units equals exactly 1 mL. Each unit is therefore 0.01 mL. The "units" on the syringe are a measure of liquid volume only - they are not a measure of how much drug you are taking. How much drug is in each unit depends entirely on how concentrated the liquid is.</p>
<p><strong>Three worked examples:</strong></p>
<ul>
<li><strong>Semaglutide 1 mg from a 2.5 mg/mL vial:</strong> 1 ÷ 2.5 = 0.4 mL. 0.4 × 100 = <strong>40 units</strong>.</li>
<li><strong>Tirzepatide 7.5 mg from a 10 mg/mL vial:</strong> 7.5 ÷ 10 = 0.75 mL. 0.75 × 100 = <strong>75 units</strong>.</li>
<li><strong>Semaglutide 0.5 mg from a 5 mg/mL vial:</strong> 0.5 ÷ 5 = 0.1 mL. 0.1 × 100 = <strong>10 units</strong>.</li>
</ul>
<p>Notice the first and third examples. Both produce a small number of units, but one delivers 1 mg and the other 0.5 mg. If you moved from a 2.5 mg/mL vial to a 5 mg/mL vial and kept drawing the same number of units, you would double your dose without realizing it. This is why the concentration on every new vial must be checked, every time.</p>
<p><strong>Working backward.</strong> You can also check a dose you have already been told in units. Multiply the units by the concentration and divide by 100: 20 units of a 2.5 mg/mL vial is 20 × 2.5 ÷ 100 = 0.5 mg. If the answer does not match the milligram dose on your prescription, stop and call your provider or pharmacy before injecting.</p>
<p><strong>A quick sanity check.</strong> With semaglutide, a full 2.4 mg maintenance dose is usually well under 1 mL at common compounded concentrations. With tirzepatide at 10 mg/mL, each 2.5 mg step adds 25 units. If a number you calculate seems far outside those ranges, recheck the concentration - a misread label is a more likely explanation than an unusual prescription.</p>
<p>The charts in the next two sections do this arithmetic for the concentrations you are most likely to see. Use them as a cross-check, not as a replacement for your label.</p>`,
      },
      {
        heading: "Compounded semaglutide dosage chart: how many units?",
        body: `<p><strong>On a U-100 insulin syringe, compounded semaglutide at 2.5 mg/mL works out to 10 units for 0.25 mg, 20 units for 0.5 mg, 40 units for 1 mg, 68 units for 1.7 mg and 96 units for 2.4 mg. At other concentrations the unit counts are completely different, so match the column to the concentration on your vial.</strong></p>
<table>
<thead><tr><th>Dose (mg)</th><th>1 mg/mL vial</th><th>2.5 mg/mL vial</th><th>5 mg/mL vial</th></tr></thead>
<tbody>
<tr><td>0.25 mg</td><td>25 units (0.25 mL)</td><td>10 units (0.10 mL)</td><td>5 units (0.05 mL)</td></tr>
<tr><td>0.5 mg</td><td>50 units (0.50 mL)</td><td>20 units (0.20 mL)</td><td>10 units (0.10 mL)</td></tr>
<tr><td>0.75 mg</td><td>75 units (0.75 mL)</td><td>30 units (0.30 mL)</td><td>15 units (0.15 mL)</td></tr>
<tr><td>1 mg</td><td>100 units (1.00 mL)</td><td>40 units (0.40 mL)</td><td>20 units (0.20 mL)</td></tr>
<tr><td>1.25 mg</td><td>125 units (1.25 mL)*</td><td>50 units (0.50 mL)</td><td>25 units (0.25 mL)</td></tr>
<tr><td>1.7 mg</td><td>170 units (1.70 mL)*</td><td>68 units (0.68 mL)</td><td>34 units (0.34 mL)</td></tr>
<tr><td>2 mg</td><td>200 units (2.00 mL)*</td><td>80 units (0.80 mL)</td><td>40 units (0.40 mL)</td></tr>
<tr><td>2.4 mg</td><td>240 units (2.40 mL)*</td><td>96 units (0.96 mL)</td><td>48 units (0.48 mL)</td></tr>
</tbody>
</table>
<p>*More than a standard 1 mL syringe holds. Higher-dose patients are normally switched to a more concentrated vial rather than asked to inject more than 1 mL; if your instructions would require more than one full syringe, confirm with your pharmacy.</p>
<p><strong>How to use the chart:</strong></p>
<ol>
<li>Find the concentration on your vial label - it is usually written as "mg/mL" next to the drug name. Some labels also state the total amount in the vial, for example "5 mg/2 mL", which is also 2.5 mg/mL.</li>
<li>Find your prescribed milligram dose in the left column.</li>
<li>Read across to your concentration. That is your unit count.</li>
<li>Compare it with the unit count in your provider's instructions. The two should match exactly.</li>
</ol>
<p><strong>Doses not in the chart.</strong> If your clinician has prescribed an intermediate dose, use the formula: units = dose ÷ concentration × 100. For instance, 1.5 mg at 2.5 mg/mL is 60 units.</p>
<p><strong>Concentrations not in the chart.</strong> Pharmacies use other strengths too. The same formula applies to all of them, and if your vial lists a concentration you have not seen before, it is worth a quick message to your provider to confirm the unit count in writing.</p>
<p><strong>Watch the label of every refill.</strong> When your dose rises, some pharmacies send a higher-concentration vial so the volume stays small. That is sensible - but it means the unit count you memorized for the old vial is now wrong. The safest habit is to treat every new vial as a new calculation.</p>`,
      },
      {
        heading: "Compounded tirzepatide dosage chart: how many units?",
        body: `<p><strong>On a U-100 insulin syringe, compounded tirzepatide at 10 mg/mL works out to 25 units for 2.5 mg, 50 units for 5 mg, 75 units for 7.5 mg, 100 units for 10 mg, 125 units for 12.5 mg and 150 units for 15 mg. Higher doses are usually supplied at higher concentrations so they fit in one syringe.</strong></p>
<table>
<thead><tr><th>Dose (mg)</th><th>5 mg/mL vial</th><th>10 mg/mL vial</th><th>20 mg/mL vial</th></tr></thead>
<tbody>
<tr><td>2.5 mg</td><td>50 units (0.50 mL)</td><td>25 units (0.25 mL)</td><td>12.5 units (0.125 mL)</td></tr>
<tr><td>3.75 mg</td><td>75 units (0.75 mL)</td><td>37.5 units (0.375 mL)</td><td>18.75 units (0.1875 mL)</td></tr>
<tr><td>5 mg</td><td>100 units (1.00 mL)</td><td>50 units (0.50 mL)</td><td>25 units (0.25 mL)</td></tr>
<tr><td>7.5 mg</td><td>150 units (1.50 mL)*</td><td>75 units (0.75 mL)</td><td>37.5 units (0.375 mL)</td></tr>
<tr><td>10 mg</td><td>200 units (2.00 mL)*</td><td>100 units (1.00 mL)</td><td>50 units (0.50 mL)</td></tr>
<tr><td>12.5 mg</td><td>250 units (2.50 mL)*</td><td>125 units (1.25 mL)*</td><td>62.5 units (0.625 mL)</td></tr>
<tr><td>15 mg</td><td>300 units (3.00 mL)*</td><td>150 units (1.50 mL)*</td><td>75 units (0.75 mL)</td></tr>
</tbody>
</table>
<p>*More than a standard 1 mL syringe holds - ask whether a more concentrated vial is appropriate for your dose.</p>
<p><strong>Half units and awkward numbers.</strong> Some combinations produce half units, such as 12.5 units or 37.5 units. Many 0.3 mL insulin syringes have half-unit markings; most larger syringes do not. If your dose lands between markings, ask your pharmacy or provider how they want you to measure it rather than rounding on your own. A small rounding difference at a low dose matters less than consistent technique, but the decision belongs to your care team.</p>
<p><strong>Why tirzepatide volumes are larger.</strong> Tirzepatide doses are measured in whole milligrams (2.5 to 15 mg) rather than fractions of a milligram, so the liquid volumes are bigger than with semaglutide at the same concentration. That is why higher concentrations are common at the top of the tirzepatide schedule.</p>
<p><strong>Do not reuse a semaglutide chart for tirzepatide.</strong> People who switch drugs sometimes keep a mental model of "about 20 units" from semaglutide. A 2.5 mg tirzepatide starting dose at 10 mg/mL is 25 units, but at 20 mg/mL it is 12.5 units, and at 5 mg/mL it is 50. There is no shortcut that survives a change of drug or concentration - use the formula every time.</p>
<p>As with semaglutide, check every new vial. A change from 10 mg/mL to 20 mg/mL halves the number of units for the same dose; keeping the old number would double what you inject.</p>`,
      },
      {
        heading: "Which syringe should I use for compounded GLP-1s?",
        body: `<p><strong>Use the U-100 insulin syringes your pharmacy or provider supplies, and choose the smallest size that holds your full dose - usually 0.3 mL (30 units), 0.5 mL (50 units) or 1 mL (100 units). Smaller syringes have finer markings, which makes small doses more accurate. Never use a U-40 or U-500 syringe with a unit-based GLP-1 dose.</strong></p>
<table>
<thead><tr><th>Syringe size</th><th>Holds</th><th>Typical markings</th><th>Good for</th></tr></thead>
<tbody>
<tr><td>0.3 mL</td><td>30 units</td><td>1-unit marks; many have half-unit marks</td><td>Small doses, such as starting semaglutide doses</td></tr>
<tr><td>0.5 mL</td><td>50 units</td><td>1-unit marks</td><td>Mid-range doses</td></tr>
<tr><td>1 mL</td><td>100 units</td><td>Usually 2-unit marks</td><td>Doses above 50 units</td></tr>
</tbody>
</table>
<p><strong>Why the syringe size matters.</strong> On a 1 mL syringe, a 5-unit dose is a tiny sliver of liquid between widely spaced marks, and a small misreading can change the dose by a large percentage. On a 0.3 mL syringe, the same 5 units fills a much longer stretch of the barrel. The FDA has specifically noted cases where patients were given syringes much larger than their dose required, which made accurate measurement harder.</p>
<p><strong>The U-100 rule.</strong> "U-100" means the syringe is calibrated for liquid where 100 units equal 1 mL. All the unit conversions in this guide - and in nearly every compounded GLP-1 instruction sheet - assume a U-100 syringe. U-40 syringes, sold for some veterinary insulins, and U-500 syringes, designed for concentrated insulin, have different unit scales and would produce the wrong dose.</p>
<p><strong>Syringes marked in mL.</strong> Some instructions use mL instead of units, with syringes marked in tenths or hundredths of a milliliter. That is fine if the instructions and the syringe use the same scale. Problems happen when they do not - for example, being told "0.2" and drawing 2 units instead of 0.2 mL (20 units). If your syringe and your instructions use different measures, ask before injecting.</p>
<p><strong>Needles.</strong> Subcutaneous injections need only short, fine needles, and insulin syringes come with them attached. Use each syringe once, never share it, and dispose of it in an FDA-cleared sharps container or a heavy-duty plastic container as your local rules allow. Most online programs include syringes and alcohol swabs with each shipment; check what is in the box before your first dose so you are not left without the right size.</p>`,
      },
      {
        heading: "What are the most common GLP-1 dosing mistakes?",
        body: `<p><strong>The most common GLP-1 dosing errors involve compounded vials: confusing units with milliliters, keeping the old unit count after the concentration changes, using a syringe that is too large to measure accurately, and doubling up after a missed dose. In 2024 the FDA warned that some patients had injected five to 20 times their intended dose, and some needed hospital care.</strong></p>
<p>The FDA alert, issued in July 2024, described dosing errors with compounded semaglutide caused both by patients measuring incorrectly and by health care professionals miscalculating doses. Most of the errors trace back to a handful of avoidable situations:</p>
<table>
<thead><tr><th>Mistake</th><th>What happens</th><th>How to prevent it</th></tr></thead>
<tbody>
<tr><td>Reading "units" as "mL" (or the reverse)</td><td>Drawing 0.2 mL instead of 0.2 units - or 20 mL in a large syringe - can multiply the dose many times</td><td>Confirm whether your instructions use units or mL, and use a syringe marked the same way</td></tr>
<tr><td>Keeping the old unit count on a new vial</td><td>A higher-concentration refill doubles or triples the dose</td><td>Recalculate with the formula every time the label changes</td></tr>
<tr><td>Using a large syringe for a small dose</td><td>Small misreadings become large percentage errors</td><td>Use the smallest U-100 syringe that holds your dose</td></tr>
<tr><td>Escalating early or skipping a step</td><td>More nausea, vomiting and dehydration risk</td><td>Follow the written schedule; never move up without your clinician's sign-off</td></tr>
<tr><td>Taking a missed dose too late, then the next on time</td><td>Two doses close together</td><td>Follow the missed-dose window for your drug, described below</td></tr>
<tr><td>Injecting twice in one week by accident</td><td>A double dose with a long-lasting drug</td><td>Log each injection - a phone reminder or a note on the box</td></tr>
<tr><td>Counting clicks on a brand-name pen</td><td>Unreliable, unapproved partial doses</td><td>Ask for a pen or plan that provides your dose</td></tr>
</tbody>
</table>
<p><strong>Who is responsible for getting it right?</strong> Everyone in the chain. Your clinician writes the milligram dose; the pharmacy chooses the concentration and should print clear instructions; you measure and inject. A good online provider closes the loop by stating the unit count in writing and answering dosing questions quickly. That is a fair question to ask before you sign up, and one of the reasons we look at messaging access when we rank programs.</p>
<p><strong>Signs you may have taken too much.</strong> Severe nausea or vomiting, abdominal pain, inability to keep fluids down, dizziness, or - especially if you take insulin or a sulfonylurea - symptoms of low blood sugar. The next sections explain what to do. If symptoms are severe, seek urgent care rather than waiting to see if they pass.</p>
<p>A simple routine prevents almost all of these errors: read the label, do the calculation, compare it with your instructions, use the right syringe, and write down the date and dose after each injection.</p>`,
      },
      {
        heading: "How many doses are in a GLP-1 vial, and how long does it last?",
        body: `<p><strong>Divide the total milligrams in the vial by your weekly dose. A 2 mL vial of semaglutide at 2.5 mg/mL contains 5 mg - enough for 20 doses at 0.25 mg, 10 at 0.5 mg, or 5 at 1 mg. But a vial also has a beyond-use date set by the pharmacy, and you should not use it after that date, even if liquid is left.</strong></p>
<p>Two different limits decide how long a vial lasts: the amount of medication inside, and how long the pharmacy says it stays usable once prepared or opened.</p>
<p><strong>1. How many doses it contains.</strong> Total milligrams = concentration × volume. Then divide by your dose.</p>
<table>
<thead><tr><th>Vial</th><th>Total drug</th><th>Doses at a low dose</th><th>Doses at a mid dose</th><th>Doses at a high dose</th></tr></thead>
<tbody>
<tr><td>Semaglutide 2.5 mg/mL, 2 mL</td><td>5 mg</td><td>20 at 0.25 mg</td><td>5 at 1 mg</td><td>2 at 2.4 mg (with 0.2 mg left over)</td></tr>
<tr><td>Semaglutide 5 mg/mL, 2 mL</td><td>10 mg</td><td>20 at 0.5 mg</td><td>10 at 1 mg</td><td>4 at 2.4 mg (with 0.4 mg left over)</td></tr>
<tr><td>Tirzepatide 10 mg/mL, 2 mL</td><td>20 mg</td><td>8 at 2.5 mg</td><td>4 at 5 mg</td><td>2 at 10 mg</td></tr>
<tr><td>Tirzepatide 20 mg/mL, 2 mL</td><td>40 mg</td><td>8 at 5 mg</td><td>4 at 10 mg</td><td>2 at 15 mg (with 10 mg left over)</td></tr>
</tbody>
</table>
<p>These are illustrations - your pharmacy may use other volumes. A vial may contain a small extra amount (overfill), and a little liquid always stays in the needle and the bottom of the vial, so do not plan to extract every last drop.</p>
<p><strong>2. The beyond-use date.</strong> Compounded medications carry a beyond-use date (BUD) printed on the label, which is the pharmacy's limit for safe use. It reflects sterility and stability, not just how much liquid remains. If you are on a low dose and your vial technically holds 20 weeks of medication, the BUD will usually end its life long before you finish it. Discard any remaining medication after that date and ask for a refill rather than stretching it.</p>
<p><strong>3. Storage changes the clock.</strong> Most injectable GLP-1s - compounded and brand-name - should be refrigerated, kept away from light and never frozen. Brand-name pens have specific room-temperature allowances in their labels (for example, Wegovy pens may be kept between 46°F and 86°F for up to 28 days, and Zepbound pens unrefrigerated up to 86°F for up to 21 days). Compounded vials follow the pharmacy's instructions, which can be stricter. A vial left in a hot car or frozen in transit should not be used; contact your provider for a replacement.</p>
<p><strong>Plan the refill before you need it.</strong> When you know your dose and your vial size, you can count the weeks to your next order. Ask your provider whether the next shipment will be a different concentration, and put the reorder date in your calendar so you do not skip a week waiting for a package. Our <a href="/articles/online-glp1-weight-loss-guide">complete guide to online GLP-1 weight loss</a> covers shipping and storage across the programs we rank.</p>`,
      },
      {
        heading: "What should I check on my GLP-1 label before every injection?",
        body: `<p><strong>Check five things every time: the drug name, the concentration in mg/mL, your prescribed dose in milligrams, the matching unit count, and the beyond-use or expiration date. If any of those has changed since your last vial, or does not match your instructions, stop and confirm with your provider before injecting.</strong></p>
<p>It takes less than a minute and catches nearly every dosing error described in this guide. A practical checklist:</p>
<ol>
<li><strong>Drug name.</strong> Semaglutide or tirzepatide? If you have recently switched medications, make sure the vial in your hand is the new one.</li>
<li><strong>Concentration.</strong> Look for mg/mL. If the label shows total milligrams and volume (for example "20 mg/2 mL"), divide to get mg/mL (here, 10 mg/mL).</li>
<li><strong>Your dose this week.</strong> Are you still on the same step, or does your schedule move up this week? Escalation dates are easy to forget.</li>
<li><strong>Units to draw.</strong> Calculate: dose ÷ concentration × 100. Compare with the number in your written instructions. They must match.</li>
<li><strong>Dates.</strong> Is the vial within its beyond-use date? For a brand-name pen, is it within its expiration date and room-temperature allowance?</li>
<li><strong>Appearance.</strong> Follow the pharmacy's description of how the medication should look. Do not use it if it looks different from usual - for example cloudy, discolored or containing particles - and ask for a replacement.</li>
<li><strong>Syringe.</strong> U-100 insulin syringe, the right size for your dose, new and unopened.</li>
</ol>
<p><strong>Keep a dosing log.</strong> Write the date, dose in milligrams, units drawn, injection site and any side effects. It takes seconds and gives your clinician exactly what they need to judge whether to increase, hold or reduce your dose at your next check-in. It also stops the "did I take it this week?" doubt that leads to accidental double doses.</p>
<p><strong>Know who to ask.</strong> Before your first vial arrives, find out how to reach your provider with a dosing question and how fast they usually reply. Programs with unlimited messaging or check-ins, such as <a href="/reviews/trimrx">trimrx</a>, <a href="/reviews/ro">ro</a> and <a href="/reviews/embody">embody</a>, make this easier. The compounding pharmacy that filled the prescription can also answer label questions - its phone number is normally on the label.</p>`,
      },
      {
        heading: "How do I inject a GLP-1 dose?",
        body: `<p><strong>GLP-1s are injected just under the skin (subcutaneously), usually in the abdomen, thigh or upper arm. With a brand-name pen, you press it against the skin and the device delivers the dose. With a compounded vial, you draw the prescribed number of units into an insulin syringe and inject it into a pinch of skin. Your provider's written instructions always come first.</strong></p>
<p>The steps below are a general overview to help you follow those instructions, not a substitute for them. If you have never injected before, ask your provider for a video walkthrough or a live demonstration during a telehealth visit.</p>
<p><strong>Compounded vial and syringe - the general sequence:</strong></p>
<ol>
<li>Wash your hands. Check the label (drug, concentration, date) and calculate your units.</li>
<li>If the vial is refrigerated, follow the pharmacy's guidance on letting it sit briefly at room temperature. Do not shake it hard unless the instructions say to.</li>
<li>Wipe the rubber stopper with an alcohol swab and let it dry.</li>
<li>Pull the syringe plunger back to your dose mark to fill the syringe with air, insert the needle into the vial and push the air in. This equalizes pressure and makes drawing easier.</li>
<li>Turn the vial upside down and slowly pull the plunger past your dose, then push back to the exact line. Tap out any large air bubbles and re-check the number.</li>
<li>Clean the injection site, pinch a fold of skin, insert the needle at the angle your instructions describe, and push the plunger steadily.</li>
<li>Withdraw the needle, dispose of the syringe in a sharps container, and log the dose.</li>
</ol>
<p><strong>Brand-name pens.</strong> Wegovy and Zepbound single-dose pens are designed for people who have never injected. You remove the cap, place the pen flat against the skin, press or unlock it, and wait for the click or the indicator that the dose is complete. Ozempic's multi-dose pen requires attaching a new needle each time and dialing the dose. Each brand includes an instructions-for-use leaflet with diagrams, and the manufacturers publish videos.</p>
<p><strong>Common worries:</strong></p>
<ul>
<li><strong>Does it hurt?</strong> The needles are short and thin, and most people describe the injection as a brief pinch. Injecting slowly and letting an alcohol swab dry first can reduce stinging.</li>
<li><strong>A small bump or redness at the site</strong> is common and usually fades within a day or two. Rotate sites to reduce it.</li>
<li><strong>A drop of liquid on the skin afterward</strong> is usually a tiny amount. Do not inject again to "make up" for it; hold the needle in place for a few seconds next time.</li>
<li><strong>Bleeding</strong> is usually a single drop. Press gently with a cotton ball; do not rub.</li>
</ul>
<p>Get medical advice for an injection site that becomes increasingly painful, hot, swollen or red over several days, or for any sign of an allergic reaction such as rash, swelling of the face or throat, or difficulty breathing - the last of these is an emergency.</p>`,
      },
      {
        heading: "Where should I inject a GLP-1, and does the site matter?",
        body: `<p><strong>You can inject a GLP-1 into the stomach area (staying about 2 inches from the belly button), the front of the thighs or the back of the upper arms. The brand-name labels allow all three. What matters most is rotating between spots so you do not inject into the same patch of skin every week.</strong></p>
<table>
<thead><tr><th>Site</th><th>Where exactly</th><th>Practical notes</th></tr></thead>
<tbody>
<tr><td>Abdomen</td><td>Anywhere on the stomach area at least 2 inches from the navel</td><td>Easiest to reach and see; the most popular choice</td></tr>
<tr><td>Thigh</td><td>Front or outer middle of the thigh</td><td>Easy to reach while seated; some people find it less sensitive</td></tr>
<tr><td>Upper arm</td><td>Back of the upper arm</td><td>Hard to do alone; often easier with someone helping</td></tr>
</tbody>
</table>
<p><strong>Rotation.</strong> Using a slightly different spot each week - even within the same area - reduces the chance of bruising, tenderness and lumps of fatty tissue under the skin. A simple system is to divide your abdomen into four quarters and work clockwise, one quarter per week, or to alternate abdomen and thigh.</p>
<p><strong>Places to avoid:</strong> skin that is bruised, tender, scarred, hard, red or broken; stretch marks and moles; and the 2-inch circle around your navel. Do not inject into a muscle or a vein - GLP-1s are designed for the fatty layer under the skin.</p>
<p><strong>Does the site change how well it works?</strong> The prescribing information for the brand-name products allows any of the three sites without changing the dose. Some people have strong personal preferences based on comfort, and that is a perfectly good reason to choose one site over another. What you should not do is change sites as a strategy to "feel it more" or to reduce side effects - there is no good evidence for either, and the dose is what drives the effect.</p>
<p><strong>Injecting with other medications.</strong> If you also inject insulin, the labels say you can inject both in the same body region but not right next to each other. Never mix a GLP-1 with insulin in the same syringe.</p>`,
      },
      {
        heading: "What day and time should I take my weekly GLP-1 dose?",
        body: `<p><strong>Choose one day of the week and inject on that day each week, at any time of day, with or without food. You can change your injection day if needed, as long as the doses stay far enough apart: at least 2 days (48 hours) between doses for Wegovy and Ozempic, and at least 3 days (72 hours) for Zepbound and Mounjaro.</strong></p>
<p>Weekly GLP-1s are forgiving about timing because they last so long. Morning or evening makes no meaningful difference to how well they work, and you do not need to plan your injection around meals. Consistency matters more than the clock: the same day each week keeps levels steady and makes a missed dose less likely.</p>
<p><strong>Choosing your day.</strong> Some practical considerations people use:</p>
<ul>
<li><strong>Side-effect timing.</strong> Many people notice the most appetite suppression or nausea one to three days after injecting, particularly after a dose increase. If that is true for you, choose a day that puts those days somewhere quieter in your week - for example injecting on Thursday evening so the strongest effects fall on the weekend, or the reverse if weekends are when you eat socially.</li>
<li><strong>Routine anchors.</strong> Pair the injection with something you already do weekly - a Sunday planning session, a recurring call, the day you take out recycling - so it becomes automatic.</li>
<li><strong>Delivery timing.</strong> If your provider ships every four weeks, an injection day a few days after your usual delivery date gives you a buffer.</li>
</ul>
<p><strong>Changing your day.</strong> Travel, shifts or events sometimes make your usual day impractical. The labels allow you to move your injection day permanently, as long as you respect the minimum gap:</p>
<table>
<thead><tr><th>Medication</th><th>Minimum time between two doses when changing day</th></tr></thead>
<tbody>
<tr><td>Wegovy (semaglutide)</td><td>At least 2 days (more than 48 hours)</td></tr>
<tr><td>Ozempic (semaglutide)</td><td>At least 2 days (more than 48 hours)</td></tr>
<tr><td>Zepbound (tirzepatide)</td><td>At least 3 days (72 hours)</td></tr>
<tr><td>Mounjaro (tirzepatide)</td><td>At least 3 days (72 hours)</td></tr>
</tbody>
</table>
<p>Compounded semaglutide and tirzepatide are generally handled the same way as their brand-name equivalents, but ask your provider to confirm, since compounded instructions can differ. After a change, simply continue weekly on the new day.</p>
<p><strong>Travel across time zones</strong> rarely matters for a weekly drug - take it on the same calendar day at local time. Keep pens and vials in your carry-on with a cool pack if needed, because checked luggage can get too hot or freeze in the hold.</p>`,
      },
      {
        heading: "What should I do if I miss a GLP-1 dose?",
        body: `<p><strong>It depends on the medication and how late you are. For Wegovy, take the missed dose if your next scheduled dose is more than 2 days away; otherwise skip it. For Ozempic, take it within 5 days of the missed day. For Zepbound and Mounjaro, take it within 4 days. If you are past the window, skip the missed dose and take the next one on your usual day. Never take two doses to catch up.</strong></p>
<table>
<thead><tr><th>Medication</th><th>Take the missed dose if...</th><th>Otherwise</th></tr></thead>
<tbody>
<tr><td>Wegovy (semaglutide)</td><td>The next scheduled dose is more than 2 days (48 hours) away</td><td>Skip it; resume on your regular day</td></tr>
<tr><td>Ozempic (semaglutide)</td><td>No more than 5 days have passed since the missed dose</td><td>Skip it; resume on your regular day</td></tr>
<tr><td>Zepbound (tirzepatide)</td><td>No more than 4 days (96 hours) have passed since the missed dose</td><td>Skip it; resume on your regular day</td></tr>
<tr><td>Mounjaro (tirzepatide)</td><td>No more than 4 days (96 hours) have passed since the missed dose</td><td>Skip it; resume on your regular day</td></tr>
</tbody>
</table>
<p><strong>Two ways to think about the same rule.</strong> The Wegovy label counts forward to the next dose; the Ozempic, Zepbound and Mounjaro labels count from the missed day. They end up in a similar place: if you are only a few days late, take the dose; if you are close to the next one, let it go.</p>
<p><strong>A worked example.</strong> Say you normally inject on Monday and remember on Thursday. For Zepbound, three days have passed, which is within the 4-day window - take it Thursday, then go back to Monday the following week (Thursday to Monday is four days, above the 3-day minimum). For Wegovy, your next dose is four days away, so you can take it Thursday too. If you remembered on Saturday instead, five days would have passed: too late for Zepbound and Wegovy (the next dose is only two days away), so you would skip and inject on Monday as usual.</p>
<p><strong>Compounded medications.</strong> Providers usually apply the same windows as the brand-name equivalent, but confirm with yours. If your program has a simple rule written in your instructions, follow it.</p>
<p><strong>What a single missed dose does.</strong> Because these drugs have long half-lives, one missed week does not mean your levels drop to zero. Some people notice appetite returning toward the end of a missed week. Weight loss usually resumes once you restart. The bigger risk is not the gap - it is trying to make it up with an extra dose.</p>`,
      },
      {
        heading: "What if I missed two or more weeks of GLP-1 doses?",
        body: `<p><strong>If you have missed two or more weekly doses in a row, contact your clinician before restarting. Your body may have lost some of its tolerance to the medication, and restarting at your previous full dose can bring back strong nausea and vomiting. The Wegovy label says that after more than two consecutive missed weeks, treatment should be restarted as clinically appropriate.</strong></p>
<p>People pause treatment for all sorts of reasons - a delayed shipment, illness, a holiday, cost, or a surgery. The return is where problems happen, because patients reasonably assume they can pick up where they left off.</p>
<p><strong>What clinicians typically consider:</strong></p>
<ul>
<li><strong>How long the break was.</strong> After one missed dose, most people simply resume. After two weeks, some clinicians resume at the same dose and others step down. After several weeks off, many restart at a lower dose, sometimes the starting dose, and re-titrate more quickly than the first time.</li>
<li><strong>Which dose you were on.</strong> Restarting at 0.5 mg semaglutide after a break carries less risk than restarting at 2.4 mg. Restarting at 2.5 mg tirzepatide is gentler than restarting at 15 mg.</li>
<li><strong>How you tolerated the medication before.</strong> If you had significant side effects during your first titration, a more cautious restart makes sense.</li>
<li><strong>Why you stopped.</strong> If the break was because of severe side effects, pancreatitis symptoms, gallbladder problems or pregnancy, restarting at all is a clinical decision, not a scheduling one.</li>
</ul>
<p><strong>Avoid the gap in the first place.</strong> The most common avoidable cause of missed doses with online programs is a refill that arrives late. A few habits help:</p>
<ul>
<li>Reorder or confirm your refill at least a week before your last dose.</li>
<li>Know your provider's shipping time. Among the programs we rank, <a href="/reviews/embody">embody</a> and <a href="/reviews/directmeds">DirectMeds</a> publish 1-2 day delivery, <a href="/reviews/trimrx">trimrx</a> often delivers next-day, <a href="/reviews/wellmedr">wellmedr</a> takes 3-5 business days and <a href="/reviews/altrx">altRx</a> takes 5-7 days.</li>
<li>Ask whether your next shipment requires a check-in or a dose approval, and complete it early.</li>
<li>If you are switching providers, plan the overlap so the new medication arrives before the old one runs out.</li>
</ul>
<p>If a pause is caused by cost, talk to your clinician before simply stopping; there may be cheaper options at a similar dose, as the pricing section below shows. Our guide to <a href="/articles/stopping-glp1-maintenance">stopping a GLP-1</a> covers what happens to weight and appetite during longer breaks.</p>`,
      },
      {
        heading: "What should I do if I took too much of a GLP-1?",
        body: `<p><strong>If you injected more than your prescribed dose, contact your provider or call Poison Control at 1-800-222-1222 right away, even if you feel fine - symptoms can take hours to appear and may last for days. Go to an emergency department or call 911 if you have severe vomiting, cannot keep fluids down, have severe abdominal pain, or feel faint or confused.</strong></p>
<p>Overdoses with weekly GLP-1s usually cause intense versions of the familiar side effects: nausea, vomiting, diarrhea, abdominal pain and a complete loss of appetite. The main dangers are dehydration - which can stress the kidneys - and, in people who also take insulin or a sulfonylurea, low blood sugar. Because the drugs last about a week in the body, the effect does not wear off overnight.</p>
<p><strong>What to do, in order:</strong></p>
<ol>
<li><strong>Work out what you took.</strong> Note the concentration, the units you drew and when. Calculate the milligrams: units × concentration ÷ 100. This is what Poison Control or your clinician will ask.</li>
<li><strong>Call for advice.</strong> Poison Control (1-800-222-1222 in the US) is free and available around the clock, and can tell you whether home monitoring is reasonable or whether you need to be seen. Also message or call your prescribing provider.</li>
<li><strong>Do not take your next dose</strong> until a clinician tells you when and at what dose to resume.</li>
<li><strong>Hydrate in small amounts.</strong> Frequent sips of water or an electrolyte drink are easier to keep down than large glasses.</li>
<li><strong>Watch for warning signs:</strong> repeated vomiting, inability to keep fluids down for several hours, very little urine, dizziness when standing, severe or persistent abdominal pain (especially pain spreading to the back), or confusion, shakiness and sweating if you take diabetes medication. Any of these warrants urgent care.</li>
</ol>
<p><strong>Why this happens.</strong> The FDA's 2024 alert on compounded semaglutide described exactly these situations: patients drawing up the wrong volume, confusing units and milliliters, or receiving instructions with a miscalculated dose. If your overdose was caused by unclear instructions or a label you found confusing, tell your provider so they can fix it for you and for other patients.</p>
<p><strong>A small over-measurement</strong> - say a unit or two at a low dose - is different from a large error and is unlikely to be dangerous. It is still worth noting in your log and mentioning to your provider, especially if it happened because your syringe is too large for your dose.</p>`,
      },
      {
        heading: "When should I increase my GLP-1 dose?",
        body: `<p><strong>Increase your dose only when your clinician approves it, and usually only when three things are true: you have been on the current dose for at least four weeks, side effects are mild or settled, and you are not already losing weight at a pace you and your clinician are happy with. If you are still losing steadily, there is often no need to go up yet.</strong></p>
<p>The labeled schedules show when a dose increase becomes possible. They do not say an increase is required on that date. Good clinicians use your actual response to decide. Signals that an increase may make sense:</p>
<ul>
<li><strong>Appetite effect has faded.</strong> Hunger and "food noise" are returning toward pre-treatment levels a few days after each injection.</li>
<li><strong>Weight has stalled for several weeks</strong> despite consistent dosing and no major change in eating or activity. A week or two of stable weight is normal; a month or more may be a signal.</li>
<li><strong>Side effects are minimal.</strong> You are eating enough protein, staying hydrated and not struggling with nausea, constipation or fatigue at the current dose.</li>
<li><strong>You have not reached the maintenance dose yet,</strong> and your clinician wants to move toward the dose with the strongest evidence behind it.</li>
</ul>
<p>Signals that it is better to wait:</p>
<ul>
<li><strong>You are still losing weight steadily.</strong> Many clinicians consider an average of roughly 0.5% to 1% of body weight a week reasonable progress during active weight loss. If you are in that range, more drug is unlikely to add much except side effects.</li>
<li><strong>Side effects are still noticeable</strong> after four weeks on the current dose.</li>
<li><strong>You are eating very little</strong> - skipping meals because you have no appetite at all, or struggling to reach adequate protein. This is a sign the dose may already be high enough for you.</li>
<li><strong>You have had a recent illness, dehydration or a stomach bug.</strong> Let it resolve first.</li>
</ul>
<p><strong>How online providers handle increases.</strong> Most programs ask you to complete a short check-in before each dose change, reporting your weight, side effects and appetite. Answer honestly - understating side effects to get a higher dose sooner backfires. Programs that offer unlimited provider check-ins, such as <a href="/reviews/trimrx">trimrx</a>, make it easier to adjust between scheduled reviews. If you feel pushed to escalate faster than you want, ask to stay where you are; that request is clinically reasonable at any program.</p>`,
      },
      {
        heading: "Can I stay on a lower GLP-1 dose?",
        body: `<p><strong>Yes. Many people stay on a lower dose for months, or permanently, because it works for them and the next step adds side effects without much extra benefit. The trials suggest lower doses produce less weight loss on average, but if you are losing steadily and feeling well, a lower dose can be the right dose.</strong></p>
<p>The idea that everyone must reach 2.4 mg semaglutide or 15 mg tirzepatide comes from how the trials were designed, not from a rule that higher is always better. The evidence actually supports a more flexible approach:</p>
<ul>
<li><strong>Tirzepatide has three labeled maintenance doses.</strong> In SURMOUNT-1, 5 mg produced about 15% average weight loss - more than semaglutide 2.4 mg did in STEP-1. Staying at 5 mg or 10 mg is an approved strategy, not a compromise.</li>
<li><strong>Wegovy allows 1.7 mg maintenance</strong> for people who do not tolerate 2.4 mg.</li>
<li><strong>Lower doses still work.</strong> In STEP-2, semaglutide 1 mg produced meaningful weight loss in people with type 2 diabetes, though less than 2.4 mg.</li>
</ul>
<p><strong>The trade-offs of staying lower:</strong></p>
<table>
<thead><tr><th>Staying at a lower dose</th><th>Moving to a higher dose</th></tr></thead>
<tbody>
<tr><td>Fewer and milder side effects for most people</td><td>Greater average weight loss in trials</td></tr>
<tr><td>Easier to eat enough protein and stay hydrated</td><td>May restart progress after a plateau</td></tr>
<tr><td>Uses less medication per vial (fewer refills at some providers)</td><td>Closer to the doses with the strongest evidence</td></tr>
<tr><td>Possibly slower or smaller total loss</td><td>More nausea, diarrhea and vomiting on average</td></tr>
</tbody>
</table>
<p><strong>Lower dose vs "microdosing."</strong> Staying at an established step, such as 1 mg semaglutide or 5 mg tirzepatide, is different from programs marketed as "microdosing," which use doses below the standard steps. Our <a href="/articles/online-glp1-weight-loss-guide">complete GLP-1 guide</a> explains why there is little evidence on what very low doses achieve over time.</p>
<p><strong>The right question to ask</strong> is not "what is the maximum dose?" but "what is the lowest dose that keeps me making the progress I want, with side effects I can live with?" Raise it at each check-in and let your clinician help you answer it from your own results.</p>`,
      },
      {
        heading: "Should I lower my GLP-1 dose if side effects are bad?",
        body: `<p><strong>Often, yes - talk to your clinician. If side effects at a new dose stay severe or do not improve after a week or two, the usual options are to hold the current dose longer, step back down to the last dose you tolerated, or spread the next increase over more weeks. Do not stop or change your dose on your own if you have severe symptoms; get medical advice first.</strong></p>
<p>Both brand-name labels build in this flexibility. Wegovy suggests delaying escalation by four weeks if a dose is not tolerated, and allows a 1.7 mg maintenance dose. Zepbound suggests considering a lower maintenance dose if a maintenance dose is not tolerated. For compounded medication, your clinician has the same options and, in some cases, more granular doses.</p>
<p><strong>A practical framework:</strong></p>
<table>
<thead><tr><th>What you are experiencing</th><th>Common approach (discuss with your clinician)</th></tr></thead>
<tbody>
<tr><td>Mild nausea or fullness for 1-3 days after injecting</td><td>Usually manageable; smaller meals, less fat, slower eating, good hydration. Stay on the dose.</td></tr>
<tr><td>Side effects that are improving week to week</td><td>Hold the current dose until they settle before increasing.</td></tr>
<tr><td>Side effects that are not improving after 2-4 weeks</td><td>Step back to the previous dose, or stay longer before trying again.</td></tr>
<tr><td>Persistent vomiting, inability to keep fluids down, or signs of dehydration</td><td>Contact your clinician promptly; urgent care if severe.</td></tr>
<tr><td>Severe abdominal pain, especially spreading to the back, or pain in the upper right abdomen with fever or yellowing skin</td><td>Seek urgent medical care - these can be signs of pancreatitis or gallbladder disease.</td></tr>
</tbody>
</table>
<p><strong>Stepping down is not failure.</strong> Many people who struggle at one step tolerate it well a month later after spending more time at the dose below. And many people discover that a lower dose gives them nearly the same appetite effect with far fewer side effects.</p>
<p><strong>Rule out the non-dose causes too.</strong> Large or high-fat meals, eating past fullness, alcohol, dehydration and constipation all make GLP-1 side effects worse at any dose. Sometimes the fix is a change in eating pattern rather than a change in dose. Our <a href="/articles/glp1-side-effects-first-12-weeks">side effects guide</a> has practical strategies for each of the common problems.</p>`,
      },
      {
        heading: "Which GLP-1 side effects depend on the dose?",
        body: `<p><strong>Digestive side effects - nausea, diarrhea, vomiting and constipation - are the most clearly dose-related. They are most common in the weeks after a dose increase and usually ease as your body adjusts. In the trials, they were more frequent on GLP-1s than on placebo at every dose, and most were mild to moderate.</strong></p>
<p>The trial data give a sense of scale. These are the approximate proportions of participants who reported each effect at least once during the trial:</p>
<table>
<thead><tr><th>Side effect</th><th>Placebo (SURMOUNT-1)</th><th>Tirzepatide 5 mg</th><th>Tirzepatide 10 mg</th><th>Tirzepatide 15 mg</th></tr></thead>
<tbody>
<tr><td>Nausea</td><td>About 10%</td><td>About 25%</td><td>About 33%</td><td>About 31%</td></tr>
<tr><td>Diarrhea</td><td>About 7%</td><td>About 19%</td><td>About 21%</td><td>About 23%</td></tr>
<tr><td>Vomiting</td><td>About 2%</td><td>About 8%</td><td>About 11%</td><td>About 12%</td></tr>
<tr><td>Stopped because of side effects</td><td>About 3%</td><td>About 4%</td><td>About 7%</td><td>About 6%</td></tr>
</tbody>
</table>
<p>In STEP-1, about 44% of people on semaglutide 2.4 mg reported nausea at some point, compared with about 17% on placebo, and about 7% stopped treatment because of side effects, compared with about 3% on placebo.</p>
<p><strong>What these numbers do and do not mean:</strong></p>
<ul>
<li><strong>They are "ever" rates over more than a year.</strong> Reporting nausea once in 72 weeks is not the same as feeling sick all the time. In both trial programs, digestive side effects were concentrated in the dose-escalation period and became less common later.</li>
<li><strong>The steps up matter more than the final dose.</strong> Most people feel side effects in the days after an increase, then adapt. That is why slower escalation is the main tool for reducing them.</li>
<li><strong>Not every side effect is dose-related in a simple way.</strong> Fatigue, headache, reflux and dizziness were also reported, often linked to eating much less and drinking too little. Hair shedding has been reported during rapid weight loss of any kind.</li>
<li><strong>Serious risks are not a numbers game.</strong> Pancreatitis, gallbladder disease, kidney injury from dehydration and allergic reactions are uncommon, and anyone with warning signs needs medical care regardless of dose. The boxed warning about thyroid C-cell tumors seen in rodents applies to both drugs; they should not be used by people with a personal or family history of medullary thyroid carcinoma or MEN2.</li>
</ul>
<p>The trials used brand-name medication with careful dose escalation. If you take compounded medication, accurate measurement is part of side-effect prevention: an accidental overdose produces the same symptoms as a too-fast escalation, only more abruptly.</p>`,
      },
      {
        heading: "How do I switch from semaglutide to tirzepatide, or back?",
        body: `<p><strong>There is no official dose-conversion chart between semaglutide and tirzepatide, because the two drugs were never tested that way. Most clinicians start tirzepatide at 2.5 mg or 5 mg the week after a final semaglutide dose, depending on how well you tolerated semaglutide, and then titrate as usual. Switching the other way, semaglutide usually restarts low as well.</strong></p>
<p>People switch for good reasons: a plateau on semaglutide, side effects on one drug, a change in insurance coverage, or price. You will find "equivalent dose" tables online claiming, for example, that a certain semaglutide dose equals a certain tirzepatide dose. Treat them with caution. The drugs act on different receptors - tirzepatide works on both GIP and GLP-1 receptors - and no trial has validated a milligram-for-milligram conversion. SURMOUNT-5 compared the two at their highest tolerated doses; it did not establish equivalents.</p>
<p><strong>What a switch usually involves:</strong></p>
<ul>
<li><strong>Timing.</strong> Most clinicians start the new drug on the day your next weekly dose of the old drug would have been due. There is usually no need for a long washout, and taking both drugs together is not recommended.</li>
<li><strong>Starting dose.</strong> Starting tirzepatide at 2.5 mg is the most cautious option and follows the label. Some clinicians start at 5 mg for patients who tolerated a higher semaglutide dose well, to avoid a long period of reduced effect. This is a clinical judgment for your prescriber.</li>
<li><strong>Expect a transition period.</strong> If you step down to a starting dose, appetite may return somewhat for a few weeks. That does not mean the switch failed.</li>
<li><strong>New math.</strong> If you use compounded vials, your unit count will change completely. A semaglutide habit of "20 units" says nothing about tirzepatide. Recalculate from the new label.</li>
</ul>
<p><strong>Price is part of the decision.</strong> At most programs tirzepatide costs more than semaglutide: among the providers we rank, compounded semaglutide starts between $49 and $199 a month and compounded tirzepatide between $89 and $299. Two exceptions make switching cheaper: <a href="/reviews/directmeds">DirectMeds</a> charges $147 a month for either drug, and several programs, including <a href="/reviews/embody">embody</a> and <a href="/reviews/altrx">altRx</a>, charge one price at every dose of each drug, so a switch changes the bill only once. Our <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a> comparison covers who tends to do better on each.</p>`,
      },
      {
        heading: "How do I switch from a brand-name pen to compounded vials, or back?",
        body: `<p><strong>When you move between a brand-name pen and a compounded vial of the same drug, the milligram dose usually stays the same - what changes is how you measure it. A 1 mg Wegovy-step dose becomes 40 units from a 2.5 mg/mL compounded semaglutide vial, for example. Your clinician decides whether to continue at the same dose or step back.</strong></p>
<p><strong>Pen to vial - the usual reasons and steps.</strong> Most people switch to compounded medication for cost: manufacturer self-pay prices for brand-name Wegovy and Zepbound run from about $199 to $449 a month at most doses, while compounded programs start as low as $49. If your clinician keeps the same milligram dose:</p>
<ol>
<li>Confirm the exact dose in milligrams on your new prescription.</li>
<li>Read the concentration on the vial and calculate units with the formula (dose ÷ concentration × 100).</li>
<li>Check the result against the provider's written instructions and the charts in this guide.</li>
<li>Get the right syringe size and practice the drawing-up steps before injection day.</li>
<li>Take the first vial dose on the day your next pen dose would have been due.</li>
</ol>
<p><strong>Things that change besides the measuring.</strong> A compounded product is not the FDA-approved product, even at the same dose. It may contain additives, comes from a different manufacturing process, and has a pharmacy beyond-use date instead of a manufacturer expiration date. Many people notice no difference; some report that the medication feels slightly stronger or weaker. If your response changes noticeably, tell your clinician rather than adjusting the dose yourself.</p>
<p><strong>Vial to pen.</strong> Moving the other way usually happens when insurance approves Wegovy or Zepbound, or when someone wants only FDA-approved medication. The pens come only in fixed strengths, so if you were on an intermediate compounded dose - for example 1.25 mg semaglutide or 3.75 mg tirzepatide - your clinician will choose the nearest pen strength, often the one just below. Insurance approvals sometimes require you to restart at the starting dose; your prescriber can clarify.</p>
<p><strong>Where the two worlds meet.</strong> If you want the option to move between brand-name and compounded medication without changing providers, a program with both on one account helps. <a href="/reviews/altrx">altRx</a> and <a href="/reviews/wellmedr">wellmedr</a> list brand-name shelves alongside compounded plans, and <a href="/reviews/medvi">MEDVi</a> offers brand-name options through its clinicians; <a href="/reviews/ro">ro</a> prescribes brand-name medication only. See our <a href="/embody-vs-ro">embody vs ro</a> comparison for the clearest example of a compounded-first and a brand-only program side by side.</p>`,
      },
      {
        heading: "What GLP-1 dose should I take for maintenance after reaching my goal?",
        body: `<p><strong>The trial evidence supports continuing the dose that got you to your goal. When people in trials stopped treatment, most regained a large share of the weight they had lost. Some clinicians try a gradual reduction to the lowest dose that keeps weight stable, but that approach has much less trial evidence behind it, and it should be monitored closely.</strong></p>
<p>Two trials show what happens when the dose drops to zero:</p>
<ul>
<li><strong>STEP-1 extension:</strong> participants who stopped semaglutide 2.4 mg regained about two-thirds of the weight they had lost within a year.</li>
<li><strong>SURMOUNT-4:</strong> after 36 weeks of tirzepatide, participants switched to placebo regained about 14% of their body weight over the following year, while those who continued kept losing.</li>
</ul>
<p>What those trials do not test is the middle ground: stepping down from 2.4 mg to 1 mg, say, or from 15 mg to 5 mg, and holding there. In practice, clinicians use several strategies, each with trade-offs:</p>
<table>
<thead><tr><th>Maintenance approach</th><th>Evidence</th><th>Who it may suit</th></tr></thead>
<tbody>
<tr><td>Continue the same dose</td><td>Strongest - this is what the trials studied</td><td>Anyone for whom the dose is affordable and well tolerated</td></tr>
<tr><td>Step down gradually and monitor weight</td><td>Limited; based on clinical experience</td><td>People with side effects at full dose, or who want to use less medication</td></tr>
<tr><td>Stretch the interval between doses</td><td>Very limited; not how the labels are written</td><td>Only under close clinical supervision</td></tr>
<tr><td>Stop with a structured plan</td><td>Trials show substantial average regain</td><td>People who must stop - for pregnancy, side effects or cost - with a plan for diet, activity and follow-up</td></tr>
</tbody>
</table>
<p><strong>If you step down, track it.</strong> Weigh yourself at the same time of day once or twice a week, agree in advance on how much regain would trigger a return to the previous dose, and keep protein intake and resistance training in place - both help protect lean muscle, which supports long-term weight stability.</p>
<p><strong>Cost often drives maintenance decisions.</strong> If you want to lower your dose mainly to save money, check first whether your provider charges more at higher doses. At a flat-price program, a lower dose saves nothing per month, though it may stretch a vial further at programs that ship by quantity. Our article on <a href="/articles/stopping-glp1-maintenance">stopping a GLP-1 and maintenance</a> covers this phase in detail.</p>`,
      },
      {
        heading: "Will a higher GLP-1 dose make me lose weight faster?",
        body: `<p><strong>On average, higher maintenance doses produced more total weight loss in the trials, but racing up the schedule does not reliably speed things up and increases side effects. Weight loss on GLP-1s builds over many months, and most of the difference between doses shows up over a year or more, not in the first weeks.</strong></p>
<p>In SURMOUNT-1, the difference between tirzepatide 10 mg and 15 mg was about 1.4 percentage points of body weight after 72 weeks. In STEP-2, the gap between semaglutide 1 mg and 2.4 mg was a few percentage points over 68 weeks. Those are real differences over the long term - but they are not the kind of gap you would feel in a single month, and they come with more digestive side effects on average.</p>
<p><strong>Why faster escalation tends to backfire:</strong></p>
<ul>
<li><strong>Side effects scale with speed.</strong> The fastest route to nausea and vomiting is skipping steps or shortening them.</li>
<li><strong>Eating too little has costs.</strong> Very rapid loss can come with muscle loss, fatigue, dizziness, gallstones and hair shedding. A slower pace with adequate protein is easier to sustain.</li>
<li><strong>Stopping costs more than going slowly.</strong> In the trials, people who discontinued because of side effects lost the benefit entirely. A slower escalation that keeps you on treatment beats a fast one you abandon.</li>
</ul>
<p><strong>When a plateau is a dose question.</strong> Weight loss on GLP-1s typically slows and flattens after many months, as the body adapts. If you plateau well before your goal and you are not yet at the maximum dose, your clinician may suggest moving up a step. If you are at the maximum dose, the options are different: reviewing protein, calories and activity, considering a switch between semaglutide and tirzepatide, or accepting that you have reached your body's new set point on this treatment. Our <a href="/articles/stopping-glp1-maintenance">plateau and maintenance guide</a> covers those options.</p>
<p><strong>Never take more than prescribed.</strong> With a compounded vial, it is physically easy to draw extra units. It is also exactly how the overdoses described in the FDA's 2024 alert happened. If you want faster progress, ask your clinician about the next step; do not create one yourself.</p>`,
      },
      {
        heading: "Does the price of GLP-1 treatment go up with the dose?",
        body: `<p><strong>It depends on the provider. Five of the compounded programs we rank - embody, altRx, trimrx (for semaglutide), wellmedr and DirectMeds - publish the same price at every dose, so moving from a starting dose to maintenance does not raise your bill. Other programs publish starting prices that may change by plan, and brand-name medication costs depend on insurance or the manufacturer's self-pay price.</strong></p>
<p>Dose-tiered pricing is one of the least visible costs in GLP-1 treatment. A program that looks cheap at 0.25 mg semaglutide can cost much more by the time you reach 2.4 mg - and because escalation takes about four months, you may not notice until you are well into treatment. Here is how the programs we rank handle it, based on their published pricing:</p>
<table>
<thead><tr><th>Provider</th><th>Semaglutide</th><th>Tirzepatide</th><th>Same price at every dose?</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/embody">embody</a></td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Yes - flat pricing, month-to-month</td></tr>
<tr><td><a href="/reviews/ro">ro</a></td><td colspan="2">Brand-name only; $39 first month then $149/mo membership (or about $74/mo annual), medication billed separately</td><td>Medication cost depends on insurance or self-pay price</td></tr>
<tr><td><a href="/reviews/altrx">altRx</a></td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Yes - flat at every dose</td></tr>
<tr><td><a href="/reviews/trimrx">trimrx</a></td><td>$149/mo</td><td>$259/mo</td><td>Yes for semaglutide; confirm for tirzepatide</td></tr>
<tr><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$49/mo on a 12-month plan (about $88 month-to-month)</td><td>$89/mo</td><td>Yes - same price at every dose</td></tr>
<tr><td><a href="/reviews/medvi">MEDVi</a></td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>Not stated in the pricing we reviewed - ask</td></tr>
<tr><td><a href="/reviews/directmeds">DirectMeds</a></td><td>$147/mo</td><td>$147/mo</td><td>Yes - one price for either drug at every dose</td></tr>
<tr><td><a href="/reviews/shed">SHED</a></td><td>From $199/mo</td><td>From $299/mo</td><td>Starting prices; may vary by plan - ask</td></tr>
<tr><td><a href="/reviews/medgm">MEDGm</a></td><td colspan="2">Compounded GLP-1 injections from $169/mo; molecule not named in public pricing</td><td>Starting price - ask</td></tr>
</tbody>
</table>
<p><strong>Questions that reveal dose-based pricing:</strong></p>
<ul>
<li>"What will I pay per month at the maintenance dose - 2.4 mg semaglutide or 15 mg tirzepatide?"</li>
<li>"Is the price the same if my clinician increases my dose mid-cycle?"</li>
<li>"When the promo ends, what is the regular price at my dose?"</li>
<li>"If I need a larger or more concentrated vial, does that change the price?"</li>
</ul>
<p><strong>The dose and the promo can interact.</strong> altRx and MEDVi advertise promo prices roughly half their regular rates. Promos usually apply to your first period of treatment - which, because of titration, is also when your dose is lowest. Compare what you will pay in month six at maintenance dose, not month one at a starting dose. Our <a href="/articles/real-cost-of-glp1-weight-loss">real cost of GLP-1 weight loss</a> guide does that comparison line by line.</p>
<p>Prices change often; these are provider-published figures checked in fall 2026, so confirm at checkout.</p>`,
      },
      {
        heading: "How do online GLP-1 providers handle dose changes?",
        body: `<p><strong>Most online programs adjust your dose through check-ins: you report your weight, side effects and appetite through a form or message, and a licensed clinician approves the next step or keeps you where you are. The best programs make it easy to ask for a slower schedule, a step down, or a question answered between check-ins.</strong></p>
<p>The details vary more than people expect, and they directly affect your dosing experience:</p>
<ul>
<li><strong>How escalation is scheduled.</strong> Some programs send a pre-planned titration in one shipment - for example, a vial with enough medication for several steps and written instructions for each. Others ship one dose level at a time and require a check-in before each increase. The first is convenient; the second gives more oversight.</li>
<li><strong>How custom dosing works.</strong> <a href="/reviews/trimrx">trimrx</a> builds its program around individualized dosing with unlimited provider check-ins, which suits people who want to move in smaller steps or adjust often. Other programs follow the standard steps more closely.</li>
<li><strong>How fast clinicians respond.</strong> A dose question on injection day needs an answer that day. Ask how messaging works and what the typical response time is before you sign up.</li>
<li><strong>What happens at the top of the schedule.</strong> Ask whether higher doses need a new concentration, a new vial size or a price change.</li>
<li><strong>Who you talk to.</strong> At <a href="/reviews/medvi">MEDVi</a>, clinician visits come with dietitian access and coaching, which helps when side effects are really a diet issue. At <a href="/reviews/ro">ro</a>, unlimited provider messaging is part of the membership.</li>
</ul>
<p><strong>What to report at each check-in.</strong> Clinicians make better dose decisions with specific information. Include:</p>
<ol>
<li>Your weight trend over the last two to four weeks, not just today's number.</li>
<li>Your current dose in milligrams and the units you draw, so they can spot any measuring problem.</li>
<li>Side effects: what, how severe, how many days after the injection, and whether they are improving.</li>
<li>How much you are eating, especially protein and fluids.</li>
<li>Any new medications, illnesses or planned procedures.</li>
<li>What you want - to go up, to stay, or to go down - and why.</li>
</ol>
<p>A provider that answers dosing questions clearly and puts your unit count in writing is doing its job. One that pushes escalation on a fixed calendar regardless of your answers, or cannot tell you the concentration of the vial it is sending, is a warning sign. Our <a href="/how-we-rank">ranking methodology</a> weights clinical oversight and support for exactly this reason.</p>`,
      },
      {
        heading: "How do other medications and life events affect GLP-1 dosing?",
        body: `<p><strong>Several situations need a conversation with your clinician before your next dose: taking insulin or a sulfonylurea, using birth control pills while on tirzepatide, planning a pregnancy, having surgery or a procedure that needs anesthesia, and being ill with vomiting or diarrhea. In each case, the GLP-1 dose or the other medication may need adjusting.</strong></p>
<p><strong>Diabetes medications.</strong> GLP-1s on their own rarely cause low blood sugar. Combined with insulin or sulfonylureas (such as glipizide or glimepiride), they can. The labels note that the dose of those medications may need to be reduced when a GLP-1 is started or increased. If you have type 2 diabetes, your diabetes care team should know about any GLP-1 prescription, including one from an online program.</p>
<p><strong>Birth control pills and tirzepatide.</strong> The Zepbound and Mounjaro labels advise people using oral hormonal contraceptives to switch to a non-oral method, or add a barrier method, for four weeks after starting tirzepatide and for four weeks after each dose increase. Slower stomach emptying can reduce how well the pill is absorbed during those periods. This is one of the clearest examples of a side effect of dose escalation that is easy to miss.</p>
<p><strong>Pregnancy.</strong> GLP-1s should not be used during pregnancy. The Wegovy label advises stopping semaglutide at least two months before a planned pregnancy because of its long half-life. If you become pregnant or plan to, tell your prescriber promptly - they will advise on timing for your specific medication.</p>
<p><strong>Surgery, endoscopy and anesthesia.</strong> Because GLP-1s slow stomach emptying, there is a risk of food remaining in the stomach during sedation. Professional guidance on whether to hold a dose before procedures has changed over time. Tell your surgeon, anesthesiologist or endoscopy team that you take a GLP-1, including the dose and your injection day, and follow their instructions.</p>
<p><strong>Illness and dehydration.</strong> If you have a stomach bug, severe vomiting or diarrhea, or cannot keep fluids down, contact your clinician about whether to delay your next dose. Dehydration on top of GLP-1 side effects can stress the kidneys.</p>
<p><strong>Other oral medications.</strong> Slower stomach emptying can affect how quickly some oral drugs are absorbed. This matters most for medications where small changes in level are important. Give every prescriber - and the online program's clinician - a complete list of what you take.</p>
<p><strong>Alcohol.</strong> There is no labeled interaction that changes the dose, but alcohol adds to nausea, dehydration and, for people on diabetes medication, low-blood-sugar risk. Many patients find they want less of it on treatment anyway.</p>`,
      },
      {
        heading: "How is oral GLP-1 dosing different from injections?",
        body: `<p><strong>Oral GLP-1s are taken daily rather than weekly, use much higher milligram numbers than injections because most of the drug is not absorbed, and come with strict instructions about water, food and timing. The doses are not interchangeable with injectable doses, and oral compounded products do not follow the brand-name schedules.</strong></p>
<p>Semaglutide is a peptide, and the digestive system breaks most of it down before it can be absorbed. FDA-approved oral semaglutide gets around this with a special formulation, and only works well when it is taken exactly as directed. For Rybelsus, the oral semaglutide tablet approved for type 2 diabetes, the label instructions are to take it on an empty stomach first thing in the morning with no more than 4 ounces of plain water, and to wait at least 30 minutes before eating, drinking anything else or taking other oral medications. The Wegovy pill (oral semaglutide approved for weight management in December 2025) follows the same rules and steps up every 30 days from 1.5 mg to 4 mg, 9 mg and then 25 mg - numbers that bear no relationship to the 0.25 mg weekly injection.</p>
<p><strong>The key differences:</strong></p>
<table>
<thead><tr><th></th><th>Weekly injection</th><th>Daily oral pill</th></tr></thead>
<tbody>
<tr><td>How often</td><td>Once a week</td><td>Every day</td></tr>
<tr><td>Missed dose</td><td>Drug-specific windows of several days</td><td>Usually skip and take the next day; check the label</td></tr>
<tr><td>Food and water rules</td><td>None</td><td>Often strict - empty stomach, limited water, wait before eating</td></tr>
<tr><td>Milligram numbers</td><td>Small (0.25-2.4 mg semaglutide)</td><td>Larger, because absorption is low</td></tr>
<tr><td>Converting between them</td><td colspan="2">Not milligram-for-milligram - your clinician decides the equivalent step</td></tr>
</tbody>
</table>
<p><strong>Brand-name oral weight-loss options.</strong> Two GLP-1 pills are FDA-approved for weight management. The <strong>Wegovy pill</strong> (approved December 22, 2025) is taken with the fasting rules above. <strong>Foundayo</strong> (orforglipron, approved April 1, 2026) is a non-peptide pill with no food or water restrictions; it starts at 0.8 mg daily and steps up at least every 30 days through 2.5 mg and 5.5 mg, with higher steps of 9, 14.5 and 17.2 mg. <a href="/reviews/ro">ro</a> offers Foundayo. Each product has its own label, so never apply one pill's rules to another. Our <a href="/articles/new-weight-loss-drugs-2026">guide to the new weight-loss drugs of 2026</a> compares them in detail.</p>
<p><strong>Compounded oral and sublingual products.</strong> <a href="/reviews/embody">embody</a> offers a daily oral compounded option, and <a href="/reviews/directmeds">DirectMeds</a> offers sublingual drops - liquid held under the tongue - for both semaglutide and tirzepatide at the same $147 monthly price as its injections. These are not FDA-approved, and there is little published evidence on how consistently they are absorbed. Their dosing comes from the prescribing clinician and the pharmacy, so follow those instructions closely and ask how the dose relates to a weekly injection if you might switch later.</p>
<p><strong>Who oral dosing suits.</strong> People who will not start treatment because of needles. If you are comfortable with a weekly injection, it remains the most predictable and best-studied route, with the simplest dosing routine.</p>`,
      },
      {
        heading: "GLP-1 dosing terms explained",
        body: `<p><strong>These are the dosing terms you will see on prescriptions, vial labels and provider instructions, in plain English.</strong></p>
<ul>
<li><strong>Titration (dose escalation):</strong> the gradual increase from a starting dose to a maintenance dose, usually in four-week steps.</li>
<li><strong>Starting dose:</strong> the first, lowest dose - 0.25 mg semaglutide or 2.5 mg tirzepatide - used to build tolerance, not to produce full weight loss.</li>
<li><strong>Maintenance dose:</strong> the dose you stay on long-term once titration is complete - 2.4 mg (or 1.7 mg) for Wegovy, and 5, 10 or 15 mg for Zepbound.</li>
<li><strong>Maximum dose:</strong> the highest dose on the label - 2.4 mg for standard Wegovy (7.2 mg for Wegovy HD), 2 mg for Ozempic, 15 mg for Zepbound and Mounjaro.</li>
<li><strong>mg (milligram):</strong> the amount of drug. Your prescription dose is written in milligrams.</li>
<li><strong>mL (milliliter):</strong> the volume of liquid. 1 mL = 100 units on a U-100 syringe.</li>
<li><strong>Concentration (mg/mL):</strong> how much drug is in each milliliter of liquid. The single most important number on a compounded vial.</li>
<li><strong>Units:</strong> the markings on an insulin syringe. On a U-100 syringe, one unit is 0.01 mL. Units measure volume, not drug.</li>
<li><strong>U-100 syringe:</strong> the standard insulin syringe used for compounded GLP-1s; 100 units per mL.</li>
<li><strong>Subcutaneous (sub-Q):</strong> injected into the fatty layer just under the skin, not into a muscle or vein.</li>
<li><strong>Single-dose pen:</strong> a prefilled injector that delivers one fixed dose and is then discarded (Wegovy, Zepbound).</li>
<li><strong>Multi-dose pen:</strong> a pen that holds several doses selected with a dial (Ozempic).</li>
<li><strong>Multi-dose vial:</strong> a vial containing several weeks of compounded medication, drawn up with a syringe.</li>
<li><strong>Beyond-use date (BUD):</strong> the date after which a compounded medication should not be used, set by the pharmacy.</li>
<li><strong>Half-life:</strong> the time it takes for the level of drug in your body to fall by half - about a week for semaglutide and about five days for tirzepatide.</li>
<li><strong>Steady state:</strong> the point, about four to five weeks after a dose change, when weekly doses keep a roughly stable level in your body.</li>
<li><strong>Off-label:</strong> prescribing an approved drug for a use not on its label, such as Ozempic for weight loss.</li>
<li><strong>Dose-response:</strong> how the effect of a drug changes as the dose changes. For tirzepatide, SURMOUNT-1 showed more weight loss at 10 mg than 5 mg, and a smaller further gain at 15 mg.</li>
</ul>`,
      },
      {
        heading: "What should I ask my clinician about my GLP-1 dose?",
        body: `<p><strong>Before you start, ask for your full titration plan in milligrams and units, how to measure each dose, what to do if you miss one, and how to reach someone with a dosing question. At each check-in, ask whether to increase, hold or reduce - and why - based on your weight trend and side effects.</strong></p>
<p><strong>Before your first dose:</strong></p>
<ol>
<li>"What is my dose in milligrams for each of the next few months, and when does each step start?"</li>
<li>"What concentration will my vial be, and how many units is each dose?" (Ask for this in writing.)</li>
<li>"Which syringe size should I use, and will you send them?"</li>
<li>"What is the missed-dose rule for my medication?"</li>
<li>"How do I reach a clinician if I have a dosing question on injection day, and how fast do you usually reply?"</li>
<li>"Will the concentration or vial change when my dose goes up?"</li>
<li>"Does my price change at higher doses?"</li>
</ol>
<p><strong>At each check-in:</strong></p>
<ol>
<li>"Based on my progress, should I go up, stay or go down?"</li>
<li>"Are my side effects normal for this stage, or a reason to slow down?"</li>
<li>"Am I eating enough protein and fluids for this dose?"</li>
<li>"Do any of my other medications need adjusting?"</li>
</ol>
<p><strong>Later in treatment:</strong></p>
<ol>
<li>"Is this the right long-term maintenance dose for me?"</li>
<li>"If I want to lower the dose or stop, what is the plan, and how will we watch for regain?"</li>
<li>"Would switching drugs make sense if I plateau?"</li>
</ol>
<p><strong>The bottom line.</strong> GLP-1 dosing looks complicated mainly because of the gap between milligrams and syringe units. Close that gap - read the concentration, use the formula, use the right syringe, write it down - and the rest follows a simple logic: start low, step up no faster than every four weeks, stop climbing when you are making steady progress, and never take more than prescribed. The best dose is the one that keeps you on treatment, losing steadily, with side effects you can manage. If you are still choosing a program, our <a href="/">2026 ranking</a> compares the nine online GLP-1 providers we review on price at every dose, clinical support and delivery, and the <a href="/articles/online-glp1-weight-loss-guide">complete guide to online GLP-1 weight loss</a> covers everything else.</p>
${DISCLAIMER}`,
      },
    ],
  },
  {
    slug: "online-glp1-weight-loss-guide",
    title: "The Complete Guide to Online GLP-1 Weight Loss (2026)",
    description:
      "How online GLP-1 weight loss works in 2026: who qualifies, compounded vs brand-name, real prices from 9 providers, trial results, side effects and safety.",
    category: "Guides",
    readTime: "55 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    heroColor: "#E8F1FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Wegovy (semaglutide) and Zepbound (tirzepatide) are FDA-approved for chronic weight management in adults with a BMI of 30 or more, or 27 or more with a weight-related condition; compounded semaglutide and tirzepatide are not FDA-approved.",
      "Average weight loss in trials was about 15% at 68 weeks on semaglutide 2.4 mg (STEP-1) and about 20.9% at 72 weeks on tirzepatide 15 mg (SURMOUNT-1); in the SURMOUNT-5 head-to-head trial, tirzepatide averaged about 20.2% vs 13.7% for semaglutide.",
      "Across the 9 online providers we rank, compounded semaglutide starts between $49/mo (wellmedr, 12-month plan) and $199/mo (SHED), and compounded tirzepatide between $89/mo and $299/mo; manufacturer self-pay prices for brand-name Wegovy, Zepbound and the GLP-1 pills run from $149 to $449 a month at most doses (October 2026).",
      "In the STEP-1 extension, people who stopped semaglutide regained about two-thirds of the weight they had lost within a year.",
    ],
    sections: [
      {
        heading: "What is online GLP-1 weight loss?",
        body: `<p><strong>Online GLP-1 weight loss is a telehealth service in which a licensed clinician reviews your health information remotely and, if appropriate, prescribes a GLP-1 medication such as semaglutide or tirzepatide that is shipped to your door. You never have to sit in a waiting room, but you still need a real prescription from a real clinician.</strong></p>
<p>The model has grown quickly because it solves three practical problems at once. First, access: many people do not have a primary care doctor who is comfortable prescribing weight-loss medication, or they face weeks-long waits for an appointment. Second, price: online programs that use compounded medication still charge considerably less than brand-name self-pay prices, though the gap narrowed sharply in 2026. Third, convenience: intake, follow-up, dose changes and refills all happen through a website or app.</p>
<p>This guide is the long version of everything we have learned reviewing these services. It covers how the medications work, who qualifies, the difference between compounded and brand-name products, what treatment really costs in 2026, what results the clinical trials actually showed, the side effects to plan for, and how to tell a trustworthy provider from a risky one. We compare the nine programs we currently rank - <a href="/reviews/embody">embody</a>, <a href="/reviews/ro">ro</a>, <a href="/reviews/altrx">altRx</a>, <a href="/reviews/trimrx">trimrx</a>, <a href="/reviews/wellmedr">wellmedr</a>, <a href="/reviews/medvi">MEDVi</a>, <a href="/reviews/directmeds">DirectMeds</a>, <a href="/reviews/shed">SHED</a> and <a href="/reviews/medgm">MEDGm</a> - using their published prices and current Trustpilot data. If you only want the ranking, it lives on our <a href="/">homepage</a>; if you want to understand the decision, keep reading.</p>
<p><strong>Online vs in-person care.</strong> Getting a GLP-1 online is not automatically better or worse than seeing a doctor in person; it is a different set of trade-offs. Telehealth is usually faster, more convenient and - for cash-pay compounded medication - much cheaper. An in-person doctor can examine you, may already know your history, and can coordinate GLP-1 treatment with your other conditions more easily. Many people combine the two: they keep their regular doctor informed while an online program handles prescribing and delivery. If you have complex medical conditions, take several prescription medications or have had problems with previous weight-loss drugs, involving your regular clinician is especially worthwhile.</p>
<p>One ground rule runs through every section: no provider can guarantee results, compounded GLP-1s are not FDA-approved, and a licensed clinician - not a website, and not this guide - decides whether a GLP-1 is right for you.</p>`,
      },
      {
        heading: "What is a GLP-1 medication?",
        body: `<p><strong>A GLP-1 medication is a drug that mimics glucagon-like peptide-1, a hormone your gut releases after you eat. By acting on the same receptors, these drugs reduce appetite, increase fullness and help regulate blood sugar.</strong></p>
<p>The technical name for the class is <strong>GLP-1 receptor agonists</strong>. "Agonist" simply means the drug switches on a receptor rather than blocking it. The natural hormone is broken down within minutes, which is why it cannot be used as a medicine. The drugs used for weight management are engineered to last much longer - long enough to be taken once a week as an injection, or once a day as a pill.</p>
<p>Two molecules dominate online weight-loss care in 2026:</p>
<ul>
<li><strong>Semaglutide</strong> - a GLP-1 receptor agonist. Its brand names are <strong>Wegovy</strong> (approved for chronic weight management) and <strong>Ozempic</strong> (approved for type 2 diabetes).</li>
<li><strong>Tirzepatide</strong> - a dual agonist that acts on the GLP-1 receptor and a second gut-hormone receptor called GIP (glucose-dependent insulinotropic polypeptide). Its brand names are <strong>Zepbound</strong> (approved for chronic weight management) and <strong>Mounjaro</strong> (approved for type 2 diabetes).</li>
</ul>
<p>People often use "GLP-1" as shorthand for both, and so does this guide. Strictly speaking, tirzepatide is a GIP/GLP-1 drug, and that second mechanism is one reason it produced more average weight loss in head-to-head research - more on that in the semaglutide vs tirzepatide section below.</p>
<p>Online programs sell these molecules in two forms. <strong>Brand-name</strong> products are manufactured by the drug company and sold in fixed-dose pens or tablets. <strong>Compounded</strong> versions are prepared by licensed pharmacies, usually as vials you draw up with a syringe, and are not FDA-approved. Some services also offer compounded oral tablets or sublingual drops. Which form you get shapes your price, your paperwork and the level of regulatory oversight behind the product.</p>`,
      },
      {
        heading: "How do GLP-1 medications cause weight loss?",
        body: `<p><strong>GLP-1 medications mainly work by making you less hungry and full sooner, so you eat less without relying purely on willpower. They act on appetite centers in the brain and slow the rate at which food leaves the stomach.</strong></p>
<p>The effects people describe most often fall into four groups:</p>
<ul>
<li><strong>Lower appetite.</strong> Signals from the drug reach areas of the brain involved in hunger and reward. Many patients notice that "food noise" - constant thoughts about the next meal or snack - quiets down.</li>
<li><strong>Earlier fullness.</strong> Slower stomach emptying means a smaller portion feels like enough, and the feeling of fullness lasts longer after a meal.</li>
<li><strong>Fewer cravings.</strong> Many people report that cravings for very sweet, fatty or salty foods become easier to ignore, though this varies from person to person.</li>
<li><strong>Better blood sugar control.</strong> The drugs help the pancreas release insulin when blood sugar is high, which is why the same molecules are also used to treat type 2 diabetes.</li>
</ul>
<p>The weight loss itself still comes from eating less energy than you burn. The difference is that the medication changes the biology that usually fights back when people diet - the rising hunger and preoccupation with food that make most calorie-restricted diets hard to sustain.</p>
<p>That mechanism also explains the two most important practical facts about these drugs. Side effects are mostly digestive, because the gut is where the drug does much of its work. And the effect tends to fade when you stop, because appetite signals return once the medication leaves your system. Both points get their own sections below.</p>`,
      },
      {
        heading: "Which GLP-1 medications are FDA-approved for weight loss?",
        body: `<p><strong>Among the GLP-1 medications sold through the online programs we review, Wegovy (semaglutide) and Zepbound (tirzepatide) are the injections FDA-approved specifically for chronic weight management, joined since late 2025 by two daily pills - the Wegovy pill and Foundayo (orforglipron). Ozempic and Mounjaro contain the same active ingredients but are approved for type 2 diabetes.</strong></p>
<table>
<thead><tr><th>Brand</th><th>Active ingredient</th><th>FDA-approved use</th><th>Form</th></tr></thead>
<tbody>
<tr><td>Wegovy</td><td>Semaglutide</td><td>Chronic weight management</td><td>Weekly injection pen</td></tr>
<tr><td>Zepbound</td><td>Tirzepatide</td><td>Chronic weight management</td><td>Weekly injection</td></tr>
<tr><td>Ozempic</td><td>Semaglutide</td><td>Type 2 diabetes</td><td>Weekly injection pen</td></tr>
<tr><td>Mounjaro</td><td>Tirzepatide</td><td>Type 2 diabetes</td><td>Weekly injection</td></tr>
<tr><td>Wegovy HD</td><td>Semaglutide 7.2 mg</td><td>Chronic weight management (approved March 2026)</td><td>Weekly injection</td></tr>
<tr><td>Wegovy pill</td><td>Oral semaglutide 25 mg</td><td>Chronic weight management (approved December 2025)</td><td>Daily pill with fasting rules</td></tr>
<tr><td>Foundayo</td><td>Orforglipron</td><td>Chronic weight management (approved April 2026)</td><td>Daily pill, no food or water rules</td></tr>
<tr><td>Compounded semaglutide or tirzepatide</td><td>Semaglutide or tirzepatide</td><td>Not FDA-approved for any use</td><td>Vials, oral tablets or sublingual drops, depending on the pharmacy</td></tr>
</tbody>
</table>
<p>Ozempic and Mounjaro are sometimes prescribed "off-label" for weight loss, which is legal when a clinician judges it appropriate, but insurers are far less likely to pay for them when there is no diabetes diagnosis. Brand-name oral options also exist: <a href="/reviews/ro">ro</a>, for example, offers Foundayo as an oral pill alongside Wegovy, Zepbound and Ozempic.</p>
<p>The key line to remember is the last row. Compounded semaglutide and tirzepatide use the same active ingredients, but the finished products have not been reviewed or approved by the FDA. A website that calls its compounded product "FDA-approved" is making a claim regulators have specifically challenged - see our section on spotting a legitimate provider.</p>`,
      },
      {
        heading: "Who is eligible for a GLP-1 prescription?",
        body: `<p><strong>Under the FDA labels for Wegovy and Zepbound, adults generally qualify with a body mass index (BMI) of 30 or higher, or a BMI of 27 or higher plus at least one weight-related health condition. A licensed clinician makes the final decision after reviewing your full history.</strong></p>
<p>Weight-related conditions commonly considered include high blood pressure, type 2 diabetes, abnormal cholesterol and obstructive sleep apnea. Online programs ask about these during intake, along with your current medications, past surgeries, pregnancy plans and family history.</p>
<p><strong>How to calculate your BMI.</strong> BMI is your weight in kilograms divided by your height in meters squared. In US units, multiply your weight in pounds by 703, then divide by your height in inches squared. For example, someone who is 5 feet 6 inches (66 inches) and weighs 186 pounds has a BMI of about 30: 186 x 703 = 130,758, and 130,758 / 4,356 = 30.0. Most intake forms calculate it for you.</p>
<p>A few practical notes on eligibility online:</p>
<ul>
<li><strong>You will be asked to confirm your weight.</strong> Many programs request a recent photo or a scale reading, and some ask for a photo ID. This protects you as much as them - prescribing to someone who does not meet criteria is a red flag.</li>
<li><strong>Compounded programs usually follow the same BMI thresholds.</strong> The labels formally apply to the brand-name products, but responsible clinicians use them as the benchmark for compounded prescriptions too.</li>
<li><strong>Lab work is not always required up front.</strong> Some services order labs only when clinically indicated - <a href="/reviews/ro">ro</a> describes its approach that way. If you have a history that warrants testing, a careful clinician will ask for it.</li>
<li><strong>Insurance criteria can be stricter.</strong> A plan may require documented weight-related conditions or previous weight-loss attempts before it approves coverage.</li>
</ul>
<p>Meeting the BMI threshold does not mean a GLP-1 is automatically right for you, and falling slightly short does not mean a clinician will never consider one. That judgment belongs to the prescriber.</p>`,
      },
      {
        heading: "Who should not take a GLP-1?",
        body: `<p><strong>GLP-1 medications are not used by people with a personal or family history of medullary thyroid carcinoma (MTC) or multiple endocrine neoplasia syndrome type 2 (MEN2), and they are not for use during pregnancy. Several other conditions call for extra caution and a frank conversation with your clinician.</strong></p>
<p>Semaglutide and tirzepatide carry an FDA <strong>boxed warning</strong> - the agency's most prominent label warning - because the drugs caused thyroid C-cell tumors in rodents. It is not known whether they cause these tumors in humans, but the warning is why the MTC and MEN2 history questions appear on every legitimate intake form.</p>
<p>Tell the prescribing clinician about any of the following before you start:</p>
<ul>
<li><strong>Pregnancy, breastfeeding or plans to conceive.</strong> GLP-1s are not for use in pregnancy, and your clinician will advise when to stop if you are planning one.</li>
<li><strong>A history of pancreatitis.</strong> Pancreatitis is a rare but serious risk associated with the class.</li>
<li><strong>Gallbladder disease.</strong> Gallbladder problems, including gallstones, have been reported with these drugs, and rapid weight loss itself raises the risk.</li>
<li><strong>Kidney disease.</strong> Vomiting and diarrhea can cause dehydration, which can injure the kidneys.</li>
<li><strong>Diabetes treated with insulin or a sulfonylurea.</strong> Combining these with a GLP-1 raises the risk of low blood sugar, so doses may need adjusting.</li>
<li><strong>Severe digestive conditions or a history of an eating disorder.</strong> These do not automatically rule treatment out, but they change how a clinician weighs the risks.</li>
<li><strong>Upcoming surgery.</strong> Because the drugs slow stomach emptying, let your surgical team know you take one.</li>
</ul>
<p>If an online intake does not ask about thyroid cancer history, pregnancy and your other medications, treat that as a reason to look elsewhere. The questions exist because these are the situations where the medication can do harm.</p>`,
      },
      {
        heading: "How does online GLP-1 treatment work, step by step?",
        body: `<p><strong>Most online GLP-1 programs follow the same path: an online health questionnaire, a review by a licensed clinician, a prescription sent to a pharmacy, home delivery, and ongoing check-ins while your dose is increased.</strong> The details differ by provider, but the sequence looks like this:</p>
<ol>
<li><strong>Choose a program and medication type.</strong> Decide first whether you want brand-name medication (possibly through insurance) or compounded medication (cash-pay). That one decision narrows the field more than any other.</li>
<li><strong>Complete the intake.</strong> Expect questions about your height, weight, medical conditions, medications, allergies, previous weight-loss treatment, pregnancy status and family history of thyroid cancer. Answer honestly - the questions are there to keep you safe.</li>
<li><strong>Verify your identity and weight.</strong> Many services ask for a photo ID and a current photo or scale reading.</li>
<li><strong>Clinician review.</strong> A licensed clinician reviews your answers. Some programs are fully asynchronous (written questions and messaging, no live call); others add a video visit when something needs clarifying. <a href="/reviews/trimrx">trimrx</a>, for example, uses an async questionnaire with no appointment needed, while <a href="/reviews/altrx">altRx</a> and <a href="/reviews/ro">ro</a> offer video when needed.</li>
<li><strong>Insurance step (brand-name only).</strong> If you are using coverage, the provider checks your benefits and may submit a prior authorization. This can add days or weeks. Compounded programs skip this step.</li>
<li><strong>Prescription and pharmacy.</strong> If approved, the prescription goes to a pharmacy - a retail or mail-order pharmacy for brand-name products, or a state-licensed compounding pharmacy for compounded ones.</li>
<li><strong>Delivery.</strong> Medication ships to your home. Published timelines among the programs we track range from often next-day (trimrx) and 1-2 days (embody, DirectMeds) to 3-5 business days (wellmedr) and 5-7 days (altRx).</li>
<li><strong>Start low and step up.</strong> You begin on a low starting dose. Your clinician raises it gradually - commonly about every four weeks - based on how you tolerate it.</li>
<li><strong>Check in and adjust.</strong> Report side effects and progress through messaging or scheduled check-ins. Doses can be held, slowed or reduced.</li>
<li><strong>Refill and review.</strong> Refills arrive on a monthly or four-weekly cycle. Over time, you and your clinician decide on a maintenance plan.</li>
</ol>
<p>From intake to first dose usually takes days rather than weeks for cash-pay compounded programs. Brand-name treatment through insurance can take longer because of the authorization process.</p>`,
      },
      {
        heading: "Is it legal and safe to get a GLP-1 prescription online?",
        body: `<p><strong>Yes - getting a GLP-1 prescription through telehealth is legal in the US when a clinician licensed in your state evaluates you and issues a valid prescription. Safety depends on the quality of the medical review, the pharmacy that fills the prescription, and whether the product is brand-name or compounded.</strong></p>
<p>GLP-1 medications are prescription drugs, but they are not controlled substances, so a remote evaluation is a recognized way to prescribe them. What makes an online program trustworthy is not that it is online - it is whether it behaves like a careful medical practice:</p>
<ul>
<li>A licensed clinician reviews your history and can decline to prescribe.</li>
<li>The intake screens for contraindications such as MTC or MEN2 history and pregnancy.</li>
<li>Medication comes from a state-licensed pharmacy that the provider is willing to name.</li>
<li>You can reach the care team about side effects between refills.</li>
<li>Marketing is honest about whether the medication is compounded or brand-name.</li>
</ul>
<p>Independent verification helps. <a href="/reviews/embody">embody</a>, for instance, is LegitScript-certified, a third-party certification used by payment processors and ad platforms to vet healthcare businesses. Customer review volume can also reveal patterns: MEDVi and DirectMeds each have more than 14,000 Trustpilot reviews, which makes their scores harder to skew than a handful of testimonials.</p>
<p>The biggest safety variable is the product itself. Brand-name GLP-1s went through large clinical trials and FDA manufacturing oversight. Compounded versions did not, which does not make them automatically unsafe, but it does mean you are relying on the pharmacy's quality controls rather than the FDA's review. The next three sections unpack that trade-off.</p>`,
      },
      {
        heading: "What is the difference between compounded and brand-name GLP-1s?",
        body: `<p><strong>Brand-name GLP-1s are manufactured by the drug company, FDA-approved and sold in standardized pens or tablets. Compounded GLP-1s are prepared by licensed pharmacies with the same active ingredient, cost far less, and are not FDA-approved or FDA-reviewed for safety, effectiveness or quality.</strong></p>
<table>
<thead><tr><th>Factor</th><th>Brand-name (Wegovy, Zepbound, Ozempic, Mounjaro)</th><th>Compounded semaglutide or tirzepatide</th></tr></thead>
<tbody>
<tr><td>FDA approval</td><td>Yes - Wegovy and Zepbound for weight management</td><td>No - not reviewed by the FDA for safety, effectiveness or quality</td></tr>
<tr><td>Who makes it</td><td>The manufacturer, under FDA manufacturing oversight</td><td>A state-licensed compounding pharmacy (often a 503A pharmacy)</td></tr>
<tr><td>Clinical trial evidence</td><td>STEP and SURMOUNT trials used these products</td><td>Not the products tested in those trials</td></tr>
<tr><td>Typical form</td><td>Prefilled pen or tablet</td><td>Vial and syringe; some offer oral tablets or sublingual drops</td></tr>
<tr><td>Self-pay price</td><td>About $149-$449 a month at most doses (manufacturer self-pay, October 2026)</td><td>$49-$199 a month for semaglutide; $89-$299 for tirzepatide</td></tr>
<tr><td>Insurance</td><td>May be covered, often with prior authorization</td><td>Almost always cash-pay; HSA/FSA often usable</td></tr>
<tr><td>Dose flexibility</td><td>Fixed pen strengths</td><td>Can be customized by the prescriber</td></tr>
<tr><td>Regulatory status</td><td>Stable</td><td>Restricted since the shortages ended; rules still evolving</td></tr>
</tbody>
</table>
<p>The brand-name prices above are the manufacturers' own self-pay prices as of October 2026: Wegovy $199-$349 a month (Wegovy HD about $399) and the Wegovy pill $149-$299 at NovoCare Pharmacy; Zepbound $299-$449 with on-time refills and Foundayo $149-$349 at LillyDirect. Some telehealth brand shelves charge more, so compare before you buy. The compounded range spans the compounded programs we rank.</p>
<p>Neither option is "the right one" for everyone. If you have insurance that covers Wegovy or Zepbound, or you want only FDA-approved medication, brand-name is the clear choice. If you are paying cash and brand-name prices are out of reach, compounded medication from a reputable provider is the route many people take - with eyes open about what FDA approval does and does not cover. For a deeper look at what the price gap buys, read <a href="/articles/compounded-vs-brand-name-glp1">compounded vs brand-name GLP-1s</a>.</p>`,
      },
      {
        heading: "Is compounded semaglutide safe?",
        body: `<p><strong>Compounded semaglutide is not FDA-approved, so its safety, effectiveness and quality have not been verified by the FDA. Many people use it without problems, but the risk depends heavily on the pharmacy that makes it and the clinician who supervises it.</strong></p>
<p>The same is true of compounded tirzepatide. The active ingredient is the same molecule as in the brand-name product, but three things are different, and they are the source of most of the risk:</p>
<ul>
<li><strong>No pre-market FDA review.</strong> The FDA does not evaluate compounded drugs before they reach patients, so there is no independent confirmation that each batch contains exactly what the label says.</li>
<li><strong>Variable sourcing and quality control.</strong> Quality depends on where the pharmacy gets its active ingredient and how rigorously it tests. State boards regulate 503A pharmacies, but standards and inspections vary.</li>
<li><strong>Dosing in units, not clicks.</strong> Compounded vials are usually drawn up with an insulin-style syringe. Concentrations differ between pharmacies, so a dose in "units" from one pharmacy may not match another. Dosing mistakes are a known hazard - always confirm the concentration and your dose in milligrams with your clinician.</li>
</ul>
<p>What lowers the risk is choosing a provider that is transparent: it names the licensed pharmacy, ships cold-chain packed, gives clear dosing instructions, and never claims its compounded product is FDA-approved. The provider's clinicians should screen you as carefully as they would for a brand-name prescription and stay reachable when side effects show up.</p>
<p>If the uncertainty is a deal-breaker for you, that is a reasonable position - brand-name medication, possibly through insurance, is the alternative. <a href="/reviews/ro">ro</a> sells only FDA-approved brand-name GLP-1s for exactly that audience.</p>`,
      },
      {
        heading: "What changed when the FDA ended the GLP-1 shortages?",
        body: `<p><strong>The FDA declared the tirzepatide shortage resolved in December 2024 and the semaglutide shortage resolved in February 2025. After the grace periods ended, mass compounding of "essentially copies" of these drugs became restricted, though 503A pharmacies may still compound for an individual patient's documented clinical need.</strong></p>
<p>During the shortages, federal law allowed pharmacies to compound copies of drugs in short supply, which is how the online compounded GLP-1 market took off. Once the FDA removed semaglutide and tirzepatide from its shortage list, that justification went away. In practice, compounding now generally needs to rest on a patient-specific reason - for example, a dose that the commercial pens do not offer, or a different formulation that a clinician documents as medically necessary.</p>
<p>What this means for you as a patient:</p>
<ul>
<li><strong>Compounded GLP-1s are still widely sold online,</strong> and the programs we review continue to offer them. Providers say their prescriptions meet the current requirements; how regulators view specific practices is still being worked out.</li>
<li><strong>Custom dosing has become more central.</strong> Programs such as <a href="/reviews/trimrx">trimrx</a> build around individualized dosing, which aligns with the patient-specific basis for compounding.</li>
<li><strong>Enforcement is active.</strong> The FDA has sent warning letters to companies over how they market compounded GLP-1s. One went to <a href="/reviews/altrx">altRx</a>'s parent company in June 2026 (details below).</li>
<li><strong>Things can change.</strong> Access, formulations and prices can shift with new guidance or enforcement. Ask your provider how its prescriptions comply with current rules and what would happen to your treatment if they changed.</li>
</ul>
<p>We are not lawyers and this is not legal advice. The honest summary is that compounded GLP-1s remain available, but they sit in a more tightly regulated space than they did in 2024, and that space is still evolving.</p>`,
      },
      {
        heading: "Semaglutide vs tirzepatide: which works better?",
        body: `<p><strong>On average, tirzepatide produces more weight loss. In the SURMOUNT-5 head-to-head trial (NEJM, 2025), people on tirzepatide lost about 20.2% of their body weight at 72 weeks, compared with about 13.7% on semaglutide. Semaglutide is cheaper and has the longer track record, and many people do very well on it.</strong></p>
<table>
<thead><tr><th>Factor</th><th>Semaglutide</th><th>Tirzepatide</th></tr></thead>
<tbody>
<tr><td>How it works</td><td>GLP-1 receptor agonist</td><td>Dual GIP and GLP-1 receptor agonist</td></tr>
<tr><td>Brand names</td><td>Wegovy (weight), Ozempic (diabetes)</td><td>Zepbound (weight), Mounjaro (diabetes)</td></tr>
<tr><td>Key trial result</td><td>About 15% average loss at 68 weeks (STEP-1, 2.4 mg)</td><td>About 20.9% average loss at 72 weeks (SURMOUNT-1, 15 mg)</td></tr>
<tr><td>Head-to-head (SURMOUNT-5)</td><td>About 13.7% at 72 weeks</td><td>About 20.2% at 72 weeks</td></tr>
<tr><td>Common side effects</td><td>Nausea, diarrhea, constipation, reflux, fatigue</td><td>Similar profile</td></tr>
<tr><td>Boxed warning</td><td>Thyroid C-cell tumors in rodents</td><td>Same</td></tr>
<tr><td>Compounded price range on our list</td><td>$49-$199/mo</td><td>$89-$299/mo</td></tr>
<tr><td>Brand-name self-pay (manufacturer, Oct 2026)</td><td>Wegovy $199-$349/mo; Wegovy HD about $399/mo; Wegovy pill $149-$299/mo</td><td>Zepbound $299-$449/mo with on-time refills</td></tr>
</tbody>
</table>
<p>A few decision rules we find useful:</p>
<ul>
<li><strong>If you want the strongest average result</strong> and can afford the difference, tirzepatide has the better head-to-head data.</li>
<li><strong>If budget is tight,</strong> compounded semaglutide is usually $40-$110 a month cheaper at the same provider, and the STEP-1 average of about 15% is still substantial.</li>
<li><strong>If your insurance covers only one of them,</strong> the covered drug almost always wins on value.</li>
<li><strong>If you want one price whichever you choose,</strong> <a href="/reviews/directmeds">DirectMeds</a> charges $147 a month for either, so switching later does not change your bill.</li>
<li><strong>If you stall or struggle with side effects on one,</strong> your clinician may suggest trying the other.</li>
</ul>
<p>Remember that trial averages hide wide individual variation, and the trials used brand-name medication alongside diet and activity support. We go deeper on tolerability and cost in <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>, and every dose step - in milligrams and syringe units - is in our <a href="/articles/glp1-dosage-guide">GLP-1 dosage guide</a>.</p>`,
      },
      {
        heading: "Oral vs injectable GLP-1s: which is better?",
        body: `<p><strong>Weekly injections are the best-studied way to take a GLP-1 for weight loss and are what most online programs prescribe. Oral pills and sublingual drops suit people who dislike needles, but they work differently and, for compounded versions, have far less independent evidence behind them.</strong></p>
<p>Your options online in 2026 fall into four groups:</p>
<ul>
<li><strong>Brand-name injections</strong> - Wegovy, Zepbound, Ozempic and Mounjaro. These are the products used in the major STEP and SURMOUNT trials.</li>
<li><strong>Brand-name oral pills</strong> - FDA-approved oral options exist; <a href="/reviews/ro">ro</a> offers Foundayo as an oral pill.</li>
<li><strong>Compounded injections</strong> - the most common format at compounded programs, supplied in vials with syringes.</li>
<li><strong>Compounded oral and sublingual formats</strong> - <a href="/reviews/embody">embody</a> offers a daily oral compounded option, and <a href="/reviews/directmeds">DirectMeds</a> offers sublingual drops (placed under the tongue) for both semaglutide and tirzepatide at the same $147 monthly price as its injections.</li>
</ul>
<p>Why injections remain the default: GLP-1 drugs are peptides, which the digestive system tends to break down. Injected doses bypass that problem and absorb predictably, which is why a single weekly shot works. Oral products need special formulation to survive digestion and are typically taken daily, often with specific instructions about timing and food. Brand-name oral products were engineered and tested for this; for compounded tablets and drops, there is little published evidence on how consistently they are absorbed.</p>
<table>
<thead><tr><th>Format</th><th>Typical schedule</th><th>Evidence base</th><th>Best for</th></tr></thead>
<tbody>
<tr><td>Brand-name injection</td><td>Weekly</td><td>Large clinical trials</td><td>Anyone wanting the most-studied option</td></tr>
<tr><td>Brand-name oral pill</td><td>Daily</td><td>Manufacturer trials for the approved product</td><td>Needle-averse patients wanting FDA-approved medication</td></tr>
<tr><td>Compounded injection</td><td>Weekly</td><td>Same molecule as trials, but not the tested product</td><td>Cash-pay patients comfortable with vials and syringes</td></tr>
<tr><td>Compounded oral or sublingual</td><td>Usually daily</td><td>Limited published evidence</td><td>Needle-averse cash-pay patients, after discussing it with a clinician</td></tr>
</tbody>
</table>
<p><strong>Our rule of thumb:</strong> if needles are the only thing stopping you from starting treatment, an oral or sublingual option is worth discussing with your clinician. If you are comfortable with a small weekly injection, it remains the most predictable route. Either way, compounded oral products are not FDA-approved.</p>`,
      },
      {
        heading: "What results can I expect on a GLP-1?",
        body: `<p><strong>In the major clinical trials, average weight loss was about 15% of body weight at 68 weeks on semaglutide 2.4 mg (STEP-1) and about 20.9% at 72 weeks on tirzepatide 15 mg (SURMOUNT-1). Your own results may be higher or lower - individual responses vary widely, and no provider can guarantee an outcome.</strong></p>
<p>Here is what the headline studies found and what they mean in practice:</p>
<table>
<thead><tr><th>Trial</th><th>Medication</th><th>Duration</th><th>Average weight loss</th></tr></thead>
<tbody>
<tr><td>STEP-1 (NEJM, 2021)</td><td>Semaglutide 2.4 mg weekly</td><td>68 weeks</td><td>About 15%</td></tr>
<tr><td>SURMOUNT-1 (NEJM, 2022)</td><td>Tirzepatide 15 mg weekly</td><td>72 weeks</td><td>About 20.9%</td></tr>
<tr><td>SURMOUNT-5 (NEJM, 2025)</td><td>Tirzepatide vs semaglutide, head-to-head</td><td>72 weeks</td><td>About 20.2% vs 13.7%</td></tr>
</tbody>
</table>
<p>To translate percentages into pounds: 15% of 220 pounds is 33 pounds, and 20% is 44 pounds. Those are averages over well over a year, at the highest doses studied, in people who also received diet and activity counseling.</p>
<p>Context that matters when you set expectations:</p>
<ul>
<li><strong>Averages include a spread.</strong> Some participants lost far more than average; some lost much less. A minority respond only modestly to either drug.</li>
<li><strong>The trials used brand-name products.</strong> Compounded versions were not tested in these studies, so the figures describe Wegovy- and Zepbound-equivalent treatment, not any specific compounded product.</li>
<li><strong>Doses were stepped up over months.</strong> The headline results reflect participants who reached the maintenance doses. People who stay on lower doses because of side effects or cost may see smaller changes.</li>
<li><strong>Lifestyle support was part of the protocol.</strong> Trial participants received counseling on diet and physical activity alongside the medication.</li>
<li><strong>Weight loss levels off.</strong> In these trials, loss was fastest in the first months and flattened toward a plateau rather than continuing indefinitely.</li>
</ul>
<p>Weight is not the only outcome people notice. Many report changes in appetite and their relationship with food within the first weeks. Health markers such as blood sugar and blood pressure often improve with weight loss, which is part of why clinicians treat obesity as a chronic medical condition rather than a cosmetic one.</p>
<p>Be wary of any program that promises a specific number of pounds by a specific date. <a href="/reviews/shed">SHED</a> takes a different approach: rather than promising results, it offers a money-back guarantee if you do not lose 5% of your body weight in 120 days, with conditions you should read before relying on it.</p>`,
      },
      {
        heading: "How fast will I lose weight on a GLP-1?",
        body: `<p><strong>Weight loss on a GLP-1 is gradual because the dose starts low and is increased step by step, commonly about every four weeks. Most people notice appetite changes within the first weeks, while the larger losses seen in trials built up over more than a year.</strong></p>
<p>A typical first year, in broad strokes, looks like this. Your own path depends on your dose schedule, tolerance and habits.</p>
<table>
<thead><tr><th>Phase</th><th>What usually happens</th><th>What to focus on</th></tr></thead>
<tbody>
<tr><td>Month 1 (starting dose)</td><td>Appetite drops; early scale changes are often partly water</td><td>Learning to inject or dose correctly; managing mild nausea</td></tr>
<tr><td>Months 2-3 (first increases)</td><td>Steadier loss; side effects may flare briefly after each increase</td><td>Protein, hydration and fiber; reporting side effects</td></tr>
<tr><td>Months 4-6 (approaching maintenance)</td><td>Loss often continues at a steady pace for responders</td><td>Strength training; not under-eating</td></tr>
<tr><td>Months 7-12 (maintenance dose)</td><td>Loss slows and may level off</td><td>Planning long-term maintenance with your clinician</td></tr>
</tbody>
</table>
<p>Some practical points about pace:</p>
<ul>
<li><strong>A slow start is normal.</strong> The starting dose is designed for tolerance, not maximum effect. Judging the medication on month one alone is a common mistake.</li>
<li><strong>Stepping up faster is not better.</strong> Rushing the titration usually means worse side effects, not dramatically faster results. Your clinician may keep you at a dose longer if you are still losing or struggling with nausea.</li>
<li><strong>Weekly fluctuations are noise.</strong> Water, sodium, bowel habits and hormones move the scale day to day. Look at the trend over several weeks.</li>
<li><strong>Your clinician uses your progress.</strong> Programs with frequent touchpoints - <a href="/reviews/trimrx">trimrx</a> offers unlimited provider check-ins, and <a href="/reviews/medvi">MEDVi</a> includes clinician visits and coaching - make it easier to adjust the plan based on how you are actually responding.</li>
</ul>
<p>If you have been on a maintenance dose for several months with little change, that is a conversation to have with your clinician, not a reason to raise the dose on your own. See the plateau section below.</p>`,
      },
      {
        heading: "How much does online GLP-1 treatment cost in 2026?",
        body: `<p><strong>Among the nine online providers we rank, compounded semaglutide starts between $49 and $199 a month, and compounded tirzepatide between $89 and $299 a month. Brand-name medication now costs about $149-$449 a month at most doses at manufacturer self-pay prices, and insurance can bring that down further.</strong></p>
<p>Here is every provider we rank, in ranking order, with its published prices, pricing model and current Trustpilot score. Promo prices are labeled with the regular price alongside.</p>
<table>
<thead><tr><th>Provider (our score)</th><th>Semaglutide</th><th>Tirzepatide</th><th>Model</th><th>Commitment</th><th>Shipping</th><th>Trustpilot</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/embody">embody</a> (9.8)</td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Compounded, flat at every dose; weekly injection or daily oral option</td><td>Month-to-month</td><td>Free, 1-2 days, cold-chain</td><td>3.8 / 5 (9,582 reviews)</td></tr>
<tr><td><a href="/reviews/ro">ro</a> (9.6)</td><td colspan="2">Brand-name only (Wegovy, Zepbound, Ozempic, Foundayo). Membership $39 first month, then $149/mo, or about $74/mo on an annual plan; medication billed separately via insurance or manufacturer self-pay price</td><td>Membership + medication</td><td>Monthly or annual membership</td><td>Via pharmacy; not published</td><td>3.9 / 5 (7,083 reviews)</td></tr>
<tr><td><a href="/reviews/altrx">altRx</a> (9.3)</td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Compounded, flat at every dose; brand-name shelf</td><td>None - pause or cancel</td><td>Free, 5-7 days</td><td>No published profile</td></tr>
<tr><td><a href="/reviews/trimrx">trimrx</a> (9.1)</td><td>$149/mo ($140 discount applied)</td><td>$259/mo</td><td>Compounded, custom dosing, unlimited check-ins</td><td>Month-to-month</td><td>Free, tracked, often next-day</td><td>3.8 / 5 (5,393 reviews)</td></tr>
<tr><td><a href="/reviews/wellmedr">wellmedr</a> (8.9)</td><td>$49/mo on 12-month plan (about $88 month-to-month)</td><td>$89/mo, shipped every 4 weeks</td><td>Compounded, flat at every dose</td><td>12-month plan for lowest rate</td><td>3-5 business days</td><td>4.6 / 5 (2,181 reviews)</td></tr>
<tr><td><a href="/reviews/medvi">MEDVi</a> (8.7)</td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>All-inclusive: clinician visits, dietitian, coaching</td><td>None - no membership</td><td>Free; timing not published</td><td>4.3 / 5 (14,978 reviews)</td></tr>
<tr><td><a href="/reviews/directmeds">DirectMeds</a> (8.6)</td><td>$147/mo</td><td>$147/mo</td><td>Compounded, flat at every dose; injection or sublingual drops</td><td>None - no membership</td><td>Free, 1-2 days</td><td>4.6 / 5 (16,368 reviews)</td></tr>
<tr><td><a href="/reviews/shed">SHED</a> (8.4)</td><td>From $199/mo (20% off first month)</td><td>From $299/mo (20% off first month)</td><td>Compounded with coaching; 5%-in-120-days money-back guarantee</td><td>None</td><td>Home delivery included; timing not published</td><td>4.6 / 5 (1,137 reviews)</td></tr>
<tr><td><a href="/reviews/medgm">MEDGm</a> (8.2)</td><td colspan="2">Compounded GLP-1 injections from $169/mo or daily dissolvable tablets from $239/mo (molecule not named in public pricing); brand-name Zepbound for a $99 membership plus medication cost</td><td>Compounded injection, compounded tablet or brand-name Zepbound</td><td>Ask at checkout</td><td>Not published</td><td>No published profile</td></tr>
</tbody>
</table>
<p>Four pricing mechanics explain most of the differences in that table:</p>
<ul>
<li><strong>Promo vs regular prices.</strong> altRx and MEDVi advertise promo rates that roughly halve their regular prices. embody's promo is a smaller discount ($10 a month off). Ask how long any promo lasts.</li>
<li><strong>Commitment discounts.</strong> wellmedr's $49 semaglutide requires a 12-month plan; month-to-month is advertised around $88.</li>
<li><strong>Flat vs dose-tiered pricing.</strong> embody, altRx, trimrx (semaglutide), wellmedr and DirectMeds publish the same price at every dose, so your bill does not climb as you titrate up.</li>
<li><strong>What is bundled.</strong> MEDVi includes a dietitian and coaching; SHED includes coaching and a guarantee; ro's membership covers the clinical service and insurance help but not the drug.</li>
</ul>
<p>Prices change often, so confirm at checkout. Our <a href="/articles/real-cost-of-glp1-weight-loss">real cost of GLP-1 weight loss</a> article goes through the fine print line by line.</p>`,
      },
      {
        heading: "What will a full year of GLP-1 treatment cost?",
        body: `<p><strong>A year of compounded semaglutide costs roughly $588 to about $2,350 across the programs we rank, depending on the provider, commitment and whether promo pricing lasts. A year of compounded tirzepatide runs from about $1,068 to about $3,530. Brand-name medication at manufacturer self-pay prices costs roughly $3,600-$5,400 a year at maintenance doses.</strong></p>
<p>Monthly prices are easy to compare; annual costs are what actually hit your budget, because most people stay on treatment for many months. The table below shows two scenarios for each compounded program: a <strong>best case</strong> where the advertised price holds for 12 months, and a <strong>promo-ends case</strong> where you pay the advertised price for one month and the regular price for the remaining 11. The real figure for promo-priced programs will land somewhere between the two, depending on how long the promotion lasts.</p>
<table>
<thead><tr><th>Provider</th><th>Semaglutide - best case</th><th>Semaglutide - promo ends after month 1</th><th>Tirzepatide - best case</th><th>Tirzepatide - promo ends after month 1</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$588 (12 x $49, 12-month plan)</td><td>Not a promo; about $1,056 month-to-month (12 x $88)</td><td>$1,068 (12 x $89)</td><td>Not a promo</td></tr>
<tr><td><a href="/reviews/embody">embody</a></td><td>$828 (12 x $69)</td><td>$938 ($69 + 11 x $79)</td><td>$1,428 (12 x $119)</td><td>$1,538 ($119 + 11 x $129)</td></tr>
<tr><td><a href="/reviews/altrx">altRx</a></td><td>$1,068 (12 x $89)</td><td>$2,278 ($89 + 11 x $199)</td><td>$1,788 (12 x $149)</td><td>$3,438 ($149 + 11 x $299)</td></tr>
<tr><td><a href="/reviews/medvi">MEDVi</a></td><td>$1,188 (12 x $99)</td><td>$2,288 ($99 + 11 x $199)</td><td>$1,992 (12 x $166)</td><td>$3,455 ($166 + 11 x $299)</td></tr>
<tr><td><a href="/reviews/directmeds">DirectMeds</a></td><td>$1,764 (12 x $147)</td><td>Not a promo</td><td>$1,764 (12 x $147)</td><td>Not a promo</td></tr>
<tr><td><a href="/reviews/trimrx">trimrx</a></td><td>$1,788 (12 x $149)</td><td>Not a promo</td><td>$3,108 (12 x $259)</td><td>Not a promo</td></tr>
<tr><td><a href="/reviews/shed">SHED</a></td><td>$2,348.20 ($159.20 + 11 x $199)</td><td>Already includes the 20% first-month discount</td><td>$3,528.20 ($239.20 + 11 x $299)</td><td>Already includes the 20% first-month discount</td></tr>
<tr><td><a href="/reviews/medgm">MEDGm</a></td><td colspan="2">$2,028 (12 x $169) for compounded GLP-1 injections at the starting price; molecule not named</td><td colspan="2">Tablets: $2,868 (12 x $239) at the starting price</td></tr>
</tbody>
</table>
<p>Notes on reading the table:</p>
<ul>
<li><strong>Four-week billing adds a cycle.</strong> wellmedr ships tirzepatide every 4 weeks, and a 52-week year contains 13 four-week cycles. If a plan bills every 4 weeks, multiply by 13, not 12: 13 x $89 = $1,157, and 13 x $49 = $637 if semaglutide follows the same cadence. Confirm the billing cycle before you compare.</li>
<li><strong>wellmedr's tirzepatide term was not confirmed</strong> in the provider information we reviewed, so check whether the $89 rate requires a plan length.</li>
<li><strong>trimrx's $149 semaglutide price includes a $140 discount</strong> applied at signup; check what applies on later refills.</li>
<li><strong>SHED's prices are starting prices</strong> and may vary by plan.</li>
</ul>
<p><strong>Brand-name, no insurance.</strong> At manufacturer self-pay prices (October 2026), 12 months of Wegovy at a maintenance dose is $4,188 (12 x $349), Wegovy HD about $4,788 (12 x $399), Zepbound $5,388 with on-time refills (12 x $449) and either GLP-1 pill about $3,588 (12 x $299). Telehealth brand shelves can charge more, so compare against NovoCare and LillyDirect first.</p>
<p><strong>Brand-name through ro.</strong> ro's membership alone costs $1,678 in year one month-to-month ($39 + 11 x $149), or about $888 on the annual plan (12 x about $74), before medication. If your insurance covers Wegovy or Zepbound with a low copay, the total can still come out below many cash-pay programs; if coverage is denied, you pay the manufacturer's self-pay price on top of the membership.</p>
<p>The practical takeaway: the cheapest program in month one is not always the cheapest program in month twelve. Decide how long you realistically expect to stay on treatment, then compare the year, not the month.</p>`,
      },
      {
        heading: "Can I get a GLP-1 with insurance?",
        body: `<p><strong>Sometimes. Some commercial insurance plans cover Wegovy or Zepbound for weight management, usually after a prior authorization, but many plans exclude weight-loss drugs. Insurance only applies to brand-name medication - compounded GLP-1s are almost always cash-pay.</strong></p>
<p>Coverage for weight-loss medication is one of the most inconsistent areas of US health insurance. Two people with the same insurer can get different answers because coverage depends on the specific plan their employer chose. Common patterns include:</p>
<ul>
<li><strong>Covered with prior authorization.</strong> The plan pays once your prescriber documents that you meet its criteria - typically BMI thresholds, weight-related conditions and sometimes previous weight-loss attempts.</li>
<li><strong>Excluded entirely.</strong> Many plans carve out weight-loss drugs as a category, whatever your BMI.</li>
<li><strong>Covered for diabetes only.</strong> A plan may cover Ozempic or Mounjaro for type 2 diabetes but not Wegovy or Zepbound for weight management.</li>
<li><strong>Step therapy.</strong> Some plans require you to try other treatments first.</li>
</ul>
<p><strong>How to check your coverage, step by step:</strong></p>
<ol>
<li>Find your plan's drug list (formulary) on your insurer's website or app and search for Wegovy and Zepbound.</li>
<li>Look for notes such as "PA" (prior authorization required), "ST" (step therapy) or quantity limits.</li>
<li>Call the member services number on your card and ask whether weight-management drugs are covered under your specific plan.</li>
<li>If you use an online provider, choose one that handles the paperwork. <a href="/reviews/ro">ro</a>'s insurance concierge checks your coverage and submits prior authorizations for you; if coverage is denied, you can pay the manufacturer's self-pay price instead.</li>
<li>If you are denied, ask your prescriber whether an appeal makes sense - denials are sometimes reversed with additional documentation.</li>
</ol>
<p><strong>Decision rule:</strong> if there is any realistic chance your plan covers Wegovy or Zepbound, check that first. A covered brand-name prescription can cost less than the cheapest compounded program, and it comes with full FDA approval. If you are uninsured, your plan excludes weight-loss drugs, or the approval process stalls, a compounded cash-pay program is the common fallback. Our <a href="/embody-vs-ro">embody vs ro</a> and <a href="/ro-vs-medvi">ro vs MEDVi</a> comparisons walk through that exact choice.</p>
<p><strong>Can you use HSA or FSA funds?</strong> Often, yes. Prescription medication and clinician services prescribed for a medical condition are generally eligible expenses for health savings accounts (HSAs) and flexible spending accounts (FSAs), and several online GLP-1 programs explicitly accept these cards.</p>
<p>Among the programs we rank, <a href="/reviews/embody">embody</a>, <a href="/reviews/trimrx">trimrx</a>, <a href="/reviews/medvi">MEDVi</a> and <a href="/reviews/shed">SHED</a> say HSA/FSA funds can be used. For other providers, check at checkout or ask support before paying.</p>
<p>Points to keep in mind:</p>
<ul>
<li><strong>Your plan administrator has the final word.</strong> Some administrators ask for documentation, such as an itemized receipt or a letter of medical necessity, especially for subscription-style charges.</li>
<li><strong>Keep your receipts.</strong> If your card is declined or you pay out of pocket, you may be able to submit a claim for reimbursement later.</li>
<li><strong>HSA and FSA money is pre-tax.</strong> Depending on your tax bracket, using these funds effectively lowers the real cost of treatment compared with paying from after-tax income.</li>
<li><strong>FSA funds may expire.</strong> FSAs often have a use-it-or-lose-it deadline, so a year-end balance can help fund a prepaid plan - but only if you are confident about the commitment.</li>
</ul>
<p>Some programs also offer other ways to spread costs. <a href="/reviews/altrx">altRx</a> offers Buy Now, Pay Later, which splits payments but does not reduce the total. Treat financing carefully - a GLP-1 is usually an ongoing expense, not a one-time purchase.</p>`,
      },
      {
        heading: "Which online GLP-1 provider is best for me?",
        body: `<p><strong>The best online GLP-1 provider depends on what you need most: the lowest price, insurance help, flexibility, support or speed. For most cash-pay patients starting out, embody is our top pick; if you have insurance, start with ro; if you will commit to a year, wellmedr is cheapest long-run.</strong></p>
<p>Use this table to match your priority to a provider. Each recommendation is based on published prices and features, not a guarantee that a program will suit you clinically.</p>
<table>
<thead><tr><th>If your priority is...</th><th>Consider</th><th>Why</th></tr></thead>
<tbody>
<tr><td>Lowest price with no commitment</td><td><a href="/reviews/embody">embody</a></td><td>$69/mo semaglutide and $119/mo tirzepatide, month-to-month</td></tr>
<tr><td>Lowest long-run price</td><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$49/mo semaglutide on a 12-month plan; $89/mo tirzepatide</td></tr>
<tr><td>Insurance coverage or FDA-approved medication only</td><td><a href="/reviews/ro">ro</a></td><td>Brand-name only; coverage checks and prior authorizations handled</td></tr>
<tr><td>Fastest delivery</td><td><a href="/reviews/trimrx">trimrx</a>, <a href="/reviews/embody">embody</a> or <a href="/reviews/directmeds">DirectMeds</a></td><td>Often next-day (trimrx); 1-2 days (embody, DirectMeds)</td></tr>
<tr><td>Custom dosing and frequent provider contact</td><td><a href="/reviews/trimrx">trimrx</a></td><td>Custom dosing with unlimited provider check-ins</td></tr>
<tr><td>Dietitian and coaching included</td><td><a href="/reviews/medvi">MEDVi</a></td><td>Clinician visits, dietitian access and coaching in one price</td></tr>
<tr><td>A results guarantee</td><td><a href="/reviews/shed">SHED</a></td><td>Money back if you do not lose 5% in 120 days (conditions apply)</td></tr>
<tr><td>Needle-free option</td><td><a href="/reviews/directmeds">DirectMeds</a> or <a href="/reviews/embody">embody</a></td><td>Sublingual drops (DirectMeds); daily oral option (embody)</td></tr>
<tr><td>Same price for either drug</td><td><a href="/reviews/directmeds">DirectMeds</a></td><td>$147/mo for semaglutide or tirzepatide at every dose</td></tr>
<tr><td>Compounded and brand-name under one account</td><td><a href="/reviews/altrx">altRx</a></td><td>Flat compounded pricing plus a brand-name shelf (note its June 2026 FDA warning letter)</td></tr>
<tr><td>Largest customer review base</td><td><a href="/reviews/directmeds">DirectMeds</a> or <a href="/reviews/medvi">MEDVi</a></td><td>4.6 / 5 from 16,368 reviews; 4.3 / 5 from 14,978 reviews</td></tr>
</tbody>
</table>
<p><strong>Quick decision rules:</strong></p>
<ul>
<li><strong>If you have never taken a GLP-1,</strong> avoid locking into a long plan until you know how you tolerate it. Month-to-month programs such as embody, trimrx, MEDVi and DirectMeds let you stop without penalty.</li>
<li><strong>If you have been on a GLP-1 and it works for you,</strong> a 12-month plan like wellmedr's can save hundreds of dollars a year - read the refund and cancellation terms first.</li>
<li><strong>If side effects have been a problem before,</strong> prioritize custom dosing and easy provider access over the lowest price.</li>
<li><strong>If you struggle with eating habits more than appetite,</strong> a program with a dietitian or coaching may be worth the higher price.</li>
<li><strong>If you expect to move to tirzepatide later,</strong> compare tirzepatide prices now - the gap between providers is wider than for semaglutide.</li>
</ul>
<p>For direct matchups, see our head-to-head comparisons: <a href="/embody-vs-ro">embody vs ro</a>, <a href="/embody-vs-wellmedr">embody vs wellmedr</a>, <a href="/embody-vs-medvi">embody vs MEDVi</a>, <a href="/altrx-vs-trimrx">altRx vs trimrx</a>, <a href="/altrx-vs-medvi">altRx vs MEDVi</a>, <a href="/altrx-vs-wellmedr">altRx vs wellmedr</a>, <a href="/trimrx-vs-wellmedr">trimrx vs wellmedr</a>, <a href="/trimrx-vs-medvi">trimrx vs MEDVi</a>, <a href="/wellmedr-vs-medvi">wellmedr vs MEDVi</a>, <a href="/ro-vs-medvi">ro vs MEDVi</a>, <a href="/medvi-vs-shed">MEDVi vs SHED</a> and <a href="/directmeds-vs-wellmedr">DirectMeds vs wellmedr</a>.</p>`,
      },
      {
        heading: "How do the 9 online GLP-1 providers we rank compare?",
        body: `<p><strong>Our 2026 ranking is embody (9.8), ro (9.6), altRx (9.3), trimrx (9.1), wellmedr (8.9), MEDVi (8.7), DirectMeds (8.6), SHED (8.4) and MEDGm (8.2). Each program has a clear strength and a clear trade-off; none is right for everyone.</strong></p>
<p><strong>1. <a href="/reviews/embody">embody</a> - best overall for cash-pay patients.</strong> Compounded semaglutide is $69 a month (regular $79) and tirzepatide $119 (regular $129), flat at every dose and month-to-month. Medication ships cold-chain in 1-2 days with free shipping, it offers a daily oral option alongside injections, and it is LegitScript-certified with medication from state-licensed 503A pharmacies. The trade-off is a mixed 3.8 / 5 Trustpilot score from 9,582 reviews, where complaints focus on shipping delays and support response times.</p>
<p><strong>2. <a href="/reviews/ro">ro</a> - best for insurance and brand-name medication.</strong> ro prescribes only FDA-approved brand-name GLP-1s - Wegovy, Zepbound, Ozempic and Foundayo - and its insurance concierge handles coverage checks and prior authorizations. Founded in 2017, it is one of the most established telehealth brands in the US. The membership is $39 for the first month, then $149 a month, or about $74 a month on an annual plan, with medication billed separately. Without coverage, the total is usually far above compounded programs. Trustpilot: 3.9 / 5 from 7,083 reviews.</p>
<p><strong>3. <a href="/reviews/altrx">altRx</a> - flat pricing plus a brand-name shelf.</strong> Compounded semaglutide is $89 a month and tirzepatide $149 on promo (regular $199 and $299), the same at every dose, with brand-name Ozempic, Zepbound and Wegovy available at self-pay prices in the same account. It offers Buy Now, Pay Later and no commitment, but delivery takes 5-7 days, it has no published Trustpilot profile, and its parent company received an FDA warning letter on June 8, 2026 (see the next section).</p>
<p><strong>4. <a href="/reviews/trimrx">trimrx</a> - best for custom dosing and provider access.</strong> trimrx builds treatment around individualized dosing with unlimited provider check-ins, an async intake with no appointment needed, and free tracked delivery that often arrives next-day. Semaglutide is $149 a month at every dose and tirzepatide $259, month-to-month and HSA/FSA eligible. It is light on coaching, available in most but not all states, and rated 3.8 / 5 from 5,393 reviews.</p>
<p><strong>5. <a href="/reviews/wellmedr">wellmedr</a> - lowest long-run price.</strong> Semaglutide is $49 a month on a 12-month plan (about $88 month-to-month) and tirzepatide $89, the same at every dose. Board-certified clinicians, availability in all 50 states and a 4.6 / 5 Trustpilot score from 2,181 reviews are strengths. Shipping takes 3-5 business days, and the lowest price depends on committing for a year.</p>
<p><strong>6. <a href="/reviews/medvi">MEDVi</a> - best all-inclusive support.</strong> Semaglutide is $99 a month and tirzepatide $166 on promo (regular $199 and $299), with clinician visits, dietitian access and coaching included, no membership fees and no commitment. Brand-name options are available through its clinicians. It is rated 4.3 / 5 from 14,978 reviews. After the promo, its regular prices are among the highest we track.</p>
<p><strong>7. <a href="/reviews/directmeds">DirectMeds</a> - simplest pricing.</strong> Semaglutide or tirzepatide costs $147 a month at every dose, as a weekly injection or sublingual drops, with free 1-2 day shipping and no membership. Its 4.6 / 5 score from 16,368 reviews is the largest review base on our list. It offers little beyond the prescription - no coaching, dietitian or brand-name shelf - and its semaglutide costs more than several rivals.</p>
<p><strong>8. <a href="/reviews/shed">SHED</a> - coaching with a guarantee.</strong> Semaglutide starts at $199 a month and tirzepatide at $299, with 20% off the first month, coaching included and a money-back guarantee if you do not lose 5% of your body weight in 120 days (conditions apply). It accepts HSA/FSA, has no commitment and is rated 4.6 / 5 from 1,137 reviews, but it is among the most expensive compounded options we track.</p>
<p><strong>9. <a href="/reviews/medgm">MEDGm</a> - injection, tablet or brand-name in one program.</strong> Compounded GLP-1 injections start at $169 a month and compounded once-daily dissolvable tablets at $239, and brand-name Zepbound is available for a $99 membership plus the medication cost. Its public pricing does not name the compounded molecule, so ask which medication and dose your price covers. It has no published Trustpilot profile, and its compounded prices are higher than several programs above.</p>
<p>All eight compounded programs share the same caveat: their medication is not FDA-approved. Full details, pros and cons are in each linked review, and the side-by-side ranking is on our <a href="/">homepage</a>.</p>
<p><strong>How we score providers.</strong> We score each provider on clinical safety and oversight, total price and pricing transparency, flexibility, delivery, support and customer feedback, then check regulatory records such as FDA warning letters. Compensation from providers may affect placement but does not change our editorial ratings.</p>
<p>In practice, that means we look for answers to questions like these:</p>
<ul>
<li><strong>Medical oversight:</strong> Does a licensed clinician review every intake? Are contraindications screened? Can patients reach a clinician between refills?</li>
<li><strong>Product and pharmacy:</strong> Is the medication brand-name or compounded? Does the provider name state-licensed pharmacies? Is the product marketed accurately?</li>
<li><strong>Real cost:</strong> What does a year cost at maintenance dose, after promos end? Are commitment terms and membership fees clear?</li>
<li><strong>Flexibility:</strong> Can you cancel, pause or switch medications easily?</li>
<li><strong>Delivery:</strong> How fast, and is it cold-chain packed?</li>
<li><strong>Support:</strong> Is there coaching, a dietitian or unlimited messaging?</li>
<li><strong>Reputation:</strong> What do current Trustpilot scores and review volumes show, and what do complaints have in common?</li>
<li><strong>Regulatory record:</strong> Any FDA warning letters or similar actions? We disclose them prominently, as we do for altRx.</li>
</ul>
<p>Prices and ratings in this guide come from provider-published figures and Trustpilot profiles checked in fall 2026, and we update them when they change. Full details are on our <a href="/how-we-rank">how we rank</a> page, and our <a href="/medical-review-policy">medical review policy</a> explains how we handle clinical claims.</p>`,
      },
      {
        heading: "How do I spot a legit online GLP-1 provider?",
        body: `<p><strong>A legitimate online GLP-1 provider has a licensed clinician review your health history before prescribing, uses a state-licensed pharmacy it is willing to name, is clear about whether medication is compounded or brand-name, and never guarantees results or calls compounded medication FDA-approved.</strong></p>
<p>Use this checklist before you pay:</p>
<ul>
<li><strong>Real medical screening.</strong> The intake asks about thyroid cancer history (MTC or MEN2), pregnancy, pancreatitis, gallbladder disease and current medications. A program that approves everyone in minutes without these questions is not practicing careful medicine.</li>
<li><strong>Licensed clinicians.</strong> Prescribers should be licensed in your state. Reputable services describe who reviews your intake and how to reach them.</li>
<li><strong>A named, licensed pharmacy.</strong> For compounded medication, ask which state-licensed pharmacy fills it. Brand-name prescriptions should go to a licensed retail or mail-order pharmacy.</li>
<li><strong>Accurate product claims.</strong> Compounded products must not be described as FDA-approved, "generic Wegovy" or "the same as Ozempic."</li>
<li><strong>Transparent pricing.</strong> Promo prices are labeled with the regular price, commitment terms are stated up front, and you know whether the price changes at higher doses.</li>
<li><strong>Cold-chain shipping and clear instructions.</strong> Medication should arrive packed to stay cool, with dosing and storage directions you understand.</li>
<li><strong>Ongoing access.</strong> You can message the care team about side effects between refills.</li>
<li><strong>Third-party signals.</strong> Certifications such as LegitScript, and a substantial base of independent customer reviews, add confidence.</li>
</ul>
<p><strong>How to read customer reviews.</strong> Trustpilot scores are useful, but read them with care. Volume matters: a 4.6 average from 16,368 reviews (DirectMeds) is more informative than the same average from a few hundred. Recency matters too, because operations change. Look past the star average to the pattern in complaints - across this category, the most common issues are shipping delays, slow support responses, order mix-ups and patient-portal problems, rather than the medication itself. A provider that replies to negative reviews and fixes problems publicly is usually a better sign than one with a spotless but thin profile. And remember that customer reviews describe service experience; they cannot tell you whether a compounded product is consistent from batch to batch.</p>
<p><strong>Red flags:</strong> no prescription required; medication sold as "research peptides" or "not for human use"; prices dramatically below every licensed program; guaranteed weight loss by a date; pressure to prepay a long plan before a clinician has reviewed you; and no way to contact a clinician.</p>
<p><strong>Check the FDA's warning letters.</strong> The FDA publishes warning letters on its website, and searching a company name takes seconds. We do this for every provider we review. One provider on our list has a recent letter: on <strong>June 8, 2026</strong>, the FDA issued a warning letter to Trinity HealthCare Supply, LLC (dba altRx), the parent company of <a href="/reviews/altrx">altRx</a>, saying its website and product labels presented its compounded semaglutide and tirzepatide in a way that suggested FDA approval. A warning letter is a formal notice from the agency, not a court finding or a product recall, and companies typically respond with corrective steps. We disclose it in the altRx review and in comparisons such as <a href="/altrx-vs-trimrx">altRx vs trimrx</a> so you can weigh it for yourself. For some readers it will be a deal-breaker; for others, the flat pricing and brand-name shelf will still appeal.</p>
<p>Our full standards for evaluating providers are on our <a href="/how-we-rank">how we rank</a> page, and the way we review health content is described in our <a href="/medical-review-policy">medical review policy</a>.</p>`,
      },
      {
        heading: "What side effects should I expect on a GLP-1?",
        body: `<p><strong>The most common GLP-1 side effects are nausea, vomiting, diarrhea, constipation, reduced appetite, reflux and fatigue. They are usually worst in the days after starting or increasing a dose and often ease as your body adjusts.</strong></p>
<p>Because doses rise in steps, side effects tend to follow a predictable rhythm: a flare after each increase, then a settling period. This timeline shows the general pattern; not everyone experiences side effects, and severity varies a lot.</p>
<table>
<thead><tr><th>Timing</th><th>Commonly reported</th><th>What usually helps</th><th>When to call your clinician</th></tr></thead>
<tbody>
<tr><td>First 1-3 days after each dose</td><td>Nausea, fullness, burping, reflux</td><td>Small meals; stop eating at first fullness; avoid greasy food</td><td>You cannot keep food or fluids down</td></tr>
<tr><td>Weeks 1-4 (starting dose)</td><td>Reduced appetite, mild fatigue, occasional nausea</td><td>Regular protein-rich meals even when not hungry; fluids</td><td>Fatigue or dizziness that does not improve</td></tr>
<tr><td>Weeks 3-8</td><td>Constipation as food intake falls</td><td>Water, gradual fiber, daily movement</td><td>No bowel movement for several days with pain or bloating</td></tr>
<tr><td>After each dose increase</td><td>Temporary return of nausea, diarrhea or vomiting</td><td>Bland foods for a few days; electrolytes if needed</td><td>Symptoms last beyond a week or are severe</td></tr>
<tr><td>Months 3 and beyond</td><td>Under-eating and low energy as appetite stays suppressed</td><td>Protein targets, strength training, enough calories</td><td>Unintended rapid loss or inability to eat enough</td></tr>
</tbody>
</table>
<p>Practical ways to make the first months easier:</p>
<ul>
<li><strong>Eat slowly and stop early.</strong> The fullness signal arrives later than the drug's effect on your stomach. Overeating is the fastest route to nausea.</li>
<li><strong>Hydrate deliberately.</strong> Reduced appetite often means reduced drinking too. Dehydration worsens nausea, headaches and constipation, and in severe cases can harm the kidneys.</li>
<li><strong>Do not skip protein.</strong> Low protein worsens fatigue and accelerates muscle loss.</li>
<li><strong>Get your injection technique right.</strong> Weekly injections usually go into the fatty tissue of the abdomen, thigh or upper arm. Rotating sites can reduce soreness or redness at the injection spot. Ask your clinician or pharmacist to walk you through your first dose if you are unsure, and follow the instructions that come with your medication.</li>
<li><strong>Ask about pacing.</strong> If every increase knocks you flat, ask your clinician to slow the titration or hold your dose. Programs with custom dosing, such as <a href="/reviews/trimrx">trimrx</a>, are built for this.</li>
</ul>
<p>Our week-by-week guide to <a href="/articles/glp1-side-effects-first-12-weeks">GLP-1 side effects in the first 12 weeks</a> goes deeper on each phase.</p>`,
      },
      {
        heading: "What are the serious risks of GLP-1 medications?",
        body: `<p><strong>Serious side effects are uncommon but include pancreatitis, gallbladder disease, kidney injury from dehydration, and low blood sugar when combined with some diabetes medications. GLP-1s also carry an FDA boxed warning about thyroid C-cell tumors seen in rodents.</strong></p>
<p>Knowing the warning signs matters more than memorizing the list. Seek prompt medical care - and stop taking the medication until a clinician advises you - if you notice:</p>
<ul>
<li><strong>Severe abdominal pain that does not go away,</strong> sometimes spreading to the back, with or without vomiting. This can signal pancreatitis.</li>
<li><strong>Pain in the upper right abdomen, fever, yellowing of the skin or eyes, or pale stools.</strong> These can signal a gallbladder problem.</li>
<li><strong>Signs of dehydration</strong> - very little urine, dark urine, dizziness on standing, or being unable to keep fluids down. Dehydration can lead to kidney injury.</li>
<li><strong>Shakiness, sweating, confusion or a racing heartbeat</strong> if you also take insulin or a sulfonylurea. These can signal low blood sugar.</li>
<li><strong>A lump or swelling in the neck, trouble swallowing, or hoarseness that persists.</strong> Report these promptly given the thyroid warning.</li>
<li><strong>Swelling of the face, lips or throat, or difficulty breathing.</strong> These can signal a severe allergic reaction - call emergency services.</li>
</ul>
<p>Two additional cautions are specific to compounded medication. First, dosing errors: compounded vials come in different concentrations, so confirm your dose in milligrams and the matching syringe units with your clinician or pharmacist, and never assume a new vial matches the last one. Second, product quality: the FDA has not reviewed compounded products, so buy only through a licensed provider that names its pharmacy.</p>
<p>If you become pregnant while taking a GLP-1, contact your clinician right away. And tell any surgeon or anesthetist that you take one, since slowed stomach emptying matters for procedures that require an empty stomach.</p>`,
      },
      {
        heading: "How should I eat and exercise while taking a GLP-1?",
        body: `<p><strong>Prioritize protein at every meal, drink enough fluids, and add resistance training two to three times a week. These habits help preserve lean muscle during weight loss, ease common side effects and make results easier to maintain.</strong></p>
<p>A GLP-1 makes eating less easier, but it does not choose what you eat. With a smaller appetite, every meal carries more nutritional weight. The habits with the best support are simple:</p>
<ul>
<li><strong>Protein first.</strong> Weight loss includes some lean mass, not only fat. Eating enough protein helps preserve muscle. Start meals with the protein portion - eggs, fish, poultry, Greek yogurt, beans, tofu - before the appetite runs out. Ask your clinician or a dietitian for a daily target that fits you.</li>
<li><strong>Resistance training.</strong> Lifting weights, using bands or doing bodyweight exercises two to three times a week signals your body to keep muscle. Walking is valuable for health and mood, but it does not replace strength work.</li>
<li><strong>Fluids and fiber.</strong> Regular water intake and a gradual increase in fiber from vegetables, fruit and whole grains help prevent constipation, one of the most common complaints.</li>
<li><strong>Smaller, slower meals.</strong> Large or fatty meals are the most common nausea trigger. Smaller plates and slower eating help.</li>
<li><strong>Do not under-eat.</strong> Some people eat so little that they feel weak, dizzy or exhausted. Very low intake also accelerates muscle loss. If you are struggling to eat enough, tell your care team.</li>
</ul>
<p>Support makes a measurable difference for many people. <a href="/reviews/medvi">MEDVi</a> includes dietitian access and coaching in its price, <a href="/reviews/shed">SHED</a> includes coaching, and <a href="/reviews/embody">embody</a> offers care-team messaging between check-ins. If you choose a lower-cost program without coaching, consider whether a session or two with a registered dietitian would be worth adding.</p>
<p>These habits are also your best insurance for later. If you eventually reduce or stop the medication, the routines you built - protein, strength training, portion awareness - are what you keep.</p>`,
      },
      {
        heading: "What happens when I stop taking a GLP-1?",
        body: `<p><strong>Most people regain weight after stopping a GLP-1. In the STEP-1 extension, participants who stopped semaglutide regained about two-thirds of the weight they had lost within a year. In SURMOUNT-4 (JAMA, 2024), people switched to placebo after 36 weeks of tirzepatide regained a substantial share (about 14%), while those who continued lost further.</strong></p>
<p>This is not a sign of failure; it reflects how the medication works. GLP-1s change appetite signals while you take them. When the drug leaves your system, hunger and fullness signals tend to return toward where they were, and the body's natural defense of its previous weight reasserts itself.</p>
<p>What this means for planning:</p>
<ul>
<li><strong>Treat it as a long-term decision.</strong> Many clinicians approach obesity as a chronic condition and GLP-1s as ongoing therapy, much as blood pressure medication is ongoing.</li>
<li><strong>Do not stop abruptly without a plan.</strong> Talk to your clinician first. Options commonly discussed include continuing at the effective dose, a lower maintenance dose, or a gradual taper with close monitoring - the best long-term strategy is still being studied.</li>
<li><strong>Budget for the long run.</strong> Cost is one of the most common reasons people stop. If price is the problem, compare cheaper ways to continue before quitting - for example, wellmedr's $49 12-month semaglutide or embody's $69 month-to-month price.</li>
<li><strong>Keep the habits.</strong> Protein intake, resistance training and regular weighing help you notice and respond to regain early.</li>
</ul>
<p>We cover maintenance options, plateaus and tapering in detail in <a href="/articles/stopping-glp1-maintenance">what happens when you stop a GLP-1</a>.</p>
<p><strong>How long should you stay on treatment?</strong> There is no fixed end date. In the trials, the largest results built up over 68-72 weeks, and studies of stopping show most people regain weight afterward, so many clinicians plan GLP-1 treatment as long-term therapy and review it regularly.</p>
<p>How long you stay on treatment is a decision you make with your clinician, and it can change over time. The factors that usually shape it:</p>
<ul>
<li><strong>Your response.</strong> If you are losing weight and tolerating the medication, continuing is usually reasonable. If you have had little response after reaching a maintenance dose, your clinician may suggest a different approach.</li>
<li><strong>Your health goals.</strong> Improvements in blood sugar, blood pressure or sleep apnea may matter as much as the number on the scale.</li>
<li><strong>Side effects.</strong> Persistent side effects that do not improve with dose changes may outweigh the benefits.</li>
<li><strong>Cost and access.</strong> A realistic long-term budget matters. A plan you can afford for two years usually beats a cheaper-looking plan you abandon after three months.</li>
<li><strong>Life changes.</strong> Pregnancy plans, surgery or new diagnoses can all change the plan.</li>
</ul>
<p>Practically, this is why commitment terms matter. If you are new to GLP-1s, month-to-month pricing gives you room to find out how you respond. Once you know the medication works for you and you expect to continue, a longer plan with a lower monthly rate often makes financial sense - our <a href="/embody-vs-wellmedr">embody vs wellmedr</a> comparison shows the trade-off in numbers.</p>`,
      },
      {
        heading: "What should I do if my weight loss plateaus?",
        body: `<p><strong>Plateaus are expected on a GLP-1 - trial participants' weight loss leveled off over time rather than continuing indefinitely. What to do depends on when the plateau happens and what dose you are on, so review it with your clinician rather than changing your dose yourself.</strong></p>
<p>As you lose weight, your body needs less energy and pushes back with stronger hunger signals. Eventually intake and expenditure balance at a new, lower weight. That is the plateau, and it arrives for almost everyone.</p>
<ul>
<li><strong>Early plateau on a low dose:</strong> often just a pause before the next planned increase. Your clinician may continue the titration as scheduled.</li>
<li><strong>Plateau after side effects held you at a lower dose:</strong> ask whether a slower, smaller step up is possible. Custom-dosing programs can make finer adjustments.</li>
<li><strong>Plateau at your maximum tolerated dose:</strong> you may be close to the weight this treatment supports. The goal may shift from losing to maintaining.</li>
<li><strong>Plateau well short of your goal on semaglutide:</strong> ask whether switching to tirzepatide makes sense, given its stronger average result in SURMOUNT-5.</li>
</ul>
<p>Before any medication change, review the basics honestly: is protein slipping, have portions crept back up, has activity dropped, is sleep poor, or have you started a medication that affects weight? Small drifts add up once appetite suppression is no longer new.</p>
<p>Also look beyond the scale. Waist measurements, how clothes fit, strength gains and health markers such as blood pressure can keep improving even when weight is flat - especially if you are building muscle with resistance training.</p>`,
      },
      {
        heading: "Can I switch online GLP-1 providers or medications?",
        body: `<p><strong>Yes. You can move to a different online provider or switch between semaglutide and tirzepatide, but a licensed clinician at the new program needs to review your history and decide on the right starting dose. Do not convert doses yourself.</strong></p>
<p>People switch for many reasons: a promo ends and the price jumps, shipping is unreliable, side effects need a different approach, insurance coverage changes, or they want more support. Here is how to do it safely:</p>
<ol>
<li><strong>Gather your records.</strong> Note your current medication, the exact dose in milligrams, the concentration if it is compounded, the date of your last dose and any side effects. Screenshots of prescription labels help.</li>
<li><strong>Check your current plan's terms.</strong> Look for cancellation notice periods, prepaid months and any refund policy, especially on 12-month plans.</li>
<li><strong>Complete the new provider's intake.</strong> Tell them you are already on treatment and share your records. The new clinician decides whether to continue at your current dose, step down or restart.</li>
<li><strong>Time the transition.</strong> Try to avoid a gap. If you go more than a short period without a dose, a clinician may restart you at a lower dose to limit side effects.</li>
<li><strong>Confirm the dose in your new format.</strong> Compounded concentrations differ, and brand-name pens are dosed differently from vials. Ask exactly how many milligrams and syringe units you should take.</li>
</ol>
<p><strong>Switching between molecules.</strong> Moving from semaglutide to tirzepatide (or the reverse) is a clinical decision. Your clinician will choose a starting dose for the new drug based on your current dose and tolerance. If you think you might switch, providers with one price for both medications - such as <a href="/reviews/directmeds">DirectMeds</a> at $147 - make the change simpler on the billing side.</p>
<p><strong>Switching from compounded to brand-name.</strong> If you gain insurance coverage, moving to a brand-name product through a service like <a href="/reviews/ro">ro</a>, or a provider with a brand shelf like <a href="/reviews/altrx">altRx</a> or <a href="/reviews/wellmedr">wellmedr</a>, may lower your costs and gives you an FDA-approved product.</p>`,
      },
      {
        heading: "What questions should I ask an online GLP-1 provider before signing up?",
        body: `<p><strong>Before you pay, ask who prescribes, which pharmacy fills the medication, what the price will be after any promo and at higher doses, how to reach a clinician about side effects, and how cancellation and refunds work.</strong> Good providers answer all of these without hesitation.</p>
<p>Copy this list into your notes:</p>
<ul>
<li><strong>Medication:</strong> Is it brand-name or compounded? If compounded, which state-licensed pharmacy makes it, and is it a 503A pharmacy?</li>
<li><strong>Form and dosing:</strong> Injection, oral tablet or drops? What concentration, and how do I measure my dose in milligrams?</li>
<li><strong>Clinician access:</strong> Who reviews my intake? Can I message or video-call a clinician? How quickly do they respond?</li>
<li><strong>Price now:</strong> Is this a promo price? How long does it last, and what is the regular price?</li>
<li><strong>Price later:</strong> Does the price change when my dose increases or when I switch medications?</li>
<li><strong>Billing:</strong> Monthly or every four weeks? Is there a membership fee on top of medication?</li>
<li><strong>Commitment:</strong> Is there a minimum term? What happens if my clinician stops my treatment partway through a prepaid plan?</li>
<li><strong>Shipping:</strong> How long does delivery take, and is it cold-chain packed? What happens if a package arrives warm or late?</li>
<li><strong>Payment:</strong> Can I use HSA/FSA funds? Do you accept insurance, or help with prior authorizations?</li>
<li><strong>Availability:</strong> Do you serve my state?</li>
<li><strong>Regulatory record:</strong> Has the company received any FDA warning letters? (You can also check the FDA's website yourself.)</li>
</ul>
<p>If a provider will not tell you which pharmacy fills your prescription, or cannot give a straight answer about post-promo pricing, take that as useful information.</p>`,
      },
      {
        heading: "How is GLP-1 medication shipped and stored?",
        body: `<p><strong>GLP-1 medication is temperature-sensitive, so reputable programs ship it in insulated, cold-chain packaging. Once it arrives, follow the storage instructions on the pharmacy or manufacturer label - most products need refrigeration before use.</strong></p>
<p>Published delivery times among the programs we rank:</p>
<ul>
<li><strong>Often next-day:</strong> <a href="/reviews/trimrx">trimrx</a> (free tracked delivery)</li>
<li><strong>1-2 days:</strong> <a href="/reviews/embody">embody</a> (free, cold-chain packed) and <a href="/reviews/directmeds">DirectMeds</a> (free)</li>
<li><strong>3-5 business days:</strong> <a href="/reviews/wellmedr">wellmedr</a></li>
<li><strong>5-7 days:</strong> <a href="/reviews/altrx">altRx</a> (free)</li>
<li><strong>Not published in the information we reviewed:</strong> <a href="/reviews/medvi">MEDVi</a> (free shipping) and <a href="/reviews/shed">SHED</a> (home delivery included). Brand-name prescriptions through <a href="/reviews/ro">ro</a> depend on the dispensing pharmacy.</li>
</ul>
<p>Tips for handling your medication:</p>
<ul>
<li><strong>Be home or plan for delivery.</strong> Do not leave a cold-chain package sitting on a hot doorstep. Track it and bring it inside promptly.</li>
<li><strong>Refrigerate as directed.</strong> Do not freeze it unless the label says so - freezing can damage peptide medications.</li>
<li><strong>Inspect before use.</strong> If a vial looks cloudy when it should be clear, contains particles, or the package arrived warm, contact the pharmacy or provider before using it.</li>
<li><strong>Use the right supplies.</strong> Compounded vials usually come with syringes and alcohol swabs. Use a new syringe for each dose and dispose of sharps safely.</li>
<li><strong>Order refills early.</strong> Shipping delays are among the most common complaints in customer reviews across the category. Requesting refills a week ahead protects your schedule.</li>
</ul>`,
      },
      {
        heading: "Can I get online GLP-1 treatment in my state?",
        body: `<p><strong>Most major online GLP-1 programs serve most or all US states, but availability varies by provider because clinicians must be licensed where you live and pharmacies must be able to ship there. Check before you start the intake.</strong></p>
<p>From the information published by the programs we rank: <a href="/reviews/wellmedr">wellmedr</a> is available in all 50 states, <a href="/reviews/ro">ro</a> describes itself as available nationwide, and <a href="/reviews/trimrx">trimrx</a> serves most US states. For other providers, the signup flow usually asks for your state first and tells you immediately if it cannot serve you.</p>
<p>Why state matters:</p>
<ul>
<li><strong>Clinician licensing.</strong> A prescriber generally needs a license in the state where you are located at the time of the visit.</li>
<li><strong>Pharmacy licensing.</strong> Compounding pharmacies need licenses to dispense into each state they ship to, and state rules on compounding vary.</li>
<li><strong>State-specific requirements.</strong> Some states have extra requirements for telehealth prescribing, such as specific consent or visit formats.</li>
</ul>
<p>If you travel or split time between states, tell the provider - the address you ship to and where you are when you consult can both matter. Our <a href="/online-weight-loss">online weight loss by state</a> pages summarize options for each state.</p>`,
      },
      {
        heading: "Are GLP-1 microdosing programs worth it?",
        body: `<p><strong>"Microdosing" is a marketing term for taking a GLP-1 at doses lower than the standard titration schedule. The weight-loss results reported in major trials came from full maintenance doses, so there is little evidence on what very low doses achieve.</strong></p>
<p>Some programs market low-dose plans for people who want milder appetite effects, fewer side effects or a lower price. <a href="/reviews/wellmedr">wellmedr</a>, for example, offers a GLP-1 plus NAD+/B12 "microdose" option alongside its standard plans. Separately, custom dosing - where a clinician adjusts your dose in smaller steps than the brand-name pens allow - is a core feature of <a href="/reviews/trimrx">trimrx</a>.</p>
<p>How to think about it:</p>
<ul>
<li><strong>Lower doses usually mean smaller effects.</strong> The roughly 15% and 21% averages from STEP-1 and SURMOUNT-1 came from 2.4 mg semaglutide and 15 mg tirzepatide. Expect less from much lower doses.</li>
<li><strong>Slower titration is different from microdosing.</strong> Stepping up gradually to manage side effects is standard practice and can be very sensible. Staying indefinitely at a tiny dose is a different strategy with less evidence.</li>
<li><strong>Added ingredients are not part of the trial evidence.</strong> NAD+, B12 and similar add-ons were not part of the STEP or SURMOUNT trials. Ask your clinician what each adds and why.</li>
<li><strong>It can make sense in specific cases,</strong> such as maintenance after reaching a goal or for people very sensitive to side effects - but a clinician should decide.</li>
</ul>`,
      },
      {
        heading: "Is a GLP-1 money-back guarantee worth it?",
        body: `<p><strong>A money-back guarantee can reduce your financial risk if the medication does not work for you, but it always comes with conditions. Read the terms before you rely on it, and weigh the guarantee against the higher price programs that offer it often charge.</strong></p>
<p>On our list, <a href="/reviews/shed">SHED</a> offers a refund if you do not lose 5% of your body weight within 120 days, under its published terms. That threshold is meaningful: 5% of 200 pounds is 10 pounds over about four months.</p>
<p>Questions to answer before you count on a guarantee:</p>
<ul>
<li><strong>What must you do to qualify?</strong> Guarantees commonly require continuous enrollment, regular weigh-ins or check-ins, and following the prescribed plan.</li>
<li><strong>How is weight loss verified?</strong> Find out whether photos, scale readings or video check-ins are required, and when.</li>
<li><strong>What is refunded?</strong> All payments, or only some months? Are any fees excluded?</li>
<li><strong>What if you stop early?</strong> If side effects force you to stop, does the guarantee still apply?</li>
</ul>
<p>Also compare the total cost. SHED's semaglutide starts at $199 a month after a 20% first-month discount, while several programs charge $49-$99. Paying more for a guarantee makes sense for some people - particularly those anxious about committing money to a treatment they have not tried - but the cheaper route may cost less even if you never claim a refund. Our <a href="/medvi-vs-shed">MEDVi vs SHED</a> comparison weighs exactly this.</p>`,
      },
      {
        heading: "Can I get a GLP-1 online if I have type 2 diabetes?",
        body: `<p><strong>Often yes, but diabetes changes the conversation. A clinician needs to know your diabetes medications, because combining a GLP-1 with insulin or a sulfonylurea raises the risk of low blood sugar. Insurance may also treat a diabetes diagnosis differently.</strong></p>
<p>Semaglutide and tirzepatide were developed as diabetes medications first - Ozempic and Mounjaro are approved for type 2 diabetes. For people with both diabetes and excess weight, that can work in their favor:</p>
<ul>
<li><strong>Insurance coverage may be easier.</strong> Plans that exclude weight-loss drugs sometimes cover Ozempic or Mounjaro for type 2 diabetes. A provider that checks coverage, such as <a href="/reviews/ro">ro</a>, can tell you what your plan covers.</li>
<li><strong>Coordination with your existing care is important.</strong> If another doctor manages your diabetes, tell them you are starting a GLP-1. Your other medications may need adjusting as your blood sugar improves.</li>
<li><strong>Blood sugar monitoring matters more.</strong> Know the symptoms of low blood sugar - shakiness, sweating, confusion, a racing heart - and how to treat it.</li>
<li><strong>Labs may be more likely.</strong> A careful online clinician may ask for recent results, such as an A1C, before prescribing.</li>
</ul>
<p>If an online intake does not ask what diabetes medications you take, that is a reason to choose another provider.</p>`,
      },
      {
        heading: "GLP-1 glossary: key terms explained",
        body: `<p><strong>These are the terms you will see most often on online GLP-1 sites, intake forms and prescription labels.</strong></p>
<ul>
<li><strong>GLP-1 (glucagon-like peptide-1):</strong> A gut hormone that reduces appetite and helps regulate blood sugar. GLP-1 receptor agonists such as semaglutide mimic it.</li>
<li><strong>GIP (glucose-dependent insulinotropic polypeptide):</strong> A second gut hormone. Tirzepatide acts on both GIP and GLP-1 receptors.</li>
<li><strong>Semaglutide:</strong> The active ingredient in Wegovy and Ozempic.</li>
<li><strong>Tirzepatide:</strong> The active ingredient in Zepbound and Mounjaro.</li>
<li><strong>Brand-name:</strong> A medication made by the original manufacturer and approved by the FDA, such as Wegovy or Zepbound.</li>
<li><strong>Compounded:</strong> A medication prepared by a licensed pharmacy rather than the manufacturer. Compounded GLP-1s are not FDA-approved and are not reviewed by the FDA for safety, effectiveness or quality.</li>
<li><strong>503A pharmacy:</strong> A state-licensed compounding pharmacy that prepares medication for individual patients based on a prescription. Most compounded GLP-1s sold online come from 503A pharmacies.</li>
<li><strong>503B outsourcing facility:</strong> A compounding facility registered with the FDA that can produce larger batches and must follow federal manufacturing quality standards.</li>
<li><strong>"Essentially a copy":</strong> A regulatory phrase for a compounded drug that duplicates a commercially available FDA-approved drug. Compounding these is restricted when the drug is not in shortage.</li>
<li><strong>Drug shortage list:</strong> The FDA's list of drugs in short supply. Semaglutide and tirzepatide were removed after the shortages were declared resolved (tirzepatide in December 2024, semaglutide in February 2025).</li>
<li><strong>Titration:</strong> Gradually increasing a dose over time - for GLP-1s, commonly about every four weeks - to limit side effects.</li>
<li><strong>Maintenance dose:</strong> The dose you stay on once titration is complete.</li>
<li><strong>Custom dosing:</strong> Individualized dose amounts or step sizes set by a prescriber, often possible with compounded medication.</li>
<li><strong>BMI (body mass index):</strong> Weight in kilograms divided by height in meters squared. GLP-1 weight-management labels use BMI 30+, or 27+ with a weight-related condition.</li>
<li><strong>Prior authorization (PA):</strong> An insurer's requirement that your prescriber justify a medication before the plan pays for it.</li>
<li><strong>Formulary:</strong> Your insurance plan's list of covered drugs.</li>
<li><strong>Boxed warning:</strong> The FDA's most prominent label warning. GLP-1s carry one about thyroid C-cell tumors seen in rodents.</li>
<li><strong>MTC (medullary thyroid carcinoma):</strong> A rare thyroid cancer. A personal or family history rules out GLP-1 treatment.</li>
<li><strong>MEN2 (multiple endocrine neoplasia syndrome type 2):</strong> An inherited condition linked to MTC. It is also a contraindication.</li>
<li><strong>Asynchronous (async) visit:</strong> A telehealth evaluation done through written questionnaires and messages rather than a live call.</li>
<li><strong>Cold chain:</strong> Packaging and shipping that keeps medication within its required temperature range.</li>
<li><strong>Sublingual:</strong> Taken under the tongue, as with DirectMeds' GLP-1 drops.</li>
<li><strong>Flat pricing:</strong> The same monthly price at every dose, so costs do not rise as you titrate up.</li>
<li><strong>Promo price:</strong> A time-limited introductory price. Always check the regular price it reverts to.</li>
<li><strong>LegitScript:</strong> A third-party certification that vets healthcare and pharmacy businesses.</li>
<li><strong>HSA/FSA:</strong> Health savings and flexible spending accounts, which hold pre-tax money for eligible medical expenses.</li>
<li><strong>FDA warning letter:</strong> A formal notice from the FDA that a company appears to have violated federal law, such as making misleading claims about a drug.</li>
</ul>`,
      },
      {
        heading: "How do I get started with online GLP-1 weight loss?",
        body: `<p><strong>Start by deciding between brand-name medication through insurance and compounded medication paid in cash, then pick a provider that fits your budget and support needs, complete an honest intake, and let a licensed clinician decide whether a GLP-1 is right for you.</strong></p>
<p>Here is our condensed path from reading to first dose:</p>
<ol>
<li><strong>Check your eligibility.</strong> Calculate your BMI and list any weight-related conditions. Note any personal or family history of MTC or MEN2, and whether you are pregnant or planning to be.</li>
<li><strong>Check your insurance.</strong> Search your formulary for Wegovy and Zepbound. If there is a realistic chance of coverage, start with a provider that handles prior authorizations, such as <a href="/reviews/ro">ro</a>.</li>
<li><strong>If paying cash, set a 12-month budget.</strong> Use the annual cost table above, not the first-month price.</li>
<li><strong>Choose your priority.</strong> Price with flexibility (<a href="/reviews/embody">embody</a>), lowest long-run price (<a href="/reviews/wellmedr">wellmedr</a>), custom dosing (<a href="/reviews/trimrx">trimrx</a>), support (<a href="/reviews/medvi">MEDVi</a> or <a href="/reviews/shed">SHED</a>), one price for both drugs (<a href="/reviews/directmeds">DirectMeds</a>) or a brand shelf alongside compounded options (<a href="/reviews/altrx">altRx</a>).</li>
<li><strong>Vet the provider.</strong> Run through the legitimacy checklist and the questions to ask before signing up.</li>
<li><strong>Complete the intake honestly.</strong> List every medication and condition.</li>
<li><strong>Plan your first month.</strong> Stock up on protein-rich foods and fluids, schedule your injection day, and know how to reach your care team.</li>
<li><strong>Track and communicate.</strong> Weigh in regularly, note side effects and report them, and let your clinician guide dose changes.</li>
</ol>
<p>Compare every program side by side in our <a href="/">GLP-1 provider rankings</a>, or check what is available where you live on our <a href="/online-weight-loss">state-by-state online weight loss</a> pages.</p>
<p><strong>The bottom line.</strong> Online GLP-1 programs have made semaglutide and tirzepatide far easier and cheaper to access, and the trial results behind these drugs are the strongest of any weight-loss medication class to date. The right program depends on your insurance, budget, tolerance for compounded medication and how much support you want.</p>
<p>The essentials, in one place:</p>
<ul>
<li>Wegovy and Zepbound are FDA-approved for chronic weight management; compounded semaglutide and tirzepatide are not FDA-approved.</li>
<li>Average trial results were about 15% weight loss on semaglutide (STEP-1) and about 20.9% on tirzepatide (SURMOUNT-1); head-to-head, tirzepatide averaged about 20.2% vs 13.7% (SURMOUNT-5). Results vary.</li>
<li>Compounded semaglutide starts between $49 and $199 a month across the providers we rank; compounded tirzepatide between $89 and $299. Compare the full year, not the first month, and note which prices are promotional.</li>
<li>Side effects are mostly digestive and peak after dose increases; serious risks are uncommon but real, and people with MTC or MEN2 history or who are pregnant should not take these drugs.</li>
<li>Most people regain weight after stopping, so plan for the long term with your clinician.</li>
<li>Check that any provider uses licensed clinicians and pharmacies, prices transparently and never calls compounded medication FDA-approved - and check the FDA's warning letter database, as we did for altRx.</li>
</ul>
<p>For the deeper dives behind this guide, read <a href="/articles/compounded-vs-brand-name-glp1">compounded vs brand-name GLP-1s</a>, <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>, <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>, <a href="/articles/glp1-side-effects-first-12-weeks">side effects in the first 12 weeks</a> and <a href="/articles/stopping-glp1-maintenance">what happens when you stop</a>. When you are ready to compare programs, start with our <a href="/">ranking of the top online GLP-1 providers</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
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
      "Manufacturer self-pay prices for brand-name Wegovy and Zepbound now run about $199-$449 a month at most doses (October 2026), while compounded programs we track start at $49-$149/mo for semaglutide.",
      "Insurance can make brand-name medication far cheaper - ro checks coverage and handles prior authorizations for you.",
    ],
    sections: [
      {
        heading: "The short answer",
        body: `<p>A <strong>brand-name GLP-1</strong> - Wegovy, Zepbound, Ozempic - is made by the manufacturer, approved by the FDA and sold in standardized pens or pills. A <strong>compounded GLP-1</strong> is prepared by a state-licensed pharmacy using the same active ingredient (semaglutide or tirzepatide), usually in vials you draw up with a syringe. It is <strong>not FDA-approved</strong>: the FDA does not review compounded drugs for safety, effectiveness or quality before they reach you.</p><p>So the price gap - now often $150-$400 a month against the cheapest compounded programs - is paying for regulatory review, manufacturing consistency and a product that insurance may cover. Whether that is worth it depends on your budget, your coverage and how much uncertainty you are comfortable with.</p>`,
      },
      {
        heading: "What does the brand-name premium actually buy?",
        body: `<ul><li><strong>FDA approval and oversight.</strong> The product was tested in large clinical trials, and its manufacturing is inspected. The trial results you read about - such as around 15% average weight loss in STEP-1 and about 21% in SURMOUNT-1 - were achieved with the approved products.</li><li><strong>Consistency.</strong> Every pen contains exactly the labeled dose in a fixed device. No vials, no drawing up doses.</li><li><strong>Insurance eligibility.</strong> Only brand-name medication can be billed to insurance. If your plan covers it, your out-of-pocket cost can be far lower than any cash price.</li><li><strong>Legal clarity.</strong> You are not relying on a compounding exemption that regulators are still actively shaping.</li></ul><p>For scale, manufacturer self-pay prices in October 2026 are Wegovy $199-$349/mo and the Wegovy pill $149-$299/mo at NovoCare, and Zepbound $299-$449/mo (with on-time refills) and Foundayo $149-$349/mo at LillyDirect. Some telehealth brand shelves charge more, so compare first.</p>`,
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
        body: `<ul><li><strong>If your insurance may cover Wegovy or Zepbound,</strong> check that first. A service like <a href="/reviews/ro">ro</a> runs the coverage check and prior authorization for you, and sells only FDA-approved brand-name medication.</li><li><strong>If you want only FDA-approved medication</strong> regardless of cost, choose brand-name - it is the only option with FDA review behind it.</li><li><strong>If you are paying cash and brand-name is out of reach,</strong> compounded is the realistic route for many people. <a href="/reviews/embody">embody</a> offers compounded semaglutide at $69/mo month-to-month from licensed 503A pharmacies; <a href="/reviews/wellmedr">wellmedr</a> is cheapest long-run if you'll commit to 12 months.</li><li><strong>If you need a non-standard dose,</strong> ask about custom dosing - <a href="/reviews/trimrx">trimrx</a> builds its program around it.</li><li><strong>If you want dietitian access and coaching bundled in,</strong> <a href="/reviews/medvi">MEDVi</a> includes both in one all-inclusive price.</li></ul><p>Not sure which molecule to start on? Read <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>, or compare every provider in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
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
        body: `<p>Tirzepatide costs more almost everywhere. Compounded prices on our list:</p><ul><li><a href="/reviews/embody">embody</a>: semaglutide $69/mo, tirzepatide $119/mo (month-to-month)</li><li><a href="/reviews/wellmedr">wellmedr</a>: semaglutide $49/mo on a 12-month plan, tirzepatide $89/mo</li><li><a href="/reviews/altrx">altRx</a>: semaglutide $89/mo, tirzepatide $149/mo (promo rates; regular $199 and $299)</li><li><a href="/reviews/trimrx">trimrx</a>: semaglutide $149/mo, tirzepatide $259/mo</li><li><a href="/reviews/medvi">MEDVi</a>: semaglutide $99/mo, tirzepatide $166/mo (promo rates; regular $199 and $299)</li><li><a href="/reviews/directmeds">DirectMeds</a>: $147/mo for either, flat at every dose</li><li><a href="/reviews/shed">SHED</a>: from $199/mo semaglutide, $299/mo tirzepatide</li></ul><p>On brand-name self-pay, the manufacturers now sell Zepbound for $299-$449/mo (with on-time refills) and Wegovy for $199-$349/mo (October 2026). With insurance, the picture depends entirely on your plan - <a href="/reviews/ro">ro</a> can check coverage for both. Full breakdown: <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>.</p>`,
      },
      {
        heading: "Which should you start on?",
        body: `<ul><li><strong>If maximum average weight loss is your priority</strong> and the higher price fits your budget, tirzepatide has the stronger head-to-head data.</li><li><strong>If cost is the deciding factor,</strong> semaglutide is typically $40-$110 a month cheaper compounded and still produced about 15% average loss in STEP-1.</li><li><strong>If your insurance covers only one,</strong> start with the covered one - the savings usually outweigh the difference in averages.</li><li><strong>If you would prefer a pill to a weekly injection,</strong> ask about oral options: ro offers brand-name oral medication, and embody offers a daily oral compounded option.</li><li><strong>If you have tried one and stalled or could not tolerate it,</strong> ask your clinician whether switching makes sense.</li></ul><p>A licensed clinician makes the final call based on your history, other medications and goals. Compare providers side by side in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
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
      "ro charges a membership ($39 the first month, then $149/mo, or about $74/mo on an annual plan) plus medication billed separately.",
      "embody, altRx, trimrx and wellmedr all price compounded medication the same at every dose, so costs don't climb as your dose increases.",
    ],
    sections: [
      {
        heading: "Why the headline price is rarely the real price",
        body: `<p>Most people stay on a GLP-1 for many months, and the dose rises during that time. So the number that matters is not the first-month price - it is <strong>what you will pay over a year at your likely maintenance dose</strong>. Four pricing mechanics change that number:</p><ul><li><strong>Promo vs regular price.</strong> An intro rate may only last a limited period.</li><li><strong>12-month prepay or commitment vs month-to-month.</strong> The lowest rates often require committing up front.</li><li><strong>Membership + medication vs all-in.</strong> Some services bill the clinical program and the drug separately.</li><li><strong>Flat vs dose-tiered pricing.</strong> Some programs charge more as you move to higher doses. embody, altRx, trimrx and wellmedr all charge the same at every dose - confirm this with any provider before you sign up.</li></ul>`,
      },
      {
        heading: "2026 price comparison",
        body: `<table><thead><tr><th>Provider</th><th>Semaglutide</th><th>Tirzepatide</th><th>Model</th><th>Commitment</th></tr></thead><tbody><tr><td><a href="/reviews/embody">embody</a></td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/ro">ro</a></td><td colspan="2">Brand-name only; membership $39 first month, then $149/mo (~$74/mo annual) + medication</td><td>Membership + medication</td><td>Monthly or annual</td></tr><tr><td><a href="/reviews/altrx">altRx</a></td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Compounded, flat all doses</td><td>None - pause or cancel</td></tr><tr><td><a href="/reviews/trimrx">trimrx</a></td><td>$149/mo</td><td>$259/mo</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$49/mo on 12-month plan (~$88 month-to-month)</td><td>$89/mo</td><td>Compounded, flat all doses</td><td>12-month plan for lowest rate</td></tr><tr><td><a href="/reviews/medvi">MEDVi</a></td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>All-inclusive: visits, dietitian, coaching</td><td>None - no membership</td></tr><tr><td><a href="/reviews/directmeds">DirectMeds</a></td><td>$147/mo</td><td>$147/mo</td><td>Compounded, flat all doses; injection or drops</td><td>None - no membership</td></tr><tr><td><a href="/reviews/shed">SHED</a></td><td>From $199/mo (20% off month one)</td><td>From $299/mo (20% off month one)</td><td>Compounded, coaching included</td><td>None - HSA/FSA accepted</td></tr><tr><td><a href="/reviews/medgm">MEDGm</a></td><td colspan="2">Compounded GLP-1 injection from $169/mo; dissolvable tablet from $239/mo</td><td>Compounded, plus brand-name Zepbound ($99 membership + medication)</td><td>Ask at checkout</td></tr></tbody></table><p>Prices are provider-published figures checked in September 2026 and can change at any time. Compounded medications are not FDA-approved.</p>`,
      },
      {
        heading: "First-year cost: worked examples",
        body: `<p>Here is what 12 months of <strong>compounded semaglutide</strong> works out to under each model (medication and program only):</p><ul><li><strong>wellmedr, 12-month plan:</strong> 12 × $49 = <strong>$588</strong>. Note that wellmedr ships every 4 weeks, so confirm whether a year means 12 or 13 billing cycles. The same year month-to-month at about $88 would be roughly <strong>$1,056</strong>.</li><li><strong>embody, month-to-month:</strong> 12 × $69 = <strong>$828</strong>; if you pay the regular $79, it is <strong>$948</strong>.</li><li><strong>altRx:</strong> at the $89 promo all year, <strong>$1,068</strong>. If the promo ended after the first month and you paid the regular $199 for the other 11, it would be <strong>$2,278</strong>. Ask exactly how long the promo lasts.</li><li><strong>trimrx:</strong> 12 × $149 = <strong>$1,788</strong>, with custom dosing and unlimited check-ins included.</li><li><strong>ro:</strong> membership alone is $39 + (11 × $149) = <strong>$1,678</strong> month-to-month, or about <strong>$888</strong> on the annual plan - before medication. With good insurance coverage, total cost can still come out lowest; without it, you pay the manufacturer's self-pay price on top.</li><li><strong>MEDVi:</strong> at the $99 promo all year, <strong>$1,188</strong>, with dietitian access and coaching included; at the regular $199 it would be <strong>$2,388</strong>.</li></ul><p>For tirzepatide, the same math gives $1,428 at embody ($119 × 12) and $3,108 at trimrx ($259 × 12).</p>`,
      },
      {
        heading: "Is a 12-month prepay plan worth it?",
        body: `<p>The discount is real - wellmedr's committed rate is roughly half its month-to-month price. But commitment carries risk: you may not tolerate the medication, your clinician may stop or change it, or you may reach your goal early. Before committing, read the refund and cancellation terms. Prices on these plans also move - our sister site Treatments Hub keeps a <a href="https://www.treatmentshub.com/weight-loss/glp1-price-changes">dated log of verified GLP-1 price changes</a> worth checking before you prepay.</p><ul><li><strong>If you have already been on a GLP-1 and tolerate it well,</strong> a 12-month plan is usually the cheapest route.</li><li><strong>If this is your first GLP-1,</strong> consider month-to-month for the first few months while you find out how your body responds - <a href="/reviews/embody">embody</a> is the lowest no-commitment price on our list.</li></ul>`,
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
        body: `<p>Semaglutide and tirzepatide slow how quickly your stomach empties and turn down appetite signals. That is how they work - and it is also why most side effects are digestive. Treatment starts at a low dose and is stepped up gradually, typically about every four weeks, so your body can adjust. The pattern most people notice: side effects flare for a few days after each increase, then settle. Our <a href="/articles/glp1-dosage-guide">GLP-1 dosage guide</a> lays out every step of the Wegovy, Ozempic and Zepbound schedules, with unit charts for compounded vials.</p><p>Over 12 weeks you will usually move through your starting dose and one or two increases, as your clinician decides. Not everyone gets side effects, and severity varies a lot from person to person.</p>`,
      },
      {
        heading: "Week-by-week: what to expect",
        body: `<ul><li><strong>Weeks 1-2 (starting dose):</strong> Appetite often drops within days. Mild nausea, feeling full quickly, burping or reflux are common, especially 1-3 days after the injection. Some people feel tired. Weight changes early are often partly water.</li><li><strong>Weeks 3-4:</strong> Many people settle into a rhythm. Constipation can show up as you eat less. This is a good time to lock in hydration, fiber and protein habits.</li><li><strong>Weeks 5-8 (first increase):</strong> Expect a short flare of nausea or bowel changes after stepping up. If it is manageable, it usually eases within days. If you are struggling to eat or drink, tell your clinician before your next increase.</li><li><strong>Weeks 9-12 (next increase, if prescribed):</strong> Appetite suppression is typically stronger. The risk now is under-eating - skipping meals, too little protein and too little fluid - which can worsen fatigue, dizziness and constipation.</li></ul><p>Your clinician can slow the titration or keep you at a dose longer. Moving up is not a race - staying at a tolerable dose is a normal decision.</p>`,
      },
      {
        heading: "Practical ways to manage common side effects",
        body: `<ul><li><strong>Nausea:</strong> eat smaller meals, stop at the first sign of fullness, and go easy on greasy, fried or very sweet foods. Bland foods help on injection days.</li><li><strong>Reflux:</strong> avoid lying down for a few hours after eating and skip large late-night meals.</li><li><strong>Constipation:</strong> drink plenty of water, add fiber gradually, and stay active. Ask your clinician before using laxatives regularly.</li><li><strong>Diarrhea or vomiting:</strong> prioritize fluids and electrolytes - dehydration is how minor side effects become serious ones.</li><li><strong>Fatigue:</strong> often a sign of eating too little. Aim for protein at every meal.</li></ul><p>Use your provider's messaging: services like <a href="/reviews/trimrx">trimrx</a> (unlimited check-ins), <a href="/reviews/ro">ro</a> (unlimited messaging) and <a href="/reviews/embody">embody</a> (care-team messaging) let you ask about side effects between visits, and <a href="/reviews/medvi">MEDVi</a> includes dietitian access for help eating well on a smaller appetite.</p>`,
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
        body: `<p>Price is one of the most common reasons people quit - and the trials suggest abrupt stops carry a real regain risk. Before stopping for financial reasons, look at cheaper ways to continue:</p><ul><li><strong>If you can commit for a year,</strong> <a href="/reviews/wellmedr">wellmedr</a> offers compounded semaglutide at $49/mo on its 12-month plan.</li><li><strong>If you want no commitment,</strong> <a href="/reviews/embody">embody</a> charges $69/mo for compounded semaglutide, month-to-month.</li><li><strong>If you have insurance,</strong> <a href="/reviews/ro">ro</a> can check whether brand-name medication is covered.</li></ul><p>Remember that compounded GLP-1s are not FDA-approved. Run the numbers in <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>, or compare every option in our <a href="/">GLP-1 provider rankings</a>.</p>${DISCLAIMER}`,
      },
    ],
  },
];
