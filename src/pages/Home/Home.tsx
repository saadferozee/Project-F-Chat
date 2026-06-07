import React from 'react';
import useDeviceInfo from '../../hooks/useDeviceInfo';

const Home = () => {
    const deviceType = useDeviceInfo().deviceType;
    return (
        <div>
            
        </div>
    );
};

export default Home;