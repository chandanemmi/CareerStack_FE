import React from 'react';
import Container from '../../utilis/container';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faSearch,faPlusCircle,faRoute,faUserAlt} from '@fortawesome/free-solid-svg-icons';
import "../../App.css"
import ted from "../../assets/images/ted.jpg"
//import random from "../../assests/images/ted.jpg"
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
                <div className="page-title">
                    <span>Home</span>
                </div>
                <div className="banners">
                    <span ><img src={ted} alt="Suggested content"/></span>
                </div><br/>
                <div className="Paths">
                                
                    <span style={{width:"50%"}}><Button className="Learning-Path-Title" onClick={()=>{alert("Learning Path")}}>Learning Path 1</Button></span>
                    <span style={{width:"50%"}}><Button className="Learning-Path-Title" onClick={()=>{alert("Learning Path")}}>Learning Path 2</Button></span>
                </div>
                <div className="categories">
                    <span ><CategoryButton   activeCategoryKey={categoryKey} categoryKey="ALL">ALL</CategoryButton></span>
                    <span ><CategoryButton  activeCategoryKey={categoryKey} categoryKey="ARTICLES" >ARTICLES</CategoryButton></span>
                    <span ><CategoryButton  activeCategoryKey={categoryKey} categoryKey="PODCASTS" >PODCASTS</CategoryButton></span>
                    <span ><CategoryButton  activeCategoryKey={categoryKey} categoryKey="VIDEOS" >VIDEOS</CategoryButton></span>
                </div>
                <hr/>
                <div className="All-contents">
                    <div className="content">
                        <div className="content-image">
                            <table >
                                <tr style={{textAlign:"center"}}><img src={ted} alt="TED"/></tr>
                                <tr ><th>Catch the exclusive talk on the most novel web development frameworks for 2020.</th></tr>
                                <tr >lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.                                                                        
                                </tr>
                            </table>
                        </div>                
                    </div>
                    <br/>
                    <div className="content">
                        <div className="content-image">
                            <table >
                                <tr style={{textAlign:"center"}}><img src={ted} alt="TED"/></tr>
                                <tr ><th>Catch the exclusive talk on the most novel web development frameworks for 2020.</th></tr>
                                <tr >lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="home-footer">
                    <span style={{width:"20%"}}><Button className="footer" onClick={()=>alert("Home")}>
                        <ul style={{listStyleType:"none"}}>
                            <li style={{fontSize:"18px"}}><FontAwesomeIcon icon={faHome}/></li>
                            <li style={{fontFamily:"Segoe UI"},{fontSize:'12px'}}>Home</li>
                        </ul></Button>
                    </span>
                    <Button className="footer" onClick={()=>alert("Explore")}>
                        <span style={{width:"20%"}}>
                            <ul style={{listStyleType:"none"}}>
                                <li style={{fontSize:"18px"}}><FontAwesomeIcon icon={faSearch}/></li>
                                <li style={{fontFamily:"Segoe UI"},{fontSize:'12px'}}>Explore</li>
                            </ul>
                        </span>
                    </Button>
                    <Button className="footer" onClick={()=>alert("Mind Map")}>
                        <span style={{width:"20%"}}>
                            <ul style={{listStyleType:"none"}}>
                                <li style={{fontSize:"18px"}}><FontAwesomeIcon icon={faPlusCircle}/></li>
                                <li style={{fontFamily:"Segoe UI"},{fontSize:'12px'}}>Mind Map</li>
                            </ul>
                        </span>
                    </Button>
                    <Button className="footer" onClick={()=>alert("Learning Path")}>
                        <span style={{width:"20%"}}>
                            <ul style={{listStyleType:"none"}}>
                                <li style={{fontSize:"18px"}}><FontAwesomeIcon icon={faRoute}/></li>
                                <li style={{fontFamily:"Segoe UI"},{fontSize:'12px'}}>Learning Path</li>
                            </ul>
                        </span>
                    </Button>
                    <Button className="footer" onClick={()=>alert("Profile")}>
                        <span style={{width:"20%"}}>
                            <ul style={{listStyleType:"none"}}>
                                <li style={{fontSize:"18px"}}><FontAwesomeIcon icon={faUserAlt}/></li>
                                <li style={{fontFamily:"Segoe UI"},{fontSize:'12px'}}>Profile</li>
                            </ul>
                        </span>
                    </Button>
                </div>
            </div>
        </Container>    
    )
}
}
export default Home;