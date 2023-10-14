import './App.css';

function App() {
  return (
  <>
  <header>
    <div className="logo-container">
      <p id="logo">EDYODHA</p>
      <p id="logo-stories">Stories</p>
    </div>
    <div className="headerRightSide">
      <div className="dropdown">
        <span id="dropdown-text">Explore Categories</span>
        <i id="dropdown-icon" className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="right-side">
          <div><p className="headerpara">EdYoda is a learning and knowledge <br/> sharing platform for techies</p></div>
          <div><button className="headerBtn">Go To Main Website</button></div>
      </div>
    </div>
  </header>
  <section>
    <div id="body">
      <div id="heading">
        <h1>Latest Posts</h1>
      </div>
      <div id="filter">
        <i className="fa-solid fa-filter"></i>
        <span id="filer-by-category">Filter by Category</span><br/>
        <div id="category">
          <span className="category">All</span>
          <span className="category">Artificial Intelligence</span>
          <span className="category">Cloud Computing</span>
          <span className="category">DevOps</span>
          <span className="category">Programming Languages</span>
          <span className="category">Mobile Application Development</span>
          <span className="category">Technology and Tools</span>
          <span className="category">Get aJob in a Tech Company</span>
          <span className="category">Others</span>
        </div>
        <div id="items">
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt=""/>

            <div className="allDetails">
              <p className="title">Introduction To A Machine Learning Online Course</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 23 aug 2019</span>
              </div>
              <div className="details">
                We have had an insight into Artificial Intelligence. Well, one of its subfields is
                machine learning and this introduction will help you get a fair idea of what a machine
                learning online course holds...
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt=""/>

            <div className="allDetails">
              <p className="title">LAMP Stack Vs MEAN stack: Choosing the right platform...</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 24 aug 2019</span>
              </div>
              <div className="details">
                In today’s dynamic world, rapid web application development with a smooth user interface
                that can adapt to specific features is the main business requirement. Many organizations
                around the world ...
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt=""/>

            <div className="allDetails">
              <p className="title">Impact of Cloud Computing in various industries</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 25 aug 2019</span>
              </div>
              <div className="details">
                Cloud computing has been rapidly gaining pace in the world of information technology. It
                has been observed that over 90% of global enterprises are using cloud technology as part
                of their business...
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt=""/>

            <div className="allDetails">
              <p className="title">Challenges of Machine Learning in Big Data Analytics</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 26 aug 2019</span>
              </div>
              <div className="details">
                Machine Learning is a subset of artificial intelligence which is an important part of
                computer science. The revolution of Big Data promises to transform the way we work, live
                and think by enabling the process of ...
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt=""/>

            <div className="allDetails">
              <p className="title">Breaking the Myths around Cybersecurity</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 27 aug 2019</span>
              </div>
              <div className="details">
                We machine learning and this introduction will help you get a fair idea of what a
                machine learning online course holds. To begin with, one must understand what machine learning
                is. Basically, it is a concept ...
              </div>
            </div>
          </div>
          <div className="item">
            <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt=""/>

            <div className="allDetails">
              <p className="title">Importance of Data Backup and Recovery in the IT...</p>
              <div className="author-container">
                <span className="author">Edyodha </span>|<span className="date"> 28 aug 2019</span>
              </div>
              <div className="details">
                We have had an insight into Artificial Intelligence. Well, one of its subfields is
                machine learning and this introduction will help you get a fair idea of what a machine
                learning online course holds. To begin with, ...
   
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>
  <footer>

  </footer>
    </>
  );
}

export default App;
