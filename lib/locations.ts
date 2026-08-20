/**
 * Orange County service-area catalog for Aligned Health's local landing
 * pages ("Areas We Serve").
 *
 * One source of truth used by:
 * - /areas-we-serve (hub, grouped by region)
 * - /areas-we-serve/[city] (30 city landing pages)
 * - /areas-we-serve/[city]/[service] (city x service combo pages)
 * - the sitemap
 *
 * Every entry carries real, verifiable local facts (a landmark, a
 * neighborhood, a freeway/corridor, and an approximate drive time from the
 * Laguna Hills office) so city pages read as genuinely local rather than a
 * find-and-replace of the city name. When adding a city, prefer a real
 * landmark/institution over generic filler.
 */

export type Region =
 | "South Orange County"
 | "Central Orange County"
 | "North Orange County"
 | "West Orange County";

export interface CityLocation {
 slug: string;
 name: string;
 region: Region;
 /** Primary ZIP code for the city (or its most central ZIP). */
 zip: string;
 /** Approximate one-way drive time from the Laguna Hills office, in minutes. */
 driveMinutes: number;
 /** Primary freeway/corridor connecting this city to the office. */
 freeway: string;
 /** A real, well-known landmark or institution in this city. */
 landmark: string;
 /** A real, well-known neighborhood or district within this city. */
 neighborhood: string;
 /** Wikipedia slug used for JSON-LD `sameAs`, e.g. "Irvine,_California". */
 wikipediaSlug: string;
 /** True for the clinic's own city (Laguna Hills). */
 home?: boolean;
}

