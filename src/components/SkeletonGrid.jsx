// components/SkeletonGrid.jsx
import React from 'react';
import '../styles/Skeleton.css';

const SkeletonCard = ({ delay }) => (
  <div className="skeleton-card" style={{ animationDelay: `${delay}s` }}>
    <div className="skeleton skeleton--spine" />
    <div className="skeleton-card__body">
      <div className="skeleton skeleton--badge" />
      <div className="skeleton skeleton--title" />
      <div className="skeleton skeleton--author" />
      <div style={{ flex: 1 }} />
      <div className="skeleton skeleton--divider" />
      <div className="skeleton-card__footer">
        <div className="skeleton skeleton--tag" />
        <div className="skeleton-card__btns">
          <div className="skeleton skeleton--btn" />
          <div className="skeleton skeleton--btn" />
          <div className="skeleton skeleton--btn" />
        </div>
      </div>
    </div>
  </div>
);

const SkeletonGrid = () => (
  <div className="book-grid">
    {Array.from({ length: 6 }).map((_, i) => (
      <SkeletonCard key={i} delay={i * 0.05} />
    ))}
  </div>
);

export default SkeletonGrid;
