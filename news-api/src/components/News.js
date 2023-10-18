import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
// import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "general"
    }
    article = [
        {
            "author": null,
            "title": "Aussie cricket photo really not a good look",
            "description": "<p>A photo of Aussie cricketers sharing a laugh in the middle of Australia&rsquo;s second innings trainwreck has been raising eyebrows. </p>",
            "url": "https://www.news.com.au/sport/cricket/photo-of-aussie-cricket-players-not-a-good-look-right-now/news-story/036d8f06fff134827600e5feead2c242",
            "urlToImage": "https://content.api.news/v3/images/bin/c7e0e235616f2e7e7ce441529abb5420",
            "publishedAt": "2023-02-12T03:31:00Z",
            "content": "A photo of Aussie cricketers sharing a laugh in the middle of Australia’s second innings trainwreck has been raising eyebrows. \r\nThere has been an angry response from Aussie cricket fans after the to… [+3394 chars]"
        },
        {
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }


    ]
    constructor(props) {
        super();
        console.log("cons works");
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
        document.title = `${this.capital(props.category)}`;
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    capital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    async update(pageNo) {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    async componentDidMount() {
        // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=fc141b2b38434338b7e79464754267d3&page=1&pageSize=${this.props.pagesize}`;
        // this.setState({loading:true})
        // let data=await fetch(url);
        // let parsdata=await data.json();   
        // console.log(parsdata);
        // this.setState({articles: parsdata.articles,
        //     totalResults: parsdata.totalResults,
        //     loading:false});
        this.update();
    }
    nextclick = async () => {
        this.setState({
            page: this.state.page + 1,
        })
        this.update();
    }
    prevclick = async () => {
        this.setState({
            page: this.state.page - 1,
        })
        this.update();
    }

    // fetchMoreData = async (page) => {
    //     // a fake async api call like which sends
    //     // 20 more records in 1.5 secs
    //     this.setState({page : this.state.page +1})
    //         const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true });
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         this.setState({
    //             articles:this.state.articles.concat( parsedData.articles),
    //             totalResults: parsedData.totalResults,
    //             loading: false
    //         })
    //   };

    render() {
        return (
            <div className="container my-5 " >

                <h1 className="text-center" style={{    padding:" 40px 30px 10px 10px"  }}>Top {this.capital(this.props.category)} Headlines </h1>
                {this.state.loading && <Spinner />}

                {/* <InfiniteScroll
                    // scrollableTarget="scrollableDiv"
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData()}
                    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                    // inverse={true} //
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                > */}
                <div className="row my-3">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4"  key={element.url}>
                            <Newsitem title={element.title ? element.title : "Its Vishal"} desc={element.description ? element.description : "Goood Night Keep Smiling  "} imgurl={element.urlToImage ? element.urlToImage : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg"} newsid={element.url} author={element.author ? element.author : "vishal"} date={element.publishedAt ? element.publishedAt : "1 Jan 2023"} />
                        </div>
                    })}
                </div>


                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} onClick={this.prevclick} className="btn btn-primary "> &larr; Previous </button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / ` ${this.props.pageSize}`)} onClick={this.nextclick} className="btn btn-primary">Next &rarr;</button>
                </div>
            </div>

        )
    }
}

export default News
