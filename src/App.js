// import logo from './logo.svg';
import './App.css';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { CiFacebook } from 'react-icons/ci';
import { TiSocialTwitterCircular } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { TfiWorld } from 'react-icons/tfi';
import { BiChevronRight} from 'react-icons/bi';
import { AiOutlineMail} from 'react-icons/ai';
import { BsFillTelephoneFill} from 'react-icons/bs';



function App() {
  return (
    <div >
    <div className='grid grid-cols-2 justify-center bg-black text-white p-3'>
      <div className='grid grid-cols-2'>
       <h2 className='border-r-2  border-r-white-500  '> LONDON!CAPITAL of United Kingdom <BiChevronRight className='inline'></BiChevronRight></h2>
      
       <h2 className='ml-3'><AiOutlineMail className='inline'></AiOutlineMail> support@mygov.com</h2>
      </div>
      <div className='grid grid-cols-2 '>
        <h2 className='mr-3 border-r-2  border-r-white-500 text-right'><BsFillTelephoneFill className='inline'></BsFillTelephoneFill> Call on:1800-123-45-67</h2>
        <select className='border-none bg-green-600 rounded' name="" id="">
          <option value="Open today">Open Today:09 to 18</option>
        </select>
      </div>
    </div>
    <div className='flex items-center text-base h-28'>
      <div className='p-4 grow  border-r-2  border-r-gray-500'>
        <h1 className='text-center'>CITIZEN</h1>
      </div>
      <div className='flex p-2 grow border-r-2  border-r-gray-500'>
        <ul className='flex items-center'>
          <div className='flex items-center'>
          <li className='mr-4'>Explore </li>
         
         <li><BsSearch ></BsSearch></li>
          </div>
        <div className='flex items-center'>
        <li className='mr-4'>Home</li>
          <li><RxDoubleArrowDown></RxDoubleArrowDown></li>
        </div>
        <div className='flex items-center'>
        <li className='mr-4'>City Govt</li>
          <li><RxDoubleArrowDown></RxDoubleArrowDown></li>
        </div>
        <div className='flex items-center'>
        <li className='mr-4'>Departments</li>
          <li><RxDoubleArrowDown></RxDoubleArrowDown></li>
        </div>
        <div className='flex items-center'>
        <li className='mr-4'>Events</li>
          <li><RxDoubleArrowDown></RxDoubleArrowDown></li>
        </div>
        <div className='flex items-center'>
        <li className='mr-4'>City News</li>
          <li><RxDoubleArrowDown></RxDoubleArrowDown></li>
        </div>
          <li className='mr-4'>Contact</li>
          <TfiWorld></TfiWorld>
          <li className='mr-4'>
          <select className='border-none  rounded' name="" id="">
          <option value="English">English</option>
        </select>
          </li>
        </ul>
      </div>
      <div className='flex text-center'>
        <CiFacebook className='mr-4 text-3xl'></CiFacebook>
        <TiSocialTwitterCircular className='mr-4 text-3xl'></TiSocialTwitterCircular>
        <TiSocialLinkedinCircular className='mr-4 text-3xl'></TiSocialLinkedinCircular>

      </div>
    </div>
    <div className='bg-image text-white grid grid-cols-2 justify-items-center'>
      <div className='w-1/2 mt-96 text-lg'>
      <h2 className='text-6xl'>SAVE TIME,</h2>
      <h2 className='text-6xl'>PAY YOUR TAX </h2>
      <h2 className='text-6xl'>ONLINE</h2>
      <p>We're starting off with a handful of spots that should also be on your bucket list</p>
      </div>

    </div>
    </div>
  );
}

export default App;
