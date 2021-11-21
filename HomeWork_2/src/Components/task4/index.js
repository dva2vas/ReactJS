import React, {Component} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Table from "./Table";
import Row from "./Table/Row";
import Cell from "./Table/Cell";


class Task4 extends Component {
    currency = ['', '$', '€', '₴']
  
    state = {
        data: this.dataGenerator(50)
    }
    dataGenerator(n) {  

    
        const {currency} = this
        const text = ""
        const data = []

        while (data.length < n) {
            data.push(
                {
                    date: this.generateRandomDate(),
                    number: Math.floor(Math.random() * 100) + 1,
                    money: {
                        number: Math.floor(Math.random() * 10000) + 1,
                        currency: currency[Math.floor(Math.random() * currency.length)],
                    },
                    text: ((Math.floor(Math.random() * 100) * 1.5)+" "+this.generateRandomDate()).toString()
                }
            )
        }
        return data
    }

    generateRandomDate() {
        return new Date(new Date().getTime() - Math.floor(Math.random() * 1234567890)).toDateString()
    }

    render() {
        const {data} = this.state
        return (
            <>
                <h2>Task 4</h2>
                <Table>
                    <Row head={false}>
                        <Cell background={'silver'}>
                            #
                        </Cell>
                        <Cell  background={'silver'}>
                            date
                        </Cell>
                        <Cell  background={'silver'}>
                            number
                        </Cell>
                        <Cell  background={'silver'}>
                            money
                        </Cell>
                        <Cell background={'silver'}>
                            text
                        </Cell>                        
                    </Row>
                    {
                        data.map((row) => (
                            <Row key={uuidv4()}>
                                <Cell>
                                </Cell>
                                <Cell
                                    color='red'
                                    type='date'
                                >
                                    {row.date}
                                </Cell>
                                <Cell
                                    color='blue'
                                    type='number'
                                >
                                    {row.number}
                                </Cell>
                                <Cell
                                    color='green'
                                    type='money'
                                    currency={row.money.currency}
                                >
                                    {row.money.number}
                                </Cell>
                                <Cell
                                    color='black'
                                    type='text'
                                >
                                    {row.text}
                                </Cell>                                
                            </Row>
                        ))
                    }
                </Table>
            </>
        );
    }
}
export default Task4;