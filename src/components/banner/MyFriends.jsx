import React, { use } from 'react';

const appPromise = fetch("../public/Friend.json")
.then((res) => res.json());

const MyFriends = () => {
    const friends = use(appPromise);
    console.log(friends);
    return (
        <div className='w-[85%] mx-auto'>
            <h1 className='text-2xl font-semibold mt-10 mb-4'>Your Friends</h1>
 <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {friends.map((friend)=> {
return(
   
    <div className="p-6 flex flex-col items-center justify-center shadow">
        <img src={friend.picture} alt="friend" className='w-20 h-20 rounded-full' />
        <h2 className='text-xl font-semibold my-3'>{friend.name}</h2>
        <p className='text-[12px] text-[#64748B]'>{friend.days_since_contact}d ago</p>
        <button className='rounded-full bg-[#CBFADB] p-2 text-[#244D3F] my-3'>{friend.tags}</button>

        <div className="">
            <button className='bg-[#EFAD44] text-white p-2 rounded-full'>{friend.status}</button>
            </div>
    </div>

)

            })
            
            }</div>
        </div>
    );
};

export default MyFriends;
