/**
 * Blog data, hardcoded posts. No CMS yet, so posts live here as typed
 * data. Bodies use a small block grammar (Block[]) so the renderer can
 * stay simple and structured content is queryable later. Inline emphasis
 * uses **bold** and *italic* markdown-lite; see RichText.tsx.
 *
 * When adding a post:
 * 1) add an entry below (slug must be URL-safe, unique)
 * 2) bump `datePublished` (ISO 8601)
 * 3) confirm hero image is on an allowed CDN in next.config.ts
 *
 * Sitemap + generateStaticParams read from `getAllPosts()` so both stay
 * in sync automatically.
 */

export type BlogBlock =
 | { type: "p"; text: string }
 | { type: "lead"; text: string }
 | { type: "h2"; text: string }
 | { type: "h3"; text: string }
 | { type: "ul"; items: string[] }
 | { type: "ol"; items: string[] }
 | { type: "quote"; text: string; attribution?: string }
 | { type: "callout"; title: string; text: string };

export interface BlogPost {
 slug: string;
 title: string;
 /** Short SEO description, used for meta description + OG + card preview. */
 description: string;
 /** SEO keywords array, used for meta[name="keywords"] + JSON-LD. */
 keywords: string[];
 /** Category shown as chip on cards + post header. */
 category: string;
 /** ISO 8601 date string (YYYY-MM-DD). */
 datePublished: string;
 /** ISO 8601 date string (YYYY-MM-DD). Defaults to datePublished. */
 dateModified?: string;
 /** Reading time in minutes. */
 readingTime: number;
 author: {
 name: string;
 role: string;
 };
 hero: {
 src: string;
 alt: string;
 };
 body: BlogBlock[];
 /** Related service slugs (from /services). Used for CTAs at the end. */
 relatedServiceSlugs?: string[];
}

/* ---------------------------------------------------------------------- */
/* Posts */
/* ---------------------------------------------------------------------- */

