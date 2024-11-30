import React, { useEffect, useState } from "react";

//? define Api

const NewsApi = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const apiKey = "239cde3eb5a64f27831195d4dd36cbc3";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&category=technology`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news", error);
        setError(error.message);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <h1>News Api</h1>
      {error ? (
        <p> Error: {error}</p>
      ) : articles && articles.length > 0 ? (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p> Loading or no articale available.</p>
      )}
    </div>
  );
};

export default NewsApi;
