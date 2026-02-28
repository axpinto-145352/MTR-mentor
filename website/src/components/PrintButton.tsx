"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="mt-6 inline-flex items-center gap-2 rounded-lg bg-warm px-6 py-3 text-sm font-bold text-white hover:bg-warm-light transition-all print:hidden"
    >
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
      Save / Print This Checklist
    </button>
  );
}
