import { Component } from "react";
import check from './check2.png'

export class GroceryList extends Component {
    state = {
        userInput: '',
        glList: ['Water','Apple']
    }

    OnChange(e) {
        /*
        console.clear()
        console.log (e.target.value)

        const car1 = {name:"Audi", model:"A4"}
        const car2 = {name:"Volvo", model:"XC90"}
        const car3 = {name:"Ford", model:"Fusion"}

        console.table([car1, car2, car3], ["model"]);
        console.table([car1, car2, car3]);*/
        this.setState({userInput:e})
        //console.log (this.state.userInput)
    }

    additem(input) {
        if (input === '') {
            console.log ('error input null')
        } else {
            let listArray = this.state.glList;
            listArray.push(input)
            this.setState({glList:listArray, userInput: ''})
            console.log (this.state.glList)
        }
    }

    delall() {
        let listArray = this.state.glList;
        listArray = [];
        this.setState({glList:listArray})
        console.log ('del all')
    }

    delindex(index) {
        let listArray = this.state.glList ;
        //var index = listArray.indexOf(index);

            listArray.splice(index,1);
            this.setState({glList: listArray});
            console.log ('del index' , index)
            console.log (this.state.glList)


        //this.setState({glList:listArray})
    }
    
    croosW(e){
        const li = e.target;
        li.classList.toggle('croos');
    }

    frmSubmit(e){
        e.preventDefault();
    }

    render() {
        var result = this.state.glList.length;
        return (
            <form onSubmit={this.frmSubmit}>

                <div className="container">
                    <input className="btm btm_txt" type="text" placeholder="What to you want to buy today" onChange={(e) => {this.OnChange(e.target.value)}} value={this.state.userInput}/>
                    <button className="btm btm_add" onClick={()=> this.additem(this.state.userInput)} > ADD </button>
                </div>

                <ul>
                    {this.state.glList.map((item, index) => (
                        <li className="linorm" onClick={this.croosW} key = {index}>
                            <img src={check} alt={'img'} style={{width: '40px'}}/>
                            <div className="litext">{item}</div>
                            <div className="lidel">
                                <button className="btm btm_del" onClick={()=> this.delindex(index)}>DELETE</button>
                            </div>
                        </li>
                    ))}
                </ul>
                
                <div className="container">
                    <button className="btm btm_del" onClick={()=> this.delall()}>DELETE</button>
                    <p className="tall"> All: {result} </p>
                </div>

            </form>
        )

    }
}
