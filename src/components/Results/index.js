import React, { Component } from 'react'
const axios = require('axios');

export default class Results extends Component {

    state = {
        data : '',
        noData:false
    }


    stringBuilder(array){
        if(array.length){
            var result = 'WHERE ';
            for(let [index,element] of array.entries()){
                   let string = `ten5d60c1a3f761b924fc5e2cea:contentProcessed LIKE '%${element}%'`
                result+= string;
                if(index !== array.length-1){
                    result+=' OR '
                }
    
            }
            console.log(result)
            return result;
        }else{
            return ''
        }
    }

    topFilters(){

    }



    searchResults(){
        const headers = {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': 'bf4d32b39cc849378ce6e1e35a2b96f2'
          }

          var userString = this.stringBuilder(this.props.searchInputs);


        const data = {
            "query": {
              "statement": `SELECT * FROM enaio:object ${userString}`,
              "skipCount": 0,
              "maxItems": 50
            }
          }
          
          axios.post('https://api.yuuvis.io/dms/objects/search',data,  {
              headers: headers
            })
            .then((response) => {
                console.log(response);
                if(response.data.objects.length === 0){
                    this.setState({noData:true})
                }
                this.setState({data:response.data.objects});
            })
            .catch((error) => {
              console.log(error)
            })
    }

    displayData(){

    }

    componentDidUpdate(){
        if(this.props.triggerSearch === true){
            this.searchResults()
            this.props.handleSearchTrigger();
        }
    }

  render() {
    return (
      <div>
        {this.state.data[0] ?
            this.state.data.map(element => 
            <div style={{
                position:'relative',
                border:'2px solid rgba(0,0,0,1)',borderRadius:20, padding:10, marginBottom:10
            }}>
            <div style={{
                position:'absolute',
                left:10,
                top:20,
                background:'rgba(255,255,255,0.3)',
                padding:5
            }}>{element.properties['ten5d60c1a3f761b924fc5e2cea:source'].value === 'slack' ? <img src="./slack.png" alt="Slack" style={style.icon}/> : <img src="./email.png" alt="Email" style={style.icon}/>}</div>
            <p style={{marginLeft:50}}>{element.properties['ten5d60c1a3f761b924fc5e2cea:contentOriginal'].value}</p>
            </div>
                
            ) : 'Results will be displayed here'
        }

        
      </div>
    )
  }
}

const style = {
    icon:{
        height:30
    }
}
