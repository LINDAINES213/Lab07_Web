import InformationBlock from './infoBlocks.jsx'

const MainInfoBlocks=()=>{
    return(
        <div>
            <br></br>
            <InformationBlock img = {"https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg"} title = {"Privacy Browser Extension"}
            text = {"Browse as usual, and we’ll take care of the rest. Get bundled private search, tracker blocking, and site encryption, all in one download, for "} 
            link= {"https://duckduckgo.com/app"}
            text2={'major browsers.'}/>

            <InformationBlock img = {"https://duckduckgo.com/assets/home/landing/icons/search.svg"} title = {"Private Search Engine"}
            text = {"Search privately with our app or extension, add private web search to your favorite browser, or search directly at "}
            link= {"https://duckduckgo.com/"}
            text2={'duckduckgo.com.'}/>

            <InformationBlock img = {"https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg"} title = {"Privacy Browser App"}
            text = {"Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on "}
            link= {"https://duckduckgo.com/app"}
            text2={"iOS & Android"}/>
        </div>
    )
}

export default MainInfoBlocks

