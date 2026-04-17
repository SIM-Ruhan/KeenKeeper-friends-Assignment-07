import { useContext, useState } from "react";
import { TimelineContext } from "../timeline/TimelineContext";
import { Link } from "react-router";


const TimelinePage = () => {
    const { timeline } = useContext(TimelineContext);
    const [filter, setFilter] = useState("all");


    const getIcon = (type) => {
        if (type === "call") return "📞";
        if (type === "text") return "💬";
        if (type === "video") return "🎥";
        return "📌";
    };

    
    const filteredTimeline =
        filter === "all"
            ? timeline
            : timeline.filter(item => item.type === filter);

    return (
        <div className="w-[85%] mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Timeline</h1>

       
            <div className="flex items-center gap-4 mb-6">
                <label className="font-medium">Filter:</label>
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-300 px-3 py-2 rounded-md bg-white"
                >
                    <option value="all">All</option>
                    <option value="call">Calls</option>
                    <option value="text">Texts</option>
                    <option value="video">Videos</option>
                </select>
            </div>

          
            <div className="space-y-4">
                {filteredTimeline.length > 0 ? (
                    filteredTimeline.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow p-4 rounded-lg flex items-center gap-4">
                            <span className="text-xl">
                                {getIcon(item.type)}
                            </span>

                            <div>
                                <p className="font-semibold">
                                    <span className="text-xl">{item.type}</span> <span className="text-[#64748B]">with {item.name}</span> 
                                </p>
                                <p className="text-sm text-gray-500">
                                    {item.date}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='flex flex-col items-center gap-6 mt-20'>
            <h1 className="text-gray-500 text-xl">No Data Found</h1>
            
            <Link to={'/'}><button className='btn btn-outline btn-success'>Go Back Home</button></Link>
        </div>
                )}
            </div>
        </div>
    );
};

export default TimelinePage;