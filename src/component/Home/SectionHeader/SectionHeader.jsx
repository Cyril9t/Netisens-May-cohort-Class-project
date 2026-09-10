import "./SectionHeader.css";

const SectionHeader = ({ title, seeAll }) => {
    return (
        <div className="section-header">
            <h2 className="section-title">
                {title}
            </h2>

            <button onClick={seeAll} className="section-see-all">
                See All
            </button>
        </div>
    );
};

export default SectionHeader;