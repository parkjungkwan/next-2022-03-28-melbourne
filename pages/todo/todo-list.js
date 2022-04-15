import tableStyles from '../common/styles/table.module.css'
import { useEffect, useState } from "react";

export default function TodoList(){
    const [data, setData] = useState([])
    return(
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th>할 일 목록</th>
                </tr>
            </thead>
            <tbody>
                {data.length == 0 ? <tr>
                <td colSpan={6} >일정이 없습니다</td>
                </tr>
                :data.map((todo) => (
                    <tr key={todo.context}>
                        <td key={todo.context}></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}