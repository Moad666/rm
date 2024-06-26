import React from "react";
import ItemSidebar from "./ItemSidebar";
import { RxDashboard } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { CiSliderVertical } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import ItemSidebarcercle from "./ItemSidebarcercle";
import { Modal } from 'antd';
import { useState } from "react";
import Chatbotassiatance from "../../pages/Chatbotassiatance";

export default function Sidebar2(){
    const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

    return <div style={{display:"flex",flexDirection:"column",height:"100vh",width:"76px",backgroundColor:"white",alignItems:"center",justifyContent:"space-between"}}>

<div style={{display:"flex",flexDirection:"column"}}>
<ItemSidebar icon={<CiShare2/>} link={"/MainPage/rulekanban"}/>
<ItemSidebar icon={<CiGrid41/>} link={"/MainPage/displayrules"}/>
<ItemSidebar icon={<CiBellOn/>} link={"/MainPage/mainpage"}/>
<ItemSidebar icon={<CiCircleInfo/>} link={"/MainPage/upload"}/>
<ItemSidebar icon={<CiSliderVertical/>} link={"/"}/>
<ItemSidebar icon={<CiSettings/>} link={"/"}/>
</div>



<div>
<ItemSidebarcercle open={showModal} img={"/chatbotimage.png"} animated={"/chatbotanimation.gif"}/>
</div>

<Modal bodyStyle={{height: '600px',padding:"0px"}}  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} centered  width={1200}  footer={null} >
            <div style={{margin:"0px",height:"600px",padding:"0px",borderRaduis:"10px",top: 0}}>
                <Chatbotassiatance />
            </div>
        </Modal>

    </div>


}