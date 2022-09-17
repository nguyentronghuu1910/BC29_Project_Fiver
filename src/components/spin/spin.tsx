import React from 'react'
import './index.scss'

export default function Spin(): JSX.Element {
    return (
        <div className="wrapper-loading">
            <div className="dashed-loading"></div>
        </div>
    )
}
