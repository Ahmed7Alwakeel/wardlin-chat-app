import Image from "next/image";
import Link from "next/link";
const JoinUs = () => {
    return (
        <div className="join-us-container">
            <div className="img-container">
                <div className="overlay"></div>
                <Image
                    fill
                    src={'/images/join-us.jpg'}
                    alt="img"
                />
            </div>
            <div className="header">
                <h3>Join WardLin Chat</h3>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>Ready to join the fun? Click Join Now and let's embark on this journey together!</p>
                <Link className="link" passHref href={"/chat"}>Join now
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default JoinUs;