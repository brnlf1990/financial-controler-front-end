    import React, { useState, useEffect } from "react";
    import CurrentCard from "./CurrentCard";
    import {getNews} from '../../utils/news'
    import "./NewsList.css"
    function NewsList() {
        const [news, setNews] = useState('');
        useEffect(() => {
            getNews()
            .then((data) => {
                setNews(data.articles.slice(0,5))
            })
            .catch((err) => {
                console.log(err);
                
            })

        })
    
        return ( 
        <CurrentCard
        type="news"
        title="Noticías"
        >
            <ul className="news__list">
            {Array.isArray(news) && news.length > 0 ? (
                news.map((item, index) => (
                    <li  key={index} className="news-list__item">
                        <a target="blank" className="news__link" href={item.url}>{item.description}</a>
                    </li>
                ))
                ) : (
                <p>Sem valores</p>
                )}
        

            </ul>
        </CurrentCard>        
        );
    }

    export default NewsList;
