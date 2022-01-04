const Blockquote = ({ blockquote }) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="mb-0">{blockquote.text}</p>
            <figcaption class="blockquote-footer text-right"><cite title="Source Title">{blockquote.source}</cite></figcaption>
        </blockquote>
    );
};

export default Blockquote;