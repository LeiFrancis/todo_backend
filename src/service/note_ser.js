import { note } from "../models/notes";


export function create(keya, titleb, bodyc) {
    var result = note.build({
        key: keya,
        title: titleb,
        body: bodyc
    });
    result.save().then(function (res) {
        return res;
    }).catch(function (err) {

    });
}

export function update(id1, key2, title3, body4) {


    note.update({ key: key2, title: title3, body: body4 }, { where: { id: id1 } }).then(res => {

    });

}

export function read(id) {

    var result = note.findAll({ where: { id: id } }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;

}

export function keys() {
    var result = note.findAll().then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;

}

export function id(key, title, body) {
    var result = note.findAll({ where: { key: key, title: title, body: body }, attributes: ['id'] }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
    return result;
}

export function destroy(id) {
    note.destroy({ where: { id: id } }).then(function (res) {
        return res;
    }).catch(function (err) {
        console.log(err);
    })
}
