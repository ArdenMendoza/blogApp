import axios from 'axios';
import { Blog } from '../model/model';
const baseUrl = 'http://localhost:5000/api/';
export default {
    blog(url = baseUrl + 'BlogPosts/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: (id: string) => axios.get(url + id),
            update: (id: string, updatedRecord: Blog) => axios.put(url = id, updatedRecord),
            delete: (id: string) => axios.delete(url + id)
        }
    }
}