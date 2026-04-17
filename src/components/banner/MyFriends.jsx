import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const MyFriends = () => {
     const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("../Friend.json")
            .then(res => res.json())
            .then(data => {
                setFriends(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <span className="loading loading-spinner text-error"></span>
            </div>
        );
    }

    return (
        <div className='w-[85%] mx-auto'>
            <h1 className='text-2xl font-semibold mt-10 mb-4'>Your Friends</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {friends.map((friend)=> {
return(
   <Link to={`/${friend.id}`}>
    <div className="p-6 flex flex-col items-center justify-center shadow cursor-pointer hover:scale-105 transition">
        <img src={friend.picture} alt="friend" className='w-20 h-20 rounded-full' />
        <h2 className='text-xl font-semibold my-3'>{friend.name}</h2>
        <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</p>
<div className="flex flex-wrap gap-2 my-3">
  {friend.tags.map((tag, index) => (
    <span 
      key={index} 
      className="bg-[#CBFADB] text-[#244D3F] px-3 py-1 rounded-full text-sm">
      {tag}
    </span>
  ))}
</div>

        <div className="">
            <button className={friend.class}>{friend.status}</button>
            </div>
    </div>
</Link>
)

            })
            
            }</div>
        </div>
    );
};

export default MyFriends;
