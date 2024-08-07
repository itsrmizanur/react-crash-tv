import Card from "./Card";

function HomeCard() {
    const cardsData = [
        {
            id: 1,
            heading: "For Developers",
            text: "Browse our React jobs and start your career today",
            btnText: "Browse Jobs",
            styleClasses: "bg-gray-100",
            btnStyleClass: "bg-black hover:bg-gray-700",
        },
        {
            id: 2,
            heading: "For Employers",
            text: "List your job to find the perfect developer for the role",
            btnText: "Add Job",
            styleClasses: "bg-indigo-100",
            btnStyleClass: "bg-indigo-500 hover:bg-indigo-600",
        },
    ];
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        {cardsData.map((cardData) => {
                            return (
                                <Card key={cardData.id} cardData={cardData} />
                            );
                        })}
                        {/* <div className="bg-indigo-100 p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold">
                                
                            </h2>
                            <p className="mt-2 mb-4">
                                
                            </p>
                            <a
                                href="/add-job.html"
                                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                            >
                                Add Job
                            </a>
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomeCard;
