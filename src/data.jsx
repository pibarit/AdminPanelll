
import { FaChartPie } from "react-icons/fa";
import { BiSolidCastle } from 'react-icons/bi'; // For BiSolidCastle
import { FaShoppingCart } from 'react-icons/fa'; // For FaShoppingCart
import { MdPeople } from 'react-icons/md'; // For MdPeople
import { FaClock } from 'react-icons/fa'; // For FaClock
import { TbSpeakerphone } from "react-icons/tb";
import { RiSafe2Fill } from "react-icons/ri";
import { IoCalendar } from 'react-icons/io5';
import { GiIndianPalace } from "react-icons/gi";
import { FaDatabase } from "react-icons/fa6";
import { TbCardsFilled } from "react-icons/tb";
import { SlCalender } from "react-icons/sl";
import { CiViewList } from "react-icons/ci";
import { FaSailboat } from "react-icons/fa6";
import { GoCrossReference } from "react-icons/go";
import { MdPermPhoneMsg } from "react-icons/md";

export const sideBar = [{
    id: 1,
    title: "Dasboard",
    link: '/',
    icon: < FaChartPie className = "icon"/>
}, {
    id: 2,
    title: "Merchants",
    link: '/Merchants',
    icon: <GiIndianPalace className="icon" />,

},{
    id: 3,
    icon: <CiViewList className="icon"/>,
    title: 'MerchantList',
    link: '/MerchantList'
},
{
    id: 4,
    icon: <FaSailboat className="icon"/>,
    title: 'MerchantOnboarding',
    link: '/MerchantOnboarding'
},
{
    id: 5,
    icon: <SlCalender className="icon" />,
    title: 'SwitchMerchants',
    link: '/SwitchMerchants'
} ,{
    id: 6,
    title: "Brand Orders",
    link: '/BrandOrders',
    icon: < BiSolidCastle className = "icon" />
}, {
    id: 7,
    title: "Brand Categories",
    link: '/BrandCategories',
    icon: < FaDatabase className = "icon"/>
}, {
    id: 8,
    title: "Brand Customers",
    link: '/BrandCustomers',
    icon: <MdPeople className = "icon"/>
}, {
    id: 9,
    title: "Operating Zone",
    link: '/OperatingZone',
    icon: <FaClock className = "icon"/>
}, {
    id: 10,
    title: "Marketing & Promotion",
    link: '/Marketing',
    icon: <TbSpeakerphone className = "icon"/>,
},{
        id: 11,
        icon: <TbCardsFilled className="icon"/>,
        title: 'Cupons',
        link: '/Marketing/cupons'
    }, {
        id: 12,
        icon: <GoCrossReference />,
        title: 'Refer And Earn',
        link: '/Marketing/referandearn'
}, {
    id: 13,
    title: "Loyalty Program",
    link: '/loyaltyProgram',
    icon: <RiSafe2Fill className = "icon"/>
}, {
    id: 14,
    title: "Shipping & Runners",
    link: '/shipping',
    icon: <IoCalendar className = "icon"/>
}, {
    id: 15,
    title: "Runner Payout",
    link: '/RunnerPayout',
    icon: <FaShoppingCart className = "icon"/> ,
}, {
    id: 16,
    title: "Enquiries",
    link: '/enquiries',
    icon: <IoCalendar className = "icon"/>,
},{
        id: 17,
        title: 'PartnerShip Enquiries',
        link: '/Enquiries/PartnerEnquiries',
        icon:<MdPermPhoneMsg  className='icon'/>
    
}];

export const dashBoardCard = [{
    id: 1,
    icon: '',
    title: 'Total Orders',
    value: 19
},
{
    id: 2,
    icon: '',
    title: 'Delivery Orders',
    value: 13
},
{
    id: 3,
    icon: '',
    title: 'Revenue',
    value: '$200'
}, {
    id: 4,
    icon: '',
    title: 'My Earnings',
    value: '$23'
}, {
    id: 5,
    icon: '',
    title: 'Total Customers',
    value: 8
}, {
    id: 6,
    icon: '',
    title: 'Store',
    value: 21
}, {
    id: 7,
    icon: '',
    title: 'Total Runner',
    value: 6
}, {
    id: 8,
    icon: '',
    title: 'Total Coupons',
    value: 2
}
];

