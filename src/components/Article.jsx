import {useState} from "react";
import Counter from "./Counter";
import {Title, Content} from './index'
import PublishButton from "./PublishButton";
import TextInput from "./TextInput";

const Article = (props) => {
    const [isPublished, setIsPublished] = useState(false);
    const publishArticle = () => setIsPublished(true);
    console.log(isPublished);

    return (
        <>
            <Title title={props.title} />
            <Content content={props.content} />
            <PublishButton isPublished={isPublished} onClick={publishArticle} />
            <TextInput />
            <Counter />
        </>
    );
};

export default Article;
