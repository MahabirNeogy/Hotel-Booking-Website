import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home(){
    return(
        <div classname='home'>
            {/* <h1>Home Component</h1> */}
            <Banner />
            <div className='home_section'>
                <Card  
                    src="https://i1.wp.com/bullettour.com/wp-content/uploads/2021/08/238614638_384168959729539_1560943650806782941_n.jpg?resize=700%2C450&ssl=1"
                    title="Resorts"
                    description="Unique activities we can do together, led by a world of hosts."/>
                <Card
                    src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                 />
                <Card
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Holiday Homes"
                    description="Comfortable private places, with room for friends or family."
                />
                
            </div>
            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in DumDum"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹1300/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in GolfGreen"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="₹3500/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹700/night"
            />
            </div>

            <div className='home_section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in DumDum"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="₹1300/night"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse in Kolkata"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="₹3500/night"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="₹700/night"
            />
            </div>
        </div>
    )
}

export default Home