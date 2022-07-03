import {Title, Content} from './index'

const Article = (props) => {
    return (
        <>
            <Title title={props.title}/>
            <Content content={props.content}/>
        </>
    );
};

export default Article;
