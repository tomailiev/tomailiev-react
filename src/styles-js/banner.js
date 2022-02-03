import bannerImage from '../imgs/6.jpg';
import backupBannerImage from '../imgs/6666.jpg';

const bannerCSS = {
    height: '75vh',
    background: `url(${bannerImage}) no-repeat center center, url(${backupBannerImage}) no-repeat center center`,
    backgroundSize: 'cover',
    transition: 'all 2s ease-in',
};

export default bannerCSS;
