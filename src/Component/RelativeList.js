
let relativeList = [
    "Bilal",
    "Ali",
    "Ahmed",
    "Asad",
    "Kashif",
]

const RelativeList = () => {   
    return(
        <ol key="relativeList">
             {
                relativeList.map((rName, index)=>(
                      <li key={index}>{rName}</li>
                ))
             }
        </ol>
    )
}

export default RelativeList;



