
const Ship = ({name}) => {

    const cardStyle= {
        backgroundColor: "black",
        border: "solid yellow",
        borderColor: "yellow", //not sure why, but it makes me add "yellow" twice - otherwise it is white
        borderRadius: "8px",
        color: "white",
        fontSize: "24pt",
        padding: "15px 50px",
        width: "300px"  
      }

      

return(
    <div style={cardStyle}>
        <h1>{name}</h1>
    </div>
)

}

export default Ship


