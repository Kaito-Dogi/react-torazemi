import {useState} from "react";
import {Title, Content} from './index'
import PublishButton from "./PublishButton";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => setIsPublished(true);
    console.log(isPublished);

    return (
        <>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
        </>
    );
};

export default Article;
