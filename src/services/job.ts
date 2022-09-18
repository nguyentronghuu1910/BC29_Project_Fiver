import { request } from '../configs/axios'

const fetchJobListApi = (tenCongViec: string) => {
    return request({
        url: `/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${tenCongViec}`,
        method: 'GET',
    })
}

export { fetchJobListApi }
