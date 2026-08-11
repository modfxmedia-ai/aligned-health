"use client";

import Script from "next/script";

// GoHighLevel / LeadConnector "Website Contact Us Form" embed, used by
// every contact form on the site (contact page + homepage "Get in Touch").
const FORM_ID = "qsp31NNRGLp2Oe6dq101";

export function LeadConnectorForm({ className }: { className?: string }) {
 return (
 <div className={className}>
 <iframe
 src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
 style={{ width: "100%", height: 700, border: "none", borderRadius: 8, display: "block" }}
 id={`inline-${FORM_ID}`}
 data-layout="{'id':'INLINE'}"
 data-trigger-type="alwaysShow"
 data-trigger-value=""
 data-activation-type="alwaysActivated"
 data-activation-value=""
 data-deactivation-type="neverDeactivate"
 data-deactivation-value=""
 data-form-name="Website Contact Us Form"
 data-height="991"
 data-layout-iframe-id={`inline-${FORM_ID}`}
 data-form-id={FORM_ID}
 title="Website Contact Us Form"
 />
 <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
 </div>
 );
}
