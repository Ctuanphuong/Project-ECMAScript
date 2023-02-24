import instance from "./config";
const getAbouts = () => {
    return instance.get("/abouts");
};
const getAbout = (id) => {
    return instance.get(`/abouts/${id}`);
};
const addAbout = (about) => {
    return instance.post(`/abouts`, about);
};
const updateAbout = (about) => {
    return instance.put(`/abouts/${about.id}`, about);
};
const removeAbout = (id) => {
    return instance.delete(`/abouts/${id}`);
};
export { getAbouts, getAbout, addAbout, updateAbout, removeAbout };
