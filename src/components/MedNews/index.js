import React from 'react';
import NewsSample from './NewsSample';
import { NewsContainer, NewsHeader, NewsFilter, NewsList } from './MedStyle';

function MeNews() {
    return (
        <>
            <NewsContainer>
                <NewsHeader>
                    <h1>MEDCART News</h1>
                </NewsHeader>

                <NewsFilter>
                    <button className="tabLinks" onClick="openNews(event, 'All')">All</button>
                    <button className="tabLinks" onClick="openNews(event, 'Covid')">Covid</button>
                    <button className="tabLinks" onClick="openNews(event, 'Vaccine')">Vaccine</button>
                    <button className="tabLinks" onClick="openNews(event, 'Doctors')">Doctors</button>
                    <button className="tabLinks" onClick="openNews(event, 'Death')">Death</button>
                    <button className="tabLinks" onClick="openNews(event, 'Virus')">Virus</button>
                    <button className="tabLinks" onClick="openNews(event, 'Hospitals')">Hospital</button>
                </NewsFilter>

                <NewsList>
                    <NewsSample
                        image = "/images/News/image 31.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "Read more"
                    />

                    <NewsSample
                        image = "/images/News/image 32.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "/more"
                    />

                    <NewsSample
                        image = "/images/News/image 33.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "/more"
                    />

                    <NewsSample
                        image = "/images/News/image 31.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "/more"
                    />

                    <NewsSample
                        image = "/images/News/image 32.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "/more"
                    />

                    <NewsSample
                        image = "/images/News/image 33.jpg"
                        title = "Natural response to loss. It's the emotional suffering you feel"
                        date = "May 5, 2021"
                        description = "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization."
                        link = "/more"
                    />
                    
                </NewsList>

            </NewsContainer>
        </>
    )
}

export default MeNews
