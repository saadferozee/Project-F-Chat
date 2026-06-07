import { useEffect, useState } from "react";

export default function useDeviceInfo() {
    const getInfo = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        return {
            width,
            height,
            aspectRatio: +(width / height).toFixed(2),
            deviceType: width <= 768 ? 'mobile': width > 768 && width <= 1024 ? 'tablet' : 'desktop',
            orientation: width > height ? "landscape" : "portrait",
            userAgent: navigator.userAgent,
        };
    };

    const [deviceInfo, setDeviceInfo] = useState(getInfo);

    useEffect(() => {
        const handleResize = () => {
            setDeviceInfo(getInfo());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return deviceInfo;
}