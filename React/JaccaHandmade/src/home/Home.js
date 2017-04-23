import React from 'react';
import HomePageCard from './HomePageCard';

class Home extends React.Component {
    render() {
        return <div>
        <h1>Home page</h1>
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        <HomePageCard />
        </div>
    }
}

export default Home;