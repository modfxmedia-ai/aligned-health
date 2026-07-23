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
 "A straight-shooting guide to how chiropractic adjustments relieve lower back pain, what actually happens on the table, who they help, and how we build a plan at our Laguna Hills clinic.",
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
 src: "/images/blog/chirorpactic-care.webp",
 alt: "Chiropractic adjustment in progress at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "If you&rsquo;ve landed here, chances are your lower back is talking to you, a dull ache after work, a sharp catch when you bend, a tight band that just won&rsquo;t let go. The good news: a well-placed chiropractic adjustment is one of the most studied, most reliable tools for exactly this. Here&rsquo;s what actually happens when you come in.",
 },
 { type: "h2", text: "What a chiropractic adjustment actually is" },
 {
 type: "p",
 text: "A chiropractic adjustment, also called *spinal manipulation*, is a controlled, high-velocity, low-amplitude thrust applied to a specific joint of your spine. The goal is to restore normal motion to segments that have become stiff, guarded, or misaligned. When a joint moves freely again, the surrounding muscles relax, the nerves that pass through the area calm down, and pain typically follows suit.",
 },
 {
 type: "p",
 text: "At Aligned Health we lean primarily on the **Diversified technique**, the most widely taught and evidence-supported manual adjusting approach in the profession. It&rsquo;s precise, it&rsquo;s hands-on, and it lets us tailor the direction and depth of each thrust to your specific spine on the specific day you walk in.",
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
 text: "New patients get about **45 minutes** of one-on-one time. We walk through your history, the mechanics of your pain, and what you&rsquo;re trying to get back to, whether that&rsquo;s deadlifting again, sleeping through the night, or picking up your kids without wincing.",
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
 text: "If you&rsquo;re in Laguna Hills, Mission Viejo, Lake Forest, Aliso Viejo, or anywhere in South Orange County, we can usually get you in same day or next day. Come see what a truly *aligned* recovery feels like.",
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
 name: "Dr. Tara Hadden, D.C.",
 role: "Chiropractor · Aligned Health",
 },
 hero: {
 src: "/images/blog/percussion-therapy-blog.webp",
 alt: "Percussion therapy treatment at Aligned Health in Laguna Hills",
 },
 body: [
 {
 type: "lead",
 text: "You&rsquo;ve seen the massage guns everywhere, gyms, airports, your neighbor&rsquo;s garage. Used well, **percussion therapy** is genuinely one of the fastest ways to unwind tight tissue and speed up recovery. Used badly, it&rsquo;s a bruise machine. Here&rsquo;s how we actually use it in-clinic, and when it&rsquo;s the right tool for the job.",
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
 text: "Percussion is a wonderful assistant and a lousy replacement. Use it to unlock a session, not to substitute for one.",
 attribution: "Dr. Tara Hadden, D.C.",
 },
 { type: "h2", text: "How to combine it with the rest of our toolkit" },
 {
 type: "p",
 text: "Percussion pairs especially well with **chiropractic adjustments**, **assisted stretching**, and **red light therapy**. The typical flow: percussion → adjustment → red light or PEMF. It&rsquo;s a small routine that stacks up to real, felt change, the kind of visit patients come back for.",
 },
 { type: "h2", text: "Book a recovery session" },
 {
 type: "p",
 text: "If you&rsquo;re training hard, coming back from an injury, or just tired of feeling wound up, a single well-run recovery session can reset your baseline. We&rsquo;re minutes from Laguna Niguel, Mission Viejo, Aliso Viejo, Irvine, and Newport Beach, and we can usually get you in same day.",
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
 text: "You&rsquo;re **fully clothed**, lying face-up or face-down depending on what we&rsquo;re treating. A padded harness cradles your hips (or head, for cervical work) and the table applies the traction in gentle pulses. Sessions last **20–30 minutes**. Most patients describe it as one of the most relaxing parts of their treatment, several fall asleep on the table.",
 },
 { type: "h2", text: "How many sessions does it take?" },
 {
 type: "p",
 text: "There&rsquo;s no honest one-size-fits-all answer, but a realistic frame: most patients feel a shift in the first **3–5 sessions** and complete a full protocol in **12–20 visits** over 6–10 weeks. We reassess constantly, if it&rsquo;s not working after the first few sessions, we don&rsquo;t just keep going. We change the plan.",
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
