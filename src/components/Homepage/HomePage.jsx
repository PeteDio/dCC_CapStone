import MealPost from "../MealPost/MealPost";
import './HomePage.css'

const HomePage = () => {
    return ( 
        <div>
            <div className="HomePage">
                {/* This is how to make a meal post we need to link the backend */}
                
                <MealPost/> 
            </div>
        </div>
     );
}
 
export default HomePage;