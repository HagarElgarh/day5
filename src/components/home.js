import StudentList from '../containers/Student-list'
import Search from '../containers/search'
const Home = ()=>{
    return <div>
        <h1 className="text-white bg-dark text-center">Cars s Demo</h1>
        <Search/>
        <StudentList 
        // history={history}
        />
        
         {/* Home */}
    </div>

}

export default Home