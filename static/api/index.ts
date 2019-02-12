import axios from 'axios';

// const host = '//conan.oa.com/aidirector';
const host = '//10.165.6.107:8080';

interface listInterFace {
    info: dataInterFace[]
}
interface updateInterFace {
    success: boolean
    info?: string
}
interface destroyInterFace {
    success: boolean
    info?: string
}
interface typesInterFace {
    success: boolean
    info?: string
}
interface dataInterFace {
    content: string
    id?: number | string
    name: string
}
interface idInterFace {
    id: number | string
}
interface placeholderInterFace {
    success: boolean
    info?: string[]
}

let api = {
    // 获取
    getScenes() {
        return axios.post<listInterFace>(`${host}/api/scene/list`, {count: 200});
    },
    getTransition() {
        return axios.post<listInterFace>(`${host}/api/transition/list`, {count: 200});
    },
    getStoryboard() {
        return axios.post<listInterFace>(`${host}/api/storyboard/list`, {count: 200});
    },
    // 获取模板类型
    getScenesTypes() {
        return axios.get<typesInterFace>(`${host}/api/scene/type`);
    },
    getTransitionTypes() {
        return axios.get<typesInterFace>(`${host}/api/transition/type`);
    },
    getStoryboardTypes() {
        return axios.get<typesInterFace>(`${host}/api/storyboard/type`);
    },
    // 更新
    updateScenes(data: dataInterFace) {
        return axios.post<updateInterFace>(`${host}/api/scene/update`, data);
    },
    updateTransition(data: dataInterFace) {
        return axios.post<updateInterFace>(`${host}/api/transition/update`, data);
    },
    updateStoryboard(data: dataInterFace) {
        return axios.post<updateInterFace>(`${host}/api/storyboard/update`, data);
    },
    // 查询
    lookupScenes(data: object) {
        return axios.post(`${host}/api/scene/lookup`, data);
    },
    lookupTransition(data: object) {
        return axios.post(`${host}/api/transition/lookup`, data);
    },
    lookupStoryboard(data: object) {
        return axios.post(`${host}/api/storyboard/lookup`, data);
    },
    // 删除
    destroyScenes(data: idInterFace) {
        return axios.post<destroyInterFace>(`${host}/api/scene/destroy`, data);
    },
    destroyTransition(data: idInterFace) {
        return axios.post<destroyInterFace>(`${host}/api/transition/destroy`, data);
    },
    destroyStoryboard(data: idInterFace) {
        return axios.post<destroyInterFace>(`${host}/api/storyboard/destroy`, data);
    },
    // 获取模板数据里的占位符
    getPlaceHolder(content: string){
        return axios.post<placeholderInterFace>(`${host}/api/scene/find_placeholder`, {
            content
        });
    },
};

export default api;
