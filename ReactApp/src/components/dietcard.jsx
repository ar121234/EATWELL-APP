function Card(props){
    const k=props.carddata.key;
    const v=props.carddata.value;
    return (<div className="cards">
                   <h3>{k}</h3>
                   <br />
                    <div>
                    <p>{v}</p>
                   </div>
            
            </div>
    )


}
export default Card;
