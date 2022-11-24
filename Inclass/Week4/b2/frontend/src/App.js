import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <div className="card">
          <div className="user">
            <img
              className="user"
              src="https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
              alt=""
            />
            <div className="profile">
              <div className="name">
                Rafaela <span>20</span>
              </div>
              <div className="local">
                <i className="fas fa-map-marker-alt"></i>
                <span> 20 kilometers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div className="return">
            <i className="fas fa-rotate-left "></i>
          </div>
          <div className="no">
            <i className="fas fa-times"></i>
          </div>
          <div className="star">
            <i className="fas fa-star fa"></i>
          </div>
          <div className="flash">
            <i className="fas fa-flash fa"></i>
          </div>

          <div className="heart">
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
