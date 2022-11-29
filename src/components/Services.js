import '../App.css';
import './Services.css';
import { Link } from "react-router-dom"
import Logo from '../assets/lilys.jpg'
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';

import HouseCleaning from '../assets/residentialcleaning.jpeg'
import OfficeCleaning from '../assets/residentialcleaning.jpeg'

export default function Services() {
    return (
        <div className="App">

            <nav className="navbar">
                <div className="logo-lily">
                    <img src={Logo} alt="Girl in a jacket" height="45"></img>
                </div>
                <div className="Home-page">
                    <h1 className='home-font'><Link to='/home'>Home</Link></h1>
                </div>
                <div className="Reviews-page">
                    <h1 className='reviews-font'><Link to='/reviews'>Reviews</Link></h1>
                </div>
                <div className="Services-page">
                    <h1 className='services-font'><Link to='/services'>Services</Link></h1>
                </div>
                <div className="About-page">
                    <h1 className='cbout-font'><Link to='/about'>About</Link></h1>
                </div>
                <div className="Contact-page">
                    <h1 className='contact-font'><Link to='/contact'>Contact</Link></h1>
                </div>
            </nav>

            <main className="App-header">
                <h1>Our Services</h1>
                <p>We understand that house cleaning is a very personal thing.
                    That is why our team will do their best not to disappoint you,
                    handling everything according to your specifications and requests.
                    So many people so many tastes, this is why we customize our services to you and to your budget.

                </p>
                <div>
                    <h2>Commercial cleaning</h2>
                    <div class="container two-column-grid">
                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">HOUSE CLEANING<br />
                            We are aware that every house is different and has certain needs and routines.
                            All of Lily's staff are experienced and well trained to clean your house the best way,
                            taking into consideration your surroundings and lifestyle, to make you feel as if you have cleaned yourself,
                            but without a hassle! Of course, we know that letting someone into your home it’s a big deal.
                            That kind of trust is reserved only for family and friends. Here at Lily's Cleaners, we take your safety and peace of mind very seriously.
                            That’s why all of our maids are background and reference checked and bonded also.
                            You can book your slot of service easily, just with a simple call. A customer service attendant will be available to hear your requirements for long term or just for a one off service.
                            You can arrange for a single slot cleaning or a recurring service for a essential price.
                            (you can pick weekly, bi-weekly, or monthly packages).</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">OFFICE CLEANING<br />
                            You can take care of the  business, and we’ll take care of the cleaning. When having an office,
                            you would need to sustain having it well-organised and clean for employees or clients.
                            Whenever the tables may need a good polish, the floors need a good vaccum, or the office needs freshened up,
                            Lily's Cleaners can take care of it! Lily's Cleaners team is represented by professional cleaners,
                            highly trained, and at the ready to keep your facilities in the nick of shape. And not to worry, all of our cleaners are background checked,
                            and bonded, so rest assured everything will be in up to the highest standard and secure.
                            You can book your slot of service easily, just with a simple call. A customer service attendant will be available to hear your requirements for long term or just for a one off service.
                            You can arrange for a single slot cleaning or a recurring service for a essential price.
                            (you can pick weekly, bi-weekly, or monthly packages)</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">VACATION RENTAL CLEANING<br />
                            We want your rental property to be so fresh and clean for you to show it to your future guests proudly.
                            Whether you are a local or national company or just a regular homeowner, our team of maids can efficiently deliver the job.
                            We provide only high-quality service while staying within budget, and during the time frame that you requested.
                            Also, every single cleaner that works with us passes through a strict selection process, including background and reference checking.
                            So, you can trust our maids with your property.
                            Lily's Cleaners operates in every location like a local company so that you may have a world-class cleaning service but with all the
                            flexibility and convenience that only a local company can provide.
                            Book today your cleaning service through our fast and secure calling system.</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">DEEP CLEANING<br />
                            A deep cleaning service is recommended for houses and offices that haven’t been cleaned in a while,
                            for first visit cleanings, or before and after an event.
                            Practically, a deep clean is needed whenever there’s been a lack of a professional clean that’s lasted weeks or even months.
                            We provide for you a complete checklist of all the cleaning tasks this service covers.
                            From dusting window frames to disinfecting bathroom surfaces, our maids will put special attention to detail.
                            Although this service can be really extense, we always stay under your budget and focus on your personal cleaning goals with an hourly rate.
                            Of course, we only sent to your home or office highly rated maids, background and reference checked,
                            so you don’t have to worry about letting us in at your place. Also, you can book easily by contacting us directly by a simple call.</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">MOVE-IN/MOVE-OUT CLEANING<br />
                            When you are moving to a new home, you probably are too busy for that last deep clean to your old house.
                            Or perhaps it’s your new home that needs cleaning? Whatever the case, our maids are ready to help you with this big step in your life.
                            We know that every move is different. Every house has it’s details that need specific attention, and a history that indicates where to clean the most.
                            Often our clients ask for closet and cabinets cleaning; fridge, oven, and other appliances; and windows and doorframes dusting.
                            You tell us your personal goals, and we’ll make you an estimated budget. Choose your cleaning tasks in our extensive checklist, and we’ll follow just as you request.
                            All of our staff are experienced and well-trained to accomplish this job. And also, you can book easily by contacting us directly by a simple call.</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">POST CONSTRUCTION CLEANING <br />
                            This service usually is for commercial clients who are in the real state business or may have a new renovated home, build, or apartment,
                            but we provide post-construction cleaning to whichever homeowner that just have finished its remodeling or construction.
                            We must remove all the dust, dirt, and debris left behind from your new home or office. This is a job for an experienced and well-trained cleaner,
                            like our cleaners, who know the process of eliminating the particles of construction materials and know how to use the right equipment.
                            We assure you a high-quality job and a clean and smooth result. Also, we can include and schedule a complimentary cleaning session to your service
                            to guarantee the elimination of all debris and dust. Ask for our complete cleaning checklist with all the possible spots and areas to clean.
                            Book easily by contacting us directly by a simple call.</div>

                        <div class="box-image"><img src={HouseCleaning} alt="House cleaning" height="100%" width="80%"></img></div>
                        <div class="box-text">APARTMENT CLEANING <br />
                            Either you want a frequent service with weekly or monthly scheduled sessions, or you just want a one-time cleaning with affordable hourly rates,
                            you better be sure that Lily's Cleaners have the right service for you. We strive to always fit under our customer’s budget and adjust to their time frames.
                            Also, we take your safety and satisfaction very seriously; that’s why every one of our cleaners went through an extensive selection process,
                            where we check out their experience, profile, and background references. In addition to that, we insure and bond all of our maids, for you not to worry about anything.
                            Booking our apartment cleaning service means that you will have a five-star cleaning, a helpful high rated cleaner in your home,
                            and also you’ll be assigned to a project manager that will give proper tracing to your service.
                            Book our cleaning service by contacting us directly by a simple call.</div>
                    </div>
                </div>
            </main>

            <footer className="App-footer">
                <h1>We make homes clean, safe, healthy.</h1>
                <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
            </footer>
        </div>
    );
}