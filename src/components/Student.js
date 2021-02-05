const Student = ({ studentInfo}) => {
    // const goToDetails = ()=>{
    //     history.push(`/cars/${carInfo.id}`)
    // }

    if (studentInfo) {
        return <div className="alert alert-dark d-flex justify-content-between">
            <h4 className="align-self-center">
                {studentInfo.Name}
            </h4>
            {/* <img className="w-25 rounded-circle" 
            src={`/images/${carInfo.image}`} 
            alt={carInfo.model} 
            onClick={goToDetails}/> */}
        </div>
    }
}
export default Student