export const LOCATIONS: readonly CityLocation[] = [
 {
 slug: "laguna-hills",
 name: "Laguna Hills",
 region: "South Orange County",
 zip: "92653",
 driveMinutes: 0,
 freeway: "I-5 at Avery Pkwy / Lake Forest Dr",
 landmark: "The Outlets at Laguna Hills",
 neighborhood: "Nellie Gail Ranch",
 wikipediaSlug: "Laguna_Hills,_California",
 home: true,
 },
 {
 slug: "laguna-niguel",
 name: "Laguna Niguel",
 region: "South Orange County",
 zip: "92677",
 driveMinutes: 8,
 freeway: "I-5 and the CA-73 toll road",
 landmark: "Laguna Niguel Regional Park",
 neighborhood: "Rancho Niguel",
 wikipediaSlug: "Laguna_Niguel,_California",
 },
 {
 slug: "laguna-beach",
 name: "Laguna Beach",
 region: "South Orange County",
 zip: "92651",
 driveMinutes: 15,
 freeway: "Pacific Coast Highway (CA-1)",
 landmark: "Main Beach Park and the Festival of Arts grounds",
 neighborhood: "the Village / Downtown art colony",
 wikipediaSlug: "Laguna_Beach,_California",
 },
 {
 slug: "laguna-woods",
 name: "Laguna Woods",
 region: "South Orange County",
 zip: "92637",
 driveMinutes: 5,
 freeway: "El Toro Rd off I-5",
 landmark: "Laguna Woods Village",
 neighborhood: "Gate 1 / Clubhouse district",
 wikipediaSlug: "Laguna_Woods,_California",
 },
 {
 slug: "mission-viejo",
 name: "Mission Viejo",
 region: "South Orange County",
 zip: "92691",
 driveMinutes: 10,
 freeway: "I-5 at Crown Valley Pkwy / Oso Pkwy",
 landmark: "Lake Mission Viejo",
 neighborhood: "Saddleback College area",
 wikipediaSlug: "Mission_Viejo,_California",
 },
 {
 slug: "aliso-viejo",
 name: "Aliso Viejo",
 region: "South Orange County",
 zip: "92656",
 driveMinutes: 10,
 freeway: "CA-73 toll road at Aliso Creek Rd",
 landmark: "Aliso Viejo Town Center",
 neighborhood: "Canyon Vistas",
 wikipediaSlug: "Aliso_Viejo,_California",
 },
 {
 slug: "lake-forest",
 name: "Lake Forest",
 region: "South Orange County",
 zip: "92630",
 driveMinutes: 12,
 freeway: "I-5 at El Toro Rd / Lake Forest Dr",
 landmark: "Lake Forest Sports Park",
 neighborhood: "Foothill Ranch border / Baker Ranch",
 wikipediaSlug: "Lake_Forest,_California",
 },
 {
 slug: "irvine",
 name: "Irvine",
 region: "Central Orange County",
 zip: "92618",
 driveMinutes: 20,
 freeway: "I-5 / I-405 / CA-133 interchange (the \u201cOrange Crush\u201d)",
 landmark: "UC Irvine and the Irvine Spectrum Center",
 neighborhood: "Irvine Business Complex",
 wikipediaSlug: "Irvine,_California",
 },
 {
 slug: "newport-beach",
 name: "Newport Beach",
 region: "Central Orange County",
 zip: "92660",
 driveMinutes: 20,
 freeway: "CA-73 toll road to Pacific Coast Highway",
 landmark: "Fashion Island and the Balboa Peninsula",
 neighborhood: "Corona del Mar",
 wikipediaSlug: "Newport_Beach,_California",
 },
 {
 slug: "newport-coast",
 name: "Newport Coast",
 region: "Central Orange County",
 zip: "92657",
 driveMinutes: 18,
 freeway: "CA-73 toll road at Newport Coast Dr",
 landmark: "Crystal Cove State Park",
 neighborhood: "Crystal Cove / Pelican Hill",
 wikipediaSlug: "Newport_Coast,_California",
 },
 {
 slug: "costa-mesa",
 name: "Costa Mesa",
 region: "Central Orange County",
 zip: "92626",
 driveMinutes: 25,
 freeway: "I-405 and CA-55 (Costa Mesa Fwy)",
 landmark: "South Coast Plaza and the OC Fair & Event Center",
 neighborhood: "The Triangle / SoBeCa arts district",
 wikipediaSlug: "Costa_Mesa,_California",
 },
 {
 slug: "dana-point",
 name: "Dana Point",
 region: "South Orange County",
 zip: "92629",
 driveMinutes: 15,
 freeway: "I-5 at Pacific Coast Highway",
 landmark: "Dana Point Harbor and Doheny State Beach",
 neighborhood: "Lantern District",
 wikipediaSlug: "Dana_Point,_California",
 },
 {
 slug: "san-clemente",
 name: "San Clemente",
 region: "South Orange County",
 zip: "92672",
 driveMinutes: 20,
 freeway: "I-5 at Avenida Pico",
 landmark: "San Clemente Pier",
 neighborhood: "the Pier Bowl district",
 wikipediaSlug: "San_Clemente,_California",
 },
 {
 slug: "san-juan-capistrano",
 name: "San Juan Capistrano",
 region: "South Orange County",
 zip: "92675",
 driveMinutes: 15,
 freeway: "I-5 at Ortega Hwy",
 landmark: "Mission San Juan Capistrano",
 neighborhood: "Los Rios Historic District",
 wikipediaSlug: "San_Juan_Capistrano,_California",
 },
 {
 slug: "rancho-santa-margarita",
 name: "Rancho Santa Margarita",
 region: "South Orange County",
 zip: "92688",
 driveMinutes: 12,
 freeway: "Santa Margarita Pkwy off I-5 / CA-241 toll road",
 landmark: "Rancho Santa Margarita Lake",
 neighborhood: "Central Park district",
 wikipediaSlug: "Rancho_Santa_Margarita,_California",
 },
 {
 slug: "ladera-ranch",
 name: "Ladera Ranch",
 region: "South Orange County",
 zip: "92694",
 driveMinutes: 10,
 freeway: "CA-241 toll road at Antonio Pkwy",
 landmark: "Founders Park",
 neighborhood: "Terramor Village",
 wikipediaSlug: "Ladera_Ranch,_California",
 },
 {
 slug: "foothill-ranch",
 name: "Foothill Ranch",
 region: "South Orange County",
 zip: "92610",
 driveMinutes: 15,
 freeway: "I-5 / CA-241 toll road at Portola Pkwy",
 landmark: "Foothill Towne Center",
 neighborhood: "Portola Hills border",
 wikipediaSlug: "Foothill_Ranch,_California",
 },
 {
 slug: "coto-de-caza",
 name: "Coto de Caza",
 region: "South Orange County",
 zip: "92679",
 driveMinutes: 20,
 freeway: "Antonio Pkwy / Coto de Caza Dr off CA-241",
 landmark: "Coto de Caza Golf & Racquet Club",
 neighborhood: "Vista de Colinas",
 wikipediaSlug: "Coto_de_Caza,_California",
 },
 {
 slug: "trabuco-canyon",
 name: "Trabuco Canyon",
 region: "South Orange County",
 zip: "92679",
 driveMinutes: 20,
 freeway: "Live Oak Canyon Rd off CA-241",
 landmark: "O\u2019Neill Regional Park",
 neighborhood: "Robinson Ranch",
 wikipediaSlug: "Trabuco_Canyon,_California",
 },
 {
 slug: "tustin",
 name: "Tustin",
 region: "Central Orange County",
 zip: "92780",
 driveMinutes: 25,
 freeway: "I-5 / CA-55 interchange",
 landmark: "Old Town Tustin and The District at Tustin Legacy",
 neighborhood: "Old Town Tustin Historic District",
 wikipediaSlug: "Tustin,_California",
 },
 {
 slug: "orange",
 name: "Orange",
 region: "North Orange County",
 zip: "92866",
 driveMinutes: 30,
 freeway: "CA-55 / CA-57 / CA-22 interchange",
 landmark: "Old Towne Orange Historic District and Chapman University",
 neighborhood: "Old Towne Orange Plaza",
 wikipediaSlug: "Orange,_California",
 },
 {
 slug: "santa-ana",
 name: "Santa Ana",
 region: "North Orange County",
 zip: "92701",
 driveMinutes: 30,
 freeway: "I-5 / CA-55 interchange",
 landmark: "the Santa Ana Zoo and historic downtown civic center",
 neighborhood: "French Park Historic District",
 wikipediaSlug: "Santa_Ana,_California",
 },
 {
 slug: "anaheim",
 name: "Anaheim",
 region: "North Orange County",
 zip: "92805",
 driveMinutes: 35,
 freeway: "I-5 at Ball Rd / Katella Ave",
 landmark: "the Disneyland Resort and Angel Stadium",
 neighborhood: "the Platinum Triangle",
 wikipediaSlug: "Anaheim,_California",
 },
 {
 slug: "fullerton",
 name: "Fullerton",
 region: "North Orange County",
 zip: "92832",
 driveMinutes: 40,
 freeway: "CA-57 / CA-91 interchange",
 landmark: "Cal State Fullerton and Downtown Fullerton",
 neighborhood: "the Fullerton Arboretum district",
 wikipediaSlug: "Fullerton,_California",
 },
 {
 slug: "huntington-beach",
 name: "Huntington Beach",
 region: "West Orange County",
 zip: "92648",
 driveMinutes: 30,
 freeway: "I-405 to Beach Blvd (CA-39)",
 landmark: "the Huntington Beach Pier, \u201cSurf City USA\u201d",
 neighborhood: "Downtown HB / Main Street",
 wikipediaSlug: "Huntington_Beach,_California",
 },
 {
 slug: "fountain-valley",
 name: "Fountain Valley",
 region: "West Orange County",
 zip: "92708",
 driveMinutes: 28,
 freeway: "I-405 at Brookhurst St",
 landmark: "Mile Square Regional Park",
 neighborhood: "the Fountain Valley Sports Park area",
 wikipediaSlug: "Fountain_Valley,_California",
 },
 {
 slug: "westminster",
 name: "Westminster",
 region: "West Orange County",
 zip: "92683",
 driveMinutes: 32,
 freeway: "I-405 / CA-22 interchange",
 landmark: "the Little Saigon business district on Bolsa Ave",
 neighborhood: "Little Saigon",
 wikipediaSlug: "Westminster,_California",
 },
 {
 slug: "garden-grove",
 name: "Garden Grove",
 region: "West Orange County",
 zip: "92840",
 driveMinutes: 32,
 freeway: "CA-22 (Garden Grove Fwy)",
 landmark: "the Christ Cathedral campus",
 neighborhood: "Historic Main Street district",
 wikipediaSlug: "Garden_Grove,_California",
 },
 {
 slug: "yorba-linda",
 name: "Yorba Linda",
 region: "North Orange County",
 zip: "92886",
 driveMinutes: 40,
 freeway: "CA-91 at Imperial Hwy",
 landmark: "the Richard Nixon Presidential Library and Museum",
 neighborhood: "East Lake Village",
 wikipediaSlug: "Yorba_Linda,_California",
 },
 {
 slug: "villa-park",
 name: "Villa Park",
 region: "North Orange County",
 zip: "92861",
 driveMinutes: 35,
 freeway: "CA-55 at Katella Ave / Santiago Blvd",
 landmark: "Villa Park High School and Santiago Oaks Regional Park",
 neighborhood: "the Cannon Estates area",
 wikipediaSlug: "Villa_Park,_California",
 },
] as const;

export function getAllLocationSlugs(): string[] {
 return LOCATIONS.map((l) => l.slug);
}

export function getLocationBySlug(slug: string): CityLocation | undefined {
 return LOCATIONS.find((l) => l.slug === slug);
}

export function getRegions(): Region[] {
 const seen = new Set<Region>();
 const ordered: Region[] = [];
 for (const l of LOCATIONS) {
 if (!seen.has(l.region)) {
 seen.add(l.region);
 ordered.push(l.region);
 }
 }
 return ordered;
}

export function getLocationsByRegion(region: Region): CityLocation[] {
 return LOCATIONS.filter((l) => l.region === region);
}
