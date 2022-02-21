import {render} from "react-dom";
import MyFeature from "./MyFeature";
import AddArticle from "./AddArticke";
import ArticleList from "./ArticleList";

render(
    <MyFeature
        addArticle={({
            title,
            summary,
            onChangeTitle,
            onChangeSummary,
            onClickAdd
        }) => (
            <AddArticle
                name="Articles"
                title={title}
                summary={summary}
                onChangeTitle={onChangeTitle}
                onChangeSummary={onChangeSummary}
                onClickAdd={onClickAdd}
            />
        )}
        articleList={({
            articles, onClickToggle, onClickRemove
        }) => (
            <ArticleList
                articles={articles}
                onClickToggle={onClickToggle}
                onClickRemove={onClickRemove}
            />
        )}
    />,
    document.getElementById('root')
);
