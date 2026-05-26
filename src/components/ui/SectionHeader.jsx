export default function SectionHeader({ tag, title, subtitle, titleClass = '' }) {
  return (
    <div className="text-center">
      {tag && (
        <div className="section-tag">
          <span className="dot" /> {tag}
        </div>
      )}
      {title && (
        <h2 className={`section-title ${titleClass}`} dangerouslySetInnerHTML={{ __html: title }} />
      )}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
