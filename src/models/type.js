export const noteType = {
    id: { type: INTEGER, autoIncrement: true, primaryKey: true },
    key: STRING,
    title: STRING,
    body: STRING
}

export default noteType;
