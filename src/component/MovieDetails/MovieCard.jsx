
export default function Card({ variant, image, title, subtitle }) {
    if (variant === 'poster') {
        return (
            <div className="poster-card">
                <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
                <div className="poster-overlay">

                </div>
            </div>
        );
    }

    return (


        <div className="cast-card">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} className="avatar" />
            <span className="cast-name">{title}</span>
            <span className="cast-role">{subtitle}</span>
        </div>

    );
}