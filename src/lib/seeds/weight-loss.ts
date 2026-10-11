import type { SiteConfig } from "@/lib/config";
import { weightLossArticles } from "./weight-loss-articles";
import { weightLossBattles } from "./weight-loss-battles";

// ─────────────────────────────────────────────────────────────────────────────
// GLP-1 weight-loss vertical content - thetopweightloss.com
//
// Launch content for "The Top Weight Loss", an independent comparison site for
// online (telehealth) GLP-1 weight-loss providers in the US. Eight providers:
// embody (the anchor - lowest no-commitment compounded price, 1-2 day
// shipping), ro (brand-name, FDA-approved medication only, with an insurance
// concierge), altRx (flat price at every dose plus a brand-name shelf - carries
// a June 2026 FDA warning letter, disclosed in its review), trimrx (custom
// dosing, unlimited provider check-ins), wellmedr (lowest long-run price on
// a 12-month plan) and MEDVi (all-inclusive price with clinician visits,
// dietitian access and coaching bundled in); added Oct 2026: DirectMeds ($147
// flat for semaglutide or tirzepatide, injection or drops) and SHED (coaching
// plus a 5%-in-120-days money-back guarantee). Editorial is original and compliance-minded (YMYL): no
// guaranteed-results claims, compounded GLP-1s are never called FDA-approved,
// trial figures are cited as averages ("results vary"), and every review is
// clear that a licensed clinician decides whether treatment is appropriate.
//
// Facts checked (Sep 2026, provider-published figures - see FACTS sheet):
//  - embody: compounded semaglutide $69/mo (reg. $79), tirzepatide $119/mo
//    (reg. $129); month-to-month, no commitment; weekly injection plus a daily
//    oral (compounded) option; ships in 1-2 days, cold-chain, free shipping;
//    cash-pay (HSA/FSA usable); LegitScript-certified; 503A pharmacies;
//    Trustpilot 3.8 / 5 from 9,582 reviews (checked Oct 11, 2026; 11 recent
//    reviews copied verbatim from the profile into trustpilotReviews).
//  - ro: brand-name only (Wegovy, Zepbound, Ozempic, Foundaya); membership
//    $39 first month then $149/mo, or up to 50% off annually (~$74/mo);
//    medication billed separately (insurance or manufacturer self-pay price);
//    insurance concierge + prior authorizations; founded 2017.
//  - altRx: compounded semaglutide $89/mo promo (reg. $199), tirzepatide
//    $149/mo promo (reg. $299), flat at every dose; brand shelf Ozempic
//    $1,149, Zepbound $1,249, Wegovy $1,579 per month (self-pay list); ships
//    in 5-7 days; no commitment; Buy Now, Pay Later. FDA warning letter to
//    Trinity HealthCare Supply, LLC (dba altRx) dated June 8, 2026 over false
//    or misleading claims about its compounded semaglutide and tirzepatide,
//    including labeling that implied FDA approval.
//  - trimrx: compounded semaglutide $149/mo at every dose ($140 discount
//    applied), tirzepatide $259/mo; custom dosing; unlimited provider
//    check-ins; free tracked delivery (often next-day); month-to-month;
//    HSA/FSA eligible; most US states; Trustpilot 3.8 / 5 from 5,393 reviews
//    (operator-supplied Oct 11, 2026, with 11 verbatim reviews).
//  - wellmedr: compounded semaglutide $49/mo on the 12-month plan
//    (month-to-month advertised around $88/mo), tirzepatide $89/mo shipped
//    every 4 weeks, same price at every dose; GLP-1 + NAD+/B12 microdose
//    option; brand shelf Ozempic $1,399, Zepbound $1,599 per month; ships in
//    3-5 business days; all 50 states; Trustpilot 4.6 / 5 from 2,181 reviews
//    (operator-supplied Oct 11, 2026, with 11 verbatim reviews).
//  - MEDVi: compounded semaglutide $99/mo promo (reg. $199), tirzepatide
//    $166/mo promo (reg. $299); all-inclusive - clinician visits, dietitian
//    access and coaching included; free shipping; no membership or hidden
//    fees; no commitment; HSA/FSA accepted; licensed US clinicians; brand-name
//    options via the clinician; Trustpilot 4.3 / 5 from 14,978 reviews.
//
// PLACEHOLDERS / OPERATOR TO VERIFY:
//  - Promo prices (embody, altRx, trimrx discount code, MEDVi) are time-limited -
//    re-check each checkout before relying on them.
//  - wellmedr's month-to-month semaglutide price is "advertised around $88/mo"
//    and its tirzepatide $89/mo commitment term was not confirmed - copy says
//    so.
//  - MEDVi: brand-name prices, delivery times and state coverage were not
//    provided - none are asserted.
//  - ro's medication prices are not asserted (insurance / manufacturer
//    self-pay pricing varies). ro Trustpilot 3.9 / 5 from 7,083 (operator-supplied Oct 11, 2026, with 12 verbatim reviews); no altRx Trustpilot figure is set.
//  - State coverage (`excludedStates`) is not set for any provider; trimrx is
//    "most US states" - fill in once confirmed.
//  - The compounding legal landscape is evolving; copy tells readers to check
//    with their provider rather than making definitive legal claims.
//  - No trustpilotReviews arrays - add only real, attributable reviews.
//  - battles live in ./weight-loss-battles (operator-chosen matchups).
// ─────────────────────────────────────────────────────────────────────────────

const UPDATED = "2026-09-27";
const ADDED = "2026-10-11";

