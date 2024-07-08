import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    items=[
        {
            "title": "Shari Redstone, Paramount Co-CEOs on Skydance Deal: Read the Memos",
            "snippet": "Shari Redstone and Paramount Global's co-CEOs -- George Cheeks, Brian Robbins and Chris McCarthy -- addressed the deal to merge with Skydance Media.",
            "publisher": "Variety",
            "timestamp": "1720414200000",
            "newsUrl": "https://variety.com/2024/tv/news/paramount-skydance-shari-redstone-ceo-memos-1236062126/",
            "images": {
                "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNVFRa1JpV1RGSGNuZHNhREZuVFJERUF4aW1CU2dLTWdhZEE2UkxqUXM=-w280-h168-p-df-rw",
                "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNVFRa1JpV1RGSGNuZHNhREZuVFJERUF4aW1CU2dLTWdhZEE2UkxqUXM"
            },
            "hasSubnews": true,
            "subnews": [
                {
                    "title": "Meet David Ellison, the CEO of Skydance and Paramount’s New Owner",
                    "snippet": "He left college to try out acting. Now, he's set to become one of the most powerful people in Hollywood.",
                    "publisher": "The New York Times",
                    "timestamp": "1720395800000",
                    "newsUrl": "https://www.nytimes.com/2024/07/07/business/media/david-ellison-paramount-skydance.html",
                    "images": {
                        "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXVlbEZzVlRkc09IRTBaWEJ1VFJDRUJSamNBeWdLTWdhdFZaRE5vUWc=-w280-h168-p-df-rw",
                        "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXVlbEZzVlRkc09IRTBaWEJ1VFJDRUJSamNBeWdLTWdhdFZaRE5vUWc"
                    }
                },
                {
                    "title": "Paramount, the media empire behind CBS and ‘Top Gun,’ agrees to merge with Skydance",
                    "snippet": "Paramount Global, the sprawling media empire behind CBS, MTV, and one of Hollywood's most storied movie studios, has agreed to merge with technology scion ...",
                    "publisher": "CNN",
                    "timestamp": "1720422420000",
                    "newsUrl": "https://www.cnn.com/2024/07/08/media/paramount-global-skydance-merger-announcement/index.html",
                    "images": {
                        "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNXdTalJxV1RWVk1VbDRWWGN6VFJDZkF4amlCU2dLTWdhTmVZckdzZ1k=-w280-h168-p-df-rw",
                        "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNXdTalJxV1RWVk1VbDRWWGN6VFJDZkF4amlCU2dLTWdhTmVZckdzZ1k"
                    }
                },
                {
                    "title": "Paramount agrees to merge with Skydance, creating 'New Paramount'",
                    "snippet": "Paramount Global agreed to merge with Skydance, ushering in a new era for the media company that has faced setbacks amid a shifting media landscape.",
                    "publisher": "Business Insider",
                    "timestamp": "1720404014000",
                    "newsUrl": "https://www.businessinsider.com/paramount-global-agrees-to-merge-with-skydance-shari-redstone-2024-7",
                    "images": {
                        "thumbnail": "https://news.google.com/api/attachments/CC8iK0NnNHpZVlpNU3psaVkwdGlOVzgzVFJEZkF4aUFCU2dLTWdZSkFhVHRrUW8=-w280-h168-p-df-rw",
                        "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iK0NnNHpZVlpNU3psaVkwdGlOVzgzVFJEZkF4aUFCU2dLTWdZSkFhVHRrUW8"
                    }
                },
                {
                    "title": "Paramount and Skydance agree to merge, ending Redstone era",
                    "snippet": "The deal would elevate David Ellison, the 41-year-old tech scion who founded Skydance, as Hollywood's newest power broker.",
                    "publisher": "CNBC",
                    "timestamp": "1720411020000",
                    "newsUrl": "https://www.cnbc.com/2024/07/08/paramount-and-skydance-agree-to-merge-ending-redstone-era.html",
                    "images": {
                        "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNWZjRWxxUld0b1NFTTJjV1ppVFJDZkF4ampCU2dLTWdrQkVJd3BKaWxFa0FF=-w280-h168-p-df-rw",
                        "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNWZjRWxxUld0b1NFTTJjV1ppVFJDZkF4ampCU2dLTWdrQkVJd3BKaWxFa0FF"
                    }
                },
                {
                    "title": "David Ellison Set as Chairman-CEO, Jeff Shell as President of Paramount; Shari Redstone to Sell Family Empire to Skydance Media in $8 Billion Deal",
                    "snippet": "'We want to fortify Paramount for the future while ensuring that content remains king,' Redstone says. By Cynthia Littleton. Plus Icon ...",
                    "publisher": "Variety",
                    "timestamp": "1720389000000",
                    "newsUrl": "https://variety.com/2024/tv/news/paramount-skydance-ellison-redstone-acquire-deal-1236062041/",
                    "images": {
                        "thumbnail": "https://news.google.com/api/attachments/CC8iL0NnNUZiMWhCVlhsRVMwbFVNMU5KVFJERUF4aW1CU2dLTWdrSlFwejFJR201YUFJ=-w280-h168-p-df-rw",
                        "thumbnailProxied": "https://i.zedtranslate.com/newsimage/CC8iL0NnNUZiMWhCVlhsRVMwbFVNMU5KVFJERUF4aW1CU2dLTWdrSlFwejFJR201YUFJ"
                    }
                }
            ]
        }
    ]
    constructor(){
        super();
        this.state={
            items:this.items,
            loading:false
        }
    }
  render() {
    
    return (
      <div className='container my-3'>
        <h2>Top Headlines of today</h2>
        
        <div className="row mx-2">
        {this.state.items.map((element)=>{
          
        return(
            <div className="col-md-3 my-2" key={element.url}>
                 <NewsItem  title={element.title} description={element.snippet} imgUrl={element.images.thumbnail}/>
            </div>
        );
           })}
        </div>
      </div>
    )
  }
}
