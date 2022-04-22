import { useState } from 'react';
import { useParams } from "react-router-dom";
// components
import { Wrap } from 'components/wrap/Wrap';
import { Header } from './sections/Header/Header'
import { InfoCompany } from './sections/InfoCompany/InfoCompany'
import { InformCompany } from './sections/InformCompany/InformCompany'
// import { ManagerCompany } from './sections/ManagerCompany/ManagerCompany'
import { SaveProfileCompany } from './sections/SaveProfileCompany/SaveProfileCompany'
import { CampaignCompany } from './sections/CampaignCompany/CampaignCompany'
import { PostJob } from "./sections/CampaignCompany/components/PostJob";
import { CampaignDetail } from "./sections/CampaignCompany/components/CampaignDetail";
import { SearchCV } from "./sections/CampaignCompany/components/SearchCV";
import './style.css'

export const EmployerProfile = ({ active }) => {
  const [activeIndex, setActiveIndex] = useState(active ? active : 0);
  const [isEdit, setIsEdit] = useState(false)
  const changeTab = (index) => {
    setActiveIndex(index)
  }
  let params = useParams();

  const handleEditInfo = () => {
    setIsEdit(true)
  }

  const contentRendering = () => {
    if (activeIndex === 0) {
      return <InfoCompany isActive={activeIndex === 0} isEdit={isEdit} />
    } else if (activeIndex === 1) {
      // return <ManagerCompany  isActive={activeIndex === 1}/>
    } else if (activeIndex === 2) {
      // return <InformCompany isActive={activeIndex === 2} />
    } else if (activeIndex === 3) {
      return <SaveProfileCompany isActive={activeIndex === 3} />
    } else if (activeIndex === 4) {
      return <CampaignCompany isActive={activeIndex === 4} />
    } else if (activeIndex === 5) {
      return <PostJob slug={params.slug} />
    } else if (activeIndex === 6) {
      return <CampaignDetail slug={params.slug} />
    } else if (activeIndex === 7) {
      return <SearchCV slug={params.slug} />
    }
  }

  return (
    <Wrap>
      <div className='wrapper__employ' style={{ minHeight: '100vh' }}>
        <div style={{ paddingTop: '50px' }}></div>
        <div className="container">
          <Header activeIndex={activeIndex} changeTab={changeTab} handleEdit={handleEditInfo} />
          <div className="container__content">
            {contentRendering()}
          </div>
        </div>
      </div>
    </Wrap>
  )
};

export default EmployerProfile;
