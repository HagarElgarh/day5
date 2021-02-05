import { connect } from 'react-redux';
import Student from '../components/Student'
const StudentList = ({ list }) => {
    if (list) {
        if (list.length > 0)
            return (
                <div className="alert ">
                    {list.map((student) => {
                        console.log(student)
                        return <Student key={student.id} studentInfo={student} 
                        // history={history}
                        />
                    })}
                </div>)
        return <p>
            Enter a valid email and search again :P 
        </p>
    }

    return <p>
        Enter a brand and search.
    </p>
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

export default connect(mapStateToProps, null)(StudentList)



///////////////////////////////////

// const StudentList = ()=>{
//     return <div>
       
//        StudentList
//     </div>

// }

// export default StudentList