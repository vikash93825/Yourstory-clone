import React from 'react';
import {Link} from 'react-router-dom'
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';

const Footer = () => {
    return (
        <div className={styles.foot}>
            <hr/>
            <div className="row"  >
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className={styles.main}>
                        <div style={{display:"flex",flexDirection:"column"}} >
                            <div>
                                <img src="https://images.yourstory.com/assets/images/social_icons/twitter2x.png" width="30px" />
                            </div>
                            <div>
                                <img src="https://images.yourstory.com/assets/images/social_icons/instagram2x.png" width="30px" />
                            </div>
                            <div>
                                <img src="https://images.yourstory.com/assets/images/social_icons/facebook2x.png" width="30px" />
                            </div>
                            <div>
                                <img src="https://images.yourstory.com/assets/images/social_icons/linkedin2x.png" width="30px" />
                            </div>
                            <div>
                                <img src="https://images.yourstory.com/assets/images/social_icons/youtube2x.png" width="30px" />
                            </div>
                        </div>
                        <div>
                            <h3>Didn't find what you were looking for?</h3>
                            <p>Search for what you want, categories, tags, keywords, authors, events, anything under YourStory
                            Read more at: YourStory</p>
                        </div>
                        <div>
                        <Button variant="contained" style={{backgroundColor:"#f44336", borderRadius:"15px", width:"150px", color:"white"}}>
                            Search
                        </Button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6"  >
                    <div className={styles.main}>
                        <div className={styles.name} >Topics</div>
                        <div>
                            <Link>Startups</Link>
                        </div>
                        <div>
                            <Link>Techie Tuesdays</Link>
                        </div>
                        <div>
                            <Link>Funding Investments</Link>
                        </div>
                        <div>
                            <Link>Expert Opinion</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6"  >
                    <div className={styles.main}>
                        <div>
                            <Link>App Friday</Link>
                        </div>
                        <div>
                            <Link>In Depth</Link>
                        </div>
                        <div>
                            <Link>Resources</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className={styles.main}>
                        <div className={styles.name} >About</div>
                        <div>
                            <Link>Advertise with us</Link>
                        </div>
                        <div>
                            <Link>Meet the Team</Link>
                        </div>
                        <div>
                            <Link>Contact Us</Link>
                        </div>
                        <div>
                            <Link>Events</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 col-md-4 col-sm-6">
                    <div className={styles.main}>
                        
                        <div>
                            <Link>About</Link>
                        </div>
                        <div>
                            <Link>Report an issue</Link>
                        </div>
                        <div>
                            <Link>Work with Us</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;
