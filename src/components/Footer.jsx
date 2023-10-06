
export default function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3 fixed-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <a href="https://www.linkedin.com/in/niko-auer/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-2x text-light mx-2"></i>
              </a>
              <a href="https://github.com/nikoauer" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github fa-2x text-light mx-2"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}