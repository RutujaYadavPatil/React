import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,desc,imgurl,newsid,author,date}=this.props;
    return (
      <div>
        <div className="card " >
  <img src={imgurl} className="card-img-top" alt="..." />
  <div className="card-body card-img-top">
    <h5 className="card-title">{title} <span className="badge bg-danger  ">New</span> </h5>
    <p className="card-text">{desc}</p>
    <p className="card-text"><small className="text-muted">by {author} and updated on {new Date(date).toGMTString()}</small></p>
    <a href={newsid}  className="btn btn-primary text-center"  style={{alignItems:"centre",justifyContent:"center"}} >Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
