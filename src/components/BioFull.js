const BioFull = ({ text }) => {

    return (
        <div id="about-bio" className="col-lg-8 p-2">
            {text.split('$$$').map((x, i) => <p key={i}>{x}</p>)}
        </div>
    );
};

export default BioFull;