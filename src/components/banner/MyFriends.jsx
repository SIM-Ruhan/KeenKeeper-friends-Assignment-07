import React, { use } from 'react';

const appPromise = fetch("../public/Friend.json")
.then((res) => res.json());

const MyFriends = () => {
    const friends = use(appPromise);
    console.log(friends);
    return (
        <div>
            My Friends
        </div>
    );
};

export default MyFriends;