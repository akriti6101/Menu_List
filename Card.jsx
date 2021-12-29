import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Card(props) {

    return (<>
     <div className="card mb-3" className="card">
        <div className="row g-0">
            <div className="col-md-4">
                <img src={props.image} style={{height:"150px"}}  className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title} </h5>
                    
                    <p className="card-text" >Some quick example text to build on the card title </p>
                    <p className="card-text" style={{color: "purple"}}>Price :{props.price}<span>
                    <button className="btn btn-primary" style={{marginLeft:"20px",fontSize:"15px",width:"100px",paddingTop:"1px"}}>Order Now</button></span>
</p>                    <p className="card-text"><small class="text-muted">*Price may vary on selected date</small></p>
                </div>
            </div>
        </div>
  </div>



    </>);
}
export default Card;