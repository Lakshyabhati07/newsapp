import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=383325ee8db1465ab7ac95fd6821d970&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,totalResults :parsedData.totalResults });
    }

   handleNext =async()=>{
    if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){

    }
    else{
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=383325ee8db1465ab7ac95fd6821d970&page=${this.state.page+1} & pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

            this.setState({
            
                page:this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

    handlePrev =async()=>{

        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=383325ee8db1465ab7ac95fd6821d970&page=${this.state.page-1} & pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
    
            this.setState({
               
                page:this.state.page-1,
                articles: parsedData.articles
            })
            console.log(parsedData);
        }
    
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>Top Headlines of today</h2>   
                <div className="row mx-2">
                    {this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3 my-2" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title.slice(0, 40) : " "}
                                    description={element.description ? element.description.slice(0, 70) : ""}
                                    imageUrl={element.urlToImage?element.urlToImage:"./image.png"}
                                    url={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div class="d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-outline-dark" type="submit" onClick={this.handlePrev}>&larr; Previous</button>
                <button className="btn btn-outline-dark" type="submit" onClick={this.handleNext}>Next &rarr;</button>
                </div>
                
            </div>
        )
    }
}
