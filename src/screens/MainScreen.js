import React from 'react';
import { FlatList } from 'react-native';

// Import getNews from news.js
import { getNews } from '../news';
import Article from '../components/Article';

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            refreshing: true,
            pageNumber: 1,
        };
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        getNews(this.state.pageNumber)
            .then(articles => this.setState(prevState=>{
                return { articles:[...prevState.articles,...articles], refreshing: false }
              }))
            .catch(() => this.setState({ refreshing: false }));
    }

    handleRefresh() {
        this.setState(
            {
                refreshing: true
            },
            () => this.fetchNews()
        );
    }

    loadMoreData() {

        this.setState(prevState => {
            return {
                pageNumber: prevState.pageNumber + 1,
                refreshing: true
            }
        },
            () => this.fetchNews())
    }

    render() {
        return (
            <FlatList
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} navigation={this.props.navigation}/>}
                keyExtractor={item => item.url}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh.bind(this)}
                onEndReached={() => this.loadMoreData()}
            />
        );
    }
}