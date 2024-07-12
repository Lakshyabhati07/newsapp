import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spin from './Spin';
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
        this.setState({ articles: parsedData.articles,
            totalResults :parsedData.totalResults,
            loading :false
         });
    }

   handleNext =async()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize))){

    
    
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=383325ee8db1465ab7ac95fd6821d970&page=${this.state.page+1} & pagesize=${this.props.pagesize}`;
        this.setState({loading:true}) ;       
        let data = await fetch(url);
        let parsedData = await data.json();

            this.setState({
            
                page:this.state.page+1,
                articles: parsedData.articles,
                loading :false
            })
        }
    } 

    handlePrev =async()=>{

        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=383325ee8db1465ab7ac95fd6821d970&page=${this.state.page-1} & pagesize=${this.props.pagesize}`;
        this.setState({loading:true}) ; 
        let data = await fetch(url);
        let parsedData = await data.json();
    
            this.setState({
               
                page:this.state.page - 1,
                articles: parsedData.articles,
                loading :false
            })
        }
    
    render() {
        return (
            <div className='container my-3'>
                {this.state.loading && <Spin/>}
                <h1 className='text-center'>Top Headlines of today</h1>   
                <div className="row mx-2">
                    {!this.state.loading&&this.state.articles.map((element) => {
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
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-outline-dark" type="submit" onClick={this.handlePrev}>&larr; Previous</button>
                <button disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pagesize)}className="btn btn-outline-dark" type="submit" onClick={this.handleNext}>Next &rarr;</button>
                </div>
                
            </div>
        )
    }
}
