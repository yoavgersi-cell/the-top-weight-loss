import Link from "next/link";

const treatmentRows: [string, string, string][] = [
  ["Brand-name, FDA-approved GLP-1", "Wegovy (semaglutide), Zepbound (tirzepatide); Ozempic and Mounjaro are the diabetes versions", "Reviewed by the FDA for safety, effectiveness and manufacturing quality. Wegovy and Zepbound are approved for chronic weight management. Self-pay list prices often exceed $1,000/mo, but insurance or manufacturer programs can lower that a lot."],
  ["Compounded semaglutide", "Made by a state-licensed 503A compounding pharmacy for an individual patient", "Not FDA-approved - the FDA does not review compounded drugs for safety, effectiveness or quality. Online programs advertise roughly $49-$199/mo. Rules on compounding have tightened since the shortages ended, so ask your provider how their prescription is justified."],
  ["Compounded tirzepatide", "Made by a state-licensed 503A compounding pharmacy for an individual patient", "Same caveats as compounded semaglutide. Online programs advertise roughly $89-$299/mo, usually more than compounded semaglutide."],
  ["Oral options", "Brand-name oral GLP-1s (e.g. Foundaya at ro); some compounded daily oral formulations", "Useful if you dislike injections. Brand-name pills are FDA-approved; compounded oral versions are not, and have less evidence behind them."],
  ["Lifestyle foundation", "Protein-forward eating, resistance training, sleep, alcohol limits", "Not an alternative for most people with obesity, but it matters on medication: protein and strength training help preserve lean muscle while you lose weight."],
];

const drugRows: [string, string, string, string][] = [
  ["How it works", "Mimics GLP-1, a gut hormone that slows digestion and reduces appetite", "Acts on both GLP-1 and GIP receptors", "Tirzepatide's dual action is thought to explain its larger average effect"],
  ["Average weight loss in trials", "About 15% at 68 weeks (STEP-1, 2.4 mg)", "About 21% at 72 weeks (SURMOUNT-1, 15 mg)", "In the SURMOUNT-5 head-to-head: about 20% vs 14%. Results vary by person"],
  ["Brand names", "Wegovy (weight), Ozempic (diabetes)", "Zepbound (weight), Mounjaro (diabetes)", "Only brand-name versions are FDA-approved"],
  ["Typical online cash price (compounded)", "About $49-$199/mo in our rankings", "About $89-$299/mo in our rankings", "Promo prices often rise after the first months - check the regular rate"],
  ["Who it may suit", "A lower-cost starting point; long real-world track record", "People who want the largest average effect, or who stalled on semaglutide", "A licensed clinician decides which, if either, is appropriate"],
];

function TreatmentTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[600px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Option</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Examples</th>
            <th className="px-4 py-3 font-bold text-[#191919]">What to know</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([k, a, b], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{k}</td>
              <td className="px-4 py-3 align-top text-gray-600">{a}</td>
              <td className="px-4 py-3 align-top text-gray-600">{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DrugTable({ rows }: { rows: [string, string, string, string][] }) {
  return (
    <div className="mb-4 overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full min-w-[640px] text-left text-[14px]">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50">
            <th className="px-4 py-3 font-bold text-[#191919]">Factor</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Semaglutide</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Tirzepatide</th>
            <th className="px-4 py-3 font-bold text-[#191919]">Why it matters</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map(([f, s, t, w], i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-gray-50/50" : ""}>
              <td className="px-4 py-3 align-top font-medium text-[#191919]">{f}</td>
              <td className="px-4 py-3 align-top text-gray-600">{s}</td>
              <td className="px-4 py-3 align-top text-gray-600">{t}</td>
              <td className="px-4 py-3 align-top text-gray-600">{w}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const linkCls = "font-semibold text-[#1A5DB8] hover:underline";

export function EditorialContent({ midSlot }: { midSlot?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-6 pb-12 text-[16px] leading-[1.7] text-gray-800">
      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        The Best Online GLP-1 Weight Loss Providers, Compared
      </h2>
      <p className="mb-4">
        Dozens of telehealth companies now prescribe semaglutide and tirzepatide online, and on the
        surface they look alike. The differences show up in the details: whether you get brand-name
        or compounded medication, what you pay after the intro price ends, whether you are locked into
        a long plan, how fast medication arrives, and whether a real clinician adjusts your dose when
        side effects hit. We compare providers on exactly those factors.
      </p>
      <p className="mb-8">
        This page explains how GLP-1 medications work, who qualifies, what online care should look
        like and what it really costs. Prefer to go straight to the providers? Read our in-depth
        reviews of{" "}
        <Link href="/reviews/embody" className={linkCls}>embody</Link>,{" "}
        <Link href="/reviews/ro" className={linkCls}>ro</Link>,{" "}
        <Link href="/reviews/altrx" className={linkCls}>altRx</Link>,{" "}
        <Link href="/reviews/trimrx" className={linkCls}>trimrx</Link>,{" "}
        <Link href="/reviews/wellmedr" className={linkCls}>wellmedr</Link> and{" "}
        <Link href="/reviews/medvi" className={linkCls}>MEDVi</Link>, or see them head to head in{" "}
        <Link href="/embody-vs-ro" className={linkCls}>embody vs ro</Link>,{" "}
        <Link href="/altrx-vs-trimrx" className={linkCls}>altRx vs trimrx</Link>,{" "}
        <Link href="/embody-vs-wellmedr" className={linkCls}>embody vs wellmedr</Link>,{" "}
        <Link href="/ro-vs-medvi" className={linkCls}>MEDVi vs ro</Link> and{" "}
        <Link href="/altrx-vs-medvi" className={linkCls}>MEDVi vs altRx</Link>. Weighing the budget picks?
        Start with{" "}
        <Link href="/altrx-vs-wellmedr" className={linkCls}>altRx vs wellmedr</Link>,{" "}
        <Link href="/trimrx-vs-wellmedr" className={linkCls}>trimrx vs wellmedr</Link>,{" "}
        <Link href="/trimrx-vs-medvi" className={linkCls}>MEDVi vs trimrx</Link> and{" "}
        <Link href="/wellmedr-vs-medvi" className={linkCls}>MEDVi vs wellmedr</Link>{" "}
        - or see how MEDVi stacks up against our top pick in{" "}
        <Link href="/embody-vs-medvi" className={linkCls}>MEDVi vs embody</Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How GLP-1 Weight Loss Medications Work
      </h2>
      <p className="mb-4">
        GLP-1 is a hormone your gut releases after eating. GLP-1 medications mimic it: they slow how
        fast your stomach empties, help regulate blood sugar and act on appetite centers in the brain.
        In practice, most people feel full sooner, think about food less and eat less without relying
        on willpower alone.
      </p>
      <p className="mb-8">
        Treatment is usually a once-weekly injection, started at a low dose and increased every few
        weeks (titration) to limit side effects. Weight loss is gradual, and it depends on staying on
        treatment: in the STEP-1 extension, people who stopped semaglutide regained about two-thirds of
        the weight they had lost within a year. Plan for the long term - see{" "}
        <Link href="/articles/stopping-glp1-maintenance" className={linkCls}>
          stopping GLP-1s and maintenance
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Brand-Name vs Compounded GLP-1s
      </h2>
      <p className="mb-4">
        The biggest choice you make online is not the provider - it is what kind of medication you get.
        Here is how the main options compare. These are options to discuss with a licensed clinician,
        not a recommendation to take any specific product.
      </p>
      <TreatmentTable rows={treatmentRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        General information, not medical advice. Compounded GLP-1s are not FDA-approved, and the legal
        rules around compounding are still evolving - ask your provider how their medication is
        sourced. Full breakdown:{" "}
        <Link href="/articles/compounded-vs-brand-name-glp1" className={linkCls}>
          compounded vs brand-name GLP-1s
        </Link>.
      </p>

      <h3 className="mb-2 text-[20px] font-bold text-[#191919]">Semaglutide vs Tirzepatide</h3>
      <p className="mb-4">
        Both are effective. Tirzepatide produced more weight loss on average in trials, including a
        direct head-to-head study, while semaglutide is usually cheaper and has been used longer.
        Neither is right for everyone.
      </p>
      <DrugTable rows={drugRows} />
      <p className="mb-8 text-[13.5px] text-gray-500">
        Trial figures are averages for brand-name drugs at full dose alongside lifestyle support;
        individual results vary, and compounded versions were not the products studied. More detail in{" "}
        <Link href="/articles/semaglutide-vs-tirzepatide" className={linkCls}>
          semaglutide vs tirzepatide
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Who Qualifies for GLP-1 Treatment?
      </h2>
      <p className="mb-4">
        Under the FDA labels for Wegovy and Zepbound, GLP-1 weight-loss treatment is intended for adults
        with a <strong>BMI of 30 or higher</strong>, or <strong>27 or higher with a weight-related
        condition</strong> such as high blood pressure, type 2 diabetes, high cholesterol or sleep
        apnea. Online providers generally follow these criteria.
      </p>
      <p className="mb-8">
        GLP-1s are <strong>not appropriate</strong> if you have a personal or family history of
        medullary thyroid carcinoma or MEN2, are pregnant or trying to conceive, or have had
        pancreatitis - and they need extra care alongside insulin or sulfonylureas. A licensed
        clinician makes the final call, and a legitimate provider will turn some people down.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How Online GLP-1 Care Works
      </h2>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Online intake</strong> - a confidential questionnaire covering weight, height, health history, medications and goals; some providers ask for ID or recent labs.</li>
        <li><strong>Licensed clinician review</strong> - a US-licensed prescriber checks eligibility and contraindications, by message or video. A prescription is never guaranteed.</li>
        <li><strong>Pharmacy and delivery</strong> - medication ships cold-packed from a licensed pharmacy, typically in 1-7 days depending on the provider.</li>
        <li><strong>Titration and follow-up</strong> - regular check-ins to raise your dose gradually, manage side effects and track progress.</li>
      </ul>
      <p className="mb-4"><strong>What a legitimate provider looks like:</strong> a real clinician review, named licensed pharmacies, honest labeling (compounded products never described as FDA-approved), the regular price shown next to any promo, and an easy way to reach your care team.</p>
      <p className="mb-8"><strong>Red flags:</strong> &quot;no prescription needed&quot;, guaranteed results, &quot;generic Wegovy&quot; or &quot;FDA-approved&quot; claims for compounded products, research-chemical &quot;peptides&quot;, no screening questions, and billing terms you can only find after checkout.</p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        How to Choose an Online GLP-1 Provider
      </h2>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>If you have insurance or want only FDA-approved medication</strong> - look at a brand-name specialist like <Link href="/reviews/ro" className={linkCls}>ro</Link>, which checks coverage and handles prior authorizations.</li>
        <li><strong>If you want the lowest price with no commitment</strong> - <Link href="/reviews/embody" className={linkCls}>embody</Link> lists compounded semaglutide at $69/mo month-to-month.</li>
        <li><strong>If you will commit for a year</strong> - <Link href="/reviews/wellmedr" className={linkCls}>wellmedr</Link>&apos;s 12-month plan is the cheapest long-run price we found ($49/mo semaglutide).</li>
        <li><strong>If you want custom dosing and frequent check-ins</strong> - <Link href="/reviews/trimrx" className={linkCls}>trimrx</Link> offers unlimited provider check-ins.</li>
        <li><strong>If you want a dietitian and coaching in one price</strong> - <Link href="/reviews/medvi" className={linkCls}>MEDVi</Link> bundles them with no membership fee ($99/mo semaglutide promo, $199 regular).</li>
        <li><strong>If you want one flat price at every dose</strong> - <Link href="/reviews/altrx" className={linkCls}>altRx</Link> does, but read our review first: its parent company received an FDA warning letter in June 2026.</li>
      </ul>
      <p className="mb-8">
        Whichever you pick, check the price you will pay in month four, not just month one, and how
        easily you can pause or cancel.
      </p>

      {/* Mid-content slot */}
      {midSlot && <div className="mb-8">{midSlot}</div>}

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        What Does Online GLP-1 Treatment Cost?
      </h2>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Compounded semaglutide</strong> - about $49-$199/mo among the providers we rank, depending on plan length and whether a promo applies.</li>
        <li><strong>Compounded tirzepatide</strong> - about $89-$299/mo.</li>
        <li><strong>Brand-name, self-pay</strong> - often $1,000+/mo at list price; far less if your insurance covers it or you qualify for a manufacturer program.</li>
        <li><strong>Membership fees</strong> - some providers bill care separately from medication (ro: $39 first month, then $149/mo, or less on an annual plan).</li>
      </ul>
      <p className="mb-8">
        Watch for intro prices that jump after a few months, dose-based pricing that rises as you
        titrate up, and long prepaid plans. Compare the <strong>total monthly cost at your likely
        maintenance dose</strong>. See{" "}
        <Link href="/articles/real-cost-of-glp1-weight-loss" className={linkCls}>
          the real cost of GLP-1 weight loss
        </Link>{" "}
        and check availability in our{" "}
        <Link href="/online-weight-loss" className={linkCls}>
          online GLP-1 weight loss by state
        </Link>{" "}
        guide.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Side Effects and Safety
      </h2>
      <p className="mb-4">
        The most common side effects are <strong>nausea, vomiting, diarrhea, constipation, reflux and
        fatigue</strong>. They are usually worst in the first weeks and after each dose increase, and
        often ease with smaller meals, good hydration and slower titration.
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li><strong>Rare but serious:</strong> pancreatitis, gallbladder problems, kidney injury from dehydration, and low blood sugar when combined with some diabetes medications.</li>
        <li><strong>Boxed warning:</strong> thyroid C-cell tumors were seen in rodents; the drugs are contraindicated with a personal or family history of medullary thyroid carcinoma or MEN2.</li>
        <li><strong>Seek urgent care</strong> for severe, persistent abdominal pain (with or without vomiting), signs of an allergic reaction, or inability to keep fluids down.</li>
        <li><strong>Protect muscle:</strong> prioritize protein and resistance training while you lose weight.</li>
      </ul>
      <p className="mb-8">
        What to expect week by week:{" "}
        <Link href="/articles/glp1-side-effects-first-12-weeks" className={linkCls}>
          GLP-1 side effects in the first 12 weeks
        </Link>.
      </p>

      <hr className="mb-8 border-gray-200" />

      <h2 className="mb-4 text-[24px] font-bold text-[#191919]">
        Frequently Asked Questions
      </h2>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Are compounded GLP-1s the same as Wegovy or Zepbound?</h3>
      <p className="mb-4">
        They contain the same active ingredient, but they are not FDA-approved, and the FDA does not
        review them for safety, effectiveness or quality. Quality depends on the pharmacy, which is
        why we favor providers that name licensed 503A pharmacies. See{" "}
        <Link href="/articles/compounded-vs-brand-name-glp1" className={linkCls}>
          compounded vs brand-name
        </Link>.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">How much weight will I lose?</h3>
      <p className="mb-4">
        Trial averages were about 15% of body weight on semaglutide and about 21% on tirzepatide over
        roughly 16-17 months, but individual results vary widely and nothing is guaranteed.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Will my insurance pay for a GLP-1?</h3>
      <p className="mb-4">
        Sometimes, for brand-name drugs - coverage depends on your plan and often needs prior
        authorization. Compounded GLP-1s are almost always cash-pay, though HSA/FSA funds can often be
        used.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">What happens if I stop?</h3>
      <p className="mb-4">
        Most people regain a substantial share of lost weight after stopping. Talk to your clinician
        about a maintenance plan before you stop.
      </p>

      <h3 className="mb-2 text-[18px] font-bold text-[#191919]">Is online GLP-1 treatment legit?</h3>
      <p className="mb-8">
        Reputable telehealth providers use US-licensed clinicians and licensed pharmacies. The key is
        choosing a trustworthy one - which is what our{" "}
        <Link href="/" className={linkCls}>
          provider rankings
        </Link>{" "}
        and{" "}
        <Link href="/articles" className={linkCls}>
          weight-loss guides
        </Link>{" "}
        are for.
      </p>

      <hr className="mb-8 border-gray-200" />

      <p className="text-[13.5px] leading-[1.6] text-gray-500">
        <strong>General information, not medical advice.</strong> This content is for educational
        purposes only and is not a substitute for professional medical advice, diagnosis or treatment.
        It does not recommend any specific medication, product or provider for your individual
        situation, and it makes no promise of guaranteed results - results vary. Compounded GLP-1
        medications are not FDA-approved. GLP-1 medications are not suitable for everyone and carry
        risks, including gastrointestinal side effects, pancreatitis and gallbladder disease. A licensed
        clinician decides whether any treatment is appropriate for you. Prices are provider-published
        figures checked September 2026 and may change.
      </p>
    </div>
  );
}
