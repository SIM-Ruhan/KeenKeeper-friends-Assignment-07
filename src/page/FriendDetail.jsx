import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useContext } from "react";
import { TimelineContext } from "../timeline/TimelineContext";
import NotFound from "../components/notfound/NotFound";
import { toast } from "react-toastify";






const FriendDetails = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);

   
const { addEvent } = useContext(TimelineContext);
    useEffect(() => {
        fetch("/Friend.json")
            .then(res => res.json())
            .then(data => {
                const singleFriend = data.find(f => f.id === parseInt(id));
                setFriend(singleFriend);
            });
    }, [id]);

    if (!friend) {
        return (
            <NotFound/>
        )
    }
 const toastingCall = () => {
toast.success(`Call with ${friend.name}`);
    }
    const toastingText = () => {
toast.success(`Text with ${friend.name}`);
    }
    const toastingVideo = () => {
toast.success(`Video with ${friend.name}`);
    }

    return (
        <div className="w-[75%] mx-auto mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className=""> <div className="bg-white shadow mb-4 rounded-xl p-6 text-center">
                <img 
                    src={friend.picture} 
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold">{friend.name}</h2>

                <span className={friend.class}>
                    {friend.status}
                </span>

                <div className="flex justify-center gap-2 my-2">
                    {friend.tags.map((tag, i) => (
                        <span key={i} className="bg-[#CBFADB] text-[#244D3F] px-2 py-1 rounded-full text-xs">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 mt-3">"{friend.bio}"</p>
                <p className="text-sm text-gray-400 mt-2">Preferred: email</p>
</div>
                <div className="">
                    <div className="space-y-3">
                    <button className="w-full bg-white shadow p-4 rounded-lg">
                        <i className="fa-regular fa-bell-slash"></i> Snooze 2 Weeks
                    </button>
                    <button className="w-full bg-white shadow p-4 rounded-lg">
                        <i className="fa-solid fa-box-archive"></i> Archive
                    </button>
                    <button className="w-full bg-white shadow text-red-500 p-4 rounded-lg">
                       <i className="fa-regular fa-trash-can"></i> Delete
                    </button>
                </div>
                </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white shadow rounded-xl p-6 text-center">
                        <h1 className="text-3xl font-bold">
                            {friend.days_since_contact}
                        </h1>
                        <p className="text-gray-500">Days Since Contact</p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6 text-center">
                        <h1 className="text-3xl font-bold">{friend.goal}</h1>
                        <p className="text-gray-500">Goal (Days)</p>
                    </div>

                    <div className="bg-white shadow rounded-xl p-6 text-center">
                        <h1 className="text-2xl font-semibold">{friend.next_due_date}</h1>
                        <p className="text-gray-500">Next Due</p>
                    </div>
                </div>

                {/* RELATIONSHIP GOAL */}
                <div className="bg-white shadow rounded-xl p-6 flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Relationship Goal</h2>
                        <p className="text-gray-500">
                            Connect every <span className="font-bold">30 days</span>
                        </p>
                    </div>

                    <button className="bg-[#F8FAFC] px-4 py-1 rounded-md">Edit</button>
                </div>

                <div className="p-6 shadow bg-white rounded-lg">
                    <h2 className="text-[#244D3F] text-xl font-medium mb-4">Quick Check-in</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button onClick={() => {addEvent("call", friend.name);toastingCall()}} className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition">
                        <i className="fa-solid fa-phone-flip"></i><br /> Call
                    </button>
                    <button onClick={() => {addEvent("text", friend.name);toastingText()}} className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition">
                        <i className="fa-regular fa-comment-dots"></i><br /> Text
                    </button>
                    <button onClick={() => {addEvent("video", friend.name);toastingVideo()}} className="bg-[#F8FAFC] border border-[#E9E9E9] rounded-xl p-6 text-center cursor-pointer hover:scale-105 transition">
                        <i className="fa-solid fa-video"></i> <br />Video
                    </button>
                </div></div>

                
                

            </div>
        </div>
    );
};

export default FriendDetails;