import React from 'react'

const ButtonScroll: React.FC = () => {
    // const story: { id: number; ProfilePIc: string; UserName: string }[] = [
    //     {
    //         id: 1,
    //         ProfilePIc: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 2,
    //         ProfilePIc: 'https://images.pexels.com/photos/919278/pexels-photo-919278.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 3,
    //         ProfilePIc: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 4,
    //         ProfilePIc: 'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 5,
    //         ProfilePIc: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 6,
    //         ProfilePIc: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 7,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },

    //     {
    //         id: 8,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 5,
    //         ProfilePIc: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 6,
    //         ProfilePIc: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 7,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },

    //     {
    //         id: 8,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 5,
    //         ProfilePIc: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 6,
    //         ProfilePIc: 'https://images.pexels.com/photos/697259/pexels-photo-697259.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },
    //     {
    //         id: 7,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },

    //     {
    //         id: 8,
    //         ProfilePIc: 'https://images.pexels.com/photos/1089855/pexels-photo-1089855.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         UserName: 'i_nawaz_khatri',
    //     },


    // ];
    return (
        <div>
            <div className="snap-x flex text-center ...">
                <div className="scroll-ml-6 snap-start ...">
                    <button className="w-1/3 bg-gray-100 ms-3 rounded-lg font-bold md:text-sm text-xs">Job Type</button>
                </div>
                <div className="scroll-ml-6 snap-start ...">
                    <button className="w-1/3 bg-blue-700 ms-3 rounded-lg text-white md:text-sm text-xs">within 20 miles</button>
                </div>
                <div className="scroll-ml-6 snap-start ...">
                    <button className="w-1/3 bg-blue-700 ms-3 py-2 rounded-lg text-white md:text-sm text-xs">last 15 days</button>
                </div>
            </div>

        </div>
    )
}
export default ButtonScroll;