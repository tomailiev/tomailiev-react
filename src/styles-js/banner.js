import bannerImage from '../imgs/6.jpg';
import backupBannerImage from '../imgs/6666.jpg';

const bannerCSS = {
    height: '75vh',
    background: `linear-gradient(180deg, rgba(82, 101, 182, 0.75) 49%, rgba(224, 206, 134, 0.75) 51%), url(${bannerImage}) no-repeat center center, url(${backupBannerImage}) no-repeat center center`,
    backgroundSize: 'cover',
    transition: 'all 2s ease-in',
};

export default bannerCSS;
