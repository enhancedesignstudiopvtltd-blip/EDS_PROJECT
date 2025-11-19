import React from "react";

type TabKey = "mep" | "sustainability" | "strategic";

const TAB_CONTENT: Record<TabKey, { title: string; body: string }> = {
  mep: {
    title: "MEP Design",
    body:
      "Our team of skilled engineers and designers excel in creating comprehensive MEP design solutions for commercial, industrial, healthcare, hospitality, offices, Infra and residential projects. From HVAC systems to electrical layouts and plumbing networks, we ensure that your infrastructure functions seamlessly and meets the highest industry standards.",
  },
  sustainability: {
    title: "Sustainability Consulting",
    body:
      "We deliver practical sustainability strategies including energy modelling, green building certifications, and decarbonization roadmaps. Our approach balances regulatory compliance, occupant well‑being, and lifecycle cost savings.",
  },
  strategic: {
    title: "Strategic & Advisory Services",
    body:
      "Partnering at pre‑design through operations, we align stakeholders, define technical requirements, and manage risk. Services include audits, peer reviews, technical due diligence, and value engineering for informed decision‑making.",
  },
};

export default function ConsultingTabs() {
  const [active, setActive] = React.useState<TabKey>("mep");

  const renderTab = (key: TabKey) => {
    const isActive = active === key;
    return (
      <button
        key={key}
        onClick={() => setActive(key)}
        className={
          "py-4 text-center font-semibold transition-colors " +
          (isActive
            ? "bg-primary text-white"
            : "bg-secondary text-primary hover:bg-primary hover:text-white")
        }
        aria-pressed={isActive}
      >
        {TAB_CONTENT[key].title}
      </button>
    );
  };

  return (
    <section aria-label="Consulting Services Tabs" className="mt-6">
      <div className="rounded-sm border border-border bg-secondary">
        {/* Segmented header */}
        <div className="grid grid-cols-3 gap-0" role="tablist">
          {(["mep", "sustainability", "strategic"] as TabKey[]).map(renderTab)}
        </div>

        {/* Body */}
        <div className="p-6 text-slate-800">
          <p className="leading-relaxed">
            {TAB_CONTENT[active].body}
          </p>
        </div>
      </div>
    </section>
  );
}