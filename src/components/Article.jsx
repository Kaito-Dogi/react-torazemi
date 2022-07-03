import {useState} from "react";
import {Title, Content} from './index'

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    console.log(isPublished);

    return (
        <>
            <Title title={props.title} />
            <Content content={props.content} />
            <button onClick={() => setIsPublished(true)}>公開</button>
        </>
    );
};

export default Article;
