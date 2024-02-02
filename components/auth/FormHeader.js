const FormHeader = ({ title, desc }) => {
    return (
        <div className="header-container">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    );
}

export default FormHeader;