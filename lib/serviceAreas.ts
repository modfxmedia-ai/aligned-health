import type { CityLocation } from "@/lib/locations";
import type { Service } from "@/lib/services";

/**
 * Content-generation layer for the /areas-we-serve city x service pages.
 *
 * Rather than swapping a city name into one fixed paragraph, every locally
 * flavored sentence is chosen from a small bank of phrasings (deterministic,
 * based on a hash of the city+service pair) and always weaves in a real
 * fact from `CityLocation` (freeway, landmark, neighborhood, drive time).
 * This keeps ~420 generated pages from sharing one identical narrative
 * skeleton while staying factually honest, no invented statistics.
 *
 * `structuralVariant` additionally rotates which section order the page
 * template renders in, so the batch doesn't share one HTML fingerprint.
 */

function hashString(input: string): number {
 let hash = 0;
 for (let i = 0; i < input.length; i++) {
 hash = (hash * 31 + input.charCodeAt(i)) >>> 0;
 }
 return hash;
}

function pick<T>(options: readonly T[], hash: number, salt: number): T {
 return options[(hash + salt) % options.length];
}

function driveClause(location: CityLocation): string {
 if (location.home) {
 return "right here in Laguna Hills";
 }
 return `about ${location.driveMinutes} minutes from ${location.name} via ${location.freeway}`;
}

/* ---------------------------------------------------------------------- */
/* City-level content (no specific service), used on /areas-we-serve/[city] */
/* ---------------------------------------------------------------------- */

export interface CityOverviewContent {
 intro: string;
 commuteNote: string;
 localFaq: { q: string; a: string };
}

const CITY_INTRO_TEMPLATES: ReadonlyArray<
 (location: CityLocation) => string
> = [
 (l) =>
 `Aligned Health's Laguna Hills clinic sits ${driveClause(l)}, making it a straightforward option for ${l.name} residents near ${l.landmark} who want chiropractic care and recovery therapies without a long drive.`,
 (l) =>
 `If you live or work near ${l.neighborhood} in ${l.name}, our office is ${driveClause(l)} down ${l.freeway}, close enough for a lunch-break adjustment or an after-work recovery session.`,
 (l) =>
 `${l.name} residents make up a steady share of our patient base. The drive in, ${driveClause(l)}, is easy for the routine of a full care plan, not just a one-off visit.`,
 (l) =>
 `Patients near ${l.landmark} in ${l.name} choose Aligned Health because the office is ${driveClause(l)}, and because we offer the full range of care under one roof instead of referring out.`,
];

const CITY_COMMUTE_TEMPLATES: ReadonlyArray<
 (location: CityLocation) => string
> = [
 (l) =>
 l.home
 ? `Our Laguna Hills office is the clinic itself, no commute required for local patients.`
 : `Most ${l.name} patients take ${l.freeway}; door-to-door it's roughly ${l.driveMinutes} minutes outside of peak traffic.`,
 (l) =>
 l.home
 ? `Being based in Laguna Hills means we know the area, and the office, better than anyone.`
 : `From the ${l.neighborhood} area of ${l.name}, expect around ${l.driveMinutes} minutes via ${l.freeway} to reach our Merit Circle office.`,
];

const CITY_FAQ_TEMPLATES: ReadonlyArray<
 (location: CityLocation) => { q: string; a: string }
> = [
 (l) => ({
 q: `Do you see patients from ${l.name}?`,
 a: `Yes. ${l.name} is one of the communities we regularly treat patients from, including the ${l.neighborhood} area. The drive is ${driveClause(l)}, and we offer flexible scheduling for anyone commuting in.`,
 }),
 (l) => ({
 q: `How far is Aligned Health from ${l.name}?`,
 a: l.home
 ? `Our office is in Laguna Hills itself, so if you live nearby you're already close.`
 : `Aligned Health is ${driveClause(l)}. Most ${l.name} patients find it an easy addition to their week, not a detour.`,
 }),
 (l) => ({
 q: `Is Aligned Health convenient if I live near ${l.landmark}?`,
 a: `It should be. We're ${driveClause(l)}, and patients near ${l.landmark} regularly make the trip for both one-off recovery sessions and ongoing care plans.`,
 }),
];

export function buildCityOverview(location: CityLocation): CityOverviewContent {
 const hash = hashString(location.slug);
 return {
 intro: pick(CITY_INTRO_TEMPLATES, hash, 0)(location),
 commuteNote: pick(CITY_COMMUTE_TEMPLATES, hash, 1)(location),
 localFaq: pick(CITY_FAQ_TEMPLATES, hash, 2)(location),
 };
}

/* ---------------------------------------------------------------------- */
/* City x Service combo content, used on /areas-we-serve/[city]/[service] */
/* ---------------------------------------------------------------------- */

export interface ServiceAreaContent {
 metaTitle: string;
 metaDescription: string;
 intro: string;
 whyChooseUs: string[];
 localFaq: { q: string; a: string };
 commuteNote: string;
 /** Rotates section order in the page template so the batch isn't one fixed layout. */
 structuralVariant: 0 | 1 | 2;
}

