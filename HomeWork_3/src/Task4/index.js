import React, {Component} from "react";
import uniqid    from 'uniqid';
import {Table, Row, Cell} from "../components/";


const data_array = ({row, cell}) => {
    return Array.from({length: row},
        () => ({
            id: uniqid(),
            row: Array.from({length: cell},
                () => ({
                    id: uniqid(),
                    value: Math.floor(Math.random() * 10)
                }))
        })
    );
};


export class Task4 extends Component {
    state = {
        table: [],
        handler: ({row, cell}) => e => {
            const clone = {...this.state};
            clone.table[row].row[cell].value = e.target.value;
            this.setState({clone});
        }
    }

    componentDidMount() {
        this.setState({
            table: data_array({row: 50, cell: 50})
        });
    }

    render() {
        const {handler, table} = this.state;
        return (
            <>
                <h1>Task 4</h1>
                <Table>
                    {table.map((row, ri) => (
                        <Row key={row.id}>
                            {row.row.map((cell, ci) => (
                                <Cell key={cell.id} handler={
                                    handler({
                                            row: ri,
                                            cell: ci
                                        }
                                    )}>
                                    {cell.value}
                                </Cell>
                            ))}
                        </Row>
                    ))}
                </Table>
            </>
        );
    }
}