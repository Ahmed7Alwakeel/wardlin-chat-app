import Image from "next/image";

const FeatureCard = ({ title, desc, icon }) => {
    return (
        <div className="chat-features-card">
            <div className={'card-items'}>
                <Image
                    alt="card-icon"
                    src={icon}
                    width={40}
                    height={40}
                />
                <h3 className="b">{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default FeatureCard;