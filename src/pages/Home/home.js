import React from 'react';
import Container from '../../utilis/container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faSearch,faPlusCircle,faRoute,faUserAlt} from '@fortawesome/free-solid-svg-icons';
import "../../App.css"
import ted from "../../assets/images/ted.jpg"

const Button=({onClick,children,className=" "})=>{
    return(
        <button type="button"
        className={className}
        onClick={onClick}>
            {children}
        </button>
    )
};

const CategoryButton=({activeCategoryKey,categoryKey,children})=>{
    const checkButtonActive=['button-inline'];   
    if(activeCategoryKey===categoryKey)
        checkButtonActive.push('button-active');
    
    return(
        <Button 
        className={checkButtonActive.join(' ')}
        onClick={()=>{alert("Button active")}}>{children}
        </Button>       
)};

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            categoryKey:"ALL"
        }
       // this.changeKey=this.changeKey.bind(this);
    }
    // changeKey=(category)=>{
    //     const{categoryKey}=this.state;
    //     this.setState({categoryKey:category})
        
    // }
    render(){
        const {categoryKey}=this.state;
        let category;
    return(
        <Container>
            <div className="home-page">
            <div className="categories">
                <span style={{width:"25%"}}><CategoryButton   activeCategoryKey={categoryKey} categoryKey="ALL">ALL</CategoryButton></span>
                <span style={{width:"25%"}}><CategoryButton  activeCategoryKey={categoryKey} categoryKey="ARTICLES" >ARTICLES</CategoryButton></span>
                <span style={{width:"25%"}}><CategoryButton  activeCategoryKey={categoryKey} categoryKey="PODCASTS" >PODCASTS</CategoryButton></span>
                <span style={{width:"25%"}}><CategoryButton  activeCategoryKey={categoryKey} categoryKey="VIDEOS" >VIDEOS</CategoryButton></span>
            </div>
            <hr/>
            <div className="content">
                <ul style={{listStyleType:"none"}}>
                    <li style={{fontSize:"5x"}}><img src={ted} alt="TED"/></li>
                    <li style={{fontFamily:"Segoe UI"},{fontSize:'30px'}}>Catch the exclusive talk on the most novel web development frameworks for 2020. Tune in to listen to the interresting insights of industry experts.</li>
                    <li style={{fontFamily:"Segoe UI"},{fontSize:'20px'}}>lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to .</li>
                </ul>

            </div>
            <hr/>
            <div className="home-footer">
                <span style={{width:"20%"}}><Button className="footer" onClick={()=>alert("Home")}>
                    <ul style={{listStyleType:"none"}}>
                        <li style={{fontSize:"25px"}}><FontAwesomeIcon icon={faHome}/></li>
                        <li style={{fontFamily:"Segoe UI"},{fontSize:'15px'}}>Home</li>
                    </ul></Button>
                </span>
                <Button className="footer" onClick={()=>alert("Explore")}>
                <span style={{width:"20%"}}>
                    <ul style={{listStyleType:"none"}}>
                        <li style={{fontSize:"25px"}}><FontAwesomeIcon icon={faSearch}/></li>
                        <li style={{fontFamily:"Segoe UI"},{fontSize:'15px'}}>Explore</li>
                    </ul>
                </span></Button>
                <Button className="footer" onClick={()=>alert("Mind Map")}>
                <span style={{width:"20%"}}>
                    <ul style={{listStyleType:"none"}}>
                        <li style={{fontSize:"25px"}}><FontAwesomeIcon icon={faPlusCircle}/></li>
                        <li style={{fontFamily:"Segoe UI"},{fontSize:'15px'}}>Mind Map</li>
                    </ul>
                </span></Button>
                <Button className="footer" onClick={()=>alert("Learning Path")}>
                <span style={{width:"20%"}}>
                    <ul style={{listStyleType:"none"}}>
                        <li style={{fontSize:"25px"}}><FontAwesomeIcon icon={faRoute}/></li>
                        <li style={{fontFamily:"Segoe UI"},{fontSize:'15px'}}>Learning Path</li>
                    </ul>
                </span></Button>
                <Button className="footer" onClick={()=>alert("Profile")}>
                <span style={{width:"20%"}}>
                    <ul style={{listStyleType:"none"}}>
                        <li style={{fontSize:"25px"}}><FontAwesomeIcon icon={faUserAlt}/></li>
                        <li style={{fontFamily:"Segoe UI"},{fontSize:'15px'}}>Profile</li>
                    </ul>
                </span></Button>
            </div>
        </div>
    </Container>    
    )
}
}
export default Home;