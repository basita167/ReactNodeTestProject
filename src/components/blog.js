import React, { useState } from "react";
import "../assets/blog.css";
import cardImage1 from "../assets/howToMakeReactApp.jpeg";
import cardImage2 from "../assets/designPrinciples.png";
import cardImage3 from "../assets/textClassification.jpeg";

const posts = [
  {
    title: "How to Build Modern React Apps",
    excerpt: "Learn the best practices for building scalable and maintainable React applications.",
    content: "Building modern React applications requires a strong understanding of component-based architecture and the effective use of hooks.Functional components have become the standard, allowing developers to write cleaner and more maintainable code.\n \n By breaking your UI into reusable pieces, you can scale applications more efficiently and reduce duplication across your codebase.Another key aspect of modern React development is state management.While React’s built-in state works well for small applications, larger projects often benefit from tools like Redux Toolkit or Zustand. \n \n These tools help centralize and organize your data flow, making it easier to debug and maintain as your application grows in complexity.Finally, performance and developer experience play a huge role in modern applications. Techniques like code splitting, lazy loading, and memoization can significantly improve performance. At the same time, using tools like Vite or Next.js enhances development speed and provides features like server-side rendering, helping you build fast, SEO-friendly, and production-ready applications",
    
    
    date: "May 1, 2026",
    author: "Admin",
    image: cardImage1
  },
  {
    title: "UI/UX Design Principles",
    excerpt: "Understand the fundamentals of great design and user experience.",
    content: "Good UI/UX design is essential for creating products that users enjoy and find easy to use. A well-designed interface focuses on clarity, consistency, and simplicity.\n By maintaining a clear visual hierarchy and using familiar patterns, users can navigate your application without confusion or frustration.Another important principle is user-centered design. This means understanding your audience and designing with their needs in mind. Conducting user research, gathering feedback, and iterating on designs helps ensure that your product solves real problems and delivers meaningful value.Finally, accessibility and responsiveness should never be overlooked. A great design works for everyone, regardless of device or ability. Ensuring proper contrast, readable typography, and mobile-friendly layouts makes your application more inclusive and significantly improves the overall user experience ",

    date: "April 25, 2026",
    author: "Admin",
    image: cardImage2
  },
  {
    title: "Text Classification Tasks",
    excerpt: "Improve your model's accuracy using effective classification methods.",
    content: "Text classification is a fundamental task in natural language processing that involves categorizing text into predefined labels. It is widely used in applications like spam detection, sentiment analysis, and topic categorization.\n \nBuilding an effective classification model starts with understanding your dataset and choosing the right preprocessing techniques.Feature engineering plays a crucial role in improving model performance. Techniques such as tokenization, stop-word removal, and vectorization methods like TF-IDF or word embeddings help transform raw text into meaningful numerical representations. \n \nChoosing the right approach depends on the complexity of your problem and the size of your dataset.To achieve high accuracy, it is important to experiment with different models and evaluation strategies. From traditional machine learning algorithms like Naive Bayes to advanced deep learning models like transformers, each has its strengths. Regular evaluation, hyperparameter tuning, and proper validation ensure that your model performs well not just on training data but also in real-world scenarios. \n \nText classification models also benefit greatly from high-quality and well-balanced datasets. If the data is noisy or imbalanced, the model may become biased toward dominant classes and perform poorly on unseen examples. Techniques like data augmentation, resampling, and cleaning text data help improve overall robustness and ensure more reliable predictions.\n \nIn recent years, transformer-based models like BERT and GPT have significantly improved text classification performance. These models understand contextual relationships between words, allowing them to capture deeper semantic meaning compared to traditional approaches. As a result, they are widely used in production systems where accuracy and contextual understanding are critical for tasks such as sentiment analysis, document tagging, and customer feedback classification.",

    date: "April 20, 2026",
    author: "Admin",
    image: cardImage3
  }
];

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  // 👉 If a post is selected, show full blog
  if (selectedPost) {
    return (
      <div className="blog-container">
        <button className="back-btn" onClick={() => setSelectedPost(null)}>
          ← Back
        </button>

        <div className="blog-full">
          <img className="imgblog" src={selectedPost.image} alt={selectedPost.title} />
          
          <h1>{selectedPost.title}</h1>
          
          <p className="meta">
            {selectedPost.date} • {selectedPost.author}
          </p>

        
        <div className="full-content">
         {/* ✅ IMPORTANT FIX HERE */}
          <p style={{ whiteSpace: "pre-wrap" }}>
            {selectedPost.content}
          </p>
        	</div>
        
        </div>
      </div>
    );
  }

  // 👉 Default: show blog list
  return (
    <div className="blog-container">
      <h1>Latest Articles</h1>
      <p className="subtitle">Insights, tutorials, and updates</p>

      <div className="blog-grid">
        {posts.map((post, index) => (
          <div
            className="blog-card"
            key={index}
            onClick={() => setSelectedPost(post)}
            style={{ cursor: "pointer" }}
          >
            <img  src={post.image} alt={post.title} />
            
            <div className="blog-content">
              <p className="meta">
                {post.date} • {post.author}
              </p>
              
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>

              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
