const Blockquote = ({ blockquote }) => {
    return (
        <blockquote className="blockquote text-end">
            <p>{blockquote.text}</p>
            <figcaption className="blockquote-footer text-right"><cite title="Source Title">{blockquote.source}</cite></figcaption>
        </blockquote>
    );
};

export default Blockquote;