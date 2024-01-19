import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FcLineChart } from 'react-icons/fc';
import { GooglePlayButton,AppStoreButton } from "react-mobile-app-button";
const Footer = () => {
    const links = [
        [
            { label: 'Categories', key: 'header-1' },
            { label: 'Home', key: 'item-1-1' },
            { label: 'Jobs', key: 'item-1-2' },
            { label: 'About us', key: 'item-1-3' },
            { label: 'Queries', key: 'item-1-4' },
            { label: 'Contact', key: 'item-1-5' },
        ],
        [
            { label: 'Support', key: 'header-2' },
            { label: 'Help center', key: 'item-2-1' },
            { label: 'Terms of service', key: 'item-2-2' },
            { label: 'Legal', key: 'item-2-3' },
            { label: 'Privacy policy', key: 'item-2-4' },
            { label: 'Status', key: 'item-2-5' },
        ],
    ];

    return (
        <footer>
            <div className="bg-gray-800 text-white p-8 flex flex-col md:flex-row justify-between items-center">
            
            <div className="mb-8 md:mb-0 md:mr-8">
                <h1 className="flex items-center text-2xl md:text-3xl font-bold"><FcLineChart className="text-3xl" /> JobVista</h1>
                <h4 className="text-xl ">Head Office:</h4>
                <p className="text-gray-400">Road No-5,Jubliee Hills</p>
                <p className="text-gray-400">Opposite to Jublie Hills Metro Station</p>
                <p className="text-gray-400">Hyderabad,Telangana. 500033</p>
                <h4 className="text-xl">Sub- Branch:</h4>
                <p className="text-gray-400">NH-65,Kothapet</p>
                <p className="text-gray-400">Opposite to More Mega Store</p>
                <p className="text-gray-400">Hyderabad,Telangana. 500035</p>
                <div className="flex  items-start gap-4 mt-4 text-2xl ">
                    <a href="https://instagram.com/nanduvarma__?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaInstagram /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaFacebook /></a>
                    <a href="https://www.linkedin.com/in/ramineni-nandu-varma-85a226251" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaLinkedin /></a>
                    <a href="https://youtube.com/@Nandu_Varma?feature=shared" target="_blank" rel="noopener noreferrer" className="hover:text-green-500"><FaYoutube /></a>
                </div>
            </div>
            <div>
                <div className="flex justify-between items-center gap-12 mb-8 md:mb-0">
                    {links.map((col, index) => (
                        <ul className={`col col-${index + 1} mb-4`} key={`col-${index}`}>
                            {col.map((link, index) => (
                                <li key={`link-${col}-${index}`}>
                                    <a href="." className="text-gray-300 hover:text-green-500 my-2">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="block">
    <div className="block md:flex justify-between gap-4">
        <div className="mb-2">
            <GooglePlayButton className="bg-white text-black text-xs py-5 mb-2" height={60} direction={"row"} width={200} />
        </div>
        <div className="mb-2">
            <AppStoreButton className="bg-white text-black" height={60} direction={"row"} width={200} />
        </div>
    </div>

    <label htmlFor="" className="block mb-2 text-gray-300 mr-4">
        Stay up to date
    </label>
    
    <div className="flex flex-col md:flex-row">
        <input
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            className="mb-2 md:mr-2 px-4 py-2 rounded-md focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Subscribe</button>
    </div>
</div>

            
        </div>
        </footer>
    );
};

export default Footer;
