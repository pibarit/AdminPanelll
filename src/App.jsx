import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import './App.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import DashBoardCard from './pages/dashBoardCards'
import Merchantlist from './pages/MerchantList'
import SwitchMerchants from './pages/SwitchMerchants'
import MerchantOnBoarding from './pages/MerchantOnBoarding'
import BrandOrders from './pages/BrandOrders'
import Cupons from './pages/Cupons'
import OperatingZone from './pages/OperatingZone'
import PartnerEnquiries from './pages/PartnerEnquiries'
import RunnerPayout from './pages/RunnerPayout'
import ShippingCharges from './pages/ShippingCharges'
import RefernEarn from './pages/ReferandEarn'
import LoyaltyProgram from './pages/LoyaltyProgram'
import EditMerchantData from './pages/editMerchantData'
import MerchantTimeSetting from './pages/merchantStoreTime'
import Commission from './pages/merchantCommission'
import MTags from './pages/merchantTags'
import Mcategory from './pages/merchantCategorey'
function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Sidebar/>
      <Navbar/>
    <Routes>
    <Route  path="/" element={<DashBoardCard/>}></Route> 
    <Route  path="/MerchantList" element={<Merchantlist/>}></Route>
   <Route  path="/MerchantOnboarding" element={<MerchantOnBoarding/>}></Route>
    <Route  path="/Merchants/MerchantOnboarding/EditMerchantData" element={<><MerchantOnBoarding/><EditMerchantData/></>}></Route>
    <Route  path="/Merchants/MerchantOnboarding/MerchantTimeSetting" element={<><MerchantOnBoarding/><MerchantTimeSetting/></>}></Route>
    <Route  path="/Merchants/MerchantOnboarding/Commission" element={<><MerchantOnBoarding/><Commission/></>}></Route>
    <Route  path="/Merchants/MerchantOnboarding/MTags" element={<><MerchantOnBoarding/><MTags/></>}></Route>
    <Route  path="/Merchants/MerchantOnboarding/Mcategory" element={<><MerchantOnBoarding/><Mcategory/></>}></Route>
    <Route path='/SwitchMerchants' element={<SwitchMerchants/>}> </Route>
    <Route path='/BrandOrders' element={<BrandOrders/>}> </Route>
    <Route path='/OperatingZone' element={<OperatingZone/>}> </Route>
    <Route path='/Marketing/cupons' element={<Cupons/>}> </Route>
    <Route path='/RunnerPayout' element={<RunnerPayout/>}> </Route>
    <Route path='/Enquiries/PartnerEnquiries' element={<PartnerEnquiries/>}> </Route>
    <Route path='/shipping' element={<ShippingCharges/>}> </Route>
    <Route path='/loyaltyProgram' element={<LoyaltyProgram/>}> </Route>
    <Route path='/Marketing/referandearn' element={<RefernEarn/>}> </Route>

        </Routes>
    </BrowserRouter>
    </div>

  )
}

export default App
