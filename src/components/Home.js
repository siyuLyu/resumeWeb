import React from "react";
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import{Container} from 'reactstrap'
import Header from './Header';
import PageContent from './PageContent';
class Home extends React.Component {
    render() {
       return(
           <div>
               <Container>
                <Header/>
                <PageContent/>
               </Container>
               
           </div>
     
       )
    }
}


export default Home