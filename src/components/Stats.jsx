const Stats = ({ stats }) => {
  return (
    <section className="stats">
      <Stat charTotal={stats.numberOfWords} label="Words" />
      <Stat charTotal={stats.numberOfCharacters} label="Characters" />
      <Stat charTotal={stats.instagramCharsLeft} label="Instagram" />
      <Stat charTotal={stats.facebookCharsLeft} label="Facebook" />
    </section>
  );
};

function Stat({ charTotal, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${charTotal < 0 ? "stat__number--limit" : ""}`}
      >
        {charTotal}
      </span>
      <h2
        className={`second-heading ${charTotal < 0 ? "stat__number--limit" : ""}`}
      >
        {label}
      </h2>
    </section>
  );
}

export default Stats;
