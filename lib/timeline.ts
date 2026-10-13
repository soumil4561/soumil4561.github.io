import { siteConfig } from "@/config/site";

export type TimelineEntry =
  | ({ kind: "experience" } & (typeof siteConfig.experience)[number])
  | ({ kind: "education" } & (typeof siteConfig.education)[number]);

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatMonth(date: string) {
  const [year, month] = date.split("-");

  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function formatRange(startDate: string, endDate: string | null) {
  return `${formatMonth(startDate)} - ${endDate ? formatMonth(endDate) : "Present"}`;
}

/** Experience and education merged, newest start date first. */
export function getTimelineEntries(): TimelineEntry[] {
  const entries: TimelineEntry[] = [
    ...siteConfig.experience.map((e) => ({
      kind: "experience" as const,
      ...e,
    })),
    ...siteConfig.education.map((e) => ({ kind: "education" as const, ...e })),
  ];

  return entries.sort((a, b) => b.startDate.localeCompare(a.startDate));
}
