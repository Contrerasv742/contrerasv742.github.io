import { useMemo, useState } from "react";
import "../styles/GoodKarma.css";

/**
 * DonorCard
 * -----------------------------------------------------------------------
 * Shows a donor's identity, contact details, and donation history.
 * Donation history is grouped by year and collapsed by default, since
 * the list only grows from one giving season to the next.
 *
 * Styling lives in DonorCard.module.css — no Tailwind, no UI library,
 * just CSS Modules, which Next.js, Vite, and Create React App all
 * support out of the box.
 */

export interface Donation {
  id: string;
  /** ISO date string, e.g. "2026-03-14" */
  date: string;
  amount: number;
  method?: string;
  note?: string;
}

export interface Donor {
  id: string;
  name: string;
  address: string;
  phone: string;
  donations: Donation[];
}

interface DonorCardProps {
  donor: Donor;
  /** ISO 4217 currency code passed to Intl.NumberFormat. Defaults to "USD". */
  currencyCode?: string;
  /** Whether the donation history panel starts open. Defaults to false. */
  defaultExpanded?: boolean;
}

interface YearGroup {
  year: number;
  items: Donation[];
  subtotal: number;
}

function groupByYear(donations: Donation[]): YearGroup[] {
  const groups = new Map<number, Donation[]>();
  for (const donation of donations) {
    const year = new Date(donation.date).getFullYear();
    const existing = groups.get(year) ?? [];
    existing.push(donation);
    groups.set(year, existing);
  }
  return Array.from(groups.entries())
    .map(([year, items]) => ({
      year,
      items: [...items].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
      subtotal: items.reduce((sum, item) => sum + item.amount, 0),
    }))
    .sort((a, b) => b.year - a.year);
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function DonorCard({
  donor,
  currencyCode = "USD",
  defaultExpanded = false,
}: DonorCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const currencyFormatter = useMemo(
    () => new Intl.NumberFormat("en-US", { style: "currency", currency: currencyCode }),
    [currencyCode]
  );
  const dateFormatter = useMemo(
    () => new Intl.DateTimeFormat("en-US", { month: "short", day: "2-digit" }),
    []
  );

  const yearGroups = useMemo(() => groupByYear(donor.donations), [donor.donations]);
  const total = useMemo(
    () => donor.donations.reduce((sum, d) => sum + d.amount, 0),
    [donor.donations]
  );
  const hasDonations = donor.donations.length > 0;

  return (
    <div className="card">
      <span aria-hidden="true" className="notch"/>

      <div className="header">
        <div className="headerTop">
          <div className="identity">
            <div className="avatar">{getInitials(donor.name)}</div>
            <div>
              <p className="eyebrow">Donor</p>
              <h2 className="name">{donor.name}</h2>
            </div>
          </div>
          <span className="recordId">#{donor.id}</span>
        </div>

        <div className="contact">
          <div className="contactRow">
            <PinIcon className="icon" />
            <span className="contactText">{donor.address}</span>
          </div>
          <div className="contactRow">
            <PhoneIcon className="icon" />
            <span className="contactText">{donor.phone}</span>
          </div>
        </div>
      </div>

      <div className="donationsSection">
        {hasDonations ? (
          <>
            <div className="donationsHeaderRow">
              <div>
                <p className="totalLabel">Lifetime giving</p>
                <p className="totalAmount">{currencyFormatter.format(total)}</p>
              </div>
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                aria-controls={`donation-history-${donor.id}`}
                className="toggleButton"
              >
                {expanded ? "Hide History" : "Show History"}
                <ChevronIcon
                  className={`$"chevron" ${expanded ?"chevronOpen": ""}`.trim()}
                />
              </button>
            </div>

            {expanded && (
              <div id={`donation-history-${donor.id}`} className="history">
                {yearGroups.map((group) => (
                  <div key={group.year}>
                    <div className="yearHeaderRow">
                      <span className="yearLabel">{group.year}</span>
                      <span className="yearSubtotal">
                        {currencyFormatter.format(group.subtotal)}
                      </span>
                    </div>
                    <div className="yearDivider" />
                    <ul className="donationList">
                      {group.items.map((item) => (
                        <li key={item.id} className="donationItem">
                          <span className="donationDate">
                            {dateFormatter.format(new Date(item.date))}
                          </span>
                          <span className="donationNote">
                            {item.note ?? item.method ?? "Donation"}
                          </span>
                          <span className="donationAmount">
                            {currencyFormatter.format(item.amount)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p className="emptyState">No donations recorded yet.</p>
        )}
      </div>
    </div>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