export const weightLossConfig: SiteConfig = {
  siteName: "The Top Weight Loss",
  disclosureText:
    "Some providers featured on this site may compensate us. This may affect the order and placement of listings but does not influence our editorial ratings or reviews.",

  hero: {
    backgroundImageUrl: "",
    imageAlt: "GLP-1 weight loss injection pen",
    updatedLabel: "Last Updated: September 2026",
    h1: "The Top GLP-1 Weight Loss Programs of 2026",
    h2: "Real prices. Fine print decoded. Zero hype.",
    description:
      "We looked past the promo rates at 8 licensed telehealth programs - semaglutide from $49/mo, tirzepatide from $89/mo, or brand-name Wegovy and Zepbound with insurance help.",
  },

  sidebar: {
    socialProofNumber: "12,600+",
    socialProofText: "people compared GLP-1 providers on our platform this month.",
    secureTitle: "Secure & Confidential",
    secureText:
      "Every provider we feature uses secure, private systems to protect your health information.",
    featuredImageUrl: "/sidebar-featured.webp",
    featuredImageAlt: "embody - online GLP-1 weight loss treatment",
    featuredImageLink: "#",
    // Omit "featuredImage" until we have a weight-loss-specific banner
    // creative. Show the content-rich blocks instead.
    blockOrder: ["socialProof", "secureBadge", "editorialReviews", "rankingMethodology", "disclosure"],
  },

  cardSocialProof: {
    number: "12,600+",
    text: "people compared GLP-1 providers this month",
  },

  ranking: {
    providerOrder: ["embody", "ro", "altrx", "trimrx", "wellmedr", "medvi", "directmeds", "shed"],
    positions: [
      { score: 9.8, starRating: 5, label: "Exceptional", badge: "Our Top Pick" },
      { score: 9.6, starRating: 5, label: "Excellent" },
      { score: 9.3, starRating: 5, label: "Excellent" },
      { score: 9.1, starRating: 4, label: "Excellent" },
      { score: 8.9, starRating: 4, label: "Very Good" },
      { score: 8.7, starRating: 4, label: "Very Good" },
      { score: 8.6, starRating: 4, label: "Very Good" },
      { score: 8.4, starRating: 4, label: "Very Good" },
    ],
  },

  providers: [
    {
      id: "embody",
      name: "embody",
      tagline:
        "Compounded semaglutide and tirzepatide at a flat monthly price - no commitment, shipped in 1-2 days",
      logo: "/logos/embody.svg",
      smallLogo: "/logos/embody-icon.svg",
      highlights: [
        "Semaglutide $69/mo, tirzepatide $119/mo",
        "Month-to-month - cancel anytime",
        "Ships in 1-2 days, cold-chain packed",
        "LegitScript-certified clinicians",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1548&aff_id=12904",
      ctaText: "Visit Site",
      trustpilotRating: "3.8",
      trustpilotReviewCount: "9,582",
      trustpilotReviews: [
        { title: "Jayvee is amazing", text: "Jayvee is amazing. I absolutely love that she follows up and checks on me .", name: "Dyniese Garcia", location: "US", rating: 5, date: "Oct 5, 2026" },
        { title: "Excellent quick service", text: "Excellent quick service", name: "Nikita Prewitt", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "It was the provider that made it great", text: "It was the provider that made it great! I’m just hoping that I start receiving my medication on time so that I can take my injections on injection day and not have to take them a week late sometimes as late as two weeks it’s kinda hard to stay on track when you do not get your medication on time", name: "Cathy Traverse", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "At first", text: "At first, it was a little bit Rocky, took a long time to get my first order. But they had a guy named luis he called me right away with concerns about the way things happened. For me, took some money off my bill For me and told me to call him if I have any more problems and he's been great This whole entire time. He's part of the reason why I'm staying with the company. They do a good job making sure the customers are taken care of. When I placed my order for my second months, medicine the medicine came in there was no delay. It only took 5 days, so all in all. I'll have to say I'm super happy with this company.", name: "Vincent Argenio", location: "US", rating: 5, date: "Oct 4, 2026" },
        { title: "Good experience with my provider", text: "Good experience with my provider. Feeling confident about the use of this product.", name: "Lela Brown", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "", text: "The provider was helpful", name: "Cory Madsen", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Great", text: "I enjoyed talking to the provider and talking about the plain is great", name: "PAMELA Johnson", location: "US", rating: 5, date: "Oct 8, 2026" },
        { title: "Additional information was provided...", text: "Additional information was provided based on my comments, like increasing protein and adding iron supplement", name: "Leslie Touchberry", location: "US", rating: 5, date: "Sep 28, 2026" },
        { title: "Awesome", text: "Great visit!", name: "Jana Baird", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Providers and customers service agents...", text: "Providers and customers service agents are great!", name: "Maria A Chavez", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "SUCCESS", text: "I believe I am finally on the right path with Karl, my Acct Mgr, & Tia, my coach. They are a must have when embarking on this journey to my health and weight loss success. Thank you Embody!", name: "Jan Anderson", location: "US", rating: 5 },
      ],
    },
    {
      id: "ro",
      name: "ro",
      tagline:
        "Brand-name, FDA-approved GLP-1s only - Wegovy, Zepbound, Ozempic and Foundaya - with an insurance concierge",
      logo: "/logos/roweightlosslogo.png",
      smallLogo: "/logos/roweightlosslogo.png",
      highlights: [
        "FDA-approved brand-name medication only",
        "Insurance checks & prior authorizations handled",
        "Membership $39 first month",
        "Unlimited provider messaging",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1662&aff_id=12904",
      ctaText: "Visit Site",
      trustpilotRating: "3.9",
      trustpilotReviewCount: "7,083",
      trustpilotReviews: [
        { title: "I am very happy with my experience so...", text: "I am very happy with my experience so far with ro . I look forward to my progress in weight loss journey..thank you sincerely Dawn Pollard", name: "Dawn Pollard", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "Great support", text: "Great support, doctor wanted to ensure dosage was correct to start. Pticing is less than competitor.", name: "Annette Spradling", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "The process was a little confusing", text: "The process was a little confusing. I am waiting on my prescription", name: "Leslie Flores", location: "US", rating: 4, date: "Oct 10, 2026" },
        { title: "Quick Response and Receipt of Product", text: "Quick responses during setup and I received my package within three days. Price is very reasonable too.", name: "Carolynn Saris", location: "US", rating: 5, date: "Oct 8, 2026" },
        { title: "Getting to have access to help with...", text: "Getting to have access to help with management always there to answer questions", name: "Karen Cready", location: "US", rating: 5, date: "Oct 1, 2026" },
        { title: "Seamless Process", text: "The process was quick and efficient. It made the process easy and cheaper than other programs.", name: "Karen Brown", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "", text: "App was easy to use and navigate.", name: "Jennifer", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "I haven't got my pills yet so I will...", text: "I haven't got my pills yet so I will let you know how they are working", name: "Scott Cleveland", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "I ordered the RO 2 days ago and have...", text: "I ordered the RO 2 days ago and have already gotten my product. What a quick and painless process. Here’s hoping to lose some weight.", name: "Jennifer", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "I like that I am getting my Zepbound for $50 less", text: "I like that I am getting my Zepbound for less than I have been paying out of pocket, but by the time I paid the fee then got to payment I am only paying $50 less than the $499 I have been paying. The ads make it look like the price will be between $100-$200 total. I feel ad was deceptive, but went for it as it was less.", name: "Lori Vining", location: "US", rating: 3, date: "Oct 9, 2026" },
        { title: "I’m just in the beginning stages but so...", text: "I’m just in the beginning stages but so far it’s been a smooth process. I look forward to starting my treatment!", name: "Sara Oviedo", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Process and instructions are super...", text: "Process and instructions are super easy. All my questions were answered. Delivery was quick. 1st week. So far so good.", name: "customer", location: "US", rating: 5 },
      ],
    },
    {
      id: "altrx",
      name: "altRx",
      tagline:
        "One flat price at every dose for compounded GLP-1s, plus a brand-name shelf in the same account",
      logo: "/logos/altrx.svg",
      smallLogo: "/logos/altrx-icon.svg",
      highlights: [
        "Semaglutide $89/mo, tirzepatide $149/mo (promo)",
        "Same price at every dose",
        "Brand-name Wegovy, Zepbound & Ozempic available",
        "Buy Now, Pay Later available",
      ],
      affiliateUrl:
        "https://altrx.com/glp1/offer-v9?sub1=1952&utm_source=partners&utm_campaign=id_21&utm_affiliate=21&uid=95&oid=108&affid=21&pub=1952&oid2=5043&affid2=1952",
      ctaText: "Visit Site",
    },
    {
      id: "trimrx",
      name: "trimrx",
      tagline:
        "Custom-dosed compounded GLP-1s with unlimited provider check-ins and fast, free tracked delivery",
      logo: "/logos/trimrx.svg",
      smallLogo: "/logos/trimrx-icon.svg",
      highlights: [
        "Semaglutide $149/mo at every dose",
        "Custom dosing by your provider",
        "Unlimited provider check-ins",
        "Delivery often next-day",
      ],
      affiliateUrl:
        "https://trimrx.com/glp1/offer-v4-meta?catalog=winter&discount=winter140&offer_url_id=29&oid=1&affid=40&oid2=4461&affid2=1952",
      ctaText: "Visit Site",
      trustpilotRating: "3.8",
      trustpilotReviewCount: "5,393",
      trustpilotReviews: [
        { title: "Signup was easy and the price beat a...", text: "Signup was easy and the price beat a few places I checked, my medication hasn't arrived yet. For now I can only rate the ordering part.", name: "Tiffany Luwe", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Down 14 lbs so far and my appetite has...", text: "Down 14 lbs so far and my appetite has dropped a lot", name: "Susan Kovi", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Approved the same day and had the...", text: "Approved the same day and had the medication two days later really quick process from start to finish.", name: "Vickie Shelton", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "I got prompt answers to my concerns", text: "I got prompt answers to my concerns, and shipping was fast.", name: "Najera Bennett", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "For the past few months", text: "For the past few months, my medication has arrived on time ,I have been happy with the care and service too.", name: "Courtney Gruppen", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "No problems getting my GLP 1 order...", text: "No problems getting my GLP 1 order through the website.", name: "Leemurphy Nino", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "My insurance denied ozempic again", text: "My insurance denied ozempic again, so with my endocrinologist on board I decided to try compounded semaglutide through trimrx. I've been on it since August and my A1C has gone from 7.2 to 6.5, plus I've been losing weight. My doctor was really happy with the change and getting started with trimrx was pretty straightforward.", name: "Leslie", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "I'm on 0.5mg semaglutide and only had a...", text: "I'm on 0.5mg semaglutide and only had a bit of nausea the first week, the biggest surprise has been having more energy and sleeping better too.", name: "Loretta Rigsby", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "The medication has been working well...", text: "The medication has been working well for me and deliveries have always shown up on time. My only issue is that I had to follow up twice before getting an answer about my dose, so I'm sticking with 4 stars for now.", name: "Elnora Watkins", location: "US", rating: 4, date: "Oct 10, 2026" },
        { title: "Meds have been working well and...", text: "Meds have been working well and deliveries have always been on time.", name: "Robert Vaughn", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "6 weeks in and I'm down 15 lbs on...", text: "6 weeks in and I'm down 15 lbs on semaglutide", name: "Ronald Franzer", location: "US", rating: 5, date: "Oct 10, 2026" },
      ],
    },
    {
      id: "wellmedr",
      name: "wellmedr",
      tagline:
        "The lowest long-run compounded GLP-1 price we found - semaglutide from $49/mo on a 12-month plan",
      logo: "/logos/wellmedr.svg",
      smallLogo: "/logos/wellmedr-icon.svg",
      highlights: [
        "Semaglutide $49/mo (12-month plan)",
        "Tirzepatide $89/mo, same price every dose",
        "Board-certified clinicians",
        "Available in all 50 states",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1593&aff_id=12905",
      ctaText: "Visit Site",
      trustpilotRating: "4.6",
      trustpilotReviewCount: "2,181",
      trustpilotReviews: [
        { title: "The experience is wonderful.", text: "The experience is wonderful. Their's so many companies this one is by far the best they make it so convenient for you to receive your order I've had no problems at all.", name: "Missymoo", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "I have had such a great Customer...", text: "I have had such a great Customer Service experience with Wellmdr. Ryan was awesome and helped me in every way possible. I accidentally threw away the vials when I received the order and he helped me come up with a solution to my problem. I'm very pleased with this company and excited to start taking the medication. 10 out of 10 recommendation. Thank you Wellmedr.", name: "Kari Hensley Hall", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Great customer service and affordable...", text: "Great customer service and affordable program. Everything is going really well. I can recommend WellMedr 🙂", name: "Michael D.", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "I had a wonderful Customer service rep...", text: "I had a wonderful Customer service rep named Lana.she fixed every question I had and made the experience so easy. I was so grateful that all went well. Lana was so knowledgeable and caring. She should definitely get a raise.", name: "Ann Ward", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Customer Service", text: "Paige helped me quickly by changing a delivery date. Very fast and kind service.", name: "gwenn devereaux", location: "US", rating: 5 },
        { title: "Michael John was very kind and patient...", text: "Michael John was very kind and patient with me. He answered all of my questions and did not rush me! He made me feel very comfortable", name: "Kelly", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Honestly I’ve had a good experience", text: "Honestly I’ve had a good experience, i ordered Oct 1 got my shipment October 7th, customer service replies to me, they even moved my payment date to better accommodate my income and pay days!! I can’t thank them enough for that. I’m a single mom from Ohio, my doctors said this can help my false brain tumor symptoms plus I need to lose some weight so I’m grateful for this company making it affordable even for people on a fixed income.", name: "Savannah James", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "", text: "Ashton Jone was extremely helpful !", name: "N/A", location: "US", rating: 5 },
        { title: "Dylan answered all my questions quickly...", text: "Dylan answered all my questions quickly and professionally", name: "Gail Rosencranz", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "My experience with Brittany was great...", text: "My experience with Brittany was great and she was professional and helpful, I left the program because my first order was messed up and I had to reach out several times to get an answer, I’m just worried if month 1 was so late, is it always going to be? But the resolution was flawless thanks to Brittany", name: "Debbie", location: "US", rating: 4, date: "Oct 10, 2026" },
        { title: "They resolved my problem with a nice...", text: "They resolved my problem with a nice attitude she was very helpful", name: "Yesenia Valladarez", location: "US", rating: 5 },
      ],
    },
    {
      id: "medvi",
      name: "MEDVi",
      tagline:
        "All-inclusive compounded GLP-1 care - clinician visits, dietitian access and coaching bundled into one monthly price",
      logo: "/logos/medvi-wordmark.png",
      smallLogo: "/logos/medviweightlosslogo.webp",
      highlights: [
        "Semaglutide $99/mo, tirzepatide $166/mo (promo)",
        "Clinician visits, dietitian & coaching included",
        "No membership or hidden fees",
        "No commitment, HSA/FSA accepted",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1265&aff_id=12904",
      ctaText: "Visit Site",
      trustpilotRating: "4.3",
      trustpilotReviewCount: "14,978",
      trustpilotReviews: [
        { title: "I luv how they keep up with my health...", text: "I luv how they keep up with my health and well-being. I've had nothing but great experience with all I've spoken with.", name: "Deborah Thompson", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "5-star experience", text: "The provider, Monique, was very personable, professional and helpful.", name: "Gigi", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Nestor was patient and answered all my...", text: "Nestor was patient and answered all my questions thoroughly.", name: "Heidi", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Responding to MEDVi", text: "I don’t want to send a review. I jsit wanted to compliment my medical person to MEDVi.", name: "Wendy Nickels", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "", text: "She was helpful and sweet", name: "Julia Bornstein", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "Super pleasant and answered all of my...", text: "Super pleasant and answered all of my questions", name: "Winter Riffle", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "It was good but could have been more...", text: "It was good but could have been more informative", name: "Anthony Bruno", location: "US", rating: 4, date: "Oct 9, 2026" },
        { title: "Talking one-on-one to someone who...", text: "Talking one-on-one to someone who reviewed my current data. I was glad to have the time and explanation of recommendation.", name: "Debbie", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "Perfect!", text: "She was very helpful, knowledgeable and friendly. AAA+++", name: "Scott", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "The representative", text: "The representative, Stephanie, was professional and pleasant. Please acknowledge her great work!", name: "Elizabeth Smith", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "", text: "The RN herself!", name: "Happy Customer", location: "US", rating: 5, date: "Oct 9, 2026" },
        { title: "She had great advice on keeping track...", text: "She had great advice on keeping track with my weight loss", name: "Nancy Kuhnz", location: "US", rating: 5, date: "Oct 8, 2026" },
      ],
    },
    {
      id: "directmeds",
      name: "DirectMeds",
      tagline:
        "One flat price for compounded semaglutide or tirzepatide - $147/month at every dose, as an injection or sublingual drops",
      logo: "/logos/directmeds.svg",
      smallLogo: "/logos/directmeds-icon.svg",
      highlights: [
        "Semaglutide or tirzepatide - $147/mo flat",
        "Same price at every dose",
        "Injection or sublingual drops",
        "Free 1-2 day shipping",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1304&aff_id=12904",
      ctaText: "Visit Site",
      trustpilotRating: "4.6",
      trustpilotReviewCount: "16,368",
      trustpilotReviews: [
        { title: "Very happy with direct meds", text: "Very happy with direct meds", name: "joe tantillo", location: "US", rating: 5, date: "Oct 4, 2026" },
        { title: "Caller was great very supportive and...", text: "Caller was great very supportive and listened", name: "Pat Snoddy", location: "US", rating: 5, date: "Oct 7, 2026" },
        { title: "Portia Morgan was really quick to...", text: "Portia Morgan was really quick to answer questions I had...", name: "Melinda Martin", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "I'm frustrated because l can't access...", text: "I'm frustrated because l can't access the patient portal, other than that I've had no issues.", name: "customer", location: "US", rating: 5, date: "Oct 11, 2026" },
        { title: "The customer service person was very...", text: "Onika Williams was very helpful and informative about my subscription and reassured me that my subscription was still active. Very pleasant to chat with.", name: "Paula", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "The person I spoke to today was...excellent", text: "The person I spoke to today was excellent.. personable, courteous. She explained the error and corrected it immediately so my order could go out.", name: "Elizabeth Cubero", location: "US", rating: 5 },
        { title: "Person helped me with password and...", text: "Person helped me with password and getting into portal", name: "Rebekah White", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Very helpful with my recent medical...", text: "Very helpful with my recent medical intake and order.", name: "Greg Friend", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Tony took care of my issues that I was...", text: "Tony took care of my issues that I was having with the site.", name: "Craig Morse", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "Marvin handled my request and was...", text: "Marvin handled my request and was polite and professional.", name: "Jeanie Brenneman", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "", text: "April was alot of help", name: "cinthia coss", location: "US", rating: 5, date: "Oct 10, 2026" },
        { title: "", text: "customer’s service excellent help.", name: "Rosemary nesbitt", location: "US", rating: 5, date: "Oct 3, 2026" },
      ],
    },
    {
      id: "shed",
      name: "SHED",
      tagline:
        "Compounded GLP-1 with coaching included - and a money-back guarantee if you don't lose 5% of your weight in 120 days",
      logo: "/logos/shed.svg",
      smallLogo: "/logos/shed-icon.svg",
      highlights: [
        "Semaglutide from $199/mo, tirzepatide from $299/mo",
        "20% off your first month",
        "Coaching included",
        "5%-in-120-days guarantee",
      ],
      affiliateUrl: "https://track.revoffers.com/aff_c?offer_id=1516&aff_id=12904",
      ctaText: "Visit Site",
      trustpilotRating: "4.6",
      trustpilotReviewCount: "1,137",
      trustpilotReviews: [
        { title: "Great experience with Shed!", text: "Great experience with Shed so far! The prescription is working better than expected and Shed’s customer service promptly assisted me when FedEx delivered my order to the wrong house. Very happy with this company!", name: "Alycia McNeill", location: "US", rating: 5, date: "Sep 24, 2026" },
        { title: "great customer service", text: "Gao helped me with several issues very quickly. Very personable too. And I love Shed too", name: "BAG", location: "US", rating: 5, date: "Sep 23, 2026" },
        { title: "Your communications are excellent", text: "Your communications are excellent! Ethan was quick to reply to my request for clarifications. Recommended!", name: "BB", location: "US", rating: 5, date: "Sep 15, 2026" },
        { title: "Savannah - real person ⭐⭐⭐⭐⭐", text: "The app & chat function are a little clunky, but improving. Once you start emailing (not chatting) with a real person, Savannah was the best. Another agent told me I was SOL, but Savannah went a step further and resolved my issue.", name: "R M", location: "US", rating: 5, date: "Sep 15, 2026" },
        { title: "It was a nice personal touch to receive...", text: "It was a nice personal touch to receive a phone call from a real person instead of a robo call. Thank you for the kind follow up. Kind Regards, Maria Magness", name: "Maria Magness", location: "US", rating: 5, date: "Sep 4, 2026" },
        { title: "Trinity was absolutely amazing", text: "Trinity was absolutely amazing! I accidentally created 2 accounts and thought the issue was revolved from previous interactions with customer service but she assisted me the whole way through and made sure I didn’t loose anything that was owed to me and also set up my next follow up appointment. She is fantastic please reward her for this!", name: "Victoria Conley", location: "US", rating: 5, date: "Sep 2, 2026" },
        { title: "ShedRx has been awesome", text: "ShedRx has been awesome! Their service is super-fast, and they even changed my refill date so I wouldn't miss my shot days. Anytime I have an issue, a member support person reaches out right away to help.", name: "Michelle Williams", location: "US", rating: 5, date: "Sep 2, 2026" },
      ],
    },
  ],

  reviews: [
    {
      slug: "embody",
      providerId: "embody",
      shortSummary:
        "The best all-round value in online GLP-1 care: compounded semaglutide at $69/month and tirzepatide at $119/month, month-to-month with no commitment, shipped cold-chain in 1-2 days.",
      reviewIntro:
        "embody is a cash-pay GLP-1 telehealth service built around two things most people care about first: price and speed. A licensed US clinician reviews your online intake, and if a GLP-1 is appropriate, compounded semaglutide or tirzepatide ships cold-chain packed within 1-2 days. There is no annual contract to sign - pricing is flat and month-to-month, so you can stop at any point. It is also LegitScript-certified and sources medication from state-licensed 503A compounding pharmacies. The catch is the one that applies to every compounded program: these medications are not FDA-approved, and the FDA does not review them for safety, effectiveness or quality. This review covers what embody costs, how it works, and who should - and should not - pick it.",
      keyFeatures: [
        "Compounded semaglutide $69/month and tirzepatide $119/month",
        "Month-to-month pricing - no commitment, cancel anytime",
        "Ships in 1-2 days, cold-chain packed, free shipping",
        "Weekly injection, plus a daily oral (compounded) option",
        "Licensed US clinicians review every intake; LegitScript-certified",
        "Messaging with the care team between check-ins",
      ],
      pricingSummary:
        "embody uses flat monthly pricing with no commitment: compounded semaglutide is $69/month (regular $79) and compounded tirzepatide is $119/month (regular $129). Shipping is free. It is cash-pay - no insurance is required or billed - and HSA/FSA funds can be used. Because you are not locked into a multi-month plan, $69/month is the lowest no-commitment semaglutide price among the providers we rank. The discounted rates are promotional, so confirm the current price at checkout. Remember that compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide (weekly injection)",
        "Compounded tirzepatide (weekly injection)",
        "Daily oral compounded GLP-1 option",
        "Clinician dose adjustments and care-team messaging",
      ],
      pros: [
        "Lowest no-commitment price on our list - semaglutide $69/month, tirzepatide $119/month",
        "Fastest delivery we found: 1-2 days, cold-chain packed, free shipping",
        "No contract - you can stop or cancel whenever you want",
        "LegitScript-certified, with licensed US clinicians and 503A pharmacies",
        "An oral option for people who would rather avoid injections",
      ],
      cons: [
        "Compounded medication only - not FDA-approved, and not reviewed by the FDA for safety, effectiveness or quality",
        "Cash-pay only - no help using insurance for brand-name medication",
        "Mixed Trustpilot rating (3.8 / 5 from 9,582 reviews), with complaints centering on shipping delays and support response times",
        "Promotional prices can revert to the regular $79 / $129 rates",
      ],
      bestFor: [
        "People paying cash who want the lowest price without a long commitment",
        "Anyone who wants to start quickly - medication in 1-2 days",
        "Those who want an oral option as well as injections",
        "Skip it if you have insurance that covers Wegovy or Zepbound, or you only want FDA-approved medication - look at ro instead",
      ],
      finalVerdict:
        "embody is our top pick because it combines the two things that matter most for cash-pay GLP-1 patients - a low, flat price and no lock-in - with the fastest delivery we found. $69/month semaglutide and $119/month tirzepatide on a month-to-month basis is hard to beat, and LegitScript certification plus licensed clinicians on every intake gives it a solid compliance footing. The trade-offs are real: compounded GLP-1s are not FDA-approved, support reviews are mixed, and it will not help you use insurance. If you want brand-name medication or have coverage, choose ro; if you are cash-pay and want to start this week, embody is the one to beat. Results vary, and a licensed clinician decides whether a GLP-1 is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide (weekly injection)",
          price: "$69",
          regularPrice: "$79",
          unit: "/mo",
          cadence: "Month-to-month, cancel anytime",
          highlights: ["Flat monthly price", "Free cold-chain shipping", "Clinician review included"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide (weekly injection)",
          price: "$119",
          regularPrice: "$129",
          unit: "/mo",
          cadence: "Month-to-month, cancel anytime",
          highlights: ["Flat monthly price", "Ships in 1-2 days", "Care-team messaging"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Complete the online intake",
          detail:
            "Answer questions about your weight, health history and medications. Be thorough - a personal or family history of medullary thyroid cancer or MEN2, pancreatitis or pregnancy plans matters.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail:
            "A licensed US clinician reviews your answers and decides whether a GLP-1 is appropriate, which medication fits and the starting dose.",
        },
        {
          timing: "Step 3",
          title: "Delivery in 1-2 days",
          detail:
            "If prescribed, your medication ships cold-chain packed from a state-licensed 503A pharmacy, with free shipping.",
        },
        {
          timing: "Ongoing",
          title: "Check-ins and dose changes",
          detail:
            "Message the care team between check-ins as your dose is stepped up. Cancel any month - there is no commitment.",
        },
      ],
      trustBadges: ["LegitScript-certified", "Licensed US clinicians", "Ships in 1-2 days"],
      updatedAt: UPDATED,
    },
    {
      slug: "ro",
      providerId: "ro",
      shortSummary:
        "The best choice for brand-name, FDA-approved GLP-1s: ro prescribes only Wegovy, Zepbound, Ozempic and Foundaya, checks your insurance and handles prior authorizations for you.",
      reviewIntro:
        "ro is one of the largest and most established direct-to-consumer telehealth brands in the US, founded in 2017, and its weight-loss program takes a deliberately different path from most GLP-1 sites: it prescribes only brand-name, FDA-approved medications - Wegovy, Zepbound, Ozempic and Foundaya - and does not sell compounded GLP-1s at all. Its standout feature is an insurance concierge that checks your coverage and handles prior authorizations, which can be the difference between paying hundreds of dollars a month and paying a copay. The trade-off is pricing that is harder to predict: you pay a membership fee, and the medication is billed separately. This review covers how ro works, what it really costs, and who it fits.",
      keyFeatures: [
        "Brand-name, FDA-approved medication only: Wegovy, Zepbound, Ozempic, Foundaya",
        "Oral pill or injection pen options",
        "Insurance concierge - coverage checks and prior authorizations handled",
        "Labs when clinically indicated",
        "Async intake with optional video; unlimited provider messaging",
        "Available nationwide",
      ],
      pricingSummary:
        "ro bills a membership and your medication separately. The membership is $39 for the first month, then $149/month, or you can save up to 50% with an annual plan (about $74/month). Medication is not included: its cost depends on whether your insurance covers it, or on the manufacturer's self-pay price if it does not. If you are insured and approved, total cost can be far lower than any cash-pay program; if you are not, brand-name medication plus membership will usually cost more than compounded options. Confirm the current membership price at checkout.",
      treatmentOptions: [
        "Wegovy (semaglutide) - FDA-approved for chronic weight management",
        "Zepbound (tirzepatide) - FDA-approved for chronic weight management",
        "Ozempic (semaglutide)",
        "Foundaya (oral pill)",
        "Insurance coverage checks, prior authorizations and labs when indicated",
      ],
      pros: [
        "Only FDA-approved, brand-name medication - no compounded products",
        "Insurance concierge handles coverage checks and prior authorizations",
        "Oral and injectable options",
        "Large, long-established telehealth company with unlimited provider messaging",
        "Available nationwide",
      ],
      cons: [
        "Medication is billed separately from the membership, so the total is harder to predict",
        "Without insurance, brand-name medication plus $149/month membership is usually far more expensive than compounded programs",
        "Prior authorizations can take time, and insurance may still deny coverage",
        "No compounded option for people who want the lowest cash price",
      ],
      bestFor: [
        "People whose insurance may cover Wegovy or Zepbound",
        "Anyone who wants only FDA-approved, brand-name medication",
        "Those who want an established company handling the insurance paperwork",
        "Skip it if you are uninsured and price is your main concern - a compounded program like embody costs much less",
      ],
      finalVerdict:
        "ro is the best option on our list if you want FDA-approved, brand-name GLP-1s or have insurance that might cover them. Its insurance concierge takes on the most frustrating part of getting Wegovy or Zepbound - coverage checks and prior authorizations - and it avoids the regulatory questions that surround compounded medication entirely. It ranks second, not first, because pricing is split between a membership and separately billed medication, which makes it expensive for uninsured patients. If you have coverage or want brand-name only, start here; if you are paying cash, compare embody. Results vary, and a licensed clinician decides whether a GLP-1 is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Monthly membership",
          medication: "Brand-name GLP-1 (billed separately)",
          price: "$39",
          regularPrice: "$149",
          unit: "first month",
          cadence: "Then $149/mo",
          highlights: ["Insurance concierge", "Unlimited provider messaging", "Medication cost via insurance or self-pay"],
        },
        {
          name: "Annual membership",
          medication: "Brand-name GLP-1 (billed separately)",
          price: "~$74",
          regularPrice: "$149",
          unit: "/mo",
          cadence: "Billed annually - save up to 50%",
          highlights: ["Lowest membership rate", "Prior authorizations handled", "Labs when indicated"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online intake and insurance check",
          detail:
            "Complete an async health intake and add your insurance details. ro's concierge checks whether your plan covers a GLP-1.",
        },
        {
          timing: "Step 2",
          title: "Provider review",
          detail:
            "A licensed provider reviews your history, orders labs if clinically indicated, and decides whether a brand-name GLP-1 is appropriate. Video is available if needed.",
        },
        {
          timing: "Step 3",
          title: "Prior authorization and prescription",
          detail:
            "ro handles the prior authorization with your insurer; if coverage is denied, you can pay the manufacturer's self-pay price instead.",
        },
        {
          timing: "Ongoing",
          title: "Messaging and dose adjustments",
          detail:
            "Message your provider as often as you need while your dose is stepped up over the following months.",
        },
      ],
      trustBadges: ["FDA-approved medication only", "Insurance concierge", "Founded 2017"],
      updatedAt: UPDATED,
    },
    {
      slug: "altrx",
      providerId: "altrx",
      shortSummary:
        "A flat-price compounded GLP-1 program - semaglutide $89/month and tirzepatide $149/month on promo, the same at every dose - with a brand-name shelf, but it received an FDA warning letter in June 2026.",
      reviewIntro:
        "altRx sells compounded semaglutide and tirzepatide at one flat price regardless of dose, which matters because many programs charge more as your dose climbs. It also offers brand-name Ozempic, Zepbound and Wegovy at self-pay list prices in the same account, so you can switch without changing providers. The intake is fast and asynchronous, with video when needed and a tracking app. One thing every reader should know before signing up: on June 8, 2026 the FDA issued a warning letter to altRx's parent company, Trinity HealthCare Supply, LLC (dba altRx), because, in the agency's view, its marketing and labels made its compounded semaglutide and tirzepatide look FDA-approved. Compounded GLP-1s are not FDA-approved. This review covers altRx's pricing, how it works and how to weigh that letter.",
      keyFeatures: [
        "Compounded semaglutide $89/month and tirzepatide $149/month (promo rates)",
        "Flat price at every dose - no increase as you titrate up",
        "Brand-name shelf: Ozempic, Zepbound and Wegovy at self-pay list prices",
        "No commitment - pause or cancel anytime; Buy Now, Pay Later available",
        "Fast async intake, video when needed, tracking app",
        "Free shipping, arrives in 5-7 days",
      ],
      pricingSummary:
        "altRx charges one flat price at every dose: compounded semaglutide is $89/month on promo (regular $199) and compounded tirzepatide is $149/month on promo (regular $299). Promo rates are time-limited - after the promotion you pay the regular price, which is well above most competitors, so check which rate applies to you. Brand-name medication is also available at self-pay list prices: Ozempic $1,149/month, Zepbound $1,249/month and Wegovy $1,579/month. Shipping is free and there is no commitment. Note that altRx received an FDA warning letter dated June 8, 2026 about how it marketed its compounded products, and compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide (flat price at every dose)",
        "Compounded tirzepatide (flat price at every dose)",
        "Brand-name Ozempic, Zepbound and Wegovy (self-pay)",
        "Async intake, video when needed and a progress-tracking app",
      ],
      pros: [
        "Same price at every dose, so costs do not rise as you step up",
        "Competitive promo pricing: semaglutide $89/month, tirzepatide $149/month",
        "Brand-name options in the same account if you want to switch",
        "No commitment, plus Buy Now, Pay Later",
      ],
      cons: [
        "FDA warning letter (June 8, 2026) to its parent company saying its marketing overstated its compounded GLP-1s and its labels suggested FDA approval",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "Promo prices are time-limited; regular prices ($199 / $299) are among the highest on our list",
        "Slower delivery than rivals - 5-7 days",
        "No published Trustpilot rating to cross-check customer experience",
      ],
      bestFor: [
        "People who expect to reach higher doses and want one flat price throughout",
        "Those who want compounded and brand-name options under one provider",
        "Skip it if an FDA warning letter is a deal-breaker for you, or if you need medication fast - embody ships in 1-2 days",
      ],
      finalVerdict:
        "altRx has a genuinely useful pricing model - one flat price at every dose - and a brand-name shelf that makes switching easy, which is why it ranks third. But you should weigh it with eyes open: on June 8, 2026 the FDA issued a warning letter to its parent company, Trinity HealthCare Supply, LLC (dba altRx), objecting to website claims and product labels that presented its compounded semaglutide and tirzepatide as if they were FDA-approved drugs. A warning letter is not a product recall or a finding that the medication harmed anyone, but it is a formal regulatory action worth factoring in, and you can read it on the FDA's website. Also watch the promo expiry - regular prices are high. If the letter concerns you, embody offers a similar cash-pay model at a lower no-commitment price, and ro offers FDA-approved medication only. Results vary, and a licensed clinician decides whether a GLP-1 is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide",
          price: "$89",
          regularPrice: "$199",
          unit: "/mo",
          cadence: "Promo rate, time-limited - no commitment",
          highlights: ["Same price at every dose", "Free shipping (5-7 days)", "Buy Now, Pay Later"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$149",
          regularPrice: "$299",
          unit: "/mo",
          cadence: "Promo rate, time-limited - no commitment",
          highlights: ["Same price at every dose", "Pause or cancel anytime", "Tracking app"],
        },
        {
          name: "Brand-name shelf",
          medication: "Ozempic / Zepbound / Wegovy",
          price: "$1,149+",
          unit: "/mo",
          cadence: "Self-pay list prices",
          highlights: ["Ozempic $1,149/mo", "Zepbound $1,249/mo", "Wegovy $1,579/mo"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Fast online intake",
          detail:
            "Complete an asynchronous health questionnaire covering your weight, history and current medications.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail:
            "A licensed clinician reviews your intake - with a video visit when needed - and decides whether a GLP-1 is appropriate and which one.",
        },
        {
          timing: "Step 3",
          title: "Delivery in 5-7 days",
          detail:
            "If prescribed, medication ships free. Track your progress in the app and pause or cancel whenever you choose.",
        },
      ],
      trustBadges: ["Flat price at every dose", "Brand-name options", "No commitment"],
      updatedAt: UPDATED,
    },
    {
      slug: "trimrx",
      providerId: "trimrx",
      shortSummary:
        "A compounded GLP-1 program built around custom dosing and unlimited provider check-ins - semaglutide $149/month at every dose, tirzepatide $259/month - with free tracked delivery, often next-day.",
      reviewIntro:
        "trimrx is aimed at people who want more control over their dose and more contact with a provider. Instead of a fixed titration schedule, its providers offer custom dosing - including smaller step-ups for people who struggle with side effects - and you get unlimited provider check-ins to adjust along the way. Getting started is simple: an asynchronous questionnaire, no appointment needed. Delivery is free and tracked, often next-day, and plans are month-to-month. The trade-offs are price (it sits at the higher end of compounded programs) and a program that is light on lifestyle coaching. As with every compounded program, the medication is not FDA-approved. This review covers what trimrx costs and who it suits.",
      keyFeatures: [
        "Compounded semaglutide $149/month at every dose; tirzepatide $259/month",
        "Custom dosing tailored by your provider",
        "Unlimited provider check-ins",
        "Async questionnaire - no appointment needed",
        "Delivery often next-day",
        "Month-to-month, no commitment; HSA/FSA eligible",
      ],
      pricingSummary:
        "trimrx charges $149/month for compounded semaglutide at every dose (with a $140 discount applied) and $259/month for compounded tirzepatide. Branded options are also available at much higher prices. Plans are month-to-month with no commitment, delivery is free and tracked, and HSA/FSA funds can be used. The discount is promotional, so confirm the current price at checkout. Compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide (custom dosing)",
        "Compounded tirzepatide (custom dosing)",
        "Branded GLP-1 options (higher price)",
        "Unlimited provider check-ins and dose adjustments",
      ],
      pros: [
        "Custom dosing - useful if standard step-ups cause side effects",
        "Unlimited provider check-ins at no extra cost",
        "Fast, free tracked delivery - often next-day",
        "No appointment needed, month-to-month and HSA/FSA eligible",
      ],
      cons: [
        "Higher price than embody, altRx's promo or wellmedr - $149 semaglutide and $259 tirzepatide",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "Light on coaching - little nutrition or lifestyle support",
        "Mixed Trustpilot rating (3.8 / 5 from 5,393 reviews); available in most, not all, US states",
      ],
      bestFor: [
        "People who want custom or micro dosing to manage side effects",
        "Anyone who values frequent provider touchpoints",
        "Those who want fast delivery without a long commitment",
        "Skip it if price is your priority - embody and wellmedr cost considerably less",
      ],
      finalVerdict:
        "trimrx is the right pick for a specific kind of patient: someone who wants a provider to fine-tune their dose and wants to be able to check in as often as they need. Custom dosing and unlimited check-ins are genuinely valuable if nausea or other side effects make standard titration hard, and next-day tracked delivery is a plus. It ranks fourth because it costs more than most compounded rivals and offers little coaching. If you want the lowest price, choose embody or wellmedr; if you want hands-on dose management, trimrx earns its premium. Compounded GLP-1s are not FDA-approved, results vary, and a licensed clinician decides whether treatment is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide",
          price: "$149",
          unit: "/mo",
          cadence: "Month-to-month, same price at every dose",
          highlights: ["$140 discount applied", "Custom dosing", "Unlimited provider check-ins"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$259",
          unit: "/mo",
          cadence: "Month-to-month, no commitment",
          highlights: ["Custom dosing", "Free tracked delivery", "HSA/FSA eligible"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Async questionnaire",
          detail:
            "Answer an online health questionnaire - no appointment needed.",
        },
        {
          timing: "Step 2",
          title: "Provider review and custom dose",
          detail:
            "A licensed provider reviews your answers, decides whether a GLP-1 is appropriate and sets a dosing plan tailored to you.",
        },
        {
          timing: "Step 3",
          title: "Free tracked delivery",
          detail:
            "If prescribed, medication ships free with tracking - often arriving next-day.",
        },
        {
          timing: "Ongoing",
          title: "Unlimited check-ins",
          detail:
            "Check in with your provider as often as you need to adjust your dose or manage side effects.",
        },
      ],
      trustBadges: ["Custom dosing", "Unlimited check-ins", "Often next-day delivery"],
      updatedAt: UPDATED,
    },
    {
      slug: "wellmedr",
      providerId: "wellmedr",
      shortSummary:
        "The lowest long-run compounded GLP-1 price we found - semaglutide $49/month on a 12-month plan and tirzepatide $89/month, the same at every dose - available in all 50 states.",
      reviewIntro:
        "wellmedr is a broad telehealth platform - it also covers TRT, NAD+, hair and sexual health - with a GLP-1 program priced to win on long-term cost. Its headline rate is compounded semaglutide at $49/month, but that price is locked in only on a 12-month plan; month-to-month is advertised at around $88/month. Compounded tirzepatide is $89/month, shipped every 4 weeks, and both are the same price at every dose. Board-certified clinicians review your intake, with video or messaging follow-up, and it is available in all 50 states. It also has the strongest Trustpilot score of the providers we rank that publish one. As with every compounded program, these medications are not FDA-approved. This review covers what wellmedr costs, what the 12-month plan means for you, and who it suits.",
      keyFeatures: [
        "Compounded semaglutide $49/month on a 12-month plan (rate locked)",
        "Compounded tirzepatide $89/month, shipped every 4 weeks",
        "Same price at every dose",
        "Board-certified clinicians; async intake plus video or messaging",
        "GLP-1 + NAD+/B12 microdose option; brand-name shelf",
        "Available in all 50 states; ships in 3-5 business days",
      ],
      pricingSummary:
        "wellmedr's compounded semaglutide is $49/month on its 12-month plan, with the rate locked for the year; month-to-month is higher, advertised at around $88/month. Compounded tirzepatide is $89/month, shipped every 4 weeks. Prices are the same at every dose. Brand-name medication is available at self-pay prices: Ozempic $1,399/month and Zepbound $1,599/month. The $49 rate is the lowest long-run price on our list, but it assumes you are comfortable committing to 12 months - check the plan terms, including cancellation, before you sign up. Compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide (same price at every dose)",
        "Compounded tirzepatide (shipped every 4 weeks)",
        "GLP-1 + NAD+/B12 microdose option",
        "Brand-name Ozempic and Zepbound (self-pay)",
        "Other programs: TRT, NAD+, hair and sexual health",
      ],
      pros: [
        "Lowest long-run price we found - semaglutide $49/month on the 12-month plan",
        "Tirzepatide at $89/month, and prices do not rise with your dose",
        "Strongest published Trustpilot score on our list (4.6 / 5 from 2,181 reviews)",
        "Board-certified clinicians, available in all 50 states",
      ],
      cons: [
        "The $49 price requires a 12-month commitment; month-to-month is around $88/month",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "Slower shipping than embody or trimrx - 3-5 business days",
        "A broad multi-category platform rather than a weight-loss specialist",
      ],
      bestFor: [
        "People confident they will stay on a GLP-1 for a year and want the lowest total cost",
        "Anyone who wants tirzepatide at a low flat price",
        "Those in states other providers do not serve",
        "Skip it if you want flexibility to stop in a month or two - embody is cheaper month-to-month",
      ],
      finalVerdict:
        "wellmedr has the lowest long-run price on our list: $49/month semaglutide locked for 12 months, and $89/month tirzepatide, with no price increase as your dose rises. Its customer reviews are also the strongest we could verify. It ranks fifth rather than higher because that headline price depends on a 12-month commitment - a big decision when many people change medication or stop within the first year - and because month-to-month pricing is less competitive than embody's. If you are sure you want a year of treatment, wellmedr is excellent value; if you want to keep your options open, choose a no-commitment program. Compounded GLP-1s are not FDA-approved, results vary, and a licensed clinician decides whether treatment is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide - 12-month plan",
          medication: "Compounded semaglutide",
          price: "$49",
          unit: "/mo",
          cadence: "12-month plan, rate locked (month-to-month ~$88/mo)",
          highlights: ["Same price at every dose", "Board-certified clinicians", "All 50 states"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$89",
          unit: "/mo",
          cadence: "Shipped every 4 weeks",
          highlights: ["Same price at every dose", "Video or messaging follow-up", "Ships in 3-5 business days"],
        },
        {
          name: "Brand-name shelf",
          medication: "Ozempic / Zepbound",
          price: "$1,399+",
          unit: "/mo",
          cadence: "Self-pay prices",
          highlights: ["Ozempic $1,399/mo", "Zepbound $1,599/mo"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online intake",
          detail:
            "Complete an asynchronous health intake and choose your plan - 12-month for the lowest rate, or month-to-month.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail:
            "A board-certified clinician reviews your history, with video or messaging if needed, and decides whether a GLP-1 is appropriate.",
        },
        {
          timing: "Step 3",
          title: "Delivery every 4 weeks",
          detail:
            "If prescribed, medication ships in 3-5 business days, then arrives on a regular 4-week cycle.",
        },
      ],
      trustBadges: ["Board-certified clinicians", "All 50 states", "Same price at every dose"],
      updatedAt: UPDATED,
    },
    {
      slug: "medvi",
      providerId: "medvi",
      shortSummary:
        "An all-inclusive compounded GLP-1 program - semaglutide $99/month and tirzepatide $166/month on promo - with clinician visits, dietitian access and coaching included, no membership fees and no commitment.",
      reviewIntro:
        "MEDVi takes a different approach to pricing from most GLP-1 telehealth brands: instead of a low medication price with add-ons, it bundles everything into one monthly figure. Clinician visits, access to a dietitian and coaching are all included, shipping is free, and there is no separate membership or hidden fee. Plans carry no commitment and HSA/FSA funds are accepted. Licensed US clinicians handle prescribing, and brand-name options are available through your clinician if compounded medication is not the right fit. It also has one of the largest review bases on our list - 4.3 / 5 from 14,978 Trustpilot reviews. As with every compounded program, the medication is not FDA-approved. This review covers what MEDVi costs, what the bundle includes and who it suits.",
      keyFeatures: [
        "Compounded semaglutide $99/month and tirzepatide $166/month (promo rates)",
        "All-inclusive: clinician visits, dietitian access and coaching in the price",
        "No membership fee and no hidden fees",
        "No commitment; HSA/FSA accepted",
        "Licensed US clinicians; brand-name options via your clinician",
        "Free shipping",
      ],
      pricingSummary:
        "MEDVi charges one all-inclusive monthly price: compounded semaglutide is $99/month on promo (regular $199) and compounded tirzepatide is $166/month on promo (regular $299). Clinician visits, dietitian access, coaching and shipping are included, with no membership or hidden fees and no commitment. HSA/FSA funds are accepted. The promo rates are time-limited - after the promotion the regular prices are among the highest on our list, so confirm which rate applies at checkout. Brand-name options are available through your clinician at separate pricing. Compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide",
        "Compounded tirzepatide",
        "Brand-name GLP-1 options via your clinician",
        "Dietitian access and coaching included",
      ],
      pros: [
        "Genuinely all-inclusive - clinician visits, dietitian access and coaching in one price",
        "No membership or hidden fees, and no commitment",
        "Strong customer feedback at scale (4.3 / 5 from 14,978 Trustpilot reviews)",
        "Brand-name options available through the same clinician",
        "HSA/FSA accepted, free shipping",
      ],
      cons: [
        "Higher promo prices than embody or wellmedr - $99 semaglutide and $166 tirzepatide",
        "Regular prices ($199 / $299) are steep once the promotion ends",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "If you do not need coaching or a dietitian, you are paying for support you will not use",
      ],
      bestFor: [
        "People who want nutrition and coaching support bundled with their medication",
        "Anyone who wants one predictable price with no membership or add-on fees",
        "Those who value a large, well-rated customer base",
        "Skip it if you only want the medication at the lowest price - embody and wellmedr cost less",
      ],
      finalVerdict:
        "MEDVi is the best fit on our list for people who want more than a prescription: clinician visits, dietitian access and coaching all come in one price, with no membership, no hidden fees and no commitment. Its Trustpilot record - 4.3 / 5 across more than 14,000 reviews - is reassuring. It ranks sixth because it costs more than leaner programs for the medication alone, and its regular prices after the promotion are high. If you value structured support around diet and habits - which matters for keeping weight off - MEDVi is worth the premium; if you just want the medication, choose embody or wellmedr. Compounded GLP-1s are not FDA-approved, results vary, and a licensed clinician decides whether treatment is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide",
          price: "$99",
          regularPrice: "$199",
          unit: "/mo",
          cadence: "Promo rate - no commitment",
          highlights: ["Clinician visits included", "Dietitian access & coaching", "No membership or hidden fees"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$166",
          regularPrice: "$299",
          unit: "/mo",
          cadence: "Promo rate - no commitment",
          highlights: ["All-inclusive price", "Free shipping", "HSA/FSA accepted"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online intake",
          detail:
            "Complete a health questionnaire covering your weight, history, goals and current medications.",
        },
        {
          timing: "Step 2",
          title: "Clinician visit",
          detail:
            "A licensed US clinician reviews your history and decides whether a GLP-1 is appropriate - compounded or brand-name - and at what dose.",
        },
        {
          timing: "Step 3",
          title: "Delivery",
          detail:
            "If prescribed, medication ships free, with no membership or hidden fees on top of your monthly price.",
        },
        {
          timing: "Ongoing",
          title: "Dietitian and coaching support",
          detail:
            "Use the included dietitian access and coaching alongside clinician follow-ups as your dose is adjusted.",
        },
      ],
      trustBadges: ["Licensed US clinicians", "Dietitian & coaching included", "No hidden fees"],
      updatedAt: UPDATED,
    },
    {
      slug: "directmeds",
      providerId: "directmeds",
      shortSummary:
        "A no-frills compounded GLP-1 program with one flat price - $147/month for semaglutide or tirzepatide at every dose - as an injection or sublingual drops, with free 1-2 day shipping and no membership.",
      reviewIntro:
        "DirectMeds does one thing most GLP-1 programs do not: it charges the same price for both medications. Compounded semaglutide and compounded tirzepatide are each $147/month, and that price does not change as your dose goes up. You can take your medication as a weekly injection or as sublingual drops for people who would rather avoid needles. Shipping is free and fast - 1-2 days - and there is no membership fee or commitment. What you do not get is much beyond the prescription: there is no bundled coaching or dietitian. Its Trustpilot record is one of the strongest in the category - 4.6 / 5 from 16,368 reviews. As with every compounded program, the medication is not FDA-approved. This review covers what DirectMeds costs, how the drops compare and who it suits.",
      keyFeatures: [
        "Compounded semaglutide or tirzepatide - both $147/month",
        "Same price at every dose - no increase as you titrate up",
        "Weekly injection or sublingual drops",
        "Free 1-2 day shipping",
        "No membership fee; cancel anytime",
        "4.6 / 5 from 16,368 Trustpilot reviews",
      ],
      pricingSummary:
        "DirectMeds charges one flat price: $147/month for compounded semaglutide and $147/month for compounded tirzepatide, at every dose. There is no membership fee and no commitment, and shipping is free. That makes it the cheapest tirzepatide on our list after wellmedr ($89) and embody ($119), and it never rises with your dose - though for semaglutide alone, embody ($69), wellmedr ($49 on a 12-month plan) and altRx ($89 promo) cost less. Prices change, so confirm at checkout. Compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide (injection or sublingual drops)",
        "Compounded tirzepatide (injection or sublingual drops)",
      ],
      pros: [
        "One flat $147 price for either medication, at every dose",
        "Needle-free sublingual drops as an alternative to injections",
        "Free 1-2 day shipping",
        "No membership fee or commitment",
        "Excellent customer feedback at scale - 4.6 / 5 from 16,368 Trustpilot reviews",
      ],
      cons: [
        "Semaglutide costs more here than at embody, wellmedr or altRx",
        "No bundled coaching or dietitian support",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "No brand-name medication or insurance help",
      ],
      bestFor: [
        "People starting on - or switching to - tirzepatide who want a price that never climbs",
        "Anyone who would rather take drops than inject",
        "Those who want medication quickly with no membership",
        "Skip it if you want semaglutide at the lowest price, or coaching included",
      ],
      finalVerdict:
        "DirectMeds is the simplest pricing on our list: $147 a month for semaglutide or tirzepatide, at any dose, delivered in 1-2 days, with sublingual drops for people who dislike needles. Its 4.6 / 5 rating across more than 16,000 Trustpilot reviews is among the best in the category. It ranks seventh because cheaper semaglutide exists elsewhere and it offers little beyond the medication itself - no coaching, dietitian or brand-name shelf. If you want tirzepatide at a price that will not rise, or a needle-free option, it is a strong choice. Compounded GLP-1s are not FDA-approved, results vary, and a licensed clinician decides whether treatment is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide",
          price: "$147",
          unit: "/mo",
          cadence: "Flat at every dose - no membership",
          highlights: ["Injection or sublingual drops", "Free 1-2 day shipping", "Cancel anytime"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$147",
          unit: "/mo",
          cadence: "Flat at every dose - no membership",
          highlights: ["Same price as semaglutide", "Injection or sublingual drops", "Free 1-2 day shipping"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online intake",
          detail: "Answer a health questionnaire covering your weight, medical history, goals and current medications.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail:
            "A licensed clinician reviews your answers and decides whether a GLP-1 is appropriate, which medication and which form - injection or drops.",
        },
        {
          timing: "Step 3",
          title: "1-2 day delivery",
          detail: "If prescribed, medication ships free and arrives in 1-2 days. Your price stays $147 as your dose changes.",
        },
      ],
      trustBadges: ["$147 flat at every dose", "Injection or drops", "Free 1-2 day shipping"],
      updatedAt: ADDED,
    },
    {
      slug: "shed",
      providerId: "shed",
      shortSummary:
        "A coaching-led compounded GLP-1 program - semaglutide from $199/month and tirzepatide from $299/month, 20% off the first month - with a money-back guarantee if you don't lose 5% of your body weight in 120 days.",
      reviewIntro:
        "SHED is built for people who want accountability, not just a prescription. Its compounded semaglutide and tirzepatide plans include coaching, home delivery is included, HSA/FSA funds are accepted and there is no commitment. Its headline feature is a guarantee: if you do not lose 5% of your body weight within 120 days, SHED offers your money back (conditions apply - read the terms). The trade-off is price: semaglutide starts at $199/month and tirzepatide at $299/month, with 20% off the first month, which puts SHED among the more expensive compounded programs we track. It holds a 4.6 / 5 Trustpilot score from 1,137 reviews. Compounded medications are not FDA-approved. This review covers what SHED costs, how the guarantee works and who it suits.",
      keyFeatures: [
        "Compounded semaglutide from $199/month, tirzepatide from $299/month",
        "20% off the first month",
        "Coaching included in the plan",
        "Money-back guarantee if you don't lose 5% in 120 days (conditions apply)",
        "Home delivery included; HSA/FSA accepted",
        "No commitment",
      ],
      pricingSummary:
        "SHED's compounded semaglutide starts at $199/month and compounded tirzepatide at $299/month, with 20% off your first month. Coaching and home delivery are included, there is no commitment, and HSA/FSA funds are accepted. Its money-back guarantee applies if you do not lose 5% of your body weight within 120 days - the guarantee has conditions, so read SHED's terms before relying on it. Prices are starting prices and may vary; confirm at checkout. Compounded GLP-1s are not FDA-approved.",
      treatmentOptions: [
        "Compounded semaglutide",
        "Compounded tirzepatide",
        "Coaching included",
      ],
      pros: [
        "A results guarantee - money back if you don't lose 5% in 120 days (conditions apply)",
        "Coaching included for accountability",
        "No commitment; HSA/FSA accepted",
        "Strong customer feedback - 4.6 / 5 from 1,137 Trustpilot reviews",
      ],
      cons: [
        "One of the more expensive compounded options - $199 semaglutide, $299 tirzepatide",
        "The first-month discount is only 20%, and later months are full price",
        "Compounded medication is not FDA-approved or FDA-reviewed for safety, effectiveness or quality",
        "The guarantee has conditions - read them before you count on a refund",
      ],
      bestFor: [
        "People who want coaching and accountability built in",
        "Anyone reassured by a results-based money-back guarantee",
        "Those paying with HSA/FSA funds",
        "Skip it if price matters most - MEDVi includes coaching for less on promo, and embody or wellmedr cost far less",
      ],
      finalVerdict:
        "SHED is the program for people who worry about paying for a GLP-1 and not seeing results: coaching is included, and its guarantee offers your money back if you have not lost 5% of your body weight within 120 days. Its 4.6 / 5 Trustpilot score suggests customers are happy with the experience. It ranks eighth because it is expensive - $199/month semaglutide and $299/month tirzepatide after a 20% first-month discount - and MEDVi bundles coaching and a dietitian for less while its promo lasts. If accountability and the guarantee matter to you, read SHED's guarantee terms and give it a look. Compounded GLP-1s are not FDA-approved, results vary, and a licensed clinician decides whether treatment is right for you. This review is general information, not medical advice.",
      pricingPlans: [
        {
          name: "Semaglutide",
          medication: "Compounded semaglutide",
          price: "$199",
          unit: "/mo",
          cadence: "Starting price - 20% off month one",
          highlights: ["Coaching included", "Home delivery included", "HSA/FSA accepted"],
        },
        {
          name: "Tirzepatide",
          medication: "Compounded tirzepatide",
          price: "$299",
          unit: "/mo",
          cadence: "Starting price - 20% off month one",
          highlights: ["Coaching included", "5%-in-120-days guarantee", "No commitment"],
        },
      ],
      howItWorks: [
        {
          timing: "Step 1",
          title: "Online intake",
          detail: "Complete a health questionnaire about your weight, history, goals and current medications.",
        },
        {
          timing: "Step 2",
          title: "Clinician review",
          detail: "A licensed clinician reviews your answers and decides whether a GLP-1 is appropriate and at what dose.",
        },
        {
          timing: "Step 3",
          title: "Delivery and coaching",
          detail: "If prescribed, medication is delivered to your home and your coaching starts alongside treatment.",
        },
        {
          timing: "Day 120",
          title: "Guarantee check",
          detail:
            "If you have not lost 5% of your body weight within 120 days, you can claim SHED's money-back guarantee under its terms.",
        },
      ],
      trustBadges: ["Coaching included", "5%-in-120-days guarantee", "HSA/FSA accepted"],
      updatedAt: ADDED,
    },
  ],

  battles: weightLossBattles,

  articles: weightLossArticles,

  faqs: [
    {
      question: "How do GLP-1 weight loss medications work?",
      answer:
        "GLP-1 medications such as semaglutide (Wegovy, Ozempic) and tirzepatide (Zepbound, Mounjaro) mimic gut hormones that regulate appetite and blood sugar. They slow stomach emptying and act on appetite centers in the brain, so you feel full sooner and have fewer cravings. Tirzepatide also acts on a second hormone receptor (GIP). They are taken as a weekly injection or, for some products, a daily pill, alongside diet and activity changes.",
    },
    {
      question: "What is the difference between compounded and brand-name GLP-1s?",
      answer:
        "Brand-name medications like Wegovy and Zepbound are FDA-approved for chronic weight management and made by the manufacturer to consistent standards. Compounded semaglutide and tirzepatide are prepared by compounding pharmacies and are not FDA-approved - the FDA does not review them for safety, effectiveness or quality. They cost much less, but since the FDA declared the semaglutide and tirzepatide shortages resolved, compounding is generally limited to an individual patient's documented clinical need. The rules are evolving, so check with your provider.",
    },
    {
      question: "How much do online GLP-1 programs cost?",
      answer:
        "At current advertised rates among the providers we rank, compounded semaglutide ranges from $49/month (wellmedr, on a 12-month plan) to $149/month (trimrx), and compounded tirzepatide from $89/month to $259/month. Brand-name medication without insurance typically costs over $1,000/month at self-pay list prices, although insurance can bring it far lower. Always check whether a price is promotional, requires a long commitment, or rises with your dose.",
    },
    {
      question: "Will insurance pay for semaglutide or tirzepatide?",
      answer:
        "Sometimes. Some commercial plans cover Wegovy or Zepbound for weight management, usually with a prior authorization, while many plans exclude weight-loss drugs. Compounded GLP-1s are almost always cash-pay, though HSA/FSA funds can often be used. If you think you may be covered, a provider with an insurance concierge, such as ro, can check and handle the prior authorization for you.",
    },
    {
      question: "Am I eligible for a GLP-1 prescription?",
      answer:
        "The FDA labels for Wegovy and Zepbound cover adults with a BMI of 30 or more, or 27 or more with a weight-related condition such as high blood pressure, type 2 diabetes or sleep apnea. GLP-1s are not suitable for people with a personal or family history of medullary thyroid carcinoma or MEN2, or during pregnancy. A licensed clinician reviews your full history and decides whether a GLP-1 is appropriate.",
    },
    {
      question: "What are the side effects of GLP-1 medications?",
      answer:
        "The most common side effects are nausea, vomiting, diarrhea, constipation, reduced appetite, reflux and fatigue - usually worst while your dose is being increased and often easing over time. Rare but serious risks include pancreatitis, gallbladder disease, kidney injury from dehydration and low blood sugar when combined with some diabetes medications. The medications carry a boxed warning about thyroid C-cell tumors seen in rodents. Contact your clinician promptly about severe or persistent symptoms.",
    },
    {
      question: "How fast will I lose weight on a GLP-1?",
      answer:
        "Results vary and are gradual, because doses are increased step by step over several months. In clinical trials, people on semaglutide 2.4 mg lost about 15% of body weight on average over 68 weeks (STEP-1), and people on the highest dose of tirzepatide lost about 21% over 72 weeks (SURMOUNT-1). Those are averages alongside diet and activity changes - some people lose more, some less, and no provider can guarantee results.",
    },
    {
      question: "What happens if I stop taking a GLP-1?",
      answer:
        "Weight regain is common after stopping. In the STEP-1 extension, people who stopped semaglutide regained about two-thirds of the weight they had lost within a year, and in SURMOUNT-4 people switched from tirzepatide to placebo regained a substantial share. That is why many clinicians treat GLP-1s as long-term therapy or plan a gradual transition with nutrition, protein intake and strength training. Talk to your clinician before stopping.",
    },
    {
      question: "Are online GLP-1 providers legit?",
      answer:
        "Many are, but check the basics. A legitimate provider has a licensed clinician review your health history before prescribing, uses state-licensed pharmacies, and is clear about whether medication is brand-name or compounded. Certifications such as LegitScript are a good sign. Be wary of any site that skips the medical review, calls compounded medication FDA-approved, or guarantees results - and check the FDA's warning letter database, as we do in our reviews.",
    },
    {
      question: "Are there oral GLP-1 options instead of injections?",
      answer:
        "Yes. There are brand-name oral GLP-1 options - ro, for example, offers Foundaya as an oral pill - and some compounded programs, such as embody, offer a daily oral option. Oral and injectable forms differ in dosing and how consistently they are absorbed, so ask your clinician which suits you. Remember that compounded oral products, like compounded injections, are not FDA-approved.",
    },
  ],

  quiz: {
    welcomeTitle: "Find Your Best GLP-1 Provider Match",
    welcomeSubtitle:
      "Answer a few quick questions and we'll compare trusted online GLP-1 weight loss providers based on your budget, medication preferences and location.",
    welcomeTrustPoints: [
      "Takes less than 1 minute",
      "Personalized provider recommendations",
      "Completely free and confidential",
    ],
    welcomeCta: "Find My Match",
    midFlowMessage: "Great - we're narrowing down the best options for you.",
    pageTitle: "Find Your GLP-1 Provider Match",
    pageSubtitle:
      "Answer a few quick questions to help us compare weight loss providers based on your goals, insurance, budget and medication preferences.",
    resultsTitle: "Your Best Match",
    resultsSubtitle:
      "Based on your answers, this provider is the strongest fit for your preferences.",
    resultsOthersTitle: "Other Providers You May Want to Consider",
    trustStrip: [
      "Updated Monthly",
      "Editorially Reviewed",
      "Independent Provider Comparison",
    ],
    loadingMessages: [
      "Comparing trusted providers...",
      "Checking current GLP-1 pricing...",
      "Finding your best match...",
      "Preparing your recommendation...",
    ],
    questions: [],
    providerProfiles: [],
  },

  reviewTestimonials: [
    {
      text: "Every GLP-1 site I looked at advertised a different price, and I couldn't tell what was a promo and what required a contract. The side-by-side breakdown here made that clear in a few minutes.",
      name: "Michelle T.",
      state: "TX",
    },
    {
      text: "I wanted to know whether my insurance might cover a brand-name option before paying cash for anything. This comparison pointed me to the right kind of provider to ask.",
      name: "David K.",
      state: "OH",
    },
    {
      text: "I appreciated that the reviews were honest about the downsides - compounded vs FDA-approved, commitment terms, even regulatory issues. No hype, just what I needed to make a decision.",
      name: "Angela P.",
      state: "FL",
    },
  ],

  experts: [
    {
      id: "editorial",
      name: "The Top Weight Loss Editorial Team",
      role: "Editorial & Research",
      bio: "Our editorial team researches and compares online GLP-1 weight loss providers, checks provider-published pricing and plan terms, reads the clinical evidence and FDA guidance behind each option, and writes plain-English, compliance-minded guides. We prioritize accuracy and honesty over hype - including being clear that compounded GLP-1s are not FDA-approved, that results vary, and when a provider has faced regulatory action.",
      specialties: [
        "Provider comparison and research",
        "Telehealth and online prescribing",
        "Evidence-based health writing",
        "Consumer education",
      ],
    },
    // "Reviewed by" (medical reviewer) intentionally omitted for now - re-add a
    // real, credentialed clinician here to restore the "Reviewed by" byline.
  ],

  landingPages: [],
  sidebars: [],
};
