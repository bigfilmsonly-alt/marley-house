import { ExternalLink } from 'lucide-react';
import { brandLinks } from '@/content/links';

const statusColors: Record<string, string> = {
  active: 'text-[var(--green)]',
  dormant: 'text-[var(--dim)]',
  licensed: 'text-[var(--gold)]',
  verify: 'text-[var(--ember)]',
};

const statusDots: Record<string, string> = {
  active: 'bg-[var(--green)]',
  dormant: 'bg-[var(--dim)]',
  licensed: 'bg-[var(--gold)]',
  verify: 'bg-[var(--ember)]',
};

const categoryLabels: Record<string, string> = {
  coffee: 'Coffee',
  rohan: 'Rohan Marley',
  ventures: 'Ventures',
  music: 'Music Legacy',
};

const categoryOrder = ['coffee', 'rohan', 'ventures', 'music'];

export default function ConnectedProperties() {
  const grouped = categoryOrder.map((cat) => ({
    label: categoryLabels[cat],
    items: brandLinks.filter((l) => l.category === cat),
  }));

  return (
    <div className="px-6 pb-10">
      <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-4 font-medium">
        Under the Same Roof
      </p>

      <div className="space-y-5">
        {grouped.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] text-[var(--dim)] font-medium mb-2 tracking-wide">
              {group.label}
            </p>
            <div className="space-y-1.5">
              {group.items.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-lg bg-[var(--bg2)] border border-[var(--line)] px-3 py-2.5 group hover:border-[var(--gold)]/20 transition-colors"
                >
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${statusDots[item.status]}`} />
                  <span className="text-sm text-[var(--cream)] flex-1 truncate">{item.name}</span>
                  {item.handle && (
                    <span className={`text-[9px] font-medium tracking-wide ${statusColors[item.status]}`}>
                      {item.handle}
                    </span>
                  )}
                  {item.status === 'verify' && (
                    <span className="text-[8px] tracking-wider uppercase text-[var(--ember)] bg-[var(--ember)]/10 px-1.5 py-0.5 rounded-full border border-[var(--ember)]/20">
                      Verify
                    </span>
                  )}
                  <ExternalLink size={12} className="text-[var(--dim)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 mt-5 pt-4 border-t border-[var(--line)]">
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
          <span className="text-[9px] text-[var(--dim)]">Active</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
          <span className="text-[9px] text-[var(--dim)]">Licensed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--dim)]" />
          <span className="text-[9px] text-[var(--dim)]">Dormant</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--ember)]" />
          <span className="text-[9px] text-[var(--dim)]">Verify</span>
        </div>
      </div>
    </div>
  );
}
