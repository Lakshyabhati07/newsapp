import React, { Component } from 'react'

export class NewsItem extends Component {
   
   

  render() {
    let {title,description,imageUrl,url,publishedAt,author}=this.props;
    return (
      <div>
        <div className="card h-100" >
            <img src={imageUrl} className="card-img" alt="news"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className='text-muted'>By {author?author:"Unknown"} at {new Date(publishedAt).toLocaleDateString()}</small></p>
                    <a href={url} target="_balnk" className="btn btn-warning">Read Full News</a>
                </div>
        </div>
    </div>
    )
  }
}

export default NewsItem