const POSTS: readonly BlogPost[] = [
 {
 slug: "chiropractic-adjustments-lower-back-pain-laguna-hills",
 title:
 "Chiropractic Adjustments for Lower Back Pain: What to Expect at Aligned Health",
 description:
        "A straight-shooting guide to how chiropractic adjustments relieve lower back pain, what actually happens on the table, who they help, and how we build a plan at our Laguna Hills office.",
 keywords: [
 "chiropractor laguna hills",
 "lower back pain chiropractor",
 "chiropractic adjustment",
 "diversified technique",
 "orange county chiropractor",
 "back pain relief laguna hills",
 "spine adjustment near me",
 ],
 category: "Chiropractic Care",
 datePublished: "2026-07-08",
 readingTime: 6,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "https://images.squarespace-cdn.com/content/v1/5ee5219c63842071d176def5/3dd5634c-1569-4b59-9138-2caf3eb46524/IMG_8324.jpg",
 alt: "Chiropractor performing a diversified adjustment on a clothed patient at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "If you&rsquo;ve landed here, chances are your lower back is talking to you, a dull ache after work, a sharp catch when you bend, a tight band that just won&rsquo;t let go. The good news: a well-placed chiropractic adjustment is one of the most studied, most reliable tools for exactly this. Here&rsquo;s what actually happens when you come in.",
 },
 { type: "h2", text: "What a chiropractic adjustment actually is" },
 {
 type: "p",
 text: "A chiropractic adjustment, also called *spinal manipulation*, is a controlled, high-velocity, low-amplitude thrust applied to a specific joint of your body. The goal is to restore normal motion to segments that have become stiff, guarded, or restricted. When a joint moves freely again, the surrounding muscles relax, the nerves that pass through the area calm down, and pain typically follows suit.",
 },
 {
 type: "p",
 text: "At Aligned Health we lean primarily on the **Diversified technique**, the most widely taught and evidence-supported manual adjusting approach in the profession. It&rsquo;s precise, it&rsquo;s hands-on, and it lets us tailor the direction and depth of each thrust to your specific joint on the specific day you walk in.",
 },
 { type: "h2", text: "The kinds of lower back pain we see most" },
 {
 type: "p",
 text: "Not all back pain is the same, and not every case belongs on a chiropractic table. That&rsquo;s exactly why the first visit is a real exam, not a rubber-stamp. Cases that respond especially well to adjusting:",
 },
 {
 type: "ul",
 items: [
 "Mechanical low back pain from prolonged sitting, driving, or poor lifting mechanics",
 "Sacroiliac joint dysfunction, that one-sided ache above your glute",
 "Facet joint irritation after a workout, weekend project, or long flight",
 "Post-partum pelvic and low-back tension",
 "Mild-to-moderate disc-related pain (when appropriate, often paired with decompression)",
 ],
 },
 {
 type: "callout",
 title: "When we refer out",
 text: "If your exam suggests a fracture, cauda equina symptoms, active infection, or aggressive neurologic loss, we don&rsquo;t adjust, we refer you straight to the right specialist. Doing the right thing sometimes means not treating.",
 },
 { type: "h2", text: "What your first visit looks like" },
 {
 type: "p",
 text: "New patients get about **60 minutes** of one-on-one time. We walk through your history, the mechanics of your pain, and what you&rsquo;re trying to get back to, whether that&rsquo;s deadlifting again, sleeping through the night, or picking up your kids without wincing.",
 },
 {
 type: "ol",
 items: [
 "**History &amp; goals**, what hurts, when it started, what you&rsquo;ve tried, where you want to end up.",
 "**Exam**, posture, gait, range of motion, orthopedic and neurological screens.",
 "**Adjustment**, targeted, specific, hands-on. You&rsquo;ll usually feel it as a quick release, sometimes with an audible pop.",
 "**Recovery layer**, most visits pair the adjustment with one or two modalities: percussion, decompression, PEMF, or red light, matched to your case.",
 "**Plan**, a realistic schedule with a clear off-ramp. We want you moving well and out the door, not tethered to a plan you don&rsquo;t need.",
 ],
 },
 { type: "h2", text: "Does an adjustment hurt?" },
 {
 type: "p",
 text: "For the vast majority of patients, no. The thrust itself is quick, well under a second, and most people describe the immediate feeling as a release of pressure rather than pain. Some soreness the next day (like after a good workout) is normal and short-lived.",
 },
 {
 type: "quote",
 text: "The power that made the body heals the body, our job is to remove the interference.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "How adjustments fit into a real recovery plan" },
 {
 type: "p",
 text: "An adjustment on its own is a great tool. An adjustment plus targeted soft-tissue work, spinal decompression when indicated, and a couple of home mobility drills is a *plan*. That&rsquo;s the difference between short-term relief and durable change, and it&rsquo;s the standard we hold every case to.",
 },
 { type: "h2", text: "Ready to see if it&rsquo;s the right fit?" },
 {
 type: "p",
 text: "If you&rsquo;re in Laguna Hills, Mission Viejo, Lake Forest, Aliso Viejo, or anywhere in South Orange County, you can schedule now. Come see what a truly *aligned* recovery feels like.",
 },
 ],
 relatedServiceSlugs: [
 "chiropractic-adjustments",
 "spinal-decompression",
 "percussion-therapy",
 ],
 },

 {
 slug: "percussion-therapy-recovery-south-orange-county",
 title:
 "Percussion Therapy for Post-Workout Recovery: Why It Works (and Who It&rsquo;s For)",
 description:
 "Percussion therapy isn&rsquo;t just a fancy massage gun on TikTok, used correctly, it&rsquo;s one of the most effective tools we have for muscle recovery. Here&rsquo;s how we use it at Aligned Health.",
 keywords: [
 "percussion therapy",
 "massage gun therapy laguna hills",
 "muscle recovery orange county",
 "post workout recovery chiropractor",
 "myofascial release",
 "sports recovery laguna hills",
 "deep tissue percussion",
 ],
 category: "Recovery",
 datePublished: "2026-07-15",
 readingTime: 5,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/blog/percussion-therapy-blog.webp",
 alt: "Percussion therapy treatment at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
        text: "You&rsquo;ve seen the massage guns everywhere, gyms, airports, your neighbor&rsquo;s garage. Used well, **percussion therapy** is genuinely one of the fastest ways to unwind tight tissue and speed up recovery. Used badly, it&rsquo;s a bruise machine. Here&rsquo;s how we actually use it in-office, and when it&rsquo;s the right tool for the job.",
 },
 { type: "h2", text: "What percussion therapy does at the tissue level" },
 {
 type: "p",
 text: "Percussion therapy delivers rapid, targeted mechanical pulses, typically **1,800–3,200 per minute**, into a muscle group. Those pulses drive fluid movement in and out of the tissue, temporarily desensitize local pain receptors, and mechanically break up the low-grade adhesions that build up between fascial layers after hard training.",
 },
 {
 type: "p",
 text: "The net effect: you get looser, you move better, and you feel less sore, without the deep-bruise soreness that heavy manual work can leave behind.",
 },
 { type: "h2", text: "Who percussion therapy is actually for" },
 {
 type: "ul",
 items: [
 "Athletes coming out of a heavy training block who need to move well tomorrow",
 "Weekend warriors who just did more than their body was ready for",
 "Desk workers with the classic upper-trap / levator scapulae knot",
 "Post-surgical patients (once cleared) rebuilding tissue quality",
 "Anyone who feels tight but isn&rsquo;t *injured*, the sweet spot",
 ],
 },
 { type: "h2", text: "When it&rsquo;s the wrong tool" },
 {
 type: "callout",
 title: "Skip percussion when…",
 text: "You have an acute strain, a fresh bruise, a bone-on-bone joint, or any area of active inflammation. In those cases we&rsquo;ll usually start with ice compression, red light, or PEMF, and layer percussion back in once things calm down.",
 },
 { type: "h2", text: "How we use it in a session" },
 {
 type: "p",
 text: "Percussion is rarely the whole visit. It&rsquo;s a **prep and finish** tool, we use it before adjusting to relax the tissue surrounding the segment we&rsquo;re about to move, and again at the end to consolidate the change. Most treatments take **5–10 minutes** on the target area, alternating heads and pressures based on how the tissue responds.",
 },
 {
 type: "ol",
 items: [
 "**Warm the tissue**, light pressure, broad head, 30 seconds sweeping.",
 "**Find the target**, palpate for the actual restriction (not just where it hurts).",
 "**Work it**, deeper head, moderate pressure, cross-fiber for 60–90 seconds.",
 "**Retest &amp; move**, you should feel and see a change in range of motion. If you don&rsquo;t, percussion probably wasn&rsquo;t the right tool.",
 ],
 },
 { type: "h2", text: "Home-use tips that actually help" },
 {
 type: "p",
 text: "If you own a gun at home, three rules will keep you out of trouble: never hammer bone or a joint, never go longer than **two minutes** on the same spot, and never chase pain, chase *range of motion*. If a spot doesn&rsquo;t change in a minute of work, put the gun down.",
 },
 {
 type: "quote",
 text: "Percussion is a wonderful assistant and adjunct to manual hands on work. Use it to unlock a session.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "How to combine it with the rest of our toolkit" },
 {
 type: "p",
 text: "Percussion pairs especially well with **chiropractic adjustments**, **assisted stretching**, and **red light therapy**. The typical flow: percussion → adjustment → red light or PEMF. It&rsquo;s a small routine that stacks up to real, felt change, the kind of visit patients come back for.",
 },
 { type: "h2", text: "Book a recovery session" },
 {
 type: "p",
 text: "If you&rsquo;re training hard, coming back from an injury, or just tired of feeling wound up, a single well-run recovery session can reset your baseline. We&rsquo;re minutes from Laguna Niguel, Mission Viejo, Aliso Viejo, Irvine, and Newport Beach, and you can schedule now.",
 },
 ],
 relatedServiceSlugs: [
 "percussion-therapy",
 "assisted-stretching",
 "red-light-therapy",
 ],
 },

 {
 slug: "spinal-decompression-sciatica-relief-laguna-hills",
 title:
 "Spinal Decompression for Sciatica &amp; Herniated Discs: A Non-Surgical Alternative",
 description:
 "Sciatica and disc pain don&rsquo;t always need injections or surgery. Learn how non-surgical spinal decompression works at Aligned Health in Laguna Hills, and whether it&rsquo;s the right fit for you.",
 keywords: [
 "spinal decompression laguna hills",
 "sciatica treatment orange county",
 "herniated disc chiropractor",
 "non surgical back pain treatment",
 "disc pain relief laguna hills",
 "spinal traction therapy",
 "chiropractor for sciatica near me",
 ],
 category: "Back &amp; Disc Care",
 datePublished: "2026-07-22",
 readingTime: 7,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/blog/spd-sciatica-herniated-discs.jpg",
 alt: "Spinal decompression table used at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "If you&rsquo;ve been told you have a **herniated disc**, **bulging disc**, or **sciatica**, you&rsquo;ve probably heard about three paths: manage it, inject it, or operate. There&rsquo;s a fourth, and it&rsquo;s the one we start most of these cases with, non-surgical spinal decompression. Here&rsquo;s exactly what it is, how it works, and when it&rsquo;s worth trying before you commit to anything more invasive.",
 },
 { type: "h2", text: "What spinal decompression actually is" },
 {
 type: "p",
 text: "Spinal decompression is a form of **motorized traction**, you lie comfortably on a computer-controlled table that applies a gentle, cyclical pulling force to a specific segment of your spine. The pull isn&rsquo;t constant; it eases on and off in a programmed rhythm designed to coax fluid, oxygen, and nutrients back into the disc while relieving pressure on nearby nerves.",
 },
 {
 type: "p",
 text: "In plain terms: it creates space where your spine has lost it. And space is exactly what an inflamed disc or an irritated nerve root needs to calm down.",
 },
 { type: "h2", text: "The cases it helps most" },
 {
 type: "ul",
 items: [
 "Herniated or bulging lumbar discs with or without leg pain",
 "Classic sciatica, shooting, burning, or numb sensations down the leg",
 "Cervical disc pain with arm symptoms (yes, we decompress the neck too)",
 "Facet joint syndrome that hasn&rsquo;t responded to adjusting alone",
 "Degenerative disc disease with stubborn low-back stiffness",
 ],
 },
 {
 type: "callout",
 title: "When decompression isn&rsquo;t the right call",
 text: "We don&rsquo;t decompress patients with spinal fractures, advanced osteoporosis, spinal hardware in the treated area, tumors, or during pregnancy. If your exam raises any of those flags, we&rsquo;ll say so and adjust your plan.",
 },
 { type: "h2", text: "What a session actually feels like" },
 {
 type: "p",
 text: "You&rsquo;re **fully clothed**, lying face-up or face-down depending on what we&rsquo;re treating. A padded harness cradles your hips (or head, for cervical work) and the table applies the traction in gentle pulses. Sessions last **20–40 minutes**. Most patients describe it as one of the most relaxing parts of their treatment, several fall asleep on the table.",
 },
 { type: "h2", text: "How many sessions does it take?" },
 {
 type: "p",
 text: "There&rsquo;s no honest one-size-fits-all answer, but a realistic frame: most patients feel a shift in the first **3–5 sessions** and complete a full protocol in **12–24 visits** over 6–12 weeks. We reassess constantly, if it&rsquo;s not working after the first few sessions, we don&rsquo;t just keep going. We change the plan.",
 },
 {
 type: "quote",
 text: "The goal isn&rsquo;t to get you on the table forever. It&rsquo;s to get you moving well enough that you don&rsquo;t need it.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "Where decompression fits in the bigger picture" },
 {
 type: "p",
 text: "Decompression on its own works. Decompression paired with **targeted adjustments**, **PEMF or red light for the inflamed segment**, and a set of specific rehab drills works better. The best outcomes we see combine passive care (decompression + modalities) with active care (movement + strength) in the same plan.",
 },
 { type: "h2", text: "Should you try this before an injection or surgery?" },
 {
 type: "p",
 text: "Assuming your case is appropriate, and we&rsquo;ll tell you honestly if it&rsquo;s not, yes, we think it&rsquo;s worth trying a real, well-structured decompression protocol first. It&rsquo;s **non-surgical**, **non-injected**, and if it works, you avoid a much bigger intervention. If it doesn&rsquo;t, you haven&rsquo;t burned any bridges, you&rsquo;ve just added information for the next step.",
 },
 { type: "h2", text: "Book a decompression consult" },
 {
 type: "p",
 text: "The first visit is a full workup, history, exam, movement screen, and a specific recommendation. If decompression is a fit, we&rsquo;ll build a realistic plan. If it isn&rsquo;t, we&rsquo;ll tell you what we&rsquo;d do instead. We serve patients across South OC, Laguna Hills, Laguna Niguel, Mission Viejo, Aliso Viejo, Irvine, and Newport Beach, and we can usually get you in within a day or two.",
 },
 ],
 relatedServiceSlugs: [
 "spinal-decompression",
 "chiropractic-adjustments",
 "pemf-therapy",
 ],
 },

 {
 slug: "how-often-chiropractic-adjustments-laguna-hills",
 title:
 "How Often Should You Get a Chiropractic Adjustment? A Realistic Guide",
 description:
 "Wondering how many chiropractic visits you actually need? Here&rsquo;s how Aligned Health builds a realistic adjustment schedule based on your case, not a one-size-fits-all package.",
 keywords: [
 "how often chiropractic adjustments",
 "chiropractic visit frequency",
 "chiropractor laguna hills",
 "maintenance chiropractic care",
 "chiropractic treatment plan",
 "how many chiropractic sessions",
 "orange county chiropractor",
 ],
 category: "Chiropractic Care",
 datePublished: "2026-07-29",
 readingTime: 5,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/blog/blog-hero__what-to-do-after-a-chiro-adjustment.webp",
 alt: "Chiropractor assessing a patient&rsquo;s spine before an adjustment at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "One of the most common questions we get isn&rsquo;t &ldquo;does this work&rdquo;, it&rsquo;s &ldquo;how many times do I actually need to come in?&rdquo; The honest answer depends on what brought you in, how long it&rsquo;s been going on, and what you&rsquo;re trying to get back to. Here&rsquo;s how we actually build that number.",
 },
 {
 type: "h2",
 text: "There&rsquo;s no universal number, and be wary of anyone who gives you one",
 },
 {
 type: "p",
 text: "A 25-year-old with a two-week-old tweak from the gym and a 55-year-old managing a decade of stiff, degenerative changes in the low back are not the same case, even if they both walk in describing &ldquo;back pain.&rdquo; Anyone who quotes you a fixed number of visits before doing an exam is guessing, or selling. We&rsquo;d rather examine you first and tell you what we actually see.",
 },
 { type: "h2", text: "The three phases we actually plan around" },
 {
 type: "ol",
 items: [
 "**Relief phase**, frequent visits early (often 2-3 per week) while pain and guarding are highest, focused on calming the area down and restoring basic movement.",
 "**Corrective phase**, visits taper as things stabilize (often weekly), and we start layering in mobility and strengthening work so the improvement holds on its own.",
 "**Maintenance phase**, occasional visits (monthly or as needed) once you&rsquo;re back to normal life, aimed at keeping small issues from becoming big ones.",
 ],
 },
 {
 type: "callout",
 title: "A red flag to watch for",
        text: "Be cautious of any office that asks you to prepay for a large block of visits before your first exam is even finished. A real plan is built from what we find in your assessment, not from a package price.",
 },
 { type: "h2", text: "What actually changes the number" },
 {
 type: "ul",
 items: [
 "How long you&rsquo;ve had the issue, chronic cases generally take longer to settle than fresh ones",
 "Your job and daily posture demands, a desk job or physical labor both add their own stress to the plan",
 "Prior injuries or surgeries in the area",
 "How consistently you do the home mobility work we give you between visits",
 "Whether you&rsquo;re also addressing sleep, stress, and activity level, all of which affect recovery speed",
 ],
 },
 { type: "h2", text: "What maintenance care looks like once you feel good" },
 {
 type: "p",
 text: "Once you&rsquo;re out of pain and moving well, we&rsquo;re not interested in keeping you on a schedule you don&rsquo;t need. Many patients settle into a **once-a-month tune-up**, others come in only when something flares. Both are reasonable, the goal is matching the visit frequency to what your body is actually asking for, not to a set calendar.",
 },
 {
 type: "quote",
 text: "Care should shrink as you improve, not stay the same size forever.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "How we set your plan at the first visit" },
 {
 type: "p",
 text: "After your history and exam, we&rsquo;ll give you a realistic estimate, not a sales pitch, and we reassess as we go. If you&rsquo;re progressing faster than expected, your plan gets shorter. If something isn&rsquo;t responding the way it should, we&rsquo;ll say so and adjust the approach instead of just adding more visits.",
 },
 { type: "h2", text: "Book your first visit" },
 {
 type: "p",
 text: "If you&rsquo;re trying to figure out what a realistic plan looks like for your specific back, neck, or joint pain, the first visit is the place to start. We serve Laguna Hills, Mission Viejo, Laguna Niguel, Aliso Viejo, and the rest of South Orange County, and can usually get you in within a day or two.",
 },
 ],
 relatedServiceSlugs: [
 "chiropractic-adjustments",
 "spinal-decompression",
 "assisted-stretching",
 ],
 },

 {
 slug: "red-light-therapy-recovery-laguna-hills",
 title: "Red Light Therapy for Recovery: What It Does and Who It Helps",
 description:
 "Red light therapy is more than a wellness trend. Here&rsquo;s how we use photobiomodulation at Aligned Health in Laguna Hills to support tissue recovery, inflammation, and pain management.",
 keywords: [
 "red light therapy laguna hills",
 "photobiomodulation therapy",
 "red light therapy recovery",
 "infrared light therapy orange county",
 "chiropractor red light therapy",
 "inflammation recovery therapy",
 "red light therapy benefits",
 ],
 category: "Recovery",
 datePublished: "2026-08-05",
 readingTime: 5,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/services/red-light-therapy-banner.jpg",
 alt: "Red light therapy treatment bed glowing red at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "Red light therapy has gone from niche recovery tool to something you&rsquo;ll find in gyms, spas, and now clinical settings. Used with real clinical judgment rather than as a stand-alone trend, it&rsquo;s a genuinely useful part of a recovery plan. Here&rsquo;s how we actually use it.",
 },
 { type: "h2", text: "What red light therapy does at the tissue level" },
 {
 type: "p",
 text: "Red light therapy, also called **photobiomodulation**, uses specific wavelengths of red and near-infrared light to reach cells beneath the skin. The light energy is absorbed by structures inside the cell that support energy production, which is thought to help tissue repair itself and may calm local inflammation.",
 },
 {
 type: "p",
 text: "In practice, that translates to less soreness, a bit more ease of movement, and tissue that responds better to the rest of what we&rsquo;re doing that visit, whether that&rsquo;s an adjustment, percussion work, or decompression.",
 },
 { type: "h2", text: "Who we use it with" },
 {
 type: "ul",
 items: [
 "Patients with lingering joint or muscle inflammation",
 "Athletes managing tendinopathy or overuse injuries",
 "Post-adjustment patients who want to calm an irritated area faster",
 "Anyone recovering from a minor soft-tissue strain",
 "Patients looking for a non-invasive option alongside their main care plan",
 ],
 },
 { type: "h2", text: "What a session actually looks like" },
 {
 type: "p",
 text: "You&rsquo;ll lie or sit near the light panel with the treatment area exposed for **10-20 minutes**. There&rsquo;s no discomfort, no downtime, and most patients describe it as one of the more relaxing parts of their visit, a gentle warmth is usually all you feel.",
 },
 {
 type: "callout",
 title: "Where red light therapy fits, and where it doesn&rsquo;t",
 text: "Red light therapy is a supportive tool, not a stand-alone fix for a structural issue like a disc herniation or an unstable joint. We use it to complement hands-on care, not replace an accurate diagnosis or a full treatment plan.",
 },
 { type: "h2", text: "How it pairs with the rest of our toolkit" },
 {
 type: "p",
 text: "Red light therapy works especially well paired with **chiropractic adjustments**, **Game Ready ice compression**, and **percussion therapy**. A common flow: adjustment first to restore motion, then red light to support the tissue&rsquo;s response, occasionally paired with PEMF for deeper inflammation.",
 },
 {
 type: "quote",
 text: "It&rsquo;s not a miracle light, it&rsquo;s a tool that helps your body do what it&rsquo;s already trying to do.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "Book a session" },
 {
 type: "p",
 text: "If you&rsquo;re dealing with lingering inflammation, a stubborn overuse injury, or just want a low-effort addition to your recovery plan, ask us whether red light therapy fits your case. We&rsquo;re minutes from Laguna Niguel, Mission Viejo, Aliso Viejo, Irvine, and Newport Beach.",
 },
 ],
 relatedServiceSlugs: [
 "red-light-therapy",
 "game-ready-ice-compressions",
 "percussion-therapy",
 ],
 },

 {
 slug: "game-ready-ice-compression-sports-injury-recovery-laguna-hills",
 title: "When Game Ready Ice Compression Supports Sports Injury Recovery",
 description:
 "Learn how Game Ready ice compression in Laguna Hills may help reduce post-injury discomfort, support mobility, and aid a safe return to sports activity.",
 keywords: [
 "game ready ice compression laguna hills",
 "sports injury recovery orange county",
 "ice compression therapy",
 "cold compression therapy laguna hills",
 "athletic injury recovery",
 "return to play chiropractor",
 "sports rehabilitation laguna hills",
 ],
 category: "Sports Recovery",
 datePublished: "2026-08-11",
 readingTime: 6,
 author: {
 name: "Dr. Dustin Hack, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/blog/ice-compression-therapy-for-athletic-injury-recovery.jpg",
 alt: "Athlete applying a Game Ready ice compression wrap to his knee during a recovery session at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "Summer activity can leave you with more than good memories. Long pickleball games, weekend hikes, beach volleyball, cycling, and preseason workouts may lead to lingering soreness, swelling, stiffness, or pain that makes everyday movement feel harder than it should.",
 },
 {
 type: "p",
 text: "As fall sports preseason gets closer, we help active people understand when recovery therapies may fit into a larger care plan. Game Ready ice compression can be one option for managing discomfort after certain injuries or demanding training, but it works best when it is guided by an assessment of your specific needs.",
 },
 { type: "h2", text: "How Game Ready Ice Compression Supports Recovery" },
 {
 type: "p",
 text: "Game Ready ice compression in Laguna Hills combines controlled cold therapy with pneumatic compression. The cold component may help temporarily reduce pain and swelling, while intermittent compression may help manage fluid buildup around an irritated area.",
 },
 {
 type: "p",
 text: "This approach can be useful when soreness or swelling makes movement uncomfortable after an injury, a tough workout, or a rehabilitation visit. For example, a sore ankle after a court sport or an irritated knee after extra training may feel more manageable when recovery care is part of a provider-directed plan.",
 },
 {
 type: "p",
 text: "At Aligned Health, we consider more than the location of the pain. We look at your symptoms, injury history, activity level, health status, and goals before recommending any recovery therapy. Cold compression is not a replacement for an accurate diagnosis, a rehabilitation plan, or medical evaluation when a more serious injury may be present.",
 },
 {
 type: "p",
 text: "A provider may consider cold compression when you are dealing with:",
 },
 {
 type: "ul",
 items: [
 "Localized swelling after activity",
 "Soreness that limits comfortable movement",
 "Stiffness following training or rehabilitation",
 "Minor soft-tissue irritation that needs monitored recovery support",
 ],
 },
 { type: "h2", text: "Sports Injuries That May Benefit From Cold Compression" },
 {
 type: "p",
 text: "Not every ache needs the same response. We may consider provider-directed cold compression for common sports-related concerns such as ankle sprains, knee irritation, muscle strains, shoulder discomfort, post-workout soreness, and other minor soft-tissue injuries.",
 },
 {
 type: "p",
 text: "August can be especially busy for active families and athletes. More time outdoors, back-to-school routines, and preseason conditioning can increase training volume quickly. We often see people who feel fine during a game or workout, then notice discomfort later when they climb stairs, sit at work, or try to sleep.",
 },
 { type: "p", text: "Common warm-season situations can include:" },
 {
 type: "ul",
 items: [
 "A pickleball player with ankle or knee soreness after a long match",
 "A hiker whose knee feels irritated after a steep trail",
 "A beach volleyball player with a muscle strain or shoulder discomfort",
 "A cyclist with lingering leg soreness after increased mileage",
 "A student athlete feeling run down during preseason conditioning",
 ],
 },
 {
 type: "callout",
 title: "When to seek care right away",
 text: "Sudden severe pain, an inability to bear weight, visible deformity, numbness, major weakness, or rapidly worsening swelling may point to a problem that needs more immediate attention. We want you to get the right level of care, not simply push through symptoms.",
 },
 { type: "h2", text: "When Game Ready Ice Compression in Laguna Hills Fits Care" },
 {
 type: "p",
 text: "Recovery therapy is usually most helpful when it is part of a bigger plan. Depending on what we find during your assessment, Game Ready ice compression may be combined with chiropractic care, sports rehabilitation, mobility work, or guided exercises that match your stage of healing.",
 },
 {
 type: "p",
 text: "Timing matters, especially for active people. A new injury can affect work, school, sleep, family responsibilities, and training all at once. Persistent soreness can also slowly change how you move, which may lead you to favor one side or avoid movements you normally enjoy. Timely appointments give us an opportunity to assess what is going on before discomfort becomes a bigger interruption.",
 },
 { type: "p", text: "During care, we can help determine:" },
 {
 type: "ul",
 items: [
 "The treatment area that needs attention",
 "When cold compression may fit into your recovery routine",
 "How often therapy may be appropriate",
 "What activity changes may support healing",
 "When it may be appropriate to add mobility or strengthening work",
 ],
 },
 {
 type: "p",
 text: "We also provide at-home recovery recommendations based on your goals and symptoms. The right plan for a recreational athlete returning to weekend activity may look different from the plan for a student preparing for regular practices.",
 },
 { type: "h2", text: "Pair Recovery Therapy with a Return-to-Play Plan" },
 {
 type: "p",
 text: "Feeling less sore is helpful, but symptom relief is only one piece of sports injury recovery. Before returning to full practices, tournament play, or high-intensity workouts, many people also need to rebuild mobility, strength, balance, and confidence in the affected area.",
 },
 {
 type: "p",
 text: "A gradual return-to-activity plan can help you avoid doing too much too soon. This is particularly important during preseason conditioning, when practice schedules grow quickly and athletes may feel pressure to keep up. We can help you understand which movements may be appropriate now and which ones may need to wait while your body recovers.",
 },
 {
 type: "p",
 text: "Provider guidance may include attention to rest, activity modification, hydration, sleep, mobility exercises, and progressive strengthening. Rather than treating recovery as a short pause between workouts, we encourage you to see it as part of staying active over the long term.",
 },
 { type: "h2", text: "Recovery Assessment Before Fall Sports" },
 {
 type: "p",
 text: "Pain, swelling, stiffness, or trouble returning to normal activity are worth paying attention to before fall sports and seasonal routines intensify. At Aligned Health in Laguna Hills, we can assess sports-related concerns and determine whether Game Ready ice compression, chiropractic care, sports rehabilitation, or another approach may fit your needs. We offer timely appointments and accept many PPO insurance plans.",
 },
 {
 type: "quote",
 text: "Give your body and your care plan enough time to address pain, restore movement, and build back toward the activities you enjoy.",
 attribution: "Dr. Dustin Hack, D.C.",
 },
 { type: "h2", text: "Support Your Recovery With Targeted Care" },
 {
 type: "p",
 text: "At Aligned Health, we can help you determine whether Game Ready ice compression in Laguna Hills fits your recovery plan. Our team focuses on care that supports comfort, mobility, and a gradual return to movement. If you have questions or would like to schedule an appointment, reach out today.",
 },
 ],
 relatedServiceSlugs: [
 "game-ready-ice-compressions",
 "chiropractic-adjustments",
 "assisted-stretching",
 ],
 },

  {
    slug: "assisted-stretching-stiff-hips-laguna-hills",
    title: "Should You Try Assisted Stretching for Stiff Hips?",
    description:
      "Discover how assisted stretching in Laguna Hills may ease hip stiffness, improve flexibility, and support comfortable movement through personalized care options.",
    keywords: [
      "assisted stretching laguna hills",
      "hip mobility chiropractor",
      "stiff hips treatment orange county",
      "guided stretching therapy",
      "hip flexor tightness relief",
      "flexibility therapy laguna hills",
      "hip pain chiropractor near me",
    ],
    category: "Recovery",
    datePublished: "2026-08-18",
    readingTime: 6,
    author: {
      name: "Dr. Dustin Hack, D.C.",
      role: "Chiropractor · Aligned Health",
    },
    hero: {
      src: "/images/blog/improve-hip-mobility-with-assisted-stretching.jpg",
      alt: "Provider guiding a patient through an assisted hip stretch at Aligned Health in Laguna Hills",
    },
    body: [
      {
        type: "lead",
        text: "Stiff hips can take the fun out of late-summer plans. A beach walk, a hike, a round of golf, a bike ride, or even a long drive can feel less enjoyable when standing up, climbing stairs, or getting out of a chair feels restricted.",
      },
      {
        type: "p",
        text: "At Aligned Health, we often see people who stay active but still feel like their hips do not move as freely as they should. Assisted stretching in Laguna Hills can be a personalized option for people who want guided support with mobility, flexibility, and recovery. It is not a one-size-fits-all answer, though. Understanding what may be causing your stiffness can help you decide whether guided stretching belongs in your care plan.",
      },
      { type: "h2", text: "Know Why Your Hips May Feel Tight" },
      {
        type: "p",
        text: "Hip stiffness can build up slowly. Long hours at a desk, daily commuting, and extended road trips can leave the hip flexors and nearby muscles in the same shortened position for too long. Even people who do not feel &ldquo;inactive&rdquo; may notice that sitting changes how easily they move once they stand up.",
      },
      {
        type: "p",
        text: "Summer activity can create stiffness, too. Running, cycling, strength training, recreational sports, and busy weekends may leave muscles feeling tired when recovery time and mobility work get pushed aside. A sudden jump in activity, such as doing more hiking or pickleball than usual, can also make tightness more noticeable.",
      },
      {
        type: "p",
        text: "The source of hip discomfort is not always the hip joint itself. Limited movement may involve the lower back, pelvis, glutes, hamstrings, or other surrounding soft tissues. We recommend a professional evaluation when stiffness keeps returning, gets worse, or comes with symptoms such as pain, numbness, weakness, or trouble bearing weight.",
      },
      { type: "h2", text: "Decide Whether Assisted Stretching Fits Your Needs" },
      {
        type: "p",
        text: "Guided stretching may be worth considering when stiffness is affecting the way you work, exercise, travel, or move through daily life. Rather than trying to push through a stretch on your own, you can receive support with positioning and range of motion based on your comfort level.",
      },
      {
        type: "p",
        text: "People who may ask us about assisted stretching include:",
      },
      {
        type: "ul",
        items: [
          "Adults who feel stiff after desk work or long commutes",
          "Active people recovering from demanding workouts or sports",
          "Individuals returning to movement after an injury",
          "People who feel limited while walking, bending, sitting, or standing",
          "Anyone who wants help building a more consistent mobility routine",
        ],
      },
      {
        type: "p",
        text: "During assisted stretching, we can help identify areas that appear restricted and guide your body into controlled movements. Proper alignment matters. Some stretches are hard to perform effectively alone because it is difficult to relax one area while trying to hold your position in another.",
      },
      {
        type: "callout",
        title: "When another approach may come first",
        text: "Stretching should always fit the person, not the other way around. Recent injuries, joint instability, significant arthritis, post-surgical restrictions, and unexplained pain may require a different approach first. We take your history and current concerns into account so we can determine whether stretching is appropriate or whether another therapeutic service may better support your needs.",
      },
      { type: "h2", text: "See How a Guided Stretching Session Works" },
      {
        type: "p",
        text: "A guided stretching visit usually starts with a conversation. We want to know when your hips feel tight, what activities make the problem more noticeable, how active you are, and what you hope to get back to doing with greater comfort. Your health history and movement goals help shape the session.",
      },
      {
        type: "p",
        text: "From there, we may guide the hips and legs through gentle, controlled movements that address areas such as the hip flexors, glutes, hamstrings, and inner thighs. The goal is not to force flexibility or chase an uncomfortable range of motion. Instead, we focus on gradual movement that respects your body&rsquo;s signals.",
      },
      {
        type: "p",
        text: "Assisted stretching can also complement other services we provide, including chiropractic care, rehabilitation, and recovery therapies. When hip stiffness is tied to broader movement concerns, a combined plan may support pain relief, strength, movement quality, and injury recovery in a more complete way.",
      },
      { type: "h2", text: "Build Hip Mobility That Lasts Beyond the Table" },
      {
        type: "p",
        text: "One session can feel like a helpful reset, but lasting mobility usually comes from steady habits over time. Professional care can help you understand what your body needs, while realistic movement changes can make it easier to maintain progress between visits.",
      },
      {
        type: "p",
        text: "Depending on your needs, we may discuss supportive strategies such as:",
      },
      {
        type: "ul",
        items: [
          "Taking regular breaks from long periods of sitting",
          "Using simple mobility movements recommended for your current ability",
          "Building strength in the glutes, core, and legs",
          "Adjusting training volume when soreness or fatigue is building",
          "Making time for recovery after busy activity days",
        ],
      },
      {
        type: "p",
        text: "Late summer can be a good reminder to prepare your body before activity instead of waiting until it feels tight. A brief warmup before a beach walk, cycling outing, hike, golf game, pickleball match, or travel day may help your body ease into movement. Rest days matter, too, especially when your schedule is full of back-to-school errands, work demands, and weekend plans.",
      },
      { type: "h2", text: "Recognize Patterns in Hip Stiffness" },
      {
        type: "p",
        text: "Stiff hips do not have to become a normal part of work, exercise, travel, or getting older. Paying attention to when stiffness starts, what makes it worse, and which activities feel limited can help clarify whether it is related to prolonged sitting, changes in activity, recovery needs, or another movement concern.",
      },
      {
        type: "p",
        text: "When stiffness keeps returning, becomes more severe, or occurs with pain, numbness, weakness, or trouble bearing weight, an appropriate professional evaluation can help identify the factors involved. Recognizing these patterns supports safer, more informed decisions about mobility, activity, and recovery.",
      },
      {
        type: "quote",
        text: "Stretching should fit the person in front of us, not the other way around.",
        attribution: "Dr. Dustin Hack, D.C.",
      },
      { type: "h2", text: "Support More Comfortable, Confident Movement" },
      {
        type: "p",
        text: "At Aligned Health, we tailor care to your mobility goals and daily activity needs. Our assisted stretching in Laguna Hills can help you improve flexibility, move with greater ease, and build a routine that supports lasting progress. Contact us to discuss your needs and schedule a visit.",
      },
    ],
    relatedServiceSlugs: [
      "assisted-stretching",
      "chiropractic-adjustments",
      "percussion-therapy",
    ],
  },
];

/* ---------------------------------------------------------------------- */
/* Helpers */
/* ---------------------------------------------------------------------- */

/** All posts, newest first. */
export function getAllPosts(): readonly BlogPost[] {
 return [...POSTS].sort((a, b) =>
 a.datePublished < b.datePublished ? 1 : -1
 );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
 return POSTS.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
 return POSTS.map((p) => p.slug);
}

/** Return the 3 most recent posts. */
export function getRecentPosts(limit = 3): readonly BlogPost[] {
 return getAllPosts().slice(0, limit);
}

/** Format an ISO date as "Jul 15, 2026" (en-US, UTC-safe). */
export function formatPostDate(iso: string): string {
 const [year, month, day] = iso.split("-").map(Number);
 const date = new Date(Date.UTC(year, month - 1, day));
 return date.toLocaleDateString("en-US", {
 month: "short",
 day: "numeric",
 year: "numeric",
 timeZone: "UTC",
 });
}
