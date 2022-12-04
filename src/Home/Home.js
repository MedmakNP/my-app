import './home.css';


const Home = () => {
    return(
        <div className='intro'>
            <div className='container'>
                <p className='title'>The All-New Series</p>
                <p className='brand'>BMW-GT</p>
                <p className='content'>The BMW 3 Series GT is a fine luxury offering, one with notably more road presence and character than a lot of traditional sedans including BMW’s own 3 Series.</p>
                <button className='btn'>Book Now</button>
                <div className='search-wrap'>
                    <div className='search'></div>
                </div>
            </div>
        </div>
    );
};
export default Home;