import BestOnClook from '../components/homePage/BestOnClook';
import PageHeader from '../components/homePage/PageHeader';
import PopularActivities from '../components/homePage/PopularActivities';
import Why from '../components/homePage/Why';
import MainBanner from './../components/homePage/MainBanner';

const HomePage = () => {
    return (
    <>
        <PageHeader />
        <MainBanner />
        <Why />
        <PopularActivities />
        <BestOnClook />
    </>
    )
}

export default HomePage;