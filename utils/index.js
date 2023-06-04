export const parseName = (name) => {
    name = name.replace(/ /g,'_').replace(/[.]/g, "").toLowerCase();

    return name;
};
