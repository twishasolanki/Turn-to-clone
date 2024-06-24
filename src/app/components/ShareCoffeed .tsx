import React from "react";
import ShareButton from "../components/Turnto/page";

const post: { title: string; content: string; url: string } = {
    title: "Showcasing the Share button",
    content:
        "Coffeed is a publication run by Coffee (coffeeinc.in) to bring you a weekly dose of inspiration, experiments and guidance to build out your ideas.",
    url: "https://blog.coffeeinc.in"
};

const ShareCoffeed: React.FC = () => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <ShareButton
                title={post.title}
                text={post.content}
                url={post.url}
            />
        </div>
    );
};

export default ShareCoffeed;

