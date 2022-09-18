import React from 'react'
import { Input } from 'antd'
import './index.scss'
import { useAsync } from '../../hooks/useAsync'
import { fetchJobListApi } from '../../services/job'
import { useNavigate } from 'react-router-dom'

export default function Search(): JSX.Element {
    const navigate = useNavigate()

    const { Search: SearchAntd } = Input

    const onSearch = (value: string) => {
        navigate(`/search/${value}`)
    }

    return (
        <div className="w-25">
            <SearchAntd
                className="search"
                placeholder="What service are you looking for"
                onSearch={onSearch}
                enterButton
            />
        </div>
    )
}
