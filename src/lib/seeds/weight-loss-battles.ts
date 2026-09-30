import type { BattleData } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// Head-to-head comparisons (battle pages) for thetopweightloss.com, served at
// the domain root (/<slug>). Operator-chosen matchups (Sep 2026):
//   - embody vs ro       - cheapest compounded month-to-month vs brand-name +
//                          insurance concierge
//   - altRx vs trimrx    - flat-price compounded vs custom-dosed compounded
//   - embody vs wellmedr - no-commitment $69 vs 12-month $49
//   - ro vs MEDVi        - brand-name + insurance vs all-inclusive compounded
//   - altRx vs MEDVi     - lean promo price vs dietitian + coaching bundled
// Every figure comes from the provider-published prices in the seed's facts
// (checked Sep 2026). Promo prices are labeled as promos. Compounded GLP-1s are
// not FDA-approved - the copy says so wherever they are compared to brands.
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-09-27";
const ADDED_SEP_30 = "2026-09-30";

export const weightLossBattles: BattleData[] = [
  {
    slug: "embody-vs-ro",
    provider1Id: "embody",
    provider2Id: "ro",
    title: "embody vs ro: Compounded GLP-1 for $69 or Brand-Name Through ro?",
    matchupLabel: "embody vs ro",
    subtitle: "The cheapest no-commitment compounded GLP-1 vs the biggest brand-name telehealth program",
    description:
      "embody vs ro compared: compounded semaglutide from $69/mo and tirzepatide from $119/mo vs ro's Wegovy, Zepbound and insurance concierge. Price, medications, support and who each fits.",
    intro:
      "These two programs solve the same problem in opposite ways. embody sells compounded semaglutide and tirzepatide at one flat, all-in monthly price with no commitment and 1-2 day shipping. ro sells only FDA-approved brand-name medication - Wegovy, Zepbound, Ozempic and the Foundaya pill - and charges a membership on top, but it will check your insurance and handle the prior authorization. Which one wins depends almost entirely on one question: will your insurance cover a brand-name GLP-1?",
    verdict:
      "embody wins for most people paying cash: $69/mo semaglutide or $119/mo tirzepatide, medication included, month-to-month and delivered in 1-2 days - a fraction of the brand-name self-pay price. ro is the better choice if your insurance may cover Wegovy or Zepbound, or if you only want an FDA-approved brand-name medication; its membership ($39 the first month, then $149/mo or about $74/mo annually) buys a coverage check, prior-authorization help and one of the most established telehealth operations in the US. Remember that compounded medications are not FDA-approved, and a licensed clinician decides what is appropriate for you.",
    verdictWinnerPoints: [
      "$69/mo semaglutide, $119/mo tirzepatide - medication included",
      "Month-to-month, cancel anytime",
      "Ships in 1-2 days, cold-chain packed",
    ],
    verdictLoserPoints: [
      "Only FDA-approved brand-name GLP-1s",
      "Insurance concierge handles coverage and prior authorization",
      "Largest, most established telehealth brand of the two",
    ],
    winnerId: "embody",
    categories: [
      {
        name: "Price & value",
        winner: "provider1",
        explanation:
          "Paying cash, embody is far cheaper: $69/mo for compounded semaglutide or $119/mo for tirzepatide, all-in. At ro the $149/mo membership (or about $74/mo on an annual plan) comes before medication, and brand-name medication without coverage costs far more. With good insurance coverage, ro's total can come out lower.",
        supportingPoints: [
          "embody: $69 semaglutide / $119 tirzepatide per month",
          "ro: $39 first month, then $149/mo membership + medication",
          "Insurance can flip the math in ro's favor",
        ],
      },
      {
        name: "Medication options",
        winner: "provider2",
        explanation:
          "ro offers the full FDA-approved lineup - Wegovy, Zepbound, Ozempic and the Foundaya pill. embody offers compounded semaglutide and tirzepatide as a weekly injection, plus a compounded daily oral option. Compounded drugs are not FDA-approved or reviewed for safety, effectiveness or quality.",
        supportingPoints: [
          "ro: Wegovy, Zepbound, Ozempic, Foundaya",
          "embody: compounded semaglutide and tirzepatide, injection or oral",
          "Only ro offers FDA-approved products",
        ],
      },
      {
        name: "Shipping speed",
        winner: "provider1",
        explanation:
          "embody ships in 1-2 days, cold-chain packed. ro's timing depends on the pharmacy and, with insurance, on how long the prior authorization takes - which can add days or weeks.",
        supportingPoints: ["embody: 1-2 day shipping", "ro: depends on pharmacy and insurance approval"],
      },
      {
        name: "Medical support",
        winner: "tie",
        explanation:
          "Both have licensed US clinicians review your intake and offer ongoing messaging. ro adds an optional video visit and labs when clinically indicated; embody keeps it simple with async care and care-team messaging between check-ins.",
        supportingPoints: ["Licensed clinicians at both", "ro: optional video and labs when indicated"],
      },
      {
        name: "Brand track record",
        winner: "provider2",
        explanation:
          "ro, founded in 2017, is one of the largest direct-to-consumer telehealth companies in the US. embody is newer; it is LegitScript-certified and uses state-licensed 503A pharmacies, but its 3.8/5 Trustpilot score (8,398 reviews) shows mixed experiences, mostly about shipping and support response.",
        supportingPoints: ["ro: established national brand", "embody: 3.8/5 on Trustpilot from 8,398 reviews"],
      },
    ],
    features: [
      { feature: "Starting price", provider1Value: "$69/mo, medication included", provider2Value: "$39 first month + medication", highlight: "provider1" },
      { feature: "Medications", provider1Value: "Compounded semaglutide & tirzepatide", provider2Value: "Wegovy, Zepbound, Ozempic, Foundaya", highlight: "none" },
      { feature: "Semaglutide", provider1Value: "$69/mo compounded (reg. $79)", provider2Value: "Wegovy / Ozempic - insurance or self-pay", highlight: "provider1" },
      { feature: "Tirzepatide", provider1Value: "$119/mo compounded (reg. $129)", provider2Value: "Zepbound - insurance or self-pay", highlight: "provider1" },
      { feature: "FDA-approved", provider1Value: "No - compounded", provider2Value: "Yes - brand-name only", highlight: "provider2" },
      { feature: "Oral option", provider1Value: "Compounded daily oral", provider2Value: "Foundaya pill", highlight: "both" },
      { feature: "Program fee", provider1Value: "None - medication included", provider2Value: "$39 first month, then $149/mo (~$74/mo annual)", highlight: "provider1" },
      { feature: "Insurance help", provider1Value: "Cash-pay (HSA/FSA)", provider2Value: "Insurance concierge + prior authorization", highlight: "provider2" },
      { feature: "Shipping", provider1Value: "1-2 days, cold-chain", provider2Value: "Varies by pharmacy", highlight: "provider1" },
      { feature: "Commitment", provider1Value: "Month-to-month", provider2Value: "Monthly or annual membership", highlight: "provider1" },
    ],
    updatedAt: UPDATED,
  },
  {
    slug: "altrx-vs-trimrx",
    provider1Id: "altrx",
    provider2Id: "trimrx",
    title: "altRx vs trimrx: Which Compounded GLP-1 Program Is Worth It?",
    matchupLabel: "altRx vs trimrx",
    subtitle: "A flat-price program with a brand-name shelf vs custom dosing with unlimited check-ins",
    description:
      "altRx vs trimrx compared: $89 vs $149/mo semaglutide, $149 vs $259/mo tirzepatide, dosing, shipping, support and altRx's 2026 FDA warning letter. Which compounded GLP-1 program fits you?",
    intro:
      "altRx and trimrx are both cash-pay compounded GLP-1 programs with no long commitment, and both keep their price flat as your dose rises. The differences are in the details: altRx is cheaper right now thanks to promo pricing and also sells brand-name medication, while trimrx costs more but builds in custom dosing and unlimited provider check-ins - and ships faster. There is also a trust question to weigh: altRx's parent company received an FDA warning letter in June 2026.",
    verdict:
      "altRx wins on price: $89/mo semaglutide and $149/mo tirzepatide at every dose (promo rates; regular $199 and $299), plus a brand-name shelf if you ever want to switch. trimrx is the better pick if you want custom or slower dose adjustments, unlimited check-ins with a provider and faster delivery, or if altRx's June 2026 FDA warning letter over misleading marketing claims gives you pause. Ask altRx how long the promo lasts before you sign up. Compounded medications are not FDA-approved, and a licensed clinician decides what is right for you.",
    verdictWinnerPoints: [
      "$89/mo semaglutide, $149/mo tirzepatide (promo)",
      "Same price at every dose",
      "Brand-name shelf and Buy Now, Pay Later",
    ],
    verdictLoserPoints: [
      "Custom dosing with unlimited provider check-ins",
      "Free tracked delivery, often next-day",
      "No FDA warning letter",
    ],
    winnerId: "altrx",
    categories: [
      {
        name: "Price & value",
        winner: "provider1",
        explanation:
          "At current promo pricing altRx is $60/mo cheaper on semaglutide ($89 vs $149) and $110/mo cheaper on tirzepatide ($149 vs $259). altRx's regular prices are $199 and $299, so if the promo ends the gap narrows or reverses - ask how long the promo lasts.",
        supportingPoints: [
          "altRx: $89 / $149 per month (promo)",
          "trimrx: $149 / $259 per month",
          "Both flat at every dose",
        ],
      },
      {
        name: "Medical support",
        winner: "provider2",
        explanation:
          "trimrx includes custom dosing and unlimited provider check-ins, which helps if you are sensitive to side effects and want to step up slowly. altRx runs a fast async intake with video when needed and a tracking app, but its support is leaner.",
        supportingPoints: ["trimrx: custom dosing, unlimited check-ins", "altRx: async, video when needed"],
      },
      {
        name: "Shipping speed",
        winner: "provider2",
        explanation: "trimrx offers free tracked delivery, often next-day. altRx ships free but takes 5-7 days.",
        supportingPoints: ["trimrx: often next-day", "altRx: 5-7 days"],
      },
      {
        name: "Medication options",
        winner: "provider1",
        explanation:
          "Both offer compounded semaglutide and tirzepatide and branded options. altRx publishes its brand-name prices (Ozempic $1,149, Zepbound $1,249, Wegovy $1,579 per month self-pay), which makes switching easy to plan.",
        supportingPoints: ["Compounded sema + tirz at both", "altRx lists brand-name prices openly"],
      },
      {
        name: "Transparency & trust",
        winner: "provider2",
        explanation:
          "altRx's parent, Trinity HealthCare Supply, LLC (dba altRx), received an FDA warning letter dated June 8, 2026 - the regulator took issue with claims and labels that made altRx's compounded semaglutide and tirzepatide appear FDA-approved. trimrx has no comparable action on record; it holds a 3.7/5 Trustpilot score from 5,670 reviews.",
        supportingPoints: ["altRx: June 2026 FDA warning letter", "trimrx: 3.7/5 on Trustpilot (5,670 reviews)"],
      },
    ],
    features: [
      { feature: "Starting price", provider1Value: "$89/mo (promo)", provider2Value: "$149/mo", highlight: "provider1" },
      { feature: "Medications", provider1Value: "Compounded sema & tirz + brand-name", provider2Value: "Compounded sema & tirz + branded", highlight: "both" },
      { feature: "Semaglutide", provider1Value: "$89/mo promo (reg. $199)", provider2Value: "$149/mo", highlight: "provider1" },
      { feature: "Tirzepatide", provider1Value: "$149/mo promo (reg. $299)", provider2Value: "$259/mo", highlight: "provider1" },
      { feature: "Same price at every dose", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
      { feature: "Dosing", provider1Value: "Standard titration", provider2Value: "Custom dosing", highlight: "provider2" },
      { feature: "Provider check-ins", provider1Value: "Async; video when needed", provider2Value: "Unlimited", highlight: "provider2" },
      { feature: "Shipping", provider1Value: "Free, 5-7 days", provider2Value: "Free, often next-day", highlight: "provider2" },
      { feature: "Brand-name shelf", provider1Value: "Ozempic, Zepbound, Wegovy", provider2Value: "Branded options available", highlight: "provider1" },
      { feature: "Commitment", provider1Value: "None - pause or cancel", provider2Value: "Month-to-month", highlight: "both" },
      { feature: "Payment", provider1Value: "Buy Now, Pay Later", provider2Value: "HSA/FSA eligible", highlight: "none" },
    ],
    updatedAt: UPDATED,
  },
  {
    slug: "embody-vs-wellmedr",
    provider1Id: "embody",
    provider2Id: "wellmedr",
    title: "embody vs wellmedr: $69 With No Strings or $49 With a Year's Commitment?",
    matchupLabel: "embody vs wellmedr",
    subtitle: "The two cheapest compounded GLP-1 programs we track - and the one trade-off that separates them",
    description:
      "embody vs wellmedr: $69/mo month-to-month semaglutide vs $49/mo on a 12-month plan. Tirzepatide, shipping speed, reviews and first-year cost compared.",
    intro:
      "If price is your first filter, you end up here. embody and wellmedr are the two lowest-priced compounded GLP-1 programs on our list, and both keep the price flat as your dose climbs. The difference is how they earn that price. embody asks for nothing up front: $69/mo semaglutide, cancel whenever. wellmedr goes lower - $49/mo - but only if you sign up for 12 months. On tirzepatide the picture flips, and wellmedr is cheaper with no plan needed. So the real question is not which is cheaper, but which kind of cheap fits you.",
    verdict:
      "embody takes this one for most first-time GLP-1 patients. Nobody knows in week one whether they will tolerate the medication, and $69/mo with no lock-in and 1-2 day delivery is the lower-risk way to start. wellmedr is the smarter buy if you already know a GLP-1 works for you: $49/mo semaglutide on the 12-month plan is the lowest ongoing price we track, its $89/mo tirzepatide undercuts embody's $119, and its 4.6/5 Trustpilot score (1,919 reviews) beats embody's 3.8 (8,398). Read wellmedr's refund and cancellation terms before committing. Compounded medications are not FDA-approved, and a licensed clinician decides what is right for you.",
    verdictWinnerPoints: [
      "$69/mo semaglutide with no commitment",
      "Ships in 1-2 days, cold-chain packed",
      "Daily oral option alongside injections",
    ],
    verdictLoserPoints: [
      "$49/mo semaglutide on the 12-month plan",
      "$89/mo tirzepatide - $30 less than embody",
      "4.6/5 on Trustpilot from 1,919 reviews",
    ],
    winnerId: "embody",
    categories: [
      {
        name: "Price & value",
        winner: "tie",
        explanation:
          "It depends on the drug and your appetite for commitment. Semaglutide: wellmedr is $49/mo on a 12-month plan (around $88 month-to-month) vs embody's $69/mo with no plan - so embody is cheaper unless you commit. Tirzepatide: wellmedr's $89/mo beats embody's $119/mo outright.",
        supportingPoints: [
          "Semaglutide: embody $69 flexible vs wellmedr $49 committed",
          "Tirzepatide: wellmedr $89 vs embody $119",
          "Both flat at every dose",
        ],
      },
      {
        name: "Flexibility",
        winner: "provider1",
        explanation:
          "embody is month-to-month from day one. wellmedr's headline semaglutide price needs a 12-month plan, which is a real risk if you stop early because of side effects or reach your goal sooner than expected.",
        supportingPoints: ["embody: cancel anytime", "wellmedr: 12 months for the $49 rate"],
      },
      {
        name: "Shipping speed",
        winner: "provider1",
        explanation: "embody ships in 1-2 days, cold-chain packed. wellmedr ships in 3-5 business days.",
        supportingPoints: ["embody: 1-2 days", "wellmedr: 3-5 business days"],
      },
      {
        name: "Customer experience",
        winner: "provider2",
        explanation:
          "wellmedr holds a 4.6/5 Trustpilot score from 1,919 reviews. embody sits at 3.8/5 from 8,398, with complaints clustering around shipping hiccups and slow support replies.",
        supportingPoints: ["wellmedr: 4.6/5 (1,919)", "embody: 3.8/5 (8,398)"],
      },
      {
        name: "Range beyond weight loss",
        winner: "provider2",
        explanation:
          "wellmedr also runs TRT, NAD+, hair and sexual-health programs and a GLP-1 + NAD+/B12 option. embody stays focused on GLP-1 weight loss, with a compounded daily oral as its extra.",
        supportingPoints: ["wellmedr: broader platform", "embody: oral option"],
      },
    ],
    features: [
      { feature: "Starting price", provider1Value: "$69/mo, no commitment", provider2Value: "$49/mo on 12-month plan", highlight: "provider2" },
      { feature: "Medications", provider1Value: "Compounded semaglutide & tirzepatide", provider2Value: "Compounded semaglutide & tirzepatide", highlight: "both" },
      { feature: "Semaglutide", provider1Value: "$69/mo (reg. $79)", provider2Value: "$49/mo (12-mo) / ~$88 month-to-month", highlight: "none" },
      { feature: "Tirzepatide", provider1Value: "$119/mo (reg. $129)", provider2Value: "$89/mo", highlight: "provider2" },
      { feature: "Same price at every dose", provider1Value: "Yes", provider2Value: "Yes", highlight: "both" },
      { feature: "Commitment", provider1Value: "Month-to-month", provider2Value: "12 months for lowest rate", highlight: "provider1" },
      { feature: "Shipping", provider1Value: "1-2 days, cold-chain", provider2Value: "3-5 business days", highlight: "provider1" },
      { feature: "Trustpilot", provider1Value: "3.8/5 (8,398)", provider2Value: "4.6/5 (1,919)", highlight: "provider2" },
      { feature: "Oral option", provider1Value: "Compounded daily oral", provider2Value: "GLP-1 + NAD+/B12 microdose", highlight: "none" },
    ],
    updatedAt: ADDED_SEP_30,
  },
  {
    slug: "ro-vs-medvi",
    provider1Id: "ro",
    provider2Id: "medvi",
    title: "ro vs MEDVi: Brand-Name GLP-1s With Insurance Help or All-In Compounded Care?",
    matchupLabel: "MEDVi vs ro",
    subtitle: "One program sells the real Wegovy and Zepbound. The other bundles a dietitian and coaching into $99",
    description:
      "MEDVi vs ro compared: all-inclusive compounded semaglutide at $99/mo (promo) with dietitian and coaching vs ro's Wegovy, Zepbound and insurance concierge. Cost, care and who each fits.",
    intro:
      "MEDVi and ro are both big names in online weight loss, but they are selling different things. ro is a brand-name shop: FDA-approved Wegovy, Zepbound, Ozempic and the Foundaya pill, plus a team that fights your insurer for coverage. MEDVi is an all-inclusive compounded program: semaglutide or tirzepatide, clinician visits, a dietitian and coaching for one monthly price. If you have coverage, this comparison is short. If you are paying cash, it gets interesting.",
    verdict:
      "ro wins if there is any chance your insurance covers a GLP-1 for weight loss: its concierge checks your benefits and handles prior authorization, and you get an FDA-approved medication. MEDVi is the better value for cash payers who want more than a prescription - $99/mo semaglutide or $166/mo tirzepatide (promo prices; regular $199 and $299) with a dietitian and coaching included and no membership fee. Ask MEDVi how long the promo lasts. Compounded medications are not FDA-approved, and a licensed clinician decides what is right for you.",
    verdictWinnerPoints: [
      "FDA-approved Wegovy, Zepbound, Ozempic and Foundaya",
      "Insurance concierge and prior-authorization help",
      "Established national telehealth brand",
    ],
    verdictLoserPoints: [
      "$99/mo semaglutide, medication included (promo)",
      "Dietitian access and coaching in the price",
      "No membership fee, no commitment",
    ],
    winnerId: "ro",
    categories: [
      {
        name: "Price & value",
        winner: "provider2",
        explanation:
          "Paying cash, MEDVi is far cheaper: $99/mo semaglutide or $166/mo tirzepatide at promo prices with medication, visits and coaching included. ro's membership alone is $149/mo after a $39 first month (about $74/mo on the annual plan), and brand-name medication without coverage costs well over $1,000 a month. With good insurance, ro can come out cheaper.",
        supportingPoints: [
          "MEDVi: all-in $99 / $166 (promo)",
          "ro: membership + medication billed separately",
          "Insurance can flip the math",
        ],
      },
      {
        name: "Medication options",
        winner: "provider1",
        explanation:
          "ro offers only FDA-approved brand-name GLP-1s, in injection or pill form. MEDVi's core program is compounded semaglutide and tirzepatide, which are not FDA-approved or reviewed for safety, effectiveness or quality.",
        supportingPoints: ["ro: Wegovy, Zepbound, Ozempic, Foundaya", "MEDVi: compounded sema & tirz"],
      },
      {
        name: "Support & coaching",
        winner: "provider2",
        explanation:
          "MEDVi bundles clinician visits, dietitian access and coaching into the monthly price. ro offers unlimited provider messaging and optional video, but no built-in nutrition coaching.",
        supportingPoints: ["MEDVi: dietitian + coaching included", "ro: messaging, optional video"],
      },
      {
        name: "Insurance help",
        winner: "provider1",
        explanation:
          "ro's insurance concierge checks coverage and handles prior authorizations. MEDVi is cash-pay (HSA/FSA accepted) and does not bill insurance.",
        supportingPoints: ["ro: coverage checks + PA", "MEDVi: HSA/FSA only"],
      },
      {
        name: "Brand track record",
        winner: "provider1",
        explanation:
          "ro has operated nationally since 2017 and is one of the largest direct-to-consumer telehealth companies. MEDVi is newer but has built a large review base - 4.3/5 on Trustpilot from 14,836 reviews.",
        supportingPoints: ["ro: since 2017", "MEDVi: 4.3/5 (14,836 reviews)"],
      },
    ],
    features: [
      { feature: "Starting price", provider1Value: "$39 first month + medication", provider2Value: "$99/mo all-in (promo)", highlight: "provider2" },
      { feature: "Medications", provider1Value: "Wegovy, Zepbound, Ozempic, Foundaya", provider2Value: "Compounded semaglutide & tirzepatide", highlight: "none" },
      { feature: "FDA-approved", provider1Value: "Yes - brand-name only", provider2Value: "No - compounded", highlight: "provider1" },
      { feature: "Program fee", provider1Value: "$149/mo (~$74/mo annual)", provider2Value: "None - included", highlight: "provider2" },
      { feature: "Dietitian & coaching", provider1Value: "Not included", provider2Value: "Included", highlight: "provider2" },
      { feature: "Insurance", provider1Value: "Concierge + prior authorization", provider2Value: "Cash-pay, HSA/FSA", highlight: "provider1" },
      { feature: "Commitment", provider1Value: "Monthly or annual membership", provider2Value: "None", highlight: "provider2" },
      { feature: "Shipping", provider1Value: "Varies by pharmacy", provider2Value: "Free", highlight: "none" },
    ],
    updatedAt: ADDED_SEP_30,
  },
  {
    slug: "altrx-vs-medvi",
    provider1Id: "altrx",
    provider2Id: "medvi",
    title: "altRx vs MEDVi: The Lower Price or the Fuller Program?",
    matchupLabel: "MEDVi vs altRx",
    subtitle: "Both run promo pricing on compounded GLP-1s - one strips it back, the other adds a dietitian and coaching",
    description:
      "MEDVi vs altRx: $99 vs $89/mo semaglutide, $166 vs $149/mo tirzepatide at promo prices. Support, regular prices, trust and who each program fits.",
    intro:
      "altRx and MEDVi sit close together on price, and both lean on promotional rates, so the headline numbers only tell part of the story. altRx is the lean option: flat pricing at every dose, a brand-name shelf and Buy Now, Pay Later. MEDVi charges about $10-$17 a month more at promo prices and spends it on people - clinician visits, a dietitian and coaching are in the price. There is also a trust gap to weigh: altRx's parent company received an FDA warning letter in June 2026.",
    verdict:
      "altRx edges it on price: $89/mo semaglutide and $149/mo tirzepatide at every dose (promo; regular $199 and $299), with brand-name medication on the same shelf if you switch later. MEDVi is the better program if you want support that goes beyond the prescription - its dietitian and coaching are included for $99 or $166 a month (promo; regular $199 and $299) - and it has a clean regulatory record and a 4.3/5 Trustpilot score from 14,836 reviews. At regular prices the two cost the same, which makes MEDVi's extras free. Ask both how long their promos last. Compounded medications are not FDA-approved, and a licensed clinician decides what is right for you.",
    verdictWinnerPoints: [
      "$89/mo semaglutide, $149/mo tirzepatide (promo)",
      "Flat price at every dose",
      "Brand-name shelf and Buy Now, Pay Later",
    ],
    verdictLoserPoints: [
      "Dietitian access and coaching included",
      "4.3/5 on Trustpilot from 14,836 reviews",
      "No FDA warning letter",
    ],
    winnerId: "altrx",
    categories: [
      {
        name: "Price & value",
        winner: "provider1",
        explanation:
          "At promo prices altRx is $10/mo cheaper on semaglutide ($89 vs $99) and $17/mo cheaper on tirzepatide ($149 vs $166). At regular prices they match exactly - $199 and $299 - so the gap only exists while the promos run.",
        supportingPoints: ["altRx: $89 / $149 promo", "MEDVi: $99 / $166 promo", "Regular: $199 / $299 at both"],
      },
      {
        name: "Support & coaching",
        winner: "provider2",
        explanation:
          "MEDVi includes clinician visits, a dietitian and coaching in the monthly price. altRx runs a fast async intake with video when needed and a tracking app, but no nutrition coaching.",
        supportingPoints: ["MEDVi: dietitian + coaching", "altRx: async + tracking app"],
      },
      {
        name: "Medication options",
        winner: "provider1",
        explanation:
          "Both prescribe compounded semaglutide and tirzepatide. altRx also publishes a brand-name shelf - Ozempic $1,149, Zepbound $1,249 and Wegovy $1,579 a month, self-pay - so switching to an FDA-approved drug is one click away.",
        supportingPoints: ["Compounded at both", "altRx: published brand-name prices"],
      },
      {
        name: "Transparency & trust",
        winner: "provider2",
        explanation:
          "In June 2026 the FDA sent altRx's parent company, Trinity HealthCare Supply, LLC, a warning letter objecting to claims and labels that made its compounded GLP-1s look FDA-approved. MEDVi has no comparable action on record and a 4.3/5 Trustpilot score from 14,836 reviews; altRx publishes no Trustpilot score.",
        supportingPoints: ["altRx: June 2026 FDA warning letter", "MEDVi: 4.3/5 (14,836)"],
      },
      {
        name: "Flexibility",
        winner: "tie",
        explanation:
          "Neither requires a commitment. altRx lets you pause and offers Buy Now, Pay Later; MEDVi has no membership fee and accepts HSA/FSA.",
        supportingPoints: ["altRx: pause anytime, BNPL", "MEDVi: no membership, HSA/FSA"],
      },
    ],
    features: [
      { feature: "Starting price", provider1Value: "$89/mo (promo)", provider2Value: "$99/mo (promo)", highlight: "provider1" },
      { feature: "Medications", provider1Value: "Compounded sema & tirz + brand-name", provider2Value: "Compounded semaglutide & tirzepatide", highlight: "provider1" },
      { feature: "Semaglutide", provider1Value: "$89/mo promo (reg. $199)", provider2Value: "$99/mo promo (reg. $199)", highlight: "provider1" },
      { feature: "Tirzepatide", provider1Value: "$149/mo promo (reg. $299)", provider2Value: "$166/mo promo (reg. $299)", highlight: "provider1" },
      { feature: "Dietitian & coaching", provider1Value: "Not included", provider2Value: "Included", highlight: "provider2" },
      { feature: "Shipping", provider1Value: "Free, 5-7 days", provider2Value: "Free", highlight: "both" },
      { feature: "Commitment", provider1Value: "None - pause or cancel", provider2Value: "None - no membership", highlight: "both" },
      { feature: "Trustpilot", provider1Value: "Not published", provider2Value: "4.3/5 (14,836)", highlight: "provider2" },
      { feature: "Payment", provider1Value: "Buy Now, Pay Later", provider2Value: "HSA/FSA accepted", highlight: "none" },
    ],
    updatedAt: ADDED_SEP_30,
  },
];
