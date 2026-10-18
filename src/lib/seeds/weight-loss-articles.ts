import type { ArticleData } from "@/lib/config";

// Editorial articles for The Top Weight Loss. All provider prices and trial
// figures come from the verified facts sheet (checked September 2026) - update
// them here when provider pricing changes.
const DISCLAIMER = `<p><em>This article is general information, not medical advice. A licensed clinician should decide what treatment, if any, is right for you. Results vary.</em></p>`;

export const weightLossArticles: ArticleData[] = [
  {
    slug: "online-glp1-weight-loss-guide",
    title: "The Complete Guide to Online GLP-1 Weight Loss (2026)",
    description:
      "How online GLP-1 weight loss works in 2026: who qualifies, compounded vs brand-name, real prices from 8 providers, trial results, side effects and safety.",
    category: "Guides",
    readTime: "55 min read",
    publishedAt: "2026-10-18",
    updatedAt: "2026-10-18",
    heroColor: "#E8F1FD",
    author: "The Top Weight Loss Editorial Team",
    keyTakeaways: [
      "Wegovy (semaglutide) and Zepbound (tirzepatide) are FDA-approved for chronic weight management in adults with a BMI of 30 or more, or 27 or more with a weight-related condition; compounded semaglutide and tirzepatide are not FDA-approved.",
      "Average weight loss in trials was about 15% at 68 weeks on semaglutide 2.4 mg (STEP-1) and about 20.9% at 72 weeks on tirzepatide 15 mg (SURMOUNT-1); in the SURMOUNT-5 head-to-head trial, tirzepatide averaged about 20.2% vs 13.7% for semaglutide.",
      "Across the 8 online providers we rank, compounded semaglutide starts between $49/mo (wellmedr, 12-month plan) and $199/mo (SHED), and compounded tirzepatide between $89/mo and $299/mo; brand-name self-pay list prices run from $1,149 to $1,599 a month.",
      "In the STEP-1 extension, people who stopped semaglutide regained about two-thirds of the weight they had lost within a year.",
    ],
    sections: [
      {
        heading: "What is online GLP-1 weight loss?",
        body: `<p><strong>Online GLP-1 weight loss is a telehealth service in which a licensed clinician reviews your health information remotely and, if appropriate, prescribes a GLP-1 medication such as semaglutide or tirzepatide that is shipped to your door. You never have to sit in a waiting room, but you still need a real prescription from a real clinician.</strong></p>
<p>The model has grown quickly because it solves three practical problems at once. First, access: many people do not have a primary care doctor who is comfortable prescribing weight-loss medication, or they face weeks-long waits for an appointment. Second, price: online programs that use compounded medication charge a small fraction of the brand-name self-pay price. Third, convenience: intake, follow-up, dose changes and refills all happen through a website or app.</p>
<p>This guide is the long version of everything we have learned reviewing these services. It covers how the medications work, who qualifies, the difference between compounded and brand-name products, what treatment really costs in 2026, what results the clinical trials actually showed, the side effects to plan for, and how to tell a trustworthy provider from a risky one. We compare the eight programs we currently rank - <a href="/reviews/embody">embody</a>, <a href="/reviews/ro">ro</a>, <a href="/reviews/altrx">altRx</a>, <a href="/reviews/trimrx">trimrx</a>, <a href="/reviews/wellmedr">wellmedr</a>, <a href="/reviews/medvi">MEDVi</a>, <a href="/reviews/directmeds">DirectMeds</a> and <a href="/reviews/shed">SHED</a> - using their published prices and current Trustpilot data. If you only want the ranking, it lives on our <a href="/">homepage</a>; if you want to understand the decision, keep reading.</p>
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
        body: `<p><strong>Among the GLP-1 medications sold through the online programs we review, Wegovy (semaglutide) and Zepbound (tirzepatide) are the products FDA-approved specifically for chronic weight management. Ozempic and Mounjaro contain the same active ingredients but are approved for type 2 diabetes.</strong></p>
<table>
<thead><tr><th>Brand</th><th>Active ingredient</th><th>FDA-approved use</th><th>Form</th></tr></thead>
<tbody>
<tr><td>Wegovy</td><td>Semaglutide</td><td>Chronic weight management</td><td>Weekly injection pen</td></tr>
<tr><td>Zepbound</td><td>Tirzepatide</td><td>Chronic weight management</td><td>Weekly injection</td></tr>
<tr><td>Ozempic</td><td>Semaglutide</td><td>Type 2 diabetes</td><td>Weekly injection pen</td></tr>
<tr><td>Mounjaro</td><td>Tirzepatide</td><td>Type 2 diabetes</td><td>Weekly injection</td></tr>
<tr><td>Compounded semaglutide or tirzepatide</td><td>Semaglutide or tirzepatide</td><td>Not FDA-approved for any use</td><td>Vials, oral tablets or sublingual drops, depending on the pharmacy</td></tr>
</tbody>
</table>
<p>Ozempic and Mounjaro are sometimes prescribed "off-label" for weight loss, which is legal when a clinician judges it appropriate, but insurers are far less likely to pay for them when there is no diabetes diagnosis. Brand-name oral options also exist: <a href="/reviews/ro">ro</a>, for example, offers Foundaya as an oral pill alongside Wegovy, Zepbound and Ozempic.</p>
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
<tr><td>Self-pay price on our list</td><td>$1,149-$1,599 a month list price</td><td>$49-$199 a month for semaglutide; $89-$299 for tirzepatide</td></tr>
<tr><td>Insurance</td><td>May be covered, often with prior authorization</td><td>Almost always cash-pay; HSA/FSA often usable</td></tr>
<tr><td>Dose flexibility</td><td>Fixed pen strengths</td><td>Can be customized by the prescriber</td></tr>
<tr><td>Regulatory status</td><td>Stable</td><td>Restricted since the shortages ended; rules still evolving</td></tr>
</tbody>
</table>
<p>The brand-name list prices above come from the self-pay shelves at <a href="/reviews/altrx">altRx</a> (Ozempic $1,149, Zepbound $1,249, Wegovy $1,579 a month) and <a href="/reviews/wellmedr">wellmedr</a> (Ozempic $1,399, Zepbound $1,599 a month). The compounded range spans the eight programs we rank.</p>
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
<tr><td>Brand self-pay list (our list)</td><td>Wegovy $1,579/mo; Ozempic $1,149-$1,399/mo</td><td>Zepbound $1,249-$1,599/mo</td></tr>
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
<p>Remember that trial averages hide wide individual variation, and the trials used brand-name medication alongside diet and activity support. We go deeper on dosing, tolerability and cost in <a href="/articles/semaglutide-vs-tirzepatide">semaglutide vs tirzepatide</a>.</p>`,
      },
      {
        heading: "Oral vs injectable GLP-1s: which is better?",
        body: `<p><strong>Weekly injections are the best-studied way to take a GLP-1 for weight loss and are what most online programs prescribe. Oral pills and sublingual drops suit people who dislike needles, but they work differently and, for compounded versions, have far less independent evidence behind them.</strong></p>
<p>Your options online in 2026 fall into four groups:</p>
<ul>
<li><strong>Brand-name injections</strong> - Wegovy, Zepbound, Ozempic and Mounjaro. These are the products used in the major STEP and SURMOUNT trials.</li>
<li><strong>Brand-name oral pills</strong> - FDA-approved oral options exist; <a href="/reviews/ro">ro</a> offers Foundaya as an oral pill.</li>
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
        body: `<p><strong>Among the eight online providers we rank, compounded semaglutide starts between $49 and $199 a month, and compounded tirzepatide between $89 and $299 a month. Brand-name medication costs $1,149-$1,599 a month at self-pay list prices, but insurance can bring that down sharply.</strong></p>
<p>Here is every provider we rank, in ranking order, with its published prices, pricing model and current Trustpilot score. Promo prices are labeled with the regular price alongside.</p>
<table>
<thead><tr><th>Provider (our score)</th><th>Semaglutide</th><th>Tirzepatide</th><th>Model</th><th>Commitment</th><th>Shipping</th><th>Trustpilot</th></tr></thead>
<tbody>
<tr><td><a href="/reviews/embody">embody</a> (9.8)</td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Compounded, flat at every dose; weekly injection or daily oral option</td><td>Month-to-month</td><td>Free, 1-2 days, cold-chain</td><td>3.8 / 5 (9,582 reviews)</td></tr>
<tr><td><a href="/reviews/ro">ro</a> (9.6)</td><td colspan="2">Brand-name only (Wegovy, Zepbound, Ozempic, Foundaya). Membership $39 first month, then $149/mo, or about $74/mo on an annual plan; medication billed separately via insurance or manufacturer self-pay price</td><td>Membership + medication</td><td>Monthly or annual membership</td><td>Via pharmacy; not published</td><td>3.9 / 5 (7,083 reviews)</td></tr>
<tr><td><a href="/reviews/altrx">altRx</a> (9.3)</td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Compounded, flat at every dose; brand-name shelf</td><td>None - pause or cancel</td><td>Free, 5-7 days</td><td>No published profile</td></tr>
<tr><td><a href="/reviews/trimrx">trimrx</a> (9.1)</td><td>$149/mo ($140 discount applied)</td><td>$259/mo</td><td>Compounded, custom dosing, unlimited check-ins</td><td>Month-to-month</td><td>Free, tracked, often next-day</td><td>3.8 / 5 (5,393 reviews)</td></tr>
<tr><td><a href="/reviews/wellmedr">wellmedr</a> (8.9)</td><td>$49/mo on 12-month plan (about $88 month-to-month)</td><td>$89/mo, shipped every 4 weeks</td><td>Compounded, flat at every dose</td><td>12-month plan for lowest rate</td><td>3-5 business days</td><td>4.6 / 5 (2,181 reviews)</td></tr>
<tr><td><a href="/reviews/medvi">MEDVi</a> (8.7)</td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>All-inclusive: clinician visits, dietitian, coaching</td><td>None - no membership</td><td>Free; timing not published</td><td>4.3 / 5 (14,978 reviews)</td></tr>
<tr><td><a href="/reviews/directmeds">DirectMeds</a> (8.6)</td><td>$147/mo</td><td>$147/mo</td><td>Compounded, flat at every dose; injection or sublingual drops</td><td>None - no membership</td><td>Free, 1-2 days</td><td>4.6 / 5 (16,368 reviews)</td></tr>
<tr><td><a href="/reviews/shed">SHED</a> (8.4)</td><td>From $199/mo (20% off first month)</td><td>From $299/mo (20% off first month)</td><td>Compounded with coaching; 5%-in-120-days money-back guarantee</td><td>None</td><td>Home delivery included; timing not published</td><td>4.6 / 5 (1,137 reviews)</td></tr>
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
        body: `<p><strong>A year of compounded semaglutide costs roughly $588 to about $2,350 across the programs we rank, depending on the provider, commitment and whether promo pricing lasts. A year of compounded tirzepatide runs from about $1,068 to about $3,530. Brand-name medication at self-pay list prices costs roughly $13,800-$19,200 a year.</strong></p>
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
</tbody>
</table>
<p>Notes on reading the table:</p>
<ul>
<li><strong>Four-week billing adds a cycle.</strong> wellmedr ships tirzepatide every 4 weeks, and a 52-week year contains 13 four-week cycles. If a plan bills every 4 weeks, multiply by 13, not 12: 13 x $89 = $1,157, and 13 x $49 = $637 if semaglutide follows the same cadence. Confirm the billing cycle before you compare.</li>
<li><strong>wellmedr's tirzepatide term was not confirmed</strong> in the provider information we reviewed, so check whether the $89 rate requires a plan length.</li>
<li><strong>trimrx's $149 semaglutide price includes a $140 discount</strong> applied at signup; check what applies on later refills.</li>
<li><strong>SHED's prices are starting prices</strong> and may vary by plan.</li>
</ul>
<p><strong>Brand-name, no insurance.</strong> At altRx's self-pay list prices, 12 months of Wegovy is $18,948 (12 x $1,579) and 12 months of Zepbound is $14,988 (12 x $1,249). At wellmedr's brand shelf, Zepbound is $19,188 a year (12 x $1,599).</p>
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
        heading: "How do the 8 online GLP-1 providers we rank compare?",
        body: `<p><strong>Our 2026 ranking is embody (9.8), ro (9.6), altRx (9.3), trimrx (9.1), wellmedr (8.9), MEDVi (8.7), DirectMeds (8.6) and SHED (8.4). Each program has a clear strength and a clear trade-off; none is right for everyone.</strong></p>
<p><strong>1. <a href="/reviews/embody">embody</a> - best overall for cash-pay patients.</strong> Compounded semaglutide is $69 a month (regular $79) and tirzepatide $119 (regular $129), flat at every dose and month-to-month. Medication ships cold-chain in 1-2 days with free shipping, it offers a daily oral option alongside injections, and it is LegitScript-certified with medication from state-licensed 503A pharmacies. The trade-off is a mixed 3.8 / 5 Trustpilot score from 9,582 reviews, where complaints focus on shipping delays and support response times.</p>
<p><strong>2. <a href="/reviews/ro">ro</a> - best for insurance and brand-name medication.</strong> ro prescribes only FDA-approved brand-name GLP-1s - Wegovy, Zepbound, Ozempic and Foundaya - and its insurance concierge handles coverage checks and prior authorizations. Founded in 2017, it is one of the most established telehealth brands in the US. The membership is $39 for the first month, then $149 a month, or about $74 a month on an annual plan, with medication billed separately. Without coverage, the total is usually far above compounded programs. Trustpilot: 3.9 / 5 from 7,083 reviews.</p>
<p><strong>3. <a href="/reviews/altrx">altRx</a> - flat pricing plus a brand-name shelf.</strong> Compounded semaglutide is $89 a month and tirzepatide $149 on promo (regular $199 and $299), the same at every dose, with brand-name Ozempic, Zepbound and Wegovy available at self-pay prices in the same account. It offers Buy Now, Pay Later and no commitment, but delivery takes 5-7 days, it has no published Trustpilot profile, and its parent company received an FDA warning letter on June 8, 2026 (see the next section).</p>
<p><strong>4. <a href="/reviews/trimrx">trimrx</a> - best for custom dosing and provider access.</strong> trimrx builds treatment around individualized dosing with unlimited provider check-ins, an async intake with no appointment needed, and free tracked delivery that often arrives next-day. Semaglutide is $149 a month at every dose and tirzepatide $259, month-to-month and HSA/FSA eligible. It is light on coaching, available in most but not all states, and rated 3.8 / 5 from 5,393 reviews.</p>
<p><strong>5. <a href="/reviews/wellmedr">wellmedr</a> - lowest long-run price.</strong> Semaglutide is $49 a month on a 12-month plan (about $88 month-to-month) and tirzepatide $89, the same at every dose. Board-certified clinicians, availability in all 50 states and a 4.6 / 5 Trustpilot score from 2,181 reviews are strengths. Shipping takes 3-5 business days, and the lowest price depends on committing for a year.</p>
<p><strong>6. <a href="/reviews/medvi">MEDVi</a> - best all-inclusive support.</strong> Semaglutide is $99 a month and tirzepatide $166 on promo (regular $199 and $299), with clinician visits, dietitian access and coaching included, no membership fees and no commitment. Brand-name options are available through its clinicians. It is rated 4.3 / 5 from 14,978 reviews. After the promo, its regular prices are among the highest we track.</p>
<p><strong>7. <a href="/reviews/directmeds">DirectMeds</a> - simplest pricing.</strong> Semaglutide or tirzepatide costs $147 a month at every dose, as a weekly injection or sublingual drops, with free 1-2 day shipping and no membership. Its 4.6 / 5 score from 16,368 reviews is the largest review base on our list. It offers little beyond the prescription - no coaching, dietitian or brand-name shelf - and its semaglutide costs more than several rivals.</p>
<p><strong>8. <a href="/reviews/shed">SHED</a> - coaching with a guarantee.</strong> Semaglutide starts at $199 a month and tirzepatide at $299, with 20% off the first month, coaching included and a money-back guarantee if you do not lose 5% of your body weight in 120 days (conditions apply). It accepts HSA/FSA, has no commitment and is rated 4.6 / 5 from 1,137 reviews, but it is among the most expensive compounded options we track.</p>
<p>All seven compounded programs share the same caveat: their medication is not FDA-approved. Full details, pros and cons are in each linked review, and the side-by-side ranking is on our <a href="/">homepage</a>.</p>
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
<li>Compounded semaglutide starts between $49 and $199 a month across the eight providers we rank; compounded tirzepatide between $89 and $299. Compare the full year, not the first month, and note which prices are promotional.</li>
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
      "Self-pay brand-name prices run well over $1,000 a month (for example, altRx lists Wegovy at $1,579/mo), while compounded programs we track start at $49-$149/mo for semaglutide.",
      "Insurance can make brand-name medication far cheaper - ro checks coverage and handles prior authorizations for you.",
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
        body: `<p>Tirzepatide costs more almost everywhere. Compounded prices on our list:</p><ul><li><a href="/reviews/embody">embody</a>: semaglutide $69/mo, tirzepatide $119/mo (month-to-month)</li><li><a href="/reviews/wellmedr">wellmedr</a>: semaglutide $49/mo on a 12-month plan, tirzepatide $89/mo</li><li><a href="/reviews/altrx">altRx</a>: semaglutide $89/mo, tirzepatide $149/mo (promo rates; regular $199 and $299)</li><li><a href="/reviews/trimrx">trimrx</a>: semaglutide $149/mo, tirzepatide $259/mo</li><li><a href="/reviews/medvi">MEDVi</a>: semaglutide $99/mo, tirzepatide $166/mo (promo rates; regular $199 and $299)</li><li><a href="/reviews/directmeds">DirectMeds</a>: $147/mo for either, flat at every dose</li><li><a href="/reviews/shed">SHED</a>: from $199/mo semaglutide, $299/mo tirzepatide</li></ul><p>On brand-name self-pay, Zepbound is listed at $1,249-$1,599/mo and Wegovy at $1,579/mo on the platforms we track. With insurance, the picture depends entirely on your plan - <a href="/reviews/ro">ro</a> can check coverage for both. Full breakdown: <a href="/articles/real-cost-of-glp1-weight-loss">the real cost of GLP-1 weight loss</a>.</p>`,
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
        body: `<table><thead><tr><th>Provider</th><th>Semaglutide</th><th>Tirzepatide</th><th>Model</th><th>Commitment</th></tr></thead><tbody><tr><td><a href="/reviews/embody">embody</a></td><td>$69/mo (regular $79)</td><td>$119/mo (regular $129)</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/ro">ro</a></td><td colspan="2">Brand-name only; membership $39 first month, then $149/mo (~$74/mo annual) + medication</td><td>Membership + medication</td><td>Monthly or annual</td></tr><tr><td><a href="/reviews/altrx">altRx</a></td><td>$89/mo promo (regular $199)</td><td>$149/mo promo (regular $299)</td><td>Compounded, flat all doses</td><td>None - pause or cancel</td></tr><tr><td><a href="/reviews/trimrx">trimrx</a></td><td>$149/mo</td><td>$259/mo</td><td>Compounded, flat all doses</td><td>Month-to-month</td></tr><tr><td><a href="/reviews/wellmedr">wellmedr</a></td><td>$49/mo on 12-month plan (~$88 month-to-month)</td><td>$89/mo</td><td>Compounded, flat all doses</td><td>12-month plan for lowest rate</td></tr><tr><td><a href="/reviews/medvi">MEDVi</a></td><td>$99/mo promo (regular $199)</td><td>$166/mo promo (regular $299)</td><td>All-inclusive: visits, dietitian, coaching</td><td>None - no membership</td></tr><tr><td><a href="/reviews/directmeds">DirectMeds</a></td><td>$147/mo</td><td>$147/mo</td><td>Compounded, flat all doses; injection or drops</td><td>None - no membership</td></tr><tr><td><a href="/reviews/shed">SHED</a></td><td>From $199/mo (20% off month one)</td><td>From $299/mo (20% off month one)</td><td>Compounded, coaching included</td><td>None - HSA/FSA accepted</td></tr></tbody></table><p>Prices are provider-published figures checked in September 2026 and can change at any time. Compounded medications are not FDA-approved.</p>`,
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
        body: `<p>Semaglutide and tirzepatide slow how quickly your stomach empties and turn down appetite signals. That is how they work - and it is also why most side effects are digestive. Treatment starts at a low dose and is stepped up gradually, typically about every four weeks, so your body can adjust. The pattern most people notice: side effects flare for a few days after each increase, then settle.</p><p>Over 12 weeks you will usually move through your starting dose and one or two increases, as your clinician decides. Not everyone gets side effects, and severity varies a lot from person to person.</p>`,
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
