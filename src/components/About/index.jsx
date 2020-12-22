import React from 'react';



About.propTypes = {

};

function About(props) {
   
   

    return (
        <div>
            
            {/* <!-- Masthead--> */}
            <header className="masthead">
                <div className="container d-flex h-100 align-items-center">
                    <div className="mx-auto text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Haruki Store</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">What we call the present is formed from the accumulation of the past.</h2>
                        <a className="btn btn-primary js-scroll-trigger" href="#about">Get Started</a>
                    </div>
                </div>
            </header>
            {/* <!-- About--> */}
            <section className="about-section text-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <h2 className="text-white mb-4">Haruki Murakami</h2>
                            <p className="text-white-50">
                                Haruki Murakami is a Japanese novelist and translator. An important asset to the Japanese literature of the 20th century, Haruki has received several noted awards for his fiction and non-fiction works. He was also referred to as one of the world's greatest living novelists by The Guardian.
                           
                        </p>
                        </div>
                    </div>
                    <img className="img-fluid" src="https://media.newyorker.com/photos/5c5371239d69a04dde6b2a5e/master/pass/TNYInterview-Murakami.jpg" alt="" />
                 
                </div>
            </section>
            
        </div>
    );
}

export default About;