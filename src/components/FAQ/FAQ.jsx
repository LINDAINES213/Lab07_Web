import { useState } from 'react'
import './FAQ.css'


const FAQ = () => {
    const [count, setCount] = useState(0)
    return (
        <article id="faq" className='faq' typeof='FAQPage'>
            <h2 property="name" className='faq_title'>
                Frequently Asked Questions
            </h2>
            <div className='faq_content'>
                <section className='faq_section'>
                    <header className='faq_header'>
                        <details open>
                            <summary style={{listStylePosition: 'outside'}}>
                                <h3 className='faq_question'>
                                How does DuckDuckGo make money?
                                </h3>
                            </summary>
                            <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>We make our money from private ads on our search engine. On other search engines, ads are based on profiles compiled about you using your personal information like search, browsing, and purchase history. Since we don’t collect that information, search ads on DuckDuckGo are based on the search results page you are viewing, not on you as a person. For example, if you search for cars, we’ll show you ads about cars. <a href='https://spreadprivacy.com/duckduckgo-revenue-model/'>Learn more.</a> </p>

                        </details>
                    </header>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                                What does Google know about me?
                            </h3>
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with DuckDuckGo!). And that’s just the tip of the iceberg. <a href='https://spreadprivacy.com/what-does-google-know-about-me/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            Why use DuckDuckGo instead of Google?
                            </h3>    
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>Ever notice ads constantly following you around? That’s in part because Google tracks your searches and hides trackers on millions of websites. By contrast, our private search engine doesn’t track your searches and our <a href='https://duckduckgo.com/app'>DuckDuckGo browser extension and mobile app</a> block Google’s (and many other companies’) trackers across the Internet, helping to keep your browsing history more private, as it should be. And that’s just the beginning — by using DuckDuckGo you also escape the manipulation of the filter bubble and can use the Internet faster (after all that tracking code is disabled). <a href='https://spreadprivacy.com/what-does-google-know-about-me/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            How do DuckDuckGo search results compare to Google’s?
                            </h3>    
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>DuckDuckGo search gives you truly private search results without tradeoffs in result quality. We have everything you’ve come to expect in an online search experience, and a few <a href='https://duckduckgo.com/bang'>bonus features</a> that make searching the Internet not only private, but also a bit more fun! And, on top of that, because there is no search history on DuckDuckGo, you escape the filter bubble of manipulated results. <a href='https://spreadprivacy.com/is-duckduckgo-a-good-search-engine/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            Is DuckDuckGo an “unfiltered” search engine?
                            </h3>    
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>Unlike some other search engines, we don’t alter search results based on someone’s previous search history. In fact, since we don’t track our users we don’t have access to search histories at all! Those other search engines show you results based on a data profile about you and your online activity (including your search history), and so can be slanted towards what they think you will click on the most based on this profiling. This effect is commonly known as the <a href='https://spreadprivacy.com/is-duckduckgo-a-good-search-engine/'>search filter bubble</a>, but using DuckDuckGo can help you escape it.</p>
                        <br></br>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>This does not mean our search results are generally “unfiltered” because, for every search you make online, a search engine’s job is to filter millions of possible results down to a ranked order of just a handful. In other words, a search engine has to use algorithms programmed by people to determine what shows up first in the list of results, what shows up second, and so on. Otherwise, for every search you’d just get a completely random set of results, which of course wouldn’t be very useful.</p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            Is DuckDuckGo owned by Google?
                            </h3>    
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>No, we are not and have never been owned by Google. We have been an independent company since our founding in 2008 and, unlike some other search engines, we don’t rely on Google’s results for any of our search results. You may notice that we offer a Google Chrome extension and a Google Android app, but these are also not in partnership with Google and actually aim to protect you from Google’s online trackers.</p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            What’s the difference between using DuckDuckGo and Incognito mode?
                            </h3>
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>It is a myth that you can’t be tracked while using so-called “Incognito” mode. In fact, Incognito mode mainly just deletes information on your computer and does nothing to stop Google from saving your searches, nor does it stop companies, Internet service providers, or governments from being able to track you across the Internet. By contrast, DuckDuckGo search is completely anonymous and if you add our app & extension on top, we help keep you private when browsing off of search results. <a href='https://spreadprivacy.com/how-anonymous-is-duckduckgo/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            How popular is DuckDuckGo?
                            </h3>
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>We don’t track our users, so it’s actually impossible for us to know how many users in total are using our products. However, we are able to make an estimate based on the number of searches we get per month. Our best guess — over 50 million people! <a href='https://spreadprivacy.com/how-many-people-use-duckduckgo/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <details>
                        <summary style={{listStylePosition: 'outside'}}>
                            <h3 className='faq_question' style={{marginTop: '25px'}}>
                            How does the DuckDuckGo app & extension work?
                            </h3>
                        </summary>
                        <p style={{fontSize: '15px', textAlign: 'left', lineHeight: '2'}}>The DuckDuckGo Privacy Browser mobile app and Privacy Essentials desktop extension both come with our best-in-class tracker blocker, encryption enforcer, and private search engine – all in one simple package. This gives you all the key privacy protection tools to search and browse privately, curbing the constant monitoring of your Internet activity by companies like Google and Facebook. <a href='https://spreadprivacy.com/how-does-the-duckduckgo-app-extension-protect-my-privacy/'>Learn more.</a></p>
                    </details>
                </section>
                <section className='faq_section'>
                    <button style={{marginTop: '5%', marginBottom: '10%'}}><p style={{marginTop: '0', marginBottom: '0', fontSize: '13px'}}>Add DuckDuckGo</p></button>
                </section>
            </div>
        </article>
    )
}

export default FAQ