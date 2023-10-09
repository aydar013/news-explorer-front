import nothingFoundIcon from "../../images/nothing-found.svg";

const NothingFound = () => {
  return (
    <section className="nothing-found">
      <img
        className="nothing-found__image"
        src={nothingFoundIcon}
        alt="nothing found icon"
      />
      <h2 className="nothing-found__title">Nothing found</h2>
      <h3 className="nothing-found__subtitle">
        Sorry, but nothing matched your search terms.
      </h3>
    </section>
  );
};

export default NothingFound;
