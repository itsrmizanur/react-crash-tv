function Card(props) {
    console.log(props);
    const id = props.cardData.id;
    const heading = props.cardData.heading;
    const text = props.cardData.text;
    const btnText = props.cardData.btnText;
    const styleClasses = props.cardData.styleClasses;
    const styleClassNames ="bg-gray-100 p-6 rounded-lg shadow-md " + styleClasses;
    const btnStyleClass = props.cardData.btnStyleClass;
    const btnClassNames = "inline-block text-white rounded-lg px-4 py-2 " +  btnStyleClass;

    return (
        <div className={styleClassNames}>
            <h2 className="text-2xl font-bold"> {heading} </h2>
            <p className="mt-2 mb-4">{text}</p>
            <a href="/jobs.html" className={btnClassNames}>
                {btnText}
            </a>
        </div>
    );
}

export default Card;