const COMBO_INTRO_TEMPLATES: ReadonlyArray<
 (service: Service, location: CityLocation) => string
> = [
 (s, l) =>
 `Searching for ${s.label.toLowerCase()} near ${l.name}? Aligned Health's Laguna Hills office is ${driveClause(l)}, and it's where ${l.name} patients near ${l.landmark} come for ${s.short.toLowerCase()}.`,
 (s, l) =>
 `${s.label} is one of 14 modalities we offer patients from ${l.name}. The office sits ${driveClause(l)}, close enough for ${l.neighborhood} residents to build it into a real care plan.`,
 (s, l) =>
 `For ${l.name} residents near ${l.neighborhood}, ${s.label.toLowerCase()} at Aligned Health means real, hands-on care, not a rushed appointment. Our office is ${driveClause(l)}.`,
 (s, l) =>
 `Patients from ${l.name}, including those near ${l.landmark}, drive ${driveClause(l)} for ${s.label.toLowerCase()} at Aligned Health, one of ${l.name}'s closer options for this kind of care.`,
];

const COMBO_WHY_TEMPLATES: ReadonlyArray<
 (service: Service, location: CityLocation) => string
> = [
 (s, l) =>
 `A straightforward drive from ${l.neighborhood}, most ${l.name} patients reach us ${driveClause(l)}.`,
 (s, l) =>
 `${s.label} is paired with up to 13 other on-site modalities, so ${l.name} patients don't need a second appointment across town.`,
 (s, l) => s.benefits[0]?.replace(/&rsquo;/g, "\u2019") ?? `Evidence-informed care for ${l.name} patients.`,
 (s, l) =>
 `We regularly treat patients commuting in via ${l.freeway}, so we know the schedule that works for ${l.name} residents.`,
];

const COMBO_FAQ_TEMPLATES: ReadonlyArray<
 (service: Service, location: CityLocation) => { q: string; a: string }
> = [
 (s, l) => ({
 q: `Do you offer ${s.label.toLowerCase()} for patients coming from ${l.name}?`,
 a: `Yes. ${l.name} residents, including those near ${l.landmark}, regularly come in for ${s.label.toLowerCase()}. The drive is ${driveClause(l)}.`,
 }),
 (s, l) => ({
 q: `How far is Aligned Health from ${l.name} for ${s.label.toLowerCase()}?`,
 a: l.home
 ? `We're based in Laguna Hills, so if you're local, you're already close.`
 : `Aligned Health is ${driveClause(l)}. Most ${l.name} patients treat it as a normal part of their week, not a special trip.`,
 }),
 (s, l) => ({
 q: `Can I combine ${s.label.toLowerCase()} with other services in one visit?`,
 a: `Yes, most ${l.name} patients pair ${s.label.toLowerCase()} with one or two other modalities in the same appointment, so the ${driveClause(l)} trip covers more ground.`,
 }),
];

const COMBO_COMMUTE_TEMPLATES: ReadonlyArray<
 (location: CityLocation) => string
> = [
 (l) =>
 l.home
 ? `No commute needed, our office is in Laguna Hills.`
 : `Expect roughly ${l.driveMinutes} minutes via ${l.freeway} from the ${l.neighborhood} area of ${l.name}.`,
 (l) =>
 l.home
 ? `Being Laguna Hills locals ourselves, we know this office is home turf.`
 : `From ${l.name}, ${l.freeway} is the most direct route in, about ${l.driveMinutes} minutes door-to-door.`,
];

export function buildServiceAreaContent(
 service: Service,
 location: CityLocation
): ServiceAreaContent {
 const hash = hashString(`${location.slug}::${service.slug}`);

 return {
 metaTitle: `${service.label} in ${location.name}, CA \u00b7 Aligned Health`,
 metaDescription: `${service.label} for ${location.name} patients at Aligned Health in Laguna Hills, CA, ${driveClause(location)}. Schedule now, most PPO plans accepted.`,
 intro: pick(COMBO_INTRO_TEMPLATES, hash, 0)(service, location),
 whyChooseUs: [
 pick(COMBO_WHY_TEMPLATES, hash, 1)(service, location),
 pick(COMBO_WHY_TEMPLATES, hash, 2)(service, location),
 pick(COMBO_WHY_TEMPLATES, hash, 3)(service, location),
 ],
 localFaq: pick(COMBO_FAQ_TEMPLATES, hash, 4)(service, location),
 commuteNote: pick(COMBO_COMMUTE_TEMPLATES, hash, 5)(location),
 structuralVariant: (hash % 3) as 0 | 1 | 2,
 };
}

export interface ServiceAreaCombo {
 service: Service;
 location: CityLocation;
}

export function getAllServiceAreaCombos(
 services: readonly Service[],
 locations: readonly CityLocation[]
): ServiceAreaCombo[] {
 const combos: ServiceAreaCombo[] = [];
 for (const location of locations) {
 for (const service of services) {
 combos.push({ service, location });
 }
 }
 return combos;
}
