import { chatFeatures } from "@/utils/FixedData";
import FeatureCard from "./FeatureCard";


const ChatFeatures = () => {

    return (
        <div className="chat-features-container">
            <div className="header">
                <h3>{chatFeatures?.header}</h3>
                <p>{chatFeatures?.description}</p>
            </div>
            <div className="cards-container">
                {chatFeatures?.features.map((item, index) => (
                    <FeatureCard
                        key={index}
                        icon={item.icon}
                        title={item?.title}
                        desc={item?.description} 
                    />
                ))}
            </div>
        </div>
    );
}

export default ChatFeatures;