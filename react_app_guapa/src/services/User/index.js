import api from "../shared/api";

const login = data => {
    return api.post("/authentication", data);
};

const get = id => {
    return api.get(`/user/${id}`);
};

const create = data => {
    return api.post("/user", data);
};

const remove = id => {
    return api.delete(`/user/${id}`);
};

const UserDataService = {
    login,
    get,
    create,
    remove
};

export default UserDataService;