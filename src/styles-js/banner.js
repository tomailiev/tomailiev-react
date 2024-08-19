import bannerImage from '../imgs/6.jpg';
import backupBannerImage from '../imgs/6666.jpg';

const bannerCSS = {
    height: '75vh',
    background: { en: `linear-gradient(180deg, rgba(82, 101, 182, 0.75) 49%, rgba(224, 206, 134, 0.75) 51%), url(${bannerImage}) no-repeat center center/cover, url(${backupBannerImage}) no-repeat center center/cover`, bg: `linear-gradient(180deg, rgba(228, 3, 3, 0.35) 0%, rgba(255, 140, 0, 0.35) 16.66%, rgba(255, 237, 0, 0.35) 33.33%, rgba(0, 128, 38, 0.35) 49.98%, rgba(0, 77, 255, 0.35) 66.64%, rgba(117, 7, 135, 0.35) 83.3%), url(${bannerImage}) no-repeat center center/cover, url(${backupBannerImage}) no-repeat center center/cover` },
    // backgroundSize: 'cover',
    transition: 'all 2s ease-in',
};

export default bannerCSS;
