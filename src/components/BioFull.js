const BioFull = ({ text }) => {

    return (
        <div id="about-bio" className="col-lg-8 p-2 fs-5">
            {text.split('$$$').map((x, i) => <p key={i}>{x}</p>)}
        </div>
    );
};

export default BioFull;