import React from 'react'
import { PBorderedText, PHrLines, PNonBorderedText, PTextDiv, PWrapper } from './PortfolioStyles'
import PortfolioImages from './PortfolioImages'

const Portfolio = () => {
  return (
    <PWrapper>
            <PHrLines>Portfolio</PHrLines>
            <PTextDiv>
                <PNonBorderedText>Awesome</PNonBorderedText>
                <PBorderedText>Portfolio</PBorderedText>
            </PTextDiv>
            <PortfolioImages/>
            
    </PWrapper>
  )
}

export default Portfolio