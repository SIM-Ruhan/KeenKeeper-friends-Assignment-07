import React from 'react';

const Stars = () => {
    return (
        <div>
        <div className='w-[85%] mx-auto text-center grid grid-cols-1 md:grid-cols-4 gap-6'>
            <div className="p-8 shadow">
                <h3 className='mb-2 text-[#244D3F] text-3xl font-semibold'>16</h3>
                <p className='text-[#64748B]'>Total friends</p>
            </div>
            <div className="p-8 shadow">
                <h3 className='mb-2 text-[#244D3F] text-3xl font-semibold'>4</h3>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div className="p-8 shadow">
                <h3 className='mb-2 text-[#244D3F] text-3xl font-semibold'>8</h3>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div className="p-8 shadow">
                <h3 className='mb-2 text-[#244D3F] text-3xl font-semibold'>12</h3>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
<div className="w-[85%] mx-auto my-10 border-t border-gray-200"></div>
</div>
    );
};

export default Stars;