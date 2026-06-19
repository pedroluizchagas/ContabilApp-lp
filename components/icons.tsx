import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  width: 24,
  height: 24,
};

export const IconSplit = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 3H4v18h16v-9" />
    <path d="M14 3h6v6" />
    <path d="M20 3l-7 7" />
    <path d="M8 13h4M8 17h7" />
  </svg>
);

export const IconDesktop = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
    <path d="M16 9h3a2 2 0 0 1 2 2v10" />
    <path d="M9 7h3M9 11h3M9 15h3" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 18h2" />
  </svg>
);

export const IconSignature = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 17c3 0 3-9 6-9s2 7 5 7 3-4 7-4" />
    <path d="M3 21h18" />
  </svg>
);

export const IconRadar = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 12l5-3" />
    <circle cx="12" cy="12" r="3" />
    <path d="M19.07 4.93A10 10 0 1 0 12 22a10 10 0 0 0 7.07-17.07Z" opacity=".4" />
    <path d="M16.24 7.76A6 6 0 1 0 18 12" />
  </svg>
);

export const IconSheet = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
  </svg>
);

export const IconLayers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 2 8l10 5 10-5-10-5Z" />
    <path d="m2 13 10 5 10-5" />
    <path d="m2 18 10 5 10-5" opacity=".5" />
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  </svg>
);

export const IconShieldCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const IconFolder = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
  </svg>
);

export const IconAudit = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
    <path d="M14 3v5h5" />
    <path d="m9 14 2 2 4-4" />
  </svg>
);

export const IconConsent = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 11V6a3 3 0 0 1 6 0v5" />
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="m10 16 1.5 1.5L15 14" />
  </svg>
);

export const IconTrash = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
    <path d="M6 7l1 13a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-13" />
    <path d="M10 11v6M14 11v6" />
  </svg>
);

export const IconWhatsApp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width={24} height={24} fill="currentColor" {...p}>
    <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m5 13 4 4L19 7" />
  </svg>
);

export const IconPlus = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconUpload = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 16V4m0 0L7 9m5-5 5 5" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </svg>
);

export const IconBell = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);
