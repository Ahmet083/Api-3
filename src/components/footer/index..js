import { useSelector } from "react-redux"
import BootstrapLogo from "./bootstrap-logo.svg"

function Footer() {
   
  const categories = useSelector(state => state.category)
  console.log('FOOTER CATEGORY', categories)

  let categoriesJsx = []

  if (categories) {
    categories.map((item, index) => {
      if (index >= 5) {
        return
      }
      categoriesJsx.push(
        <li className="mb-1" key={index}>
        <a className="link-secondary text-decoration-none" href={`#/category/${item.slug}`}>
        {item.name}
        </a>
        </li>,
      )
    })

  } else {
    categoriesJsx = (
      <li className="mb-1" key='1'>
        <strong>
          Loading...
        </strong>
      </li>
    )
  }


  return (
    <div>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-3 col-md">
            <img className="mb-2" src={BootstrapLogo} alt="" width="24" height="19" />
            <small className="d-block mb-3 text-muted">© 2017–2022</small>
          </div>
          <div className="col-3 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another one</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Last time</a></li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>Kategoriler</h5>
            <ul className="list-unstyled text-small">
              {categoriesJsx}
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
            </ul>
          </div>
          <div className="col-3 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}





export default Footer