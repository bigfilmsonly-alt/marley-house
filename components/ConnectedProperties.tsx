import { ExternalLink } from 'lucide-react';

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

interface PropertyGroup {
  label: string;
  items: {
    name: string;
    url: string;
    handle?: string;
    status: 'active' | 'dormant' | 'licensed' | 'verify';
  }[];
}

const groups: PropertyGroup[] = [
  {
    label: 'Coffee',
    items: [
      { name: 'Marley Coffee', url: 'https://marleycoffee.com/', status: 'active' },
      { name: '@marleycoffee', url: 'https://www.instagram.com/marleycoffee/', handle: 'IG', status: 'active' },
      { name: 'Marley Coffee Latam', url: 'https://www.youtube.com/@MarleyCoffeeLatam', handle: 'YT', status: 'active' },
    ],
  },
  {
    label: 'Rohan Marley',
    items: [
      { name: '@romarley', url: 'https://www.instagram.com/romarley/', handle: '663K', status: 'active' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohanmarley', status: 'active' },
    ],
  },
  {
    label: 'Ventures',
    items: [
      { name: 'Lion Order', url: 'https://lionorder.com/', status: 'active' },
      { name: 'RoMarley Beach House', url: 'https://www.romarleybeachhouse.com/', status: 'active' },
      { name: 'House of Marley', url: 'https://thehouseofmarley.com/', handle: 'Licensed', status: 'licensed' },
    ],
  },
  {
    label: 'Music Legacy',
    items: [
      { name: 'Bob Marley Official', url: 'https://www.bobmarley.com/', status: 'licensed' },
      { name: 'Tuff Gong', url: 'https://www.tuffgong.com/', status: 'licensed' },
      { name: 'Tuff Gong Television', url: 'https://www.youtube.com/user/TuffGongTelevision', handle: 'YT', status: 'licensed' },
      { name: 'Tuff Gong Radio', url: 'https://tuffgongmusic.com/', handle: 'SiriusXM Ch.19', status: 'licensed' },
    ],
  },
];

export default function ConnectedProperties() {
  return (
    <div className="px-6 pb-10">
      <p className="text-[10px] tracking-[0.2em] uppercase text-[var(--gold-deep)] mb-4 font-medium">
        Under the Same Roof
      </p>

      <div className="space-y-5">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="text-[11px] text-[var(--dim)] font-medium mb-2 tracking-wide">
              {group.label}
            </p>
            <div className="space-y-1.5">
              {group.items.map((item) => (
                <a
                  key={item.url}
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
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--ember)]" />
          <span className="text-[9px] text-[var(--dim)]">Verify</span>
        </div>
      </div>
    </div>
  );
}
