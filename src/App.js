import React from 'react';
import Title from './components/Title/Title';
import Button from './components/Button/Button'


class App extends React.Component {

    state = {


      toggle:false
         
    }


    // clickHndler = () => {

             
    // }

    render(){

      const change = !this.state.toggle;
      return(
        <div className="container">
           <Button class="btn" value={ !this.state.toggle ? 'close' : 'create'} type='button' click={() => this.setState({toggle: !this.state.toggle})} />
         
          {
            change ?  <Title value="Admin dashboard" /> : null
          }

        </div>
      );
    }

}

export default App;
