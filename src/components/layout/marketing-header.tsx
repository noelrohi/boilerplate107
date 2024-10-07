import { Layers } from "lucide-react";
import Link from "next/link";

export function MarketingHeader() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Layers className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#get-started"
        >
          Get Started
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="https://github.com"
        >
          GitHub
        </Link>
      </nav>
    </header>
  );
}
