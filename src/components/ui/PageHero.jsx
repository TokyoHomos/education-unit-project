export default function PageHero({ tag, title, subtitle }) {
  return (
    <div className="page-hero">
      {tag && (
        <div className="section-tag">
          <span className="dot" /> {tag}
        </div>
      )}
      <h1 className="page-hero-title" dangerouslySetInnerHTML={{ __html: title }} />
      <p className="page-hero-subtitle">{subtitle}</p>
    </div>
  );
}
