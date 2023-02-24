import instance from "./config";
const getContacts = () => {
    return instance.get("/contacts");
};
const getContact = (id) => {
    return instance.get(`/contacts/${id}`);
};
const addContact = (contact) => {
    return instance.post(`/contacts`, contact);
};
const updateContact = (contact) => {
    return instance.put(`/contacts/${contact.id}`, contact);
};
const removeContact = (id) => {
    return instance.delete(`/contacts/${id}`);
};
export { getContacts, getContact, addContact, updateContact, removeContact };
