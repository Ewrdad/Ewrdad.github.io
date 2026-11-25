/**
 * @typedef {"active" | "expired" | "no-expiry"} CertificationStatus
 *
 * @typedef {Object} CertificationItem
 * @property {string} id - Unique slug for the certification
 * @property {string} title - Official certification title
 * @property {string} issuer - Issuing organization
 * @property {string} [code] - Optional exam or credential code (e.g., "SAA-C03")
 * @property {string} [issued] - Issue date (e.g., "May 2026")
 * @property {string} [expires] - Expiration date (e.g., "May 2029")
 * @property {string} [dateRange] - Optional explicit date display override
 * @property {CertificationStatus} status - Active, expired, or no-expiry
 * @property {string | string[]} description - Narrative paragraph(s)
 *
 * @typedef {Object} CertificationGroup
 * @property {string} id - Stable hash anchor ID matching sidebar links
 * @property {string} vendorLabel - Sidebar display label for the vendor group
 * @property {CertificationItem[]} items - Ordered list of certifications
 */

/**
 * Formats certification metadata lines for display in PageSection.
 *
 * @param {CertificationItem} cert
 * @returns {string[]}
 */
export function formatCertificationMeta(cert) {
  let dateText = cert.dateRange || "";

  if (!dateText) {
    if (cert.issued && cert.expires) {
      const expiryPrefix = cert.status === "expired" ? "Expired" : "Expires";
      dateText = `Issued ${cert.issued} · ${expiryPrefix} ${cert.expires}`;
    } else if (cert.issued) {
      dateText =
        cert.status === "expired"
          ? `Issued ${cert.issued} · Expired`
          : `Issued ${cert.issued}`;
    } else if (cert.status === "expired") {
      dateText = "Expired";
    }
  }

  return [cert.issuer, cert.code, dateText].filter(Boolean);
}

/** @type {CertificationGroup[]} */
export const CERTIFICATION_GROUPS = [
  {
    id: "aws",
    vendorLabel: "AWS",
    items: [
      {
        id: "aws-sap",
        title: "AWS Certified Solutions Architect – Professional",
        issuer: "Amazon Web Services (AWS)",
        issued: "May 2026",
        expires: "May 2029",
        status: "active",
        description:
          "Building on my Solutions Architect Associate certification and hands-on AWS architecture experience, this exam validated designing resilient, secure, and cost-effective distributed systems at enterprise scale.",
      },
      {
        id: "aws-saa",
        title: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services (AWS)",
        code: "SAA-C03",
        issued: "Nov 2024",
        expires: "Nov 2027",
        status: "active",
        description:
          "Growing my knowledge of cloud computing and AWS services. This was a significant challenge drawn on my experience working in AWS and some intense training. I was able to pass the exam on the first attempt luckily! Showing a rewarding payoff reflecting plenty of experience in the field.",
      },
      {
        id: "aws-ccp",
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        issued: "Feb 2023",
        expires: "Nov 2027",
        status: "active",
        description:
          "A part of my journey from turning my theoretical cloud knowledge into practical experience. This was a great starting point into the world of Amazon Web Services.",
      },
      {
        id: "aws-partner-technical",
        title: "AWS Partner: Accreditation (Technical)",
        issuer: "Amazon Web Services (AWS)",
        issued: "Jan 2023",
        status: "no-expiry",
        description:
          "AWS Partner technical accreditation covering core AWS services, cloud architecture fundamentals, and how to design solutions aligned with AWS best practices.",
      },
      {
        id: "aws-partner-cloud-economics",
        title: "AWS Partner: Cloud Economics Accreditation",
        issuer: "Amazon Web Services (AWS)",
        issued: "Jan 2023",
        status: "no-expiry",
        description:
          "AWS Partner accreditation focused on the business value of cloud adoption, cost optimisation, and building financial cases for AWS migrations.",
      },
    ],
  },
  {
    id: "comptia",
    vendorLabel: "CompTIA",
    items: [
      {
        id: "comptia-security-plus",
        title: "CompTIA Security+ ce Certification",
        issuer: "CompTIA",
        issued: "Apr 2023",
        expires: "Apr 2026",
        status: "expired",
        description:
          "A proof that my many years of university square up to an industry standard. Taken almost a year after finishing my degree, it was a good chance to keep my knowledge fresh and prove to industry and myself that I still have the knowledge to apply myself in the context of security.",
      },
    ],
  },
  {
    id: "azure",
    vendorLabel: "Microsoft / Azure",
    items: [
      {
        id: "microsoft-sc-900",
        title:
          "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
        issuer: "Microsoft",
        issued: "Oct 2021",
        status: "no-expiry",
        description:
          "A good way to apply security knowledge to a new platform. This was good to not just highlight that these tools exist but also names and how specific ones work.",
      },
      {
        id: "microsoft-ai-900",
        title: "Microsoft Certified: Azure AI Fundamentals",
        issuer: "Microsoft",
        issued: "Jun 2021",
        status: "no-expiry",
        description:
          "Not gonna lie this was mainly for fun. I do enjoy learning about AI and this served as a good intro into cloud solutions for AI and general AI concepts.",
      },
      {
        id: "microsoft-az-900",
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        issued: "Jun 2021",
        status: "no-expiry",
        description:
          "Taken over COVID lockdown this was my intro into the world of Azure. I was able to learn a lot about the platform and how it compares to other providers. This was a great way to keep my skills fresh and learn about a new platform.",
      },
    ],
  },
];
