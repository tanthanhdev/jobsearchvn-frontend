import { Wrap } from 'components/wrap/Wrap';
import {Header} from './sections/Header/Header'
import {InfoCompany} from './sections/InfoCompany/InfoCompany'
import {InformCompany} from './sections/InformCompany/InformCompany'
import {ManagerCompany} from './sections/ManagerCompany/ManagerCompany'
import {SaveProfileCompany} from './sections/SaveProfileCompany/SaveProfileCompany'
import {CampaignCompany} from './sections/CampaignCompany/CampaignCompany'
import './style.css'
import imgLogo from './images/img job.jpg'
import avaCompany from './images/avatar company.jpg'
import avajob from './images/avatar jobseeker.png'
import { useState } from 'react';

export const EmployerProfile = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  const changeTab = (index) => {
    setActiveIndex(index)
  }

  const handleEditInfo = () => {
    setIsEdit(true)
  }

  const contentRedering = () => {
    if(activeIndex === 0) {
      return <InfoCompany isActive={activeIndex === 0} isEdit={isEdit}/>
    } else if (activeIndex === 1) {
      return <ManagerCompany  isActive={activeIndex === 1}/>
    }else if (activeIndex === 2) {
      return<InformCompany  isActive={activeIndex === 2}/>
    }else if (activeIndex === 3) {
      return <SaveProfileCompany  isActive={activeIndex === 3}/>
    } else if (activeIndex === 4) {
      return <CampaignCompany  isActive={activeIndex === 4}/>
    }
  }

  return (
    <Wrap>
      <div className='wrapper__employ' style={{ minHeight: '500px' }}>
        <div style={{ paddingTop: '50px' }}></div>
        <div class="container">
          <Header activeIndex={activeIndex} changeTab={changeTab} handleEdit={handleEditInfo}/>
          <div class="container__content">
              {contentRedering()}
          </div>
      </div>
      </div>
    </Wrap>
  )
};

export default EmployerProfile;
