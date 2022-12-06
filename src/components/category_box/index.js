


function CategoryBox(props) {
    return (

        <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">
                {props.name}
                </h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                <img src={props.image} style={{width: '100', margin: '10px'}} />
                <a href={`#/category/${props.slug}`} className="w-100 btn btn-lg btn-primary">
                Contact us
                </a>
              </div>
            </div>
          </div>

    )
}

export default CategoryBox