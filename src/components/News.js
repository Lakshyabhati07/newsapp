import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spin from './Spin';
import PropTypes from 'prop-types';
import image from './image.png';
export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    static defaultProps=
    {
        country:'fr',
        pagesize:12,
        category:'general'

    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string
    }
    async update(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=383325ee8db1465ab7ac95fd6821d970&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        this.setState({loading:true})
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,
            totalResults :parsedData.totalResults,
            loading :false
         });
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=383325ee8db1465ab7ac95fd6821d970&page=1&pagesize=${this.props.pagesize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles,
            totalResults :parsedData.totalResults,
            loading :false
         });
    }

   handleNext =async()=>{
    

            this.setState({
            
                page:this.state.page+1
            });
            this.update();
        
    } 

    handlePrev =async()=>{

       
        this.setState({
            
            page:this.state.page-1
        });
        this.update();
    
        }
    
    render() {
        return (
            <div className='container my-3'>
                {this.state.loading && <Spin/>}
                <h1 className='text-center' style={{margin:'30px 0px'}}>Top Headlines of today</h1>   
                <div className="row mx-2">
                    {!this.state.loading&&this.state.articles.map((element) => {
                        return (
                            <div className="col-md-3 my-2" key={element.url}>
                                <NewsItem
                                    title={element.title ? element.title : " "}
                                    description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage?element.urlToImage:image}
                                    url={element.url}
                                    author={element.author}
                                    publishedAt={element.publishedAt}
                                    
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page<=1} className="btn btn-outline-dark" type="submit" onClick={this.handlePrev}>&larr; Previous</button>
                <button disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pagesize)}className="btn btn-outline-dark" type="submit" onClick={this.handleNext}>Next &rarr;</button>
                </div>
                
            </div>
        )
    }
}
