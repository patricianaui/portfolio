import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

export function BreamDesignLab() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm opacity-50 hover:opacity-100 hover:text-accent transition-all lowercase mb-16"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          <ArrowLeft className="w-4 h-4" />
          back
        </Link>

        <div className="max-w-2xl">
          <p
            className="lowercase mb-4 opacity-40"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em' }}
          >
            project
          </p>
          <h1
            className="lowercase mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1
            }}
          >
            bream design lab
          </h1>
          <p
            className="lowercase opacity-60 leading-relaxed"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem' }}
          >
            an international collective of developers engineering tools for the modern developer. led by patricia naui.
          </p>
        </div>
      </div>
    </div>
  );
}
