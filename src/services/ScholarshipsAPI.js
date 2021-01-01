import request from 'axios';
//import Environment from './Environment'
class ScholarshipsAPI {

    static searchScholarships = (searchPayload, page=1) => {

        const apiCompletionPromise = request({
            method: 'get',
     // data: searchPayload,
            url: './scholarships-list.json',
        });

        return apiCompletionPromise;
    }
}

export default ScholarshipsAPI;