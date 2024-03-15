import React, { useEffect, useRef, useState } from "react";
import './style.css';
import tabsData from '../../consts/KeyFeatures';
import CartIcon from '../../assets/desktop.png';

const KeyFeaturesTabView = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
    const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);



    const tabsRef = useRef([]);

    useEffect(() => {
        // Function to switch tabs automatically every 3 seconds
        const intervalId = setInterval(() => {
            setActiveTabIndex(prevIndex => (prevIndex + 1) % tabsData.length);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup function to clear interval when component unmounts

    }, []); // Dependency array is empty, so it runs only once when component mounts

    useEffect(() => {
        // Function to update tab position
        function setTabPosition() {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        }

        setTabPosition(); // Initial call to set tab position

        window.addEventListener("resize", setTabPosition); // Event listener for resize

        return () => window.removeEventListener("resize", setTabPosition); // Cleanup function to remove event listener

    }, [activeTabIndex]); // Dependency array with activeTabIndex

    return (
        <div>
            <div className="tab-container relative">
                <div className="flex space-x-3 border-b wid">
                    {tabsData.map((tab, idx) => (
                        <button
                            key={idx}
                            ref={(el) => (tabsRef.current[idx] = el)}
                            className={`tab-view-btns ${idx === activeTabIndex ? 'active' : ''}`}
                            onClick={() => setActiveTabIndex(idx)}>
                            {tab.label}
                        </button>
                    ))}
                </div>
                <span
                    className="tab-underline block"
                    style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
                />
            </div>
            <div className="keyfeatures-container">
            <div className="py-4">
                <p>{tabsData[activeTabIndex].content}</p>
            </div>
            <div className="key-features-image-container">
            <img src={CartIcon} alt="Desktop" />
            </div>
            </div>
        </div>
    );
}

export default KeyFeaturesTabView;
