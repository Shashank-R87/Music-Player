import React from 'react'
import Button from '../components/Button';
import '../css/Central.css'
import Tab from '../components/Tab';
import StackComponent from '../components/StackComponent';
import mainStack from '../data_structures/Stack';

mainStack.stack_push("Intro Page")

function Intro() { 

    return (
        <div className='flex-col justify-center content-center' style={{ minHeight: "100vh" }}>
            <h1 className='text-[#B8B8B8] text-18 absolute top-[40px] left-[50px] ' style={{ fontFamily: "ProductSans" }}>Amrita Vishwa Vidyapeetham, Bengaluru</h1>
            <div className="absolute right-[50px] top-[40px]">
                <Tab PageName={"Intro Page"} />
            </div>
            <h1 className='text-[#B8B8B8] text-[38px] absolute font-bold top-[227px] left-[510px] align-middle' style={{ fontFamily: "ProductSans" }}>Data Structures and Algorithms</h1>
            <h1 className='text-[#B8B8B8] text-[24px] absolute font-normal top-[285px] left-[713px] align-middle' style={{ fontFamily: "ProductSans" }}>19EAC203</h1>
            <h1 className='text-[#B8B8B8] text-[34px] absolute font-bold top-[316px] left-[585px]' style={{ fontFamily: "ProductSans" }}>System Level Application</h1>
            <p className='text-[#B8B8B8] text-[18px] text-center absolute font-normal top-[380px] left-[710px]' style={{ fontFamily: "ProductSans" }}>Submitted to<br />Dr. Kamatchi S.</p>
            <p className='text-[#B8B8B8] text-[18px] text-center absolute font-light bottom-[68px] left-[580px]' style={{ fontFamily: "ProductSans" }}>Ishaan Shokeen | Krithik Ramesh Iyer | Shashank</p>
            <p className='text-[#B8B8B8] text-[14px] text-center absolute font-light bottom-[40px] left-[660px]' style={{ fontFamily: "ProductSans" }}>EAC22022 | EAC22028 | EAC22047</p>
            <div className='absolute top-[472px] left-[679px] transition duration-150 ease-in-out hover:scale-[102%] active:scale-[98%]'>
                <Button routeName={"Desc"} buttoName={"Desc Page"} />
            </div>
            <div>
                <StackComponent StackList={mainStack.stack} key={1} />
            </div>
        </div>
    )
}

export default Intro