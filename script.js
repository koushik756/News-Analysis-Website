document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generate-article');
    const articleTextArea = document.getElementById('article-text');
    const articleImage = document.getElementById('article-image');

    // Predefined articles with associated image URLs
    const articles = [
        {
            title: "Global Economic Growth in 2024",
            content: "As the global economy continues to recover from the disruptions caused by the pandemic, analysts are forecasting moderate growth in 2024. Key factors influencing growth include inflation rates, interest rate adjustments, and recovery trends in emerging markets. The International Monetary Fund (IMF) projects a global growth rate of 3.6%, which is optimistic compared to previous years. The United States is expected to lead the charge with a forecasted growth rate of 2.5%. Meanwhile, China’s economy is showing signs of slowing down due to ongoing regulatory challenges, though the government remains committed to supporting economic recovery. This growth is expected to benefit sectors like technology, renewable energy, and infrastructure. However, challenges like trade tensions and geopolitical uncertainty could still disrupt progress.",
            imageUrl: "https://via.placeholder.com/600x300/4facfe/fff?text=Global+Economic+Growth" // Placeholder image
        },
        {
            title: "Tech Innovations to Watch in 2024",
            content: "2024 is shaping up to be a year of transformative tech innovations. Artificial intelligence (AI) continues to be at the forefront, with advancements in machine learning, deep learning, and natural language processing. Expect breakthroughs in AI-powered healthcare, self-driving cars, and advanced robotics. The space industry is also buzzing with new missions to Mars and the Moon, supported by both government space agencies and private companies like SpaceX and Blue Origin. Quantum computing remains a long-term goal, but experts predict significant strides toward practical applications. Blockchain technology is likely to expand beyond cryptocurrencies, bringing decentralized solutions to industries such as supply chain management, finance, and healthcare.",
            imageUrl: "https://via.placeholder.com/600x300/45a049/fff?text=Tech+Innovations" // Placeholder image
        },
        {
            title: "The Future of Renewable Energy",
            content: "Renewable energy is no longer a niche market but a growing global industry. With the escalating impacts of climate change, countries around the world are accelerating their transition to clean energy sources. Solar and wind energy are leading the way, but new technologies like tidal and geothermal power are expected to play a larger role in the coming years. The rise of electric vehicles (EVs) is also pushing demand for renewable energy, as charging stations increasingly rely on solar and wind power. Government incentives, like tax rebates for solar panels and electric cars, are helping to drive the adoption of clean technologies. By 2024, the global energy mix is expected to see significant shifts toward low-carbon alternatives, with the goal of achieving net-zero emissions by 2050.",
            imageUrl: "https://via.placeholder.com/600x300/ff8c00/fff?text=Renewable+Energy" // Placeholder image
        }
    ];

    // Function to generate a random article from the array
    function generateArticle() {
        // Get a random article from the array
        const randomIndex = Math.floor(Math.random() * articles.length);
        const article = articles[randomIndex];

        // Populate the article content and image
        articleTextArea.value = `Title: ${article.title}\n\n${article.content}`;
        articleImage.src = article.imageUrl;
        articleImage.alt = article.title; // Set alt text to the title of the article
    }

    // Event listener for the "Generate Article" button
    generateButton.addEventListener('click', generateArticle);
});
