import { useState } from 'react';

function JobCard( props ) {

    const [showFullDescription, setShowFullDescription] = useState(false);    
    let description = props.job.description;

    if (!showFullDescription) {
        description = description.substring(0, 90) + "...";
    }
    else {
        description = props.job.description;
    }
        return (
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">
                            {props.job.type}
                        </div>
                        <h3 className="text-xl font-bold">{props.job.title}</h3>
                    </div>

                    <div className="mb-5">{description}</div>
                    <button onClick = { () => {
                        setShowFullDescription((prevState) => {
                            return !prevState
                        });
                    } } className=" text-indigo-500 hover:text-indigo-600 mb-2 ">
                        { showFullDescription ? "Less" : "More" }
                    </button>

                    <h3 className="text-indigo-500 mb-2">
                        {" "}
                        {props.job.salary} / Year{" "}
                    </h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            <i className="fa-solid fa-location-dot text-lg"></i>
                            {props.job.location}
                        </div>
                        <a
                            href={`/job/${props.job.id}`}
                            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default JobCard;
