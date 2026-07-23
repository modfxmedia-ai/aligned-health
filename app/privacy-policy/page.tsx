import type { Metadata } from "next";
import { ClinicJsonLd } from "@/app/_components/ClinicJsonLd";

const PATH = "/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Aligned Health, through our Squarespace-hosted website, collects and uses visitor data.",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy · Aligned Health",
    description:
      "How Aligned Health, through our Squarespace-hosted website, collects and uses visitor data.",
    url: PATH,
    type: "article",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <ClinicJsonLd pagePath={PATH} />

      <section className="section-cream section relative overflow-hidden">
        <div className="container-shell relative z-10">
          <article className="mx-auto max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3">
              <span aria-hidden="true" className="block h-px w-10 bg-tan" />
              <p className="eyebrow !text-mocha">Legal</p>
              <span aria-hidden="true" className="block h-px w-10 bg-tan" />
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-center font-serif text-5xl leading-[1.05] tracking-tight text-espresso md:text-6xl">
              Privacy{" "}
              <span className="italic text-tan">Policy.</span>
            </h1>

            {/* Body */}
            <div className="mt-12 space-y-6 text-base leading-relaxed text-mocha md:text-lg">
              <p>
                This website is hosted by Squarespace. Squarespace collects
                personal information when you visit this website, including:
              </p>

              <ul className="space-y-3 border-l-2 border-tan/40 pl-6">
                <li className="text-espresso">
                  Information about your browser, network and device
                </li>
                <li className="text-espresso">
                  Web pages you visited prior to coming to this website
                </li>
                <li className="text-espresso">
                  Web pages you view while on this website
                </li>
                <li className="text-espresso">Your IP address</li>
              </ul>

              <p>
                Squarespace needs the data to run this website, and to protect
                and improve its platform and services. You can read more about
                how Squarespace uses your data (site usage information of end
                users) for its own purposes in their{" "}
                <a
                  href="https://www.squarespace.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-tan underline-offset-4 hover:text-espresso"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Hairline footer */}
            <div className="mt-16 border-t border-tan/30 pt-6 text-center">
              <p className="text-[0.65rem] uppercase tracking-[0.24em] text-mocha/70">
                Aligned Health · Laguna Hills, CA
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
