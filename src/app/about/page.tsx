import React from 'react';
import BannerCommon from '@/sections/common/BannerCommon';
import HeaderCommon from '@/sections/common/HeaderCommon';
import StrickyHeaderCommon from '@/sections/common/StrickyHeaderCommon';
import AboutUsThree from '@/sections/about/AboutUsThree';
import WhyChooseA from '@/sections/common/WhyChooseA';
import CounterA from '@/sections/common/CounterA';
import TestimonialsA from '@/sections/common/TestimonialsA';
import AwardsA from '@/sections/about/AwardsA';
import CtaCommon from '@/sections/about/CtaCommon';
import FooterCommon from '@/sections/common/FooterCommon';

const page: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='About' subtitle='Us' breadcrumb='About Us' />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <TestimonialsA />
            <AwardsA />
            <CtaCommon />
            <FooterCommon/>
            <StrickyHeaderCommon />
        </div>
    );
};

export default page;