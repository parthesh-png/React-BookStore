// components/StatsBar.jsx
import React, { useMemo } from 'react';
import '../styles/StatsBar.css';

const StatsBar = ({ books }) => {
  const stats = useMemo(() => {
    const uniqueAuthors = new Set(books.map((b) => b.author)).size;
    const uniqueGenres  = new Set(books.map((b) => b.genre)).size;
    const years         = books.map((b) => parseInt(b.year, 10)).filter(Boolean);
    // const avgYear       = years.length
    //   ? Math.round(years.reduce((a, b) => a + b, 0) / years.length)
    //   : '—';

    return [
      { icon: '📚', value: books.length, label: 'Total Books' },
      { icon: '✍️',  value: uniqueAuthors, label: 'Authors' },
      { icon: '🏷️', value: uniqueGenres,  label: 'Genres' },
      // { icon: '📅', value: avgYear,        label: 'Avg. Year' },
    ];
  }, [books]);

  return (
    <div className="stats-bar">
      {stats.map((s, i) => (
        <div className="stat-card" key={s.label} style={{ animationDelay: `${i * 0.06}s` }}>
          <span className="stat-card__icon">{s.icon}</span>
          <div>
            <div className="stat-card__value">{s.value}</div>
            <div className="stat-card__label">{s.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsBar;
