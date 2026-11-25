import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { formatCertificationMeta } from "@/data/certifications";
import { Certs } from "./Certs";

describe("formatCertificationMeta", () => {
  it("formats active certifications with issuer, optional code, and expiry", () => {
    expect(
      formatCertificationMeta({
        issuer: "Amazon Web Services (AWS)",
        code: "SAA-C03",
        issued: "Nov 2024",
        expires: "Nov 2027",
        status: "active",
      })
    ).toEqual([
      "Amazon Web Services (AWS)",
      "SAA-C03",
      "Issued Nov 2024 · Expires Nov 2027",
    ]);
  });

  it("formats expired certifications with Expired date wording", () => {
    expect(
      formatCertificationMeta({
        issuer: "CompTIA",
        issued: "Apr 2023",
        expires: "Apr 2026",
        status: "expired",
      })
    ).toEqual(["CompTIA", "Issued Apr 2023 · Expired Apr 2026"]);
  });

  it("formats no-expiry certifications with issue date only", () => {
    expect(
      formatCertificationMeta({
        issuer: "Microsoft",
        issued: "Oct 2021",
        status: "no-expiry",
      })
    ).toEqual(["Microsoft", "Issued Oct 2021"]);
  });
});

describe("Certs page", () => {
  function renderCerts() {
    return render(
      <MemoryRouter initialEntries={["/certs"]}>
        <Certs />
      </MemoryRouter>
    );
  }

  it("renders all 9 LinkedIn certifications with titles, issuers, and dates", () => {
    renderCerts();

    const expectedCertifications = [
      {
        title: "AWS Certified Solutions Architect – Professional",
        date: "Issued May 2026 · Expires May 2029",
      },
      {
        title: "AWS Certified Solutions Architect – Associate",
        date: "Issued Nov 2024 · Expires Nov 2027",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        date: "Issued Feb 2023 · Expires Nov 2027",
      },
      {
        title: "AWS Partner: Accreditation (Technical)",
        date: "Issued Jan 2023",
      },
      {
        title: "AWS Partner: Cloud Economics Accreditation",
        date: "Issued Jan 2023",
      },
      {
        title: "CompTIA Security+ ce Certification",
        date: "Issued Apr 2023 · Expired Apr 2026",
      },
      {
        title:
          "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
        date: "Issued Oct 2021",
      },
      {
        title: "Microsoft Certified: Azure AI Fundamentals",
        date: "Issued Jun 2021",
      },
      {
        title: "Microsoft Certified: Azure Fundamentals",
        date: "Issued Jun 2021",
      },
    ];

    const headings = screen.getAllByRole("heading", { level: 1 });
    expect(headings).toHaveLength(9);

    for (const { title, date } of expectedCertifications) {
      expect(
        screen.getByRole("heading", { level: 1, name: title })
      ).toBeInTheDocument();
      expect(screen.getAllByText(date).length).toBeGreaterThan(0);
    }

    expect(
      screen.getAllByText("Amazon Web Services (AWS)")
    ).toHaveLength(5);
    expect(screen.getAllByText("CompTIA")).toHaveLength(1);
    expect(screen.getAllByText("Microsoft")).toHaveLength(3);
    expect(screen.getByText("SAA-C03")).toBeInTheDocument();
  });

  it("orders Solutions Architect Professional before Associate under #aws and renders vendor anchors", () => {
    const { container } = renderCerts();

    const awsAnchor = container.querySelector("#aws");
    const comptiaAnchor = container.querySelector("#comptia");
    const azureAnchor = container.querySelector("#azure");

    expect(awsAnchor).toBeInTheDocument();
    expect(comptiaAnchor).toBeInTheDocument();
    expect(azureAnchor).toBeInTheDocument();

    expect(awsAnchor).toHaveTextContent(
      "AWS Certified Solutions Architect – Professional"
    );

    const headings = screen.getAllByRole("heading", { level: 1 });
    const proIndex = headings.findIndex((h) =>
      h.textContent.includes("Solutions Architect – Professional")
    );
    const assocIndex = headings.findIndex((h) =>
      h.textContent.includes("Solutions Architect – Associate")
    );
    expect(proIndex).toBeGreaterThanOrEqual(0);
    expect(assocIndex).toBeGreaterThan(proIndex);
  });

  it("displays an Expired badge and expired date on CompTIA Security+ ce Certification", () => {
    renderCerts();

    expect(
      screen.getByText("Issued Apr 2023 · Expired Apr 2026")
    ).toBeInTheDocument();
    expect(screen.getByText("Expired")).toBeInTheDocument();
  });
});
