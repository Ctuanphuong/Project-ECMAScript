import instance from "./config";
const getIntros = () => {
    return instance.get("/intros");
};
const getIntro = (id) => {
    return instance.get(`/intros/${id}`);
};
const addIntro = (intro) => {
    return instance.post(`/intros`, intro);
};
const updateIntro = (intro) => {
    return instance.put(`/intros/${intro.id}`, intro);
};
const removeIntro = (id) => {
    return instance.delete(`/intros/${id}`);
};
export { getIntros, getIntro, addIntro, updateIntro, removeIntro };
