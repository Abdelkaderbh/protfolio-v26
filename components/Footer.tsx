import Link from "next/link";

export function Footer() {
  const socials = [
    {
      href: "https://github.com/Abdelkaderbh",
      label: "GitHub",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.8-1.5-3.8-1.5-.5-1.1-1.2-1.4-1.2-1.4-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.7 1.9 2.9 1.4.1-.8.4-1.3.7-1.6-2.5-.3-5.2-1.3-5.2-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.2 5.8.4.3.7.9.7 1.8v2.6c0 .3.2.7.8.6a10.97 10.97 0 0 0 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/abdelkader-ben-hassen-bab946202",
      label: "LinkedIn",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM14.25 9c-2.07 0-3.25 1.13-3.25 1.13V9H7v12h4v-6.4c0-1.21.59-2.35 2.13-2.35 1.53 0 1.62 1.34 1.62 2.43V21h4v-6.88C18.75 10.38 17.03 9 14.25 9Z" />
        </svg>
      ),
    },
    {
      href: "mailto:gaderbh2@gmail.com",
      label: "Email",
      icon: (
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-5 w-5 fill-current"
        >
          <path d="M3 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V6c0-.6-.4-1-1-1H3Zm1.4 2h15.2L12 12.7 4.4 7ZM4 17V9.1l7.4 5.3c.37.27.83.27 1.2 0L20 9.1V17H4Z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full border-t border-neutral-800/40 bg-neutral-950 text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 max-w-sm">
            <h2 className="text-lg font-semibold tracking-wide text-white">
              Thanks for visiting
            </h2>
            <div className="flex gap-4 pt-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group rounded-md p-2 ring-1 ring-inset ring-neutral-800/60 hover:bg-neutral-800/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <span className="block text-neutral-400 group-hover:text-white">
                    {s.icon}
                  </span>
                  <span className="sr-only">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800/40 pt-6 text-xs text-neutral-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Abdelkader Ben Hassan All rights
            reserved.
          </p>
          <p className="text-neutral-600">Built with Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
