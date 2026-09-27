import type { BattleData } from "@/lib/config";

// ─────────────────────────────────────────────────────────────────────────────
// Head-to-head comparisons (battle pages) for thetopweightloss.com, served at
// the domain root (/<slug>). Operator-chosen matchups (Sep 2026):
//   - embody vs Ro       - cheapest compounded month-to-month vs brand-name +
//                          insurance concierge
//   - AltRx vs TrimRx    - flat-price compounded vs custom-dosed compounded
// Every figure comes from the provider-published prices in the seed's facts
// (checked Sep 2026). Promo prices are labeled as promos. Compounded GLP-1s are
// not FDA-approved - the copy says so wherever they are compared to brands.
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-09-27";

export const weightLossBattles: BattleData[] = [
  {
    slug: "embody-vs-ro",
    provider1Id: "embody",
    provider2Id: "ro",
    title: "embody vs Ro: Compounded GLP-1 for $69 or Brand-Name Through Ro?",
    matchupLabel: "embody vs Ro",
    subtitle: "The cheapest no-commitment compounded GLP-1 vs the biggest brand-name telehealth program",
    description:
      "embody vs Ro compared: compounded semaglutide from $69/mo and tirzepatide from $119/mo vs Ro's Wegovy, Zepbound and insurance concierge. Price, medications, support and who each fits.",
    intro:
      "These two programs solve the same problem in opposite ways. embody sells compounded semaglutide and tirzepatide at one flat, all-in monthly price with no commitment and 1-2 day shipping. Ro sells only FDA-approved brand-name medication - Wegovy, Zepbound, Ozempic and the Foundaya pill - and charges a membership on top, but it will check your insurance and handle the prior authorization. Which one wins depends almost entirely on one question: will your insurance cover a brand-name GLP-1?",
    verdict:
      "embody wins for most people paying cash: $69/mo semaglutide or $119/mo tirzepatide, medication included, month-to-month and delivered in 1-2 days - a fraction of the brand-name self-pay price. Ro is the better choice if your insurance may cover Wegovy or Zepbound, or if you only want an FDA-approved brand-name medication; its membership ($39 the first month, then $149/mo or about $74/mo annually) buys a coverage check, prior-authorization help and one of the most established telehealth operations in the US. Remember that compounded medications are not FDA-approved, and a licensed clinician decides what is appropriate for you.",
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
          "Paying cash, embody is far cheaper: $69/mo for compounded semaglutide or $119/mo for tirzepatide, all-in. At Ro the $149/mo membership (or about $74/mo on an annual plan) comes before medication, and brand-name medication without coverage costs far more. With good insurance coverage, Ro's total can come out lower.",
        supportingPoints: [
          "embody: $69 semaglutide / $119 tirzepatide per month",
          "Ro: $39 first month, then $149/mo membership + medication",
          "Insurance can flip the math in Ro's favor",
        ],
      },
      {
        name: "Medication options",
        winner: "provider2",
        explanation:
          "Ro offers the full FDA-approved lineup - Wegovy, Zepbound, Ozempic and the Foundaya pill. embody offers compounded semaglutide and tirzepatide as a weekly injection, plus a compounded daily oral option. Compounded drugs are not FDA-approved or reviewed for safety, effectiveness or quality.",
        supportingPoints: [
          "Ro: Wegovy, Zepbound, Ozempic, Foundaya",
          "embody: compounded semaglutide and tirzepatide, injection or oral",
          "Only Ro offers FDA-approved products",
        ],
      },
      {
        name: "Shipping speed",
        winner: "provider1",
        explanation:
          "embody ships in 1-2 days, cold-chain packed. Ro's timing depends on the pharmacy and, with insurance, on how long the prior authorization takes - which can add days or weeks.",
        supportingPoints: ["embody: 1-2 day shipping", "Ro: depends on pharmacy and insurance approval"],
      },
      {
        name: "Medical support",
        winner: "tie",
        explanation:
          "Both have licensed US clinicians review your intake and offer ongoing messaging. Ro adds an optional video visit and labs when clinically indicated; embody keeps it simple with async care and care-team messaging between check-ins.",
        supportingPoints: ["Licensed clinicians at both", "Ro: optional video and labs when indicated"],
      },
      {
        name: "Brand track record",
        winner: "provider2",
        explanation:
          "Ro, founded in 2017, is one of the largest direct-to-consumer telehealth companies in the US. embody is newer; it is LegitScript-certified and uses state-licensed 503A pharmacies, but its 3.8/5 Trustpilot score (8,398 reviews) shows mixed experiences, mostly about shipping and support response.",
        supportingPoints: ["Ro: established national brand", "embody: 3.8/5 on Trustpilot from 8,398 reviews"],
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
    title: "AltRx vs TrimRx: Which Compounded GLP-1 Program Is Worth It?",
    matchupLabel: "AltRx vs TrimRx",
    subtitle: "A flat-price program with a brand-name shelf vs custom dosing with unlimited check-ins",
    description:
      "AltRx vs TrimRx compared: $89 vs $149/mo semaglutide, $149 vs $259/mo tirzepatide, dosing, shipping, support and AltRx's 2026 FDA warning letter. Which compounded GLP-1 program fits you?",
    intro:
      "AltRx and TrimRx are both cash-pay compounded GLP-1 programs with no long commitment, and both keep their price flat as your dose rises. The differences are in the details: AltRx is cheaper right now thanks to promo pricing and also sells brand-name medication, while TrimRx costs more but builds in custom dosing and unlimited provider check-ins - and ships faster. There is also a trust question to weigh: AltRx's parent company received an FDA warning letter in June 2026.",
    verdict:
      "AltRx wins on price: $89/mo semaglutide and $149/mo tirzepatide at every dose (promo rates; regular $199 and $299), plus a brand-name shelf if you ever want to switch. TrimRx is the better pick if you want custom or slower dose adjustments, unlimited check-ins with a provider and faster delivery, or if AltRx's June 2026 FDA warning letter over misleading marketing claims gives you pause. Ask AltRx how long the promo lasts before you sign up. Compounded medications are not FDA-approved, and a licensed clinician decides what is right for you.",
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
          "At current promo pricing AltRx is $60/mo cheaper on semaglutide ($89 vs $149) and $110/mo cheaper on tirzepatide ($149 vs $259). AltRx's regular prices are $199 and $299, so if the promo ends the gap narrows or reverses - ask how long the promo lasts.",
        supportingPoints: [
          "AltRx: $89 / $149 per month (promo)",
          "TrimRx: $149 / $259 per month",
          "Both flat at every dose",
        ],
      },
      {
        name: "Medical support",
        winner: "provider2",
        explanation:
          "TrimRx includes custom dosing and unlimited provider check-ins, which helps if you are sensitive to side effects and want to step up slowly. AltRx runs a fast async intake with video when needed and a tracking app, but its support is leaner.",
        supportingPoints: ["TrimRx: custom dosing, unlimited check-ins", "AltRx: async, video when needed"],
      },
      {
        name: "Shipping speed",
        winner: "provider2",
        explanation: "TrimRx offers free tracked delivery, often next-day. AltRx ships free but takes 5-7 days.",
        supportingPoints: ["TrimRx: often next-day", "AltRx: 5-7 days"],
      },
      {
        name: "Medication options",
        winner: "provider1",
        explanation:
          "Both offer compounded semaglutide and tirzepatide and branded options. AltRx publishes its brand-name prices (Ozempic $1,149, Zepbound $1,249, Wegovy $1,579 per month self-pay), which makes switching easy to plan.",
        supportingPoints: ["Compounded sema + tirz at both", "AltRx lists brand-name prices openly"],
      },
      {
        name: "Transparency & trust",
        winner: "provider2",
        explanation:
          "AltRx's parent, Trinity HealthCare Supply, LLC (dba AltRx), received an FDA warning letter dated June 8, 2026 over false or misleading claims about its compounded semaglutide and tirzepatide, including labeling that implied FDA approval. TrimRx has no comparable action on record; it holds a 3.7/5 Trustpilot score from 5,670 reviews.",
        supportingPoints: ["AltRx: June 2026 FDA warning letter", "TrimRx: 3.7/5 on Trustpilot (5,670 reviews)"],
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
];
