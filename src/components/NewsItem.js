import React, { Component } from 'react'

export class NewsItem extends Component {
   
   

  render() {
    let {title,description,imageUrl,url}=this.props;
    return (
      <div>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a href={url} target="_balnk" className="btn btn-warning">Read Full News</a>
                </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