export const tableData = [{
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john@example.com',
}, {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    email: 'Jane@example.com',
}];

export const pageData = [{
    id: 1,
    value: 'page1',
    title: 'page 1'
}, {
    id: 2,
    value: 'page2',
    title: 'page 2'
}, {
    id: 3,
    value: 'page3',
    title: 'page 3'
}];
export const phaseData = [{
    id: 1,
    value: 'Phase1',
    title: 'Phase 1'
}, {
    id: 2,
    value: 'Phase2',
    title: 'Phase 2'
}, {
    id: 3,
    value: 'Phase3',
    title: 'Phase 3'
}];

export const merchantTableData = [{
    id: 1,
    store: 'store123a',
    operatingZone: 'chandigarh',
    email: 'johndoe@example.com',
    contactNumber: 'xxxxxxxxxxx',
    location: '#715,b-20 Chandigarh ',
    createAt: '22 Feburary 2024',
    status: 'inactive'

}, {
    id: 2,
    store: 'Store123b',
    operatingZone: 'Chandigarh',
    email: 'johndoe@example.com',
    contactNumber: 'xxxxxxxxxxx',
    location: '#715,b-20 Chandigarh ',
    createAt: '22 Feburary 2024',
    status: 'Inactive'

}, {
    id: 3,
    store: 'Store123c',
    operatingZone: 'Chandigarh',
    email: 'johndoe@example.com',
    contactNumber: 'xxxxxxxxxxx',
    location: '#715,b-20 Chandigarh ',
    createAt: '22 Feburary 2024',
    status: 'Inactive'

}, {
    id: 4,
    store: 'Store123d',
    operatingZone: 'Chandigarh',
    email: 'johndoe@example.com',
    contactNumber: 'xxxxxxxxxxx',
    location: '#715,b-20 Chandigarh ',
    createAt: '22 Feburary 2024',
    status: 'Inactive'

}];

export const merchantCards = [{
        id: 1,
        val: 'HotelSriAshokBhavan',
    },
    {
        id: 2,
        val: "NalandaGrill"
    },
    {
        id: 3,
        val: 'KFC',
    }
];
export const title = [{
        id: 1,
        header: 'Total Sales',
        value: '$2487'
    },
    {
        id: 2,
        header: 'visitors',
        value: '$2487'

    },
    {
        id: 3,
        header: 'new Orders',
        value: '$2487'

    },
    {
        id: 4,
        header: 'Customers',
        value: '$2487'

    },
    {
        id: 5,
        header: 'Total Earning',
        value: '$2487'
    },
    {
        id: 6,
        header: ' Delivered Orders',
        value: '$2487'

    }
];

export const switchtablesdata = [{
        id: 1,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'due',
        cond: 'pending'
    },
    {
        id: 2,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'active',
        cond: 'pending'

    },
    {
        id: 3,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'delivered',
        cond: 'Success'
    },
    {
        id: 4,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'onTheWay',
        cond: 'pending'
    },
    {
        id: 5,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'Due',
        cond: 'pending'

    },
    {
        id: 6,
        products: 'xyz',
        category: 'abc',
        prize: '$199',
        status: 'active',
        cond: 'pending'

    }
];

export const cuponcardData = [{
    id: 1,
    title: 'Gift Card',
    value: '10%',
    text: 'Flat Discount'
}, {
    id: 2,
    title: 'Gift Card',
    value: '10%',
    text: 'Flat Discount'
}, {
    id: 3,
    title: 'Gift Card',
    value: '10%',
    text: 'Flat Discount'
}, {
    id: 4,
    title: 'Gift Card',
    value: '10%',
    text: 'Flat Discount'
}];
export const promotionData = [{
    id: 1,
    title: 'Grocify',
    link: '',
    text: ''
}, {
    id: 2,
    title: 'Grocify',
    link: '',
    text: ''
}, {
    id: 3,
    title: 'Grocify',
    link: '',
    text: ''
}, {
    id: 4,
    title: 'Grocify',
    link: '',
    text: ''
}]