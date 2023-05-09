import React from 'react'
import { HomeContainer } from './components/HomeContainer'
import { RecommendedProd } from './components/RecommendedProd'
import { Banner } from './components/Banner'
import { Trending } from '../../components/Trending'
import Topbanner from '../../../media/home/top-banner.jpg'
import Bottombanner from '../../../media/home/bottom-banner.jpg'

export function Home() {
  return (
    <>
      <HomeContainer />
      <RecommendedProd />
      <Banner
        clasname={'banner-container'}
        title={'Creative harmonious living'}
        text={
          'RAOUF Products are all made to standard sizes so that you can mix and match them freely.'
        }
        img={Topbanner}
        alt={'top-banner'}
      />

      <Trending />

      <Banner
        clasname={'banner-container_reverse'}
        title={'Comfortable & Elegante Living'}
        text={
          'RAOUF Products are all made to standard sizes so that you can mix and match them freely.'
        }
        img={Bottombanner}
        alt={'top-banner'}
      />
    </>
  )
}
