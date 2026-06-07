import { Outlet } from 'react-router';
import useDeviceInfo from '../hooks/useDeviceInfo';

const MainLayout = () => {
    const {deviceType, width, height} = useDeviceInfo();
    console.log(deviceType, width, height);
    
    if (deviceType === 'mobile') {
        // Mobile View
        return (
            <div className={`border border-green-500 w-full h-screen`}>
                <Outlet />
            </div>
        )
    } else if (deviceType === 'tablet') {
        // Tablet View
        return (
            <div>
                <Outlet />
            </div>
        )
    } else if (deviceType === 'desktop') {
        // Desktop View
        return (
            <div>
                <Outlet />
            </div>
        )
    }
};

export default MainLayout;